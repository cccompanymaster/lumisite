// ORAVIN — 결제 설정
// =====================================================
// 운영 시 PortOne(옛 아임포트) 가맹점 식별 코드 입력
// https://admin.portone.io → "내 정보" → "가맹점 식별 코드"
// =====================================================
window.LUMI_PAYMENT_CONFIG = {
  // 가맹점 식별 코드 (예: 'imp00000000')
  // 빈 값이면 시뮬레이션 모드로 동작 (개발용)
  IMP_CODE: '',

  // 결제 결과 검증용 서버 엔드포인트 (선택)
  // 미설정 시 클라이언트 결과만 사용 — 실서비스는 반드시 서버 검증 필요
  VERIFY_ENDPOINT: '',

  // 모바일 결제 완료 후 리다이렉트 (자동 계산)
  REDIRECT_URL: location.origin + location.pathname.replace(/checkout\.html$/, 'order-complete.html'),

  // 우리 결제 수단 키 → PortOne PG·pay_method 매핑
  PG_MAP: {
    card:     { pg: 'html5_inicis', pay_method: 'card',  label: '신용/체크카드' },
    trans:    { pg: 'html5_inicis', pay_method: 'trans', label: '실시간 계좌이체' },
    vbank:    { pg: 'html5_inicis', pay_method: 'vbank', label: '무통장(가상계좌)' },
    kakaopay: { pg: 'kakaopay',     pay_method: 'card',  label: '카카오페이' },
    naverpay: { pg: 'naverpay',     pay_method: 'card',  label: '네이버페이' },
    toss:     { pg: 'tosspay',      pay_method: 'card',  label: '토스페이' }
  }
};
