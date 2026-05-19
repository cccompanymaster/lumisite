// LUMI - 공통 헤더/푸터 인서트
(function () {
  const HEADER = `
    <div class="top-banner" id="topBanner">
      <a href="/pages/signup.html">신규 가입 즉시 <strong>15,000원 적립금</strong> · LUMI 멤버 혜택을 만나보세요</a>
      <button class="close" aria-label="배너 닫기">×</button>
    </div>
    <header class="header">
      <div class="header-inner">
        <a class="logo" href="/">LUMI<small>INTERNATIONAL</small></a>
        <ul class="gnb">
          <li><a href="/pages/shop.html">Shop</a>
            <ul class="submenu">
              <li><a href="/pages/shop.html?cat=all">All</a></li>
              <li><a href="/pages/shop.html?cat=best">Best</a></li>
              <li><a href="/pages/shop.html?cat=new">New</a></li>
              <li><a href="/pages/shop.html?cat=skincare">Skincare</a></li>
              <li><a href="/pages/shop.html?cat=cleanser">Cleanser</a></li>
              <li><a href="/pages/shop.html?cat=set">Set</a></li>
            </ul>
          </li>
          <li><a href="/pages/membership.html">VIP</a></li>
          <li><a href="/pages/brand.html">Brand</a></li>
          <li><a href="/pages/shop.html?cat=new">New</a></li>
        </ul>
        <div class="header-utils">
          <div class="auth-menu"></div>
          <a class="cart-link" href="/pages/cart.html">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="cart-count">0</span>
          </a>
        </div>
      </div>
    </header>
  `;

  const FOOTER = `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="brand">
            <div class="logo">LUMI<small>INTERNATIONAL</small></div>
            <p>주식회사 루미인터내셔널은 글로벌 뷰티·라이프스타일 브랜드를 발굴하고 유통하는 전문 무역상사입니다. 일상에 빛을 더하는 모든 순간을 큐레이션합니다.</p>
            <div class="social-links">
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
              <a href="#" aria-label="Naver"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h5.5l5 8V4H20v16h-5.5l-5-8v8H4z"/></svg></a>
            </div>
          </div>
          <div class="col">
            <h4>SHOP</h4>
            <ul>
              <li><a href="/pages/shop.html?cat=all">전체보기</a></li>
              <li><a href="/pages/shop.html?cat=best">베스트</a></li>
              <li><a href="/pages/shop.html?cat=new">신상품</a></li>
              <li><a href="/pages/shop.html?cat=set">세트</a></li>
            </ul>
          </div>
          <div class="col">
            <h4>ABOUT</h4>
            <ul>
              <li><a href="/pages/brand.html">브랜드 스토리</a></li>
              <li><a href="/pages/membership.html">멤버십</a></li>
              <li><a href="/pages/login.html">로그인</a></li>
              <li><a href="/pages/signup.html">회원가입</a></li>
            </ul>
          </div>
          <div class="col">
            <h4>CUSTOMER</h4>
            <div class="tel">031-000-0000</div>
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
            <span><strong>통신판매업신고.</strong> 제 2025-수원팔달-XXXX호 (신청 예정)</span>
            <span><strong>개업일.</strong> 2025년 07월 25일</span>
            <span class="biz-full"><strong>주소.</strong> 경기도 수원시 팔달구 팔달문로130번길 69, 가동 503-3에이호 (우만동, 아이월드)</span>
            <span class="biz-full"><strong>업태.</strong> 도매 및 소매업 &nbsp;/&nbsp; <strong>종목.</strong> 전자상거래, 가전제품, 화장품·생활용품, 의류·가방·패션잡화, 기계설비 부품, 수출, 수입</span>
            <span class="biz-full"><strong>이메일.</strong> contact@lumi-intl.co.kr &nbsp;&nbsp; <strong>개인정보보호책임자.</strong> JIN LINHUA</span>
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
