// ORAVIN — Premium Skin Booster Inspired Skincare
// PDLLA · Volufiline · Centella Leaf Water · Micro Spicule
// 실제 제품 사진은 assets/images/products/ 에 업로드하면 자동 반영됩니다.
const U = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;

window.LUMI_PRODUCTS = [
  {
    id: 1, slug: 'hydro-regene-air-ampoule',
    name: 'Hydro Regene Air Ampoule',
    nameKo: '하이드로 리제네 에어 앰플',
    size: '99.9ml',
    category: 'skincare', cat_label: '앰플',
    tags: ['HERO', 'BEST'],
    bullets: ['피부결', '광채', '수분볼륨'],
    price: 89000, salePrice: 79000,
    image: U('1571781926291-c477ebfd024b', 900),
    hoverImage: U('1620916566398-39f1143ab7be', 900),
    localImage: 'oravin-ampoule-main.png',
    localHover: 'oravin-ampoule-hover.png',
    desc: '넉넉한 99.9ml로 매일 듬뿍 — 결·광채·수분볼륨을 채워주는 시그니처 앰플',
    detail: 'ORAVIN의 시그니처 데일리 앰플이에요. 넉넉한 99.9ml 용량으로 매일 부담 없이 듬뿍 사용하실 수 있어요. PDLLA와 Volufiline이 피부 깊은 곳까지 볼륨감을 채워주고, 정제수 대신 사용한 100% Centella Leaf Water가 피부 결을 차분하게 진정시켜드려요. 가볍게 발리지만 오래 머무는 에어리 텍스처가 광채로 가득한 피부 결을 완성합니다.',
    options: [
      { name: '99.9ml 단품', addPrice: 0 },
      { name: '99.9ml + 미니 30ml (선물 패키지)', addPrice: 15000 }
    ]
  },
  {
    id: 2, slug: 'hydro-volume-boosting-spicule-balm',
    name: 'Hydro Volume Boosting Spicule Balm',
    nameKo: '하이드로 볼륨 부스팅 스피큘 밤',
    size: '15g',
    category: 'skincare', cat_label: '스피큘 밤',
    tags: ['HERO', 'NEW'],
    bullets: ['집중 주름 케어', '팔자·목·입술 볼륨', 'Micro Spicule 함유'],
    price: 128000, salePrice: 115200,
    image: U('1611080626919-7cf5a9dbab12', 900),
    hoverImage: U('1608248543803-ba4f8c70ae0b', 900),
    localImage: 'oravin-balm-main.png',
    localHover: 'oravin-balm-hover.png',
    desc: '집중 주름·볼륨 케어 — Micro Spicule 흡수 시스템 발룸',
    detail: 'ORAVIN의 시그니처 집중 케어 발룸. Micro Spicule이 피부 표면에 미세한 채널을 만들어 PDLLA와 Volufiline 성분을 깊게 전달해드려요. 팔자, 목주름, 입술 볼륨이 신경 쓰이는 부위에 콕 짚어 발라보세요. 매일의 홈케어에서 시술 직후의 매끄러운 결을 경험하실 수 있어요.',
    options: [{ name: '15g 단품', addPrice: 0 }]
  },
  {
    id: 3, slug: 'oravin-signature-duo',
    name: 'ORAVIN Signature Duo',
    nameKo: 'ORAVIN 시그니처 듀오 세트',
    size: 'Ampoule 99.9ml + Balm 15g',
    category: 'set', cat_label: '시그니처 듀오',
    tags: ['SET', 'BEST'],
    bullets: ['데일리 + 집중 케어', '풀 루틴 완성', '20% 할인'],
    price: 217000, salePrice: 173600,
    image: U('1612817288484-6f916006741a', 900),
    hoverImage: U('1583209814683-c023dd293cc6', 900),
    localImage: 'oravin-set-main.png',
    localHover: 'oravin-set-hover.png',
    desc: '앰플 + 스피큘 발룸 시그니처 듀오 — 데일리부터 집중 케어까지',
    detail: 'Hydro Regene Air Ampoule 99.9ml + Hydro Volume Boosting Spicule Balm 15g 풀세트예요. 매일의 데일리 케어부터 부위별 집중 케어까지, ORAVIN의 모든 루틴을 한번에 만나보세요. 단품 대비 20% 할인과 시그니처 더스트백을 함께 보내드립니다.',
    options: [{ name: 'Signature Duo Set', addPrice: 0 }]
  }
];

window.LUMI_CATEGORIES = [
  { id: 'all', name: '전체' },
  { id: 'best', name: '베스트' },
  { id: 'new', name: '신상품' },
  { id: 'skincare', name: '스킨케어' },
  { id: 'set', name: '세트' }
];

window.formatPrice = function (n) {
  return Number(n).toLocaleString('ko-KR') + '원';
};
