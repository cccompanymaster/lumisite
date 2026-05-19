// LUMI - 공통 헤더/푸터 인서트
(function () {
  const HEADER = `
    <div class="top-banner" id="topBanner">
      <a href="/pages/signup.html">신규 가입 시 15,000원 적립금 즉시 지급 — LUMI 회원 혜택을 만나보세요</a>
      <button class="close" aria-label="배너 닫기">×</button>
    </div>
    <header class="header">
      <div class="header-inner">
        <a class="logo" href="/">LUMI<small>INTERNATIONAL</small></a>
        <ul class="gnb">
          <li><a href="/pages/shop.html">SHOP
            </a><ul class="submenu">
              <li><a href="/pages/shop.html?cat=all">ALL</a></li>
              <li><a href="/pages/shop.html?cat=best">NEW & BEST</a></li>
              <li><a href="/pages/shop.html?cat=skincare">SKINCARE</a></li>
              <li><a href="/pages/shop.html?cat=cleanser">CLEANSER</a></li>
              <li><a href="/pages/shop.html?cat=set">SET</a></li>
            </ul>
          </li>
          <li><a href="/pages/membership.html">VIP LOUNGE</a></li>
          <li><a href="/pages/brand.html">BRAND STORY</a></li>
          <li><a href="/pages/shop.html?cat=new">NEW</a></li>
        </ul>
        <div class="header-utils">
          <div class="auth-menu"></div>
          <a class="cart-link" href="/pages/cart.html">CART <span class="cart-count">0</span></a>
        </div>
      </div>
    </header>
  `;

  const FOOTER = `
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <div class="logo">LUMI<small>INTERNATIONAL</small></div>
          <p style="line-height:1.8; margin:0 0 24px; color:#555;">
            주식회사 루미인터내셔널은 글로벌 뷰티·라이프스타일 브랜드를 발굴하고 유통하는 전문 무역상사입니다.
          </p>
          <div class="biz-info">
            <span><strong>상호.</strong> 주식회사 루미인터내셔널 (LUMI International Co.,LTD)</span>
            <span><strong>대표.</strong> JIN LINHUA (김림화)</span>
            <span><strong>사업자등록번호.</strong> 147-81-03362</span>
            <span><strong>법인등록번호.</strong> 130111-0126014</span>
            <span><strong>통신판매업신고.</strong> 제 2025-수원팔달-XXXX호 (신청예정)</span>
            <span><strong>개업.</strong> 2025년 07월 25일</span>
            <span class="biz-full"><strong>주소.</strong> 경기도 수원시 팔달구 팔달문로130번길 69, 가동 503-3에이호 (우만동, 아이월드)</span>
            <span class="biz-full"><strong>업태.</strong> 도매 및 소매업 / <strong>종목.</strong> 전자상거래, 가전제품, 화장품·생활용품, 의류·가방·패션잡화, 기계설비 부품, 수출, 수입</span>
            <span class="biz-full"><strong>이메일.</strong> contact@lumi-intl.co.kr &nbsp; <strong>개인정보보호책임자.</strong> JIN LINHUA</span>
          </div>
          <div class="copyright">(C) 2025 LUMI INTERNATIONAL CO.,LTD. All Rights Reserved.</div>
        </div>
        <div class="cs">
          <dt>CUSTOMER CENTER</dt>
          <div class="tel">031-000-0000</div>
          <p>
            평일 09:30 ~ 17:00 / 점심 11:30 ~ 13:00<br>
            (토·일·공휴일 휴무)
          </p>
          <ul>
            <li><a href="/pages/membership.html">멤버십</a></li>
            <li><a href="/pages/brand.html">브랜드</a></li>
            <li><a href="/pages/login.html">로그인</a></li>
            <li><a href="/pages/signup.html">회원가입</a></li>
            <li><a href="/pages/mypage.html">마이페이지</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#"><strong>개인정보처리방침</strong></a></li>
          </ul>
        </div>
      </div>
    </footer>
  `;

  document.addEventListener('DOMContentLoaded', () => {
    const h = document.getElementById('site-header');
    const f = document.getElementById('site-footer');
    if (h) h.innerHTML = HEADER;
    if (f) f.innerHTML = FOOTER;

    // Re-bind after insert
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
  });
})();
