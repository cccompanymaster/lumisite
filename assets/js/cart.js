// LUMI - Cart (localStorage)
(function () {
  const KEY = 'lumi.cart';

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch (e) { return []; }
  }
  function write(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent('lumi:cart:change'));
  }

  const Cart = {
    items() { return read(); },
    count() { return read().reduce((s, i) => s + i.qty, 0); },
    add(productId, optionIndex, qty) {
      const items = read();
      const key = productId + '__' + optionIndex;
      const found = items.find(i => i.key === key);
      if (found) found.qty += qty;
      else items.push({ key, productId, optionIndex, qty });
      write(items);
    },
    setQty(key, qty) {
      const items = read().map(i => i.key === key ? { ...i, qty: Math.max(1, qty) } : i);
      write(items);
    },
    remove(key) {
      write(read().filter(i => i.key !== key));
    },
    clear() {
      write([]);
    },
    detail() {
      const list = read();
      const products = window.LUMI_PRODUCTS || [];
      return list.map(i => {
        const p = products.find(p => p.id === i.productId);
        if (!p) return null;
        const opt = p.options[i.optionIndex] || p.options[0];
        const unit = p.salePrice + (opt.addPrice || 0);
        return { ...i, product: p, option: opt, unitPrice: unit, lineTotal: unit * i.qty };
      }).filter(Boolean);
    },
    subtotal() {
      return this.detail().reduce((s, i) => s + i.lineTotal, 0);
    }
  };

  window.LumiCart = Cart;

  window.updateCartBadge = function (selector) {
    const update = () => {
      document.querySelectorAll(selector).forEach(el => {
        const c = Cart.count();
        el.textContent = c;
        el.classList.toggle('is-empty', c === 0);
      });
    };
    update();
    document.addEventListener('lumi:cart:change', update);
  };
})();
