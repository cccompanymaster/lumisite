# ORAVIN 결제 연동 가이드

ORAVIN은 **포트원(PortOne, 옛 아임포트) JavaScript SDK** 기반으로 결제를 연동했습니다.
한 번의 설정으로 **카카오페이 · 네이버페이 · 토스페이 · 카드 · 계좌이체 · 가상계좌** 등 한국 주요 결제 수단을 모두 지원합니다.

---

## 1. 포트원 가맹점 가입 (5분)

1. https://portone.io 에 가입
2. 콘솔(https://admin.portone.io) 로그인 → **내 정보**
3. **가맹점 식별 코드** 복사 (`imp00000000` 형식)
4. **결제대행사(PG) 설정** 메뉴에서 사용할 PG 등록:
   - **KG이니시스** (카드/계좌이체/가상계좌) — 가장 일반적
   - **카카오페이**, **네이버페이**, **토스페이먼츠** 각각 별도 신청
   - PG사 심사·계약은 영업일 기준 3~7일 소요

> **테스트만 먼저** 해보고 싶다면 PortOne 가입 직후 발급되는 **테스트 키**로 즉시 KG이니시스/카카오페이 등 결제 흐름 동작 확인이 가능합니다.

---

## 2. 사이트에 적용

`assets/js/payment-config.js` 파일을 열어 `IMP_CODE`를 입력:

```js
window.LUMI_PAYMENT_CONFIG = {
  IMP_CODE: 'imp00000000',   // ← 여기에 발급받은 코드 입력
  ...
};
```

이 한 줄만 입력하면 **시뮬레이션 모드 → 실제 결제 모드**로 자동 전환됩니다.

`결제하기` 버튼 클릭 시:
- **시뮬레이션 모드** (IMP_CODE 비어있을 때): 진행 모달 1.8초 후 자동 완료 (기존 동작)
- **실결제 모드** (IMP_CODE 입력): PortOne 결제 팝업/리다이렉트가 띄워지고, 실제 카카오톡·네이버 앱 등으로 인증 후 결제 진행

---

## 3. 결제 수단 매핑

`payment-config.js`의 `PG_MAP`에서 우리 사이트 결제 수단 키 → PortOne 코드를 매핑합니다.

| 사이트 라벨 | PG | pay_method |
|---|---|---|
| 신용/체크카드 | html5_inicis (KG이니시스) | card |
| 실시간 계좌이체 | html5_inicis | trans |
| 무통장 입금 (가상계좌) | html5_inicis | vbank |
| 카카오페이 | kakaopay | card |
| 네이버페이 | naverpay | card |
| 토스페이 | tosspay | card |

운영 시 사용할 PG에 따라 `pg` 값만 바꾸면 됩니다 (예: KG이니시스 → 토스페이먼츠 `tosspayments`).

---

## 4. ⚠️ 서버 검증 (운영 필수)

**클라이언트 결제 완료 결과는 위조 가능**하므로 운영 시 **서버에서 결제 검증**이 반드시 필요합니다.

### 검증 흐름
1. 결제 성공 후 클라이언트는 `imp_uid` + `merchant_uid`를 백엔드로 POST
2. 백엔드에서 PortOne REST API `/payments/{imp_uid}` 조회
3. 응답의 `amount`가 주문 금액과 일치하는지 검증
4. 일치 → 주문 확정 / 불일치 → 결제 취소 (`/payments/cancel`)

### 백엔드 추가 옵션
- **Vercel Functions** (무료, 간편)
- **Cloudflare Workers** (무료, 빠름)
- **Railway / Render** (Node.js 호스팅)
- **Firebase Functions**

검증 엔드포인트가 준비되면 `payment-config.js`의 `VERIFY_ENDPOINT`에 URL 입력 — 자동으로 결제 성공 직후 POST 호출되어 검증합니다.

### 검증 서버 예시 (Node.js, Express)

```js
const axios = require('axios');
app.post('/verify', async (req, res) => {
  const { imp_uid, merchant_uid } = req.body;

  // 1) PortOne 액세스 토큰 발급
  const { data: tok } = await axios.post('https://api.iamport.kr/users/getToken', {
    imp_key: process.env.PORTONE_KEY,
    imp_secret: process.env.PORTONE_SECRET
  });
  const accessToken = tok.response.access_token;

  // 2) 결제 정보 조회
  const { data: payment } = await axios.get(
    `https://api.iamport.kr/payments/${imp_uid}`,
    { headers: { Authorization: accessToken } }
  );
  const paid = payment.response;

  // 3) 우리 DB의 주문 금액과 비교
  const order = await db.getOrder(merchant_uid);
  if (paid.amount !== order.totalPaid || paid.status !== 'paid') {
    // 위변조 의심 → 결제 취소
    await axios.post('https://api.iamport.kr/payments/cancel',
      { imp_uid, reason: '금액 불일치' },
      { headers: { Authorization: accessToken } }
    );
    return res.json({ verified: false, message: '결제 금액 불일치' });
  }

  // 4) 주문 확정
  await db.markOrderPaid(merchant_uid, paid);
  res.json({ verified: true });
});
```

---

## 5. 모바일 결제

카카오페이·네이버페이·토스페이는 모바일에서 **앱 리다이렉트** 방식이 기본입니다.
`payment.js`의 `m_redirect_url`이 자동으로 `order-complete.html`을 가리키므로 별도 설정 불필요합니다.

---

## 6. 체크리스트

운영 배포 전 확인:

- [ ] PortOne 가맹점 코드 입력 (`payment-config.js`)
- [ ] 사용할 PG사 가맹 계약 완료 (영업일 3~7일)
- [ ] 백엔드 검증 엔드포인트 구축 (`VERIFY_ENDPOINT`)
- [ ] HTTPS 적용 (GitHub Pages는 기본 적용)
- [ ] 카카오페이/네이버페이는 별도 입점 심사 필요할 수 있음
- [ ] 통신판매업 신고증 확보 (전자상거래 필수)
- [ ] 개인정보처리방침·이용약관 페이지 작성
- [ ] 환불·취소 정책 명시

---

## 결제 시 처리되는 데이터

각 결제에 포함되는 정보:
- `merchant_uid`: 주문번호 (`ORV-{timestamp}`)
- `name`: 상품명 (첫 상품 + 외 N건)
- `amount`: 결제 금액
- `buyer_name`, `buyer_email`, `buyer_tel`: 주문자 정보
- `buyer_addr`, `buyer_postcode`: 배송지 정보

서버 측에서는 별도로 적립금/등급할인 처리 내역도 함께 저장 권장.
