// LUMI - Common page initializer
(function () {
  // Top banner close
  document.addEventListener('DOMContentLoaded', () => {
    const tb = document.querySelector('.top-banner');
    if (tb) {
      const closeBtn = tb.querySelector('.close');
      if (sessionStorage.getItem('lumi.tb.hide') === '1') tb.style.display = 'none';
      if (closeBtn) closeBtn.addEventListener('click', () => {
        tb.style.display = 'none';
        sessionStorage.setItem('lumi.tb.hide', '1');
      });
    }

    if (window.renderAuthMenu) window.renderAuthMenu('.auth-menu');
    if (window.updateCartBadge) window.updateCartBadge('.cart-count');

    // Product card render helper used by index/shop
    const grids = document.querySelectorAll('[data-product-grid]');
    grids.forEach(grid => {
      const filter = grid.dataset.filter;
      let items = window.LUMI_PRODUCTS.slice();
      if (filter === 'best') items = items.filter(p => p.tags.includes('BEST'));
      else if (filter === 'new') items = items.filter(p => p.tags.includes('NEW'));
      else if (filter === 'set') items = items.filter(p => p.tags.includes('SET'));
      else if (filter && filter !== 'all') items = items.filter(p => p.category === filter);
      grid.innerHTML = items.map(productCardHTML).join('');
    });
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
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <div class="tags">${tagHTML}</div>
        </div>
        <div class="info">
          <span class="name">${p.name}</span>
          <div class="price-row">
            <span class="price">${formatPrice(p.salePrice)}</span>
            ${off > 0 ? `<span class="original">${formatPrice(p.price)}</span><span class="discount">${off}%</span>` : ''}
          </div>
        </div>
      </a>
    `;
  };
})();
