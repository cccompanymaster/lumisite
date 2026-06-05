// LUMI - 공통 헤더/푸터 + 모바일 드로어 + 경로 헬퍼
(function () {
  // 페이지 위치 기반으로 상대경로 prefix 계산 (GH Pages 서브경로 호환)
  function computePrefix() {
    const path = location.pathname;
    // /pages/* 안에 있으면 한 단계 위로
    if (/\/pages\//.test(path)) return '../';
    return './';
  }
  const P = computePrefix();
  window.LUMI_PREFIX = P;

  const HEADER = `
    <div class="top-banner" id="topBanner">
      <a href="${P}pages/signup.html">신규 가입 즉시 <strong>10,000원 적립금</strong> · ORAVIN 멤버 혜택을 만나보세요</a>
      <button class="close" aria-label="배너 닫기">×</button>
    </div>
    <header class="header">
      <div class="header-inner">
        <a class="logo" href="${P}index.html">ORAVIN<small>SKINCARE</small></a>
        <ul class="gnb">
          <li><a href="${P}pages/brand.html">브랜드 스토리</a></li>
          <li><a href="${P}pages/shop.html">SHOP</a></li>
          <li><a href="${P}pages/event.html">EVENT</a></li>
          <li><a href="${P}pages/membership.html">VIP</a></li>
        </ul>
        <div class="header-utils">
          <div class="auth-menu"></div>
          <a class="cart-link" href="${P}pages/cart.html">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="cart-count">0</span>
          </a>
          <button class="hamburger" id="hamburger" aria-label="메뉴">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-drawer-backdrop" id="drawerBackdrop"></div>
    <aside class="mobile-drawer" id="mobileDrawer">
      <button class="close-btn" aria-label="닫기">×</button>
      <a class="logo" href="${P}index.html">ORAVIN<small>SKINCARE</small></a>
      <nav class="mobile-drawer-nav">
        <a href="${P}pages/brand.html">브랜드 스토리</a>
        <a href="${P}pages/shop.html">SHOP</a>
        <a href="${P}pages/event.html">EVENT</a>
        <a href="${P}pages/membership.html">VIP</a>
        <a href="${P}pages/cart.html">장바구니</a>
      </nav>
      <div class="mobile-drawer-auth" id="drawerAuth"></div>
    </aside>
  `;

  const FOOTER = `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="brand">
            <a class="logo" href="${P}index.html">ORAVIN<small>SKINCARE</small></a>
            <p>ORAVIN은 메디컬 에스테틱 감성과 스킨부스터 트렌드를 기반으로 탄생한 프리미엄 스킨케어 브랜드입니다. PDLLA·보르피린·스피큘 기반의 차별화된 처방으로 탄력·광채·볼륨 케어에 집중합니다.</p>
            <div class="social-links">
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
              <a href="#" aria-label="Naver"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h5.5l5 8V4H20v16h-5.5l-5-8v8H4z"/></svg></a>
            </div>
          </div>
          <div class="col">
            <h4>SHOP</h4>
            <ul>
              <li><a href="${P}pages/shop.html?cat=all">전체보기</a></li>
              <li><a href="${P}pages/shop.html?cat=best">베스트</a></li>
              <li><a href="${P}pages/shop.html?cat=set">세트</a></li>
              <li><a href="${P}pages/event.html">이벤트</a></li>
            </ul>
          </div>
          <div class="col">
            <h4>안내</h4>
            <ul>
              <li><a href="${P}pages/brand.html">브랜드 스토리</a></li>
              <li><a href="${P}pages/membership.html">VIP 멤버십</a></li>
              <li><a href="${P}pages/login.html">로그인</a></li>
              <li><a href="${P}pages/signup.html">회원가입</a></li>
            </ul>
          </div>
          <div class="col">
            <h4>고객센터</h4>
            <div class="tel">1844-1729</div>
            <div class="hours">
              평일 09:30 ~ 17:00<br>
              점심 11:30 ~ 13:00<br>
              주말·공휴일 휴무
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-biz">
            <span><strong>상호.</strong> 주식회사 루미인터내셔널 (LUMI International Co.,LTD)</span>
            <span><strong>대표.</strong> JIN LINHUA (김림화)</span>
            <span><strong>사업자등록번호.</strong> 147-81-03362</span>
            <span><strong>법인등록번호.</strong> 130111-0126014</span>
            <span><strong>통신판매업신고.</strong> 제 2026-수원팔달-0420호</span>
            <span class="biz-full"><strong>주소.</strong> 경기도 수원시 팔달구 팔달문로130번길 69, 가동 503-3에이호 (우만동, 아이월드)</span>
            <span class="biz-full"><strong>이메일.</strong> cukhw124@gmail.com &nbsp;&nbsp; <strong>개인정보보호책임자.</strong> JIN LINHUA</span>
          </div>
          <div class="copyright">© 2025 LUMI INTERNATIONAL CO., LTD. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  `;

  document.addEventListener('DOMContentLoaded', () => {
    const h = document.getElementById('site-header');
    const f = document.getElementById('site-footer');
    if (h) h.innerHTML = HEADER;
    if (f) f.innerHTML = FOOTER;

    // Top banner close
    const tb = document.querySelector('.top-banner');
    if (tb) {
      const closeBtn = tb.querySelector('.close');
      if (sessionStorage.getItem('lumi.tb.hide') === '1') tb.style.display = 'none';
      if (closeBtn) closeBtn.addEventListener('click', () => {
        tb.style.display = 'none';
        sessionStorage.setItem('lumi.tb.hide', '1');
      });
    }

    // Header scroll state
    const hdr = document.querySelector('.header');
    if (hdr) {
      const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 20);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Mobile drawer
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('mobileDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    const closeBtn = drawer && drawer.querySelector('.close-btn');
    function toggleDrawer(open) {
      if (!drawer || !backdrop || !hamburger) return;
      drawer.classList.toggle('open', open);
      backdrop.classList.toggle('open', open);
      hamburger.classList.toggle('open', open);
      document.body.classList.toggle('no-scroll', open);
    }
    if (hamburger) hamburger.addEventListener('click', () => toggleDrawer(!drawer.classList.contains('open')));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleDrawer(false));
    if (backdrop) backdrop.addEventListener('click', () => toggleDrawer(false));

    if (window.renderAuthMenu) window.renderAuthMenu('.auth-menu');
    renderDrawerAuth();
    if (window.updateCartBadge) window.updateCartBadge('.cart-count');

    // Preloader hide
    const pre = document.querySelector('.preloader');
    if (pre) {
      window.addEventListener('load', () => {
        setTimeout(() => pre.classList.add('hidden'), 400);
        setTimeout(() => pre.remove(), 1400);
      });
      // fallback
      setTimeout(() => pre.classList.add('hidden'), 2800);
    }
  });

  function renderDrawerAuth() {
    const el = document.getElementById('drawerAuth');
    if (!el || !window.LumiAuth) return;
    const u = window.LumiAuth.current();
    if (u) {
      el.innerHTML = `
        <a href="${P}pages/mypage.html" class="primary">마이페이지</a>
        <a href="#" id="drawerLogout">로그아웃</a>
      `;
      const lo = el.querySelector('#drawerLogout');
      if (lo) lo.addEventListener('click', e => { e.preventDefault(); window.LumiAuth.logout(); location.reload(); });
    } else {
      el.innerHTML = `
        <a href="${P}pages/login.html" class="primary">로그인</a>
        <a href="${P}pages/signup.html">회원가입</a>
      `;
    }
  }
})();
