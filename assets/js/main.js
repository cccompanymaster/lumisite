// LUMI - Common page initializer
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    // Header scroll state
    const hdr = document.querySelector('.header');
    if (hdr) {
      const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 20);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Render product grids
    document.querySelectorAll('[data-product-grid]').forEach(grid => {
      const filter = grid.dataset.filter;
      let items = window.LUMI_PRODUCTS.slice();
      if (filter === 'best') items = items.filter(p => p.tags.includes('BEST'));
      else if (filter === 'new') items = items.filter(p => p.tags.includes('NEW'));
      else if (filter === 'set') items = items.filter(p => p.tags.includes('SET'));
      else if (filter && filter !== 'all') items = items.filter(p => p.category === filter);
      grid.innerHTML = items.map(productCardHTML).join('');
    });

    // Reveal animation
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

    // Count-up animation
    const counterIo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.dataset.count, 10) || 0;
        const dur = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        };
        requestAnimationFrame(tick);
        counterIo.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(el => counterIo.observe(el));

    // Scroll progress bar
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.prepend(bar);
    const updateBar = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.transform = `scaleX(${pct / 100})`;
    };
    updateBar();
    window.addEventListener('scroll', updateBar, { passive: true });

    // Cart badge bounce
    document.addEventListener('lumi:cart:change', () => {
      document.querySelectorAll('.cart-count').forEach(el => {
        el.classList.remove('bounce');
        void el.offsetWidth;
        el.classList.add('bounce');
      });
    });

    // Subtle hover tilt on product cards (desktop only)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.body.addEventListener('mousemove', (ev) => {
        const card = ev.target.closest('.product-card');
        if (!card) return;
        const r = card.getBoundingClientRect();
        const dx = (ev.clientX - r.left) / r.width - 0.5;
        const dy = (ev.clientY - r.top) / r.height - 0.5;
        const thumb = card.querySelector('.thumb');
        if (thumb) thumb.style.transform = `perspective(800px) rotateX(${-dy * 3}deg) rotateY(${dx * 3}deg)`;
      });
      document.body.addEventListener('mouseleave', (ev) => {
        const card = ev.target.closest && ev.target.closest('.product-card');
        if (card) {
          const thumb = card.querySelector('.thumb');
          if (thumb) thumb.style.transform = '';
        }
      }, true);
      document.querySelectorAll('.product-card').forEach(c => {
        c.addEventListener('mouseleave', () => {
          const t = c.querySelector('.thumb');
          if (t) t.style.transform = '';
        });
      });
    }

    // Back-to-top button
    const fab = document.createElement('button');
    fab.className = 'back-to-top';
    fab.setAttribute('aria-label', '맨 위로');
    fab.innerHTML = '↑';
    document.body.appendChild(fab);
    fab.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    const toggleFab = () => fab.classList.toggle('show', window.scrollY > 600);
    toggleFab();
    window.addEventListener('scroll', toggleFab, { passive: true });

    if (window.applyImageFallbacks) window.applyImageFallbacks();
  });

  // 로컬 이미지 → 실패 시 Unsplash fallback
  function imgWithFallback(p, type) {
    const P = window.LUMI_PREFIX || './';
    const local = type === 'hover' ? p.localHover : p.localImage;
    const remote = type === 'hover' ? (p.hoverImage || p.image) : p.image;
    const cls = type === 'hover' ? 'hover-img' : 'main-img';
    return `<img class="${cls}" src="${P}assets/images/products/${local}" onerror="this.onerror=null;this.src='${remote}'" alt="${type === 'hover' ? '' : p.name}" loading="lazy">`;
  }

  window.productCardHTML = function (p) {
    const P = window.LUMI_PREFIX || './';
    const off = Math.round((1 - p.salePrice / p.price) * 100);
    const tagHTML = p.tags.map(t => {
      const cls = t === 'NEW' ? 'new' : (t === 'SET' ? 'set' : (t === 'HERO' ? 'set' : ''));
      return `<span class="tag ${cls}">${t}</span>`;
    }).join('');
    return `
      <a class="product-card" href="${P}pages/product.html?id=${p.id}">
        <div class="thumb">
          ${imgWithFallback(p, 'main')}
          ${imgWithFallback(p, 'hover')}
          <div class="tags">${tagHTML}</div>
        </div>
        <div class="info">
          <div class="cat">${p.cat_label || ''}</div>
          <span class="name">${p.nameKo || p.name}${p.size ? ` <small>${p.size}</small>` : ''}</span>
          <div class="price-row">
            <span class="price">${formatPrice(p.salePrice)}</span>
            ${off > 0 ? `<span class="original">${formatPrice(p.price)}</span><span class="discount">${off}%</span>` : ''}
          </div>
        </div>
      </a>
    `;
  };

  // 헤어/배경 이미지도 자동 fallback 처리
  window.applyImageFallbacks = function () {
    document.querySelectorAll('[data-bg-src]').forEach(el => {
      const local = el.dataset.bgSrc;
      const fallback = el.dataset.bgFallback;
      const img = new Image();
      img.onload = () => el.style.backgroundImage = `url('${local}')`;
      img.onerror = () => el.style.backgroundImage = `url('${fallback}')`;
      img.src = local;
    });
    document.querySelectorAll('img[data-src][data-fallback]').forEach(el => {
      el.src = el.dataset.src;
      el.onerror = () => { el.onerror = null; el.src = el.dataset.fallback; };
    });
  };
})();
