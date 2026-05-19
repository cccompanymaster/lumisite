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
    category: 'skincare', cat_label: 'AMPOULE',
    tags: ['HERO', 'BEST'],
    price: 89000, salePrice: 79000,
    image: U('1571781926291-c477ebfd024b', 900),
    hoverImage: U('1620916566398-39f1143ab7be', 900),
    localImage: 'oravin-ampoule-main.jpg',
    localHover: 'oravin-ampoule-hover.jpg',
    desc: 'ORAVIN의 시그니처 — 99.9ml 대용량 보습·광채 부스팅 앰플',
    detail: 'ORAVIN Hydro Regene Air Ampoule은 99.9ml 대용량으로 매일 풍부하게 사용하는 데일리 부스터 앰플입니다. 저분자~고분자 5종 히알루론산 컴플렉스가 단계적으로 수분을 채우고, 판테놀과 마데카소사이드가 피부 장벽을 안정화시켜 광채로 가득한 결을 완성합니다. 에어리한 텍스처가 즉각 흡수되어 끈적임 없는 마무리.',
    options: [{ name: '99.9ml 단품', addPrice: 0 }, { name: '99.9ml + 30ml 미니 (선물 패키지)', addPrice: 15000 }]
  },
  {
    id: 2, slug: 'pdlla-collagen-booster-serum',
    name: 'PDLLA Collagen Booster Serum',
    nameKo: 'PDLLA 콜라겐 부스터 세럼',
    size: '30ml',
    category: 'skincare', cat_label: 'BOOSTER',
    tags: ['BEST', 'NEW'],
    price: 138000, salePrice: 124200,
    image: U('1611080626919-7cf5a9dbab12', 900),
    hoverImage: U('1608248543803-ba4f8c70ae0b', 900),
    localImage: 'oravin-pdlla-main.jpg',
    localHover: 'oravin-pdlla-hover.jpg',
    desc: 'PDLLA 콜라겐 부스팅 시그니처 — 탄력·볼륨 케어',
    detail: 'PDLLA(Poly-D,L-Lactic Acid) 콜라겐 부스팅 컴플렉스가 피부 진피층의 콜라겐 생성을 자극하여 탄력과 볼륨을 회복시키는 메디컬 에스테틱 세럼. 매일의 홈케어에서 시술 직후의 매끈한 결을 경험하세요.',
    options: [{ name: '30ml 단품', addPrice: 0 }]
  },
  {
    id: 3, slug: 'borfirin-lifting-cream',
    name: 'Borfirin Lifting Cream',
    nameKo: '보르피린 리프팅 크림',
    size: '50ml',
    category: 'skincare', cat_label: 'LIFTING',
    tags: ['BEST', 'NEW'],
    price: 96000, salePrice: 86400,
    image: U('1612817288484-6f916006741a', 900),
    hoverImage: U('1571781926291-c477ebfd024b', 900),
    localImage: 'oravin-borfirin-main.jpg',
    localHover: 'oravin-borfirin-hover.jpg',
    desc: '보르피린 5% 함유 — 리프팅·V라인 케어',
    detail: '보르피린(Borfirin) 고함량 5%가 처진 피부에 즉각적인 리프팅감을 주고, 시간이 흐를수록 또렷한 V라인을 완성합니다. 풍부하지만 무겁지 않은 텍스처가 24시간 탄탄한 베일을 만듭니다.',
    options: [{ name: '50ml 단품', addPrice: 0 }]
  },
  {
    id: 4, slug: 'spicule-resurfacing-mask',
    name: 'Spicule Resurfacing Mask',
    nameKo: '스피큘 리서페이싱 마스크',
    size: '5 sheets',
    category: 'skincare', cat_label: 'TREATMENT',
    tags: ['NEW'],
    price: 68000, salePrice: 61200,
    image: U('1570194065650-d99fb4bedf0a', 900),
    hoverImage: U('1556228453-efd6c1ff04f6', 900),
    localImage: 'oravin-spicule-main.jpg',
    localHover: 'oravin-spicule-hover.jpg',
    desc: '스피큘 마이크로니들 — 결 정돈 트리트먼트',
    detail: '천연 해면 유래 스피큘(Spicule)이 피부 표면에 마이크로 채널을 형성하여 액티브 성분의 흡수를 극대화하는 홈에스테틱 마스크. 주 1회 사용으로 매끈하게 정돈된 결을 경험하세요.',
    options: [{ name: '5매 1박스', addPrice: 0 }, { name: '5매 2박스 (15% OFF)', addPrice: 51000 }]
  },
  {
    id: 5, slug: 'oravin-premium-full-set',
    name: 'ORAVIN Premium Full Set',
    nameKo: 'ORAVIN 프리미엄 풀세트',
    size: 'Ampoule + Serum + Cream',
    category: 'set', cat_label: 'SIGNATURE COLLECTION',
    tags: ['SET', 'BEST'],
    price: 323000, salePrice: 258400,
    image: U('1583209814683-c023dd293cc6', 900),
    hoverImage: U('1612817288484-6f916006741a', 900),
    localImage: 'oravin-set-main.jpg',
    localHover: 'oravin-set-hover.jpg',
    desc: '시그니처 3종 — 보습·부스팅·리프팅 완성',
    detail: 'Hydro Regene Air Ampoule + PDLLA Collagen Booster Serum + Borfirin Lifting Cream. 매일의 홈에스테틱 루틴을 완성하는 시그니처 3종 세트. 단품 대비 20% 할인 + 시그니처 더스트백 동봉.',
    options: [{ name: 'Premium Full Set', addPrice: 0 }]
  },
  {
    id: 6, slug: 'booster-duo-pack',
    name: 'Booster Duo Pack',
    nameKo: '부스터 듀오 팩',
    size: 'Ampoule 99.9ml + Serum 30ml',
    category: 'set', cat_label: 'BOOSTER DUO',
    tags: ['SET'],
    price: 227000, salePrice: 181600,
    image: U('1620916566398-39f1143ab7be', 900),
    hoverImage: U('1571781926291-c477ebfd024b', 900),
    localImage: 'oravin-duo-main.jpg',
    localHover: 'oravin-duo-hover.jpg',
    desc: '앰플 + PDLLA 세럼 — 보습·콜라겐 부스팅 듀오',
    detail: 'Hydro Regene Air Ampoule와 PDLLA Collagen Booster Serum의 듀오 구성. 보습과 콜라겐 부스팅을 동시에 잡는 시너지 케어. 20% 할인 + 무료 배송.',
    options: [{ name: 'Duo Pack', addPrice: 0 }]
  },
  {
    id: 7, slug: 'oravin-travel-kit',
    name: 'ORAVIN Travel Kit',
    nameKo: 'ORAVIN 트래블 키트',
    size: '30ml × 3',
    category: 'set', cat_label: 'TRAVEL',
    tags: ['NEW'],
    price: 65000, salePrice: 55000,
    image: U('1611080626919-7cf5a9dbab12', 900),
    hoverImage: U('1556228852-bbef5683b97c', 900),
    localImage: 'oravin-travel-main.jpg',
    localHover: 'oravin-travel-hover.jpg',
    desc: '여행에서도 흔들리지 않는 홈에스테틱 미니 키트',
    detail: 'Hydro Regene Ampoule 30ml + PDLLA Booster Serum 15ml + Borfirin Cream 20ml. 기내 반입 가능 사이즈로 어디서나 ORAVIN 루틴을 유지하세요.',
    options: [{ name: 'Travel Kit', addPrice: 0 }]
  },
  {
    id: 8, slug: 'aesthetic-cleansing-foam',
    name: 'Aesthetic Cleansing Foam',
    nameKo: '에스테틱 클렌징 폼',
    size: '150ml',
    category: 'cleanser', cat_label: 'CLEANSER',
    tags: ['NEW'],
    price: 32000, salePrice: 30400,
    image: U('1556228852-bbef5683b97c', 900),
    hoverImage: U('1556228720-da4e85ab4a93', 900),
    localImage: 'oravin-foam-main.jpg',
    localHover: 'oravin-foam-hover.jpg',
    desc: '약산성 모이스처 폼 — 시술 후 케어에도 안전',
    detail: '약산성 5.5pH로 시술 직후 민감한 피부에도 사용 가능한 모이스처 클렌징 폼. 풍부한 거품이 모공 속 노폐물을 부드럽게 세정하고 다음 단계 흡수를 위한 깨끗한 베이스를 만듭니다.',
    options: [{ name: '150ml 단품', addPrice: 0 }]
  }
];

window.LUMI_CATEGORIES = [
  { id: 'all', name: 'ALL' },
  { id: 'best', name: 'BEST' },
  { id: 'new', name: 'NEW' },
  { id: 'skincare', name: 'SKINCARE' },
  { id: 'cleanser', name: 'CLEANSER' },
  { id: 'set', name: 'SET' }
];

window.formatPrice = function (n) {
  return Number(n).toLocaleString('ko-KR') + '원';
};
