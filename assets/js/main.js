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
