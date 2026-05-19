// LUMI International - Product Catalog
const U = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;

window.LUMI_PRODUCTS = [
  {
    id: 1, slug: 'glow-first-essence',
    name: 'Glow First Essence',
    nameKo: '글로우 퍼스트 에센스',
    size: '150ml',
    category: 'skincare', cat_label: 'ESSENCE',
    tags: ['BEST', 'NEW'],
    price: 39000, salePrice: 37050,
    image: U('1556228720-195a672e8a03', 900),
    hoverImage: U('1571781926291-c477ebfd024b', 900),
    desc: '피부 결을 정돈하고 다음 단계 흡수를 돕는 첫 단계 에센스',
    detail: '저자극 약산성 포뮬러로 매일 사용 가능한 데일리 부스터 에센스입니다. 5종 세라마이드와 판테놀이 손상된 피부 장벽을 케어하고, 다음 단계 흡수율을 높여 매끄러운 결을 만들어줍니다.',
    options: [{ name: '150ml 단품', addPrice: 0 }, { name: '150ml + 리필 100ml', addPrice: 12000 }]
  },
  {
    id: 2, slug: 'collagen-booster-ampoule',
    name: 'Collagen Boosting Ampoule',
    nameKo: '콜라겐 부스팅 앰플',
    size: '20g',
    category: 'skincare', cat_label: 'AMPOULE',
    tags: ['BEST'],
    price: 62000, salePrice: 55800,
    image: U('1620916566398-39f1143ab7be', 900),
    hoverImage: U('1608248543803-ba4f8c70ae0b', 900),
    desc: '하이브리드 콜라겐 컴플렉스로 탄력 케어',
    detail: '저분자 콜라겐과 펩타이드 컴플렉스가 즉각 흡수되어 탄력을 채워줍니다. 첫 사용부터 느껴지는 매끈한 마무리감이 특징입니다.',
    options: [{ name: '20g 단품', addPrice: 0 }]
  },
  {
    id: 3, slug: 'collagen-mask',
    name: 'Collagen Boosting Mask',
    nameKo: '콜라겐 부스팅 마스크',
    size: '4 sheets',
    category: 'skincare', cat_label: 'MASK',
    tags: ['BEST', 'NEW'],
    price: 36000, salePrice: 34200,
    image: U('1570194065650-d99fb4bedf0a', 900),
    hoverImage: U('1556228453-efd6c1ff04f6', 900),
    desc: '하이드로겔 시트로 밀착 케어',
    detail: '얼굴 굴곡에 완벽히 밀착되는 하이드로겔 시트 마스크 4매 구성. 한 장에 25ml의 에센스가 듬뿍 담겨 있습니다.',
    options: [{ name: '4매 1박스', addPrice: 0 }, { name: '4매 2박스 (10% OFF)', addPrice: 28000 }]
  },
  {
    id: 4, slug: 'protecting-cream',
    name: 'Protecting Cream',
    nameKo: '프로텍팅 크림',
    size: '50ml',
    category: 'skincare', cat_label: 'CREAM',
    tags: ['BEST'],
    price: 34000, salePrice: 32300,
    image: U('1571781926291-c477ebfd024b', 900),
    hoverImage: U('1612817288484-6f916006741a', 900),
    desc: '피부 장벽 강화 마무리 크림',
    detail: '5종 세라마이드와 판테놀이 피부 장벽을 튼튼히 케어합니다. 가볍게 발리지만 풍부한 보습감을 남기는 마무리 크림.',
    options: [{ name: '50ml 단품', addPrice: 0 }]
  },
  {
    id: 5, slug: 'full-care-set',
    name: 'Full Care Set',
    nameKo: '풀케어 4종 세트',
    size: '4종',
    category: 'set', cat_label: 'COLLECTION',
    tags: ['SET', 'BEST'],
    price: 171000, salePrice: 136800,
    image: U('1612817288484-6f916006741a', 900),
    hoverImage: U('1583209814683-c023dd293cc6', 900),
    desc: '에센스 + 앰플 + 마스크 + 크림 풀케어',
    detail: 'LUMI 베스트 4종을 한번에 만나는 풀케어 세트. 단품 대비 20% 할인. 선물 패키지 옵션 가능.',
    options: [{ name: '풀케어 4종 세트', addPrice: 0 }]
  },
  {
    id: 6, slug: 'daily-toner-pad',
    name: 'Daily Toner Pad',
    nameKo: '데일리 토너패드',
    size: '70 pads',
    category: 'skincare', cat_label: 'TONER',
    tags: ['NEW'],
    price: 28000, salePrice: 26600,
    image: U('1631730486578-30b95c00fcc1', 900),
    hoverImage: U('1631730486572-226d1f595b68', 900),
    desc: 'PHA 함유 데일리 각질 케어 패드',
    detail: '저자극 PHA로 매일 사용해도 부담 없는 클리어링 토너패드. 71% 약산성 토너에 7종 비타민 컴플렉스를 더했습니다.',
    options: [{ name: '70매 단품', addPrice: 0 }]
  },
  {
    id: 7, slug: 'vitamin-glow-serum',
    name: 'Vitamin Glow Serum',
    nameKo: '비타민 글로우 세럼',
    size: '30ml',
    category: 'skincare', cat_label: 'SERUM',
    tags: ['NEW'],
    price: 45000, salePrice: 42750,
    image: U('1611080626919-7cf5a9dbab12', 900),
    hoverImage: U('1620916297893-e6c7c1a99e1f', 900),
    desc: '안정화 비타민 C 12% 브라이트닝',
    detail: '안정화 비타민 C 12%와 글루타치온이 칙칙함을 케어하고 환한 광채를 채워주는 데일리 브라이트닝 세럼.',
    options: [{ name: '30ml 단품', addPrice: 0 }]
  },
  {
    id: 8, slug: 'dual-cleansing-foam',
    name: 'Dual Cleansing Foam',
    nameKo: '듀얼 클렌징 폼',
    size: '200ml',
    category: 'cleanser', cat_label: 'CLEANSER',
    tags: ['NEW'],
    price: 22000, salePrice: 20900,
    image: U('1556228852-bbef5683b97c', 900),
    hoverImage: U('1556228720-da4e85ab4a93', 900),
    desc: '약산성 모이스처 클렌징 폼',
    detail: '약산성 5.5pH로 피부 장벽 손상 없이 깔끔하게 세정합니다. 풍부한 거품이 모공 속까지 부드럽게 클렌징.',
    options: [{ name: '200ml 단품', addPrice: 0 }]
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
