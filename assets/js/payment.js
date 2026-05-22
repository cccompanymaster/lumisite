// ORAVIN — 결제 통합 (PortOne SDK 기반)
(function () {
  const cfg = window.LUMI_PAYMENT_CONFIG || {};
  const IMP_CODE = cfg.IMP_CODE || '';
  const PG_MAP = cfg.PG_MAP || {};

  let ready = false;
  let simulationMode = !IMP_CODE;

  function init() {
    if (!IMP_CODE || !window.IMP) {
      simulationMode = true;
      return;
    }
    try {
      window.IMP.init(IMP_CODE);
      ready = true;
    } catch (e) {
      console.warn('[LumiPayment] PortOne init failed, falling back to simulation', e);
      simulationMode = true;
    }
  }

  // 모바일에서 카카오/네이버페이 등은 redirect 방식 — m_redirect_url 사용
  function isMobile() {
    return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  }

  function buildItemName(items) {
    if (!items || items.length === 0) return 'ORAVIN 주문';
    const first = items[0].productName || items[0].product?.name || 'ORAVIN';
    return items.length > 1 ? `${first} 외 ${items.length - 1}건` : first;
  }

  // 결제 요청
  // order: { id, items, totalPaid, payMethod, buyer:{name,email,phone}, shipTo:{name,zip,addr1,addr2} }
  function request(order) {
    return new Promise((resolve, reject) => {
      if (simulationMode) {
        // === 시뮬레이션 모드 ===
        // 가맹점 코드가 없으면 1.8초 후 결제 성공 흉내 (기존 동작)
        setTimeout(() => {
          resolve({
            success: true,
            simulated: true,
            imp_uid: 'SIM-' + Date.now(),
            merchant_uid: order.id,
            paid_amount: order.totalPaid,
            pay_method: order.payMethod
          });
        }, 1800);
        return;
      }

      if (!ready) {
        reject(new Error('결제 모듈이 아직 준비되지 않았어요. 잠시 후 다시 시도해 주세요.'));
        return;
      }

      const conf = PG_MAP[order.payMethod] || PG_MAP.card;
      if (!conf) {
        reject(new Error('지원되지 않는 결제 수단입니다.'));
        return;
      }

      const params = {
        pg: conf.pg,
        pay_method: conf.pay_method,
        merchant_uid: order.id,
        name: buildItemName(order.items),
        amount: order.totalPaid,
        buyer_name: order.buyer?.name || order.shipTo?.name || '',
        buyer_email: order.buyer?.email || '',
        buyer_tel: order.buyer?.phone || '',
        buyer_addr: ((order.shipTo?.addr1 || '') + ' ' + (order.shipTo?.addr2 || '')).trim(),
        buyer_postcode: order.shipTo?.zip || '',
        // 모바일 결제 완료 후 돌아올 URL (카카오/네이버페이 등에서 사용)
        m_redirect_url: cfg.REDIRECT_URL
      };

      // 네이버페이는 상품 정보 필수
      if (conf.pg === 'naverpay') {
        params.naverProducts = (order.items || []).map(i => ({
          categoryType: 'PRODUCT',
          categoryId: 'GENERAL',
          uid: String(i.productId || i.id || 'item'),
          name: i.productName || i.product?.name || 'ORAVIN',
          payReferrer: 'NAVER_BOOK'
        }));
        params.naverPopupMode = true;
      }

      window.IMP.request_pay(params, (rsp) => {
        if (rsp.success) {
          // 서버 검증 엔드포인트가 있으면 호출
          if (cfg.VERIFY_ENDPOINT) {
            fetch(cfg.VERIFY_ENDPOINT, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ imp_uid: rsp.imp_uid, merchant_uid: rsp.merchant_uid })
            }).then(r => r.json()).then(verifyRes => {
              if (verifyRes.verified) resolve(rsp);
              else reject(new Error(verifyRes.message || '결제 검증에 실패했습니다.'));
            }).catch(err => {
              // 검증 서버 오류 — 일단 통과 (운영 시 처리 정책 결정 필요)
              console.warn('[LumiPayment] verify request failed', err);
              resolve(rsp);
            });
          } else {
            resolve(rsp);
          }
        } else {
          reject(new Error(rsp.error_msg || '결제가 취소되었거나 실패했습니다.'));
        }
      });
    });
  }

  window.LumiPayment = {
    init,
    request,
    isSimulation: () => simulationMode,
    getLabel: (key) => (PG_MAP[key] && PG_MAP[key].label) || key
  };

  // 페이지 로드 시 자동 초기화
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
