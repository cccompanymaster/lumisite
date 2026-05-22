// ORAVIN — 토스페이먼츠 결제 설정
// =====================================================
// 운영 시 토스페이먼츠 콘솔에서 발급받은 클라이언트 키를 입력
// https://app.tosspayments.com → "결제 연동" → "클라이언트 키"
// =====================================================
window.LUMI_PAYMENT_CONFIG = {
  // 토스페이먼츠 클라이언트 키 (Live)
  // 빈 값이면 시뮬레이션 모드로 동작 (개발용)
  // 테스트용 키: test_ck_docs_Ovk5rk1EwkEbP0W43n07xlzm (토스 공식 문서 샘플)
  CLIENT_KEY: '',

  // 결제 결과 검증용 서버 엔드포인트 (선택)
  // 미설정 시 클라이언트 결과만 사용 — 실서비스는 반드시 서버 검증 필요
  VERIFY_ENDPOINT: '',

  // 성공/실패 리다이렉트 URL (자동 계산)
  SUCCESS_URL: location.origin + location.pathname.replace(/checkout\.html$/, 'order-complete.html'),
  FAIL_URL:    location.origin + location.pathname.replace(/checkout\.html$/, 'checkout.html') + '?payment=failed',

  // 우리 결제 수단 키 → 토스 method/easyPay 매핑
  PG_MAP: {
    card:     { method: '카드',     label: '신용/체크카드' },
    trans:    { method: '계좌이체', label: '실시간 계좌이체' },
    vbank:    { method: '가상계좌', label: '무통장(가상계좌)' },
    kakaopay: { method: '카드', easyPay: '카카오페이', label: '카카오페이' },
    naverpay: { method: '카드', easyPay: '네이버페이', label: '네이버페이' },
    toss:     { method: '간편결제', label: '토스페이' }
  }
};
