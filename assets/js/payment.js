// ORAVIN — 결제 통합 (토스페이먼츠 v1 SDK 기반)
(function () {
  const cfg = window.LUMI_PAYMENT_CONFIG || {};
  const CLIENT_KEY = cfg.CLIENT_KEY || '';
  const PG_MAP = cfg.PG_MAP || {};

  let tossPayments = null;
  let simulationMode = !CLIENT_KEY;

  function init() {
    if (!CLIENT_KEY || !window.TossPayments) {
      simulationMode = true;
      return;
    }
    try {
      tossPayments = window.TossPayments(CLIENT_KEY);
      simulationMode = false;
    } catch (e) {
      console.warn('[LumiPayment] TossPayments init failed, falling back to simulation', e);
      simulationMode = true;
    }
  }

  function buildOrderName(items) {
    if (!items || items.length === 0) return 'ORAVIN 주문';
    const first = items[0].productName || items[0].product?.name || 'ORAVIN';
    return items.length > 1 ? `${first} 외 ${items.length - 1}건` : first;
  }

  // 결제 요청
  // order: { id, items, totalPaid, payMethod, buyer:{name,email,phone}, shipTo:{name,zip,addr1,addr2} }
  function request(order) {
    return new Promise((resolve, reject) => {
      // === 시뮬레이션 모드 ===
      if (simulationMode) {
        // 클라이언트 키가 없으면 1.8초 후 결제 성공 흉내 (개발용)
        // localStorage에 주문 임시 저장하고 success로 리다이렉트하는 것과 동일하게 처리
        setTimeout(() => {
          resolve({
            success: true,
            simulated: true,
            paymentKey: 'SIM-' + Date.now(),
            orderId: order.id,
            amount: order.totalPaid,
            method: order.payMethod
          });
        }, 1800);
        return;
      }

      if (!tossPayments) {
        reject(new Error('결제 모듈이 아직 준비되지 않았어요. 잠시 후 다시 시도해 주세요.'));
        return;
      }

      const conf = PG_MAP[order.payMethod] || PG_MAP.card;
      if (!conf) {
        reject(new Error('지원되지 않는 결제 수단입니다.'));
        return;
      }

      // 토스페이먼츠는 successUrl/failUrl 리다이렉트 방식
      // 주문 정보를 sessionStorage에 미리 저장 (success 페이지에서 사용)
      sessionStorage.setItem('lumi.pendingOrder', JSON.stringify(order));

      const params = {
        amount: order.totalPaid,
        orderId: order.id,
        orderName: buildOrderName(order.items),
        customerName: order.buyer?.name || order.shipTo?.name || '',
        customerEmail: order.buyer?.email || '',
        customerMobilePhone: (order.buyer?.phone || '').replace(/-/g, ''),
        successUrl: cfg.SUCCESS_URL,
        failUrl: cfg.FAIL_URL
      };

      // 간편결제 옵션 (카카오페이/네이버페이 등)
      if (conf.easyPay) {
        params.flowMode = 'DIRECT';
        params.easyPay = conf.easyPay;
      }

      // 가상계좌 입금 기한 (3일)
      if (conf.method === '가상계좌') {
        params.validHours = 72;
      }

      try {
        // requestPayment는 결제창으로 리다이렉트되므로 .catch만 의미가 있음 (success는 returnUrl에서)
        tossPayments.requestPayment(conf.method, params).catch((err) => {
          // 사용자 취소 또는 결제 실패
          reject(new Error(err?.message || '결제가 취소되었거나 실패했습니다.'));
        });
      } catch (e) {
        reject(new Error(e.message || '결제 요청 중 오류가 발생했습니다.'));
      }
    });
  }

  // 결제 성공 후 success URL에서 호출 — paymentKey/orderId/amount 검증
  // 운영 시 반드시 백엔드에서 토스 API로 confirm 호출 필요
  function confirmPayment({ paymentKey, orderId, amount }) {
    if (cfg.VERIFY_ENDPOINT) {
      return fetch(cfg.VERIFY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentKey, orderId, amount })
      }).then(r => r.json());
    }
    // 검증 엔드포인트가 없으면 클라이언트 응답만 받아둠 (개발/데모용)
    return Promise.resolve({ verified: false, message: '서버 검증 미구성' });
  }

  window.LumiPayment = {
    init,
    request,
    confirmPayment,
    isSimulation: () => simulationMode,
    getLabel: (key) => (PG_MAP[key] && PG_MAP[key].label) || key
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
