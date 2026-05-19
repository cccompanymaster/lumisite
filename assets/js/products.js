// ORAVIN — Premium Medical Aesthetic Skincare
// PDLLA · 보르피린 · 스피큘 기반 메디컬 에스테틱 홈케어
// 실제 제품 사진은 assets/images/products/ 에 업로드하면 자동 반영됩니다.
const U = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;

window.LUMI_PRODUCTS = [
  {
    id: 1, slug: 'hydro-regene-air-ampoule',
    name: 'Hydro Regene Air Ampoule',
    nameKo: '하이드로 리젠 에어 앰플',
    size: '99.9ml',
    category: 'skincare', cat_label: '앰플',
    tags: ['HERO', 'BEST'],
    price: 89000, salePrice: 79000,
    image: U('1571781926291-c477ebfd024b', 900),
    hoverImage: U('1620916566398-39f1143ab7be', 900),
    localImage: 'oravin-ampoule-main.png',
    localHover: 'oravin-ampoule-hover.png',
    desc: '넉넉한 99.9ml로 매일 듬뿍, ORAVIN 시그니처 보습·광채 앰플',
    detail: 'ORAVIN의 시그니처 앰플이에요. 넉넉한 99.9ml 용량 덕분에 매일 부담 없이 듬뿍 사용하실 수 있어요. 분자 크기가 다른 5종 히알루론산이 속부터 표면까지 단계별로 수분을 채워주고, 판테놀과 마데카소사이드가 결을 차분하게 다듬어드려요. 가볍게 발리지만 오래 머무는 에어리 텍스처라 끈적임 걱정 없이 사용하실 수 있어요.',
    options: [{ name: '99.9ml 단품', addPrice: 0 }, { name: '99.9ml + 30ml 미니 (선물 패키지)', addPrice: 15000 }]
  },
  {
    id: 2, slug: 'pdlla-collagen-booster-serum',
    name: 'PDLLA Collagen Booster Serum',
    nameKo: 'PDLLA 콜라겐 부스터 세럼',
    size: '30ml',
    category: 'skincare', cat_label: '부스터',
    tags: ['BEST', 'NEW'],
    price: 138000, salePrice: 124200,
    image: U('1611080626919-7cf5a9dbab12', 900),
    hoverImage: U('1608248543803-ba4f8c70ae0b', 900),
    localImage: 'oravin-pdlla-main.png',
    localHover: 'oravin-pdlla-hover.png',
    desc: 'PDLLA 콜라겐 부스팅으로 탄력과 볼륨을 채워주는 시그니처 세럼',
    detail: 'PDLLA(Poly-D,L-Lactic Acid) 콜라겐 부스팅 컴플렉스가 피부 진피층의 콜라겐 생성을 도와 탄력과 볼륨을 자연스럽게 회복시켜드려요. 매일의 홈케어로 시술 직후처럼 매끈한 결을 경험해보세요.',
    options: [{ name: '30ml 단품', addPrice: 0 }]
  },
  {
    id: 3, slug: 'borfirin-lifting-cream',
    name: 'Borfirin Lifting Cream',
    nameKo: '보르피린 리프팅 크림',
    size: '50ml',
    category: 'skincare', cat_label: '리프팅',
    tags: ['BEST', 'NEW'],
    price: 96000, salePrice: 86400,
    image: U('1612817288484-6f916006741a', 900),
    hoverImage: U('1571781926291-c477ebfd024b', 900),
    localImage: 'oravin-borfirin-main.png',
    localHover: 'oravin-borfirin-hover.png',
    desc: '보르피린 5% 고함량으로 또렷한 V라인을 잡아주는 리프팅 크림',
    detail: '보르피린(Borfirin) 5% 고함량이 처진 피부에 즉각적인 리프팅감을 더해드리고, 시간이 흐를수록 또렷한 V라인을 완성해드려요. 풍부하지만 무겁지 않은 텍스처가 24시간 탄탄한 베일을 만들어드려요.',
    options: [{ name: '50ml 단품', addPrice: 0 }]
  },
  {
    id: 4, slug: 'spicule-resurfacing-mask',
    name: 'Spicule Resurfacing Mask',
    nameKo: '스피큘 리서페이싱 마스크',
    size: '5 sheets',
    category: 'skincare', cat_label: '트리트먼트',
    tags: ['NEW'],
    price: 68000, salePrice: 61200,
    image: U('1570194065650-d99fb4bedf0a', 900),
    hoverImage: U('1556228453-efd6c1ff04f6', 900),
    localImage: 'oravin-spicule-main.png',
    localHover: 'oravin-spicule-hover.png',
    desc: '천연 스피큘로 결을 매끈하게 정돈하는 주 1회 트리트먼트',
    detail: '천연 해면 유래 스피큘(Spicule)이 피부 표면에 미세 채널을 만들어 활성 성분의 흡수를 도와드려요. 주 1회만 사용해도 한결 매끈해진 결을 느끼실 수 있을 거예요.',
    options: [{ name: '5매 1박스', addPrice: 0 }, { name: '5매 2박스 (15% OFF)', addPrice: 51000 }]
  },
  {
    id: 5, slug: 'oravin-premium-full-set',
    name: 'ORAVIN Premium Full Set',
    nameKo: 'ORAVIN 프리미엄 풀세트',
    size: 'Ampoule + Serum + Cream',
    category: 'set', cat_label: '시그니처 컬렉션',
    tags: ['SET', 'BEST'],
    price: 323000, salePrice: 258400,
    image: U('1583209814683-c023dd293cc6', 900),
    hoverImage: U('1612817288484-6f916006741a', 900),
    localImage: 'oravin-set-main.png',
    localHover: 'oravin-set-hover.png',
    desc: '보습·부스팅·리프팅을 한 번에, ORAVIN 시그니처 3종 풀세트',
    detail: 'Hydro Regene Air Ampoule + PDLLA Collagen Booster Serum + Borfirin Lifting Cream 3종을 한 번에 만나보세요. 매일의 홈에스테틱 루틴을 완성해드리는 시그니처 세트입니다. 단품 대비 20% 할인 혜택과 시그니처 더스트백을 함께 보내드려요.',
    options: [{ name: 'Premium Full Set', addPrice: 0 }]
  },
  {
    id: 6, slug: 'booster-duo-pack',
    name: 'Booster Duo Pack',
    nameKo: '부스터 듀오 팩',
    size: 'Ampoule 99.9ml + Serum 30ml',
    category: 'set', cat_label: '부스터 듀오',
    tags: ['SET'],
    price: 227000, salePrice: 181600,
    image: U('1620916566398-39f1143ab7be', 900),
    hoverImage: U('1571781926291-c477ebfd024b', 900),
    localImage: 'oravin-duo-main.png',
    localHover: 'oravin-duo-hover.png',
    desc: '앰플과 PDLLA 세럼의 듀오 — 보습부터 콜라겐 부스팅까지',
    detail: 'Hydro Regene Air Ampoule와 PDLLA Collagen Booster Serum의 듀오 구성이에요. 보습과 콜라겐 부스팅을 한 번에 챙기실 수 있도록 준비했어요. 20% 할인과 무료 배송 혜택이 함께 적용됩니다.',
    options: [{ name: 'Duo Pack', addPrice: 0 }]
  },
  {
    id: 7, slug: 'oravin-travel-kit',
    name: 'ORAVIN Travel Kit',
    nameKo: 'ORAVIN 트래블 키트',
    size: '30ml × 3',
    category: 'set', cat_label: '트래블 키트',
    tags: ['NEW'],
    price: 65000, salePrice: 55000,
    image: U('1611080626919-7cf5a9dbab12', 900),
    hoverImage: U('1556228852-bbef5683b97c', 900),
    localImage: 'oravin-travel-main.png',
    localHover: 'oravin-travel-hover.png',
    desc: '어디서나 흔들리지 않는 ORAVIN 미니 3종 키트',
    detail: 'Hydro Regene Ampoule 30ml + PDLLA Booster Serum 15ml + Borfirin Cream 20ml 구성이에요. 기내 반입이 가능한 미니 사이즈라 여행지에서도 ORAVIN 루틴을 그대로 이어가실 수 있어요.',
    options: [{ name: 'Travel Kit', addPrice: 0 }]
  },
  {
    id: 8, slug: 'aesthetic-cleansing-foam',
    name: 'Aesthetic Cleansing Foam',
    nameKo: '에스테틱 클렌징 폼',
    size: '150ml',
    category: 'cleanser', cat_label: '클렌저',
    tags: ['NEW'],
    price: 32000, salePrice: 30400,
    image: U('1556228852-bbef5683b97c', 900),
    hoverImage: U('1556228720-da4e85ab4a93', 900),
    localImage: 'oravin-foam-main.png',
    localHover: 'oravin-foam-hover.png',
    desc: '약산성 5.5pH 모이스처 폼 — 시술 후 민감한 날에도 안심',
    detail: '약산성 5.5pH 포뮬러라 시술 직후 민감한 피부에도 안심하고 사용하실 수 있어요. 풍부한 거품이 모공 속 노폐물을 부드럽게 세정해주고, 다음 단계 흡수를 위한 깨끗한 베이스를 만들어드려요.',
    options: [{ name: '150ml 단품', addPrice: 0 }]
  }
];

window.LUMI_CATEGORIES = [
  { id: 'all', name: '전체' },
  { id: 'best', name: '베스트' },
  { id: 'new', name: '신상품' },
  { id: 'skincare', name: '스킨케어' },
  { id: 'cleanser', name: '클렌저' },
  { id: 'set', name: '세트' }
];

window.formatPrice = function (n) {
  return Number(n).toLocaleString('ko-KR') + '원';
};
