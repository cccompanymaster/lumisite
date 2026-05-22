# ORAVIN 결제 연동 — 개발자 가이드

토스페이먼츠 v1 JS SDK 기반.

## 1. 운영 키 입력
`assets/js/payment-config.js`:
```js
CLIENT_KEY: 'live_ck_...',  // 토스페이먼츠 콘솔 → 클라이언트 키 (Live)
VERIFY_ENDPOINT: 'https://api.oravin.com/payments/confirm',
```

## 2. 서버 검증 흐름 (필수)
1. 사용자 결제 성공 → 토스가 `successUrl?paymentKey=&orderId=&amount=` 으로 리다이렉트
2. order-complete.html이 `LumiPayment.confirmPayment()` → `VERIFY_ENDPOINT`로 POST
3. 백엔드는 토스 API `/v1/payments/confirm` 호출하여 결제 승인 + DB에 기록

### 백엔드 샘플 (Node.js)
```js
const SECRET = process.env.TOSS_SECRET_KEY;  // 절대 클라이언트에 노출 금지
app.post('/payments/confirm', async (req, res) => {
  const { paymentKey, orderId, amount } = req.body;
  const r = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(SECRET + ':').toString('base64'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ paymentKey, orderId, amount })
  });
  const data = await r.json();
  if (data.status === 'DONE') {
    await db.markPaid(orderId, data);
    res.json({ verified: true });
  } else {
    res.status(400).json({ verified: false, message: data.message });
  }
});
```

## 3. 결제 수단 매핑
| 사이트 라벨 | 토스 method | easyPay |
|---|---|---|
| 신용/체크카드 | 카드 | — |
| 실시간 계좌이체 | 계좌이체 | — |
| 무통장 입금 | 가상계좌 (72시간 입금기한) | — |
| 카카오페이 | 카드 (DIRECT) | 카카오페이 |
| 네이버페이 | 카드 (DIRECT) | 네이버페이 |
| 토스페이 | 간편결제 | — |
