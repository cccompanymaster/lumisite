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
  });

  window.productCardHTML = function (p) {
    const off = Math.round((1 - p.salePrice / p.price) * 100);
    const tagHTML = p.tags.map(t => {
      const cls = t === 'NEW' ? 'new' : (t === 'SET' ? 'set' : '');
      return `<span class="tag ${cls}">${t}</span>`;
    }).join('');
    return `
      <a class="product-card" href="/pages/product.html?id=${p.id}">
        <div class="thumb">
          <img class="main-img" src="${p.image}" alt="${p.name}" loading="lazy">
          <img class="hover-img" src="${p.hoverImage || p.image}" alt="" loading="lazy">
          <div class="tags">${tagHTML}</div>
          <button class="wishlist" aria-label="위시리스트" onclick="event.preventDefault();event.stopPropagation();this.style.color='#a98c5c';">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <span class="quick-add">자세히 보기</span>
        </div>
        <div class="info">
          <div class="cat">${p.cat_label || ''}</div>
          <span class="name">${p.nameKo || p.name}${p.size ? ` <small style="color:#999;font-weight:400;">${p.size}</small>` : ''}</span>
          <div class="price-row">
            <span class="price">${formatPrice(p.salePrice)}</span>
            ${off > 0 ? `<span class="original">${formatPrice(p.price)}</span><span class="discount">${off}%</span>` : ''}
          </div>
        </div>
      </a>
    `;
  };
})();
