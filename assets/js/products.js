// ORAVIN — Premium Skin Booster Inspired Skincare
// PDLLA · Volufiline · Centella Leaf Water · Micro Spicule
// 실제 제품 사진은 assets/images/products/ 에 업로드하면 자동 반영됩니다.
const U = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;

window.LUMI_PRODUCTS = [
  {
    id: 1, slug: 'hydro-regene-air-ampoule', detailSlug: 'ampoule',
    name: 'Hydro Regene Air Ampoule',
    nameKo: '하이드로 리제네 에어 앰플',
    size: '99.9ml',
    category: 'skincare', cat_label: '앰플',
    tags: ['HERO', 'BEST'],
    bullets: ['피부결', '광채', '수분볼륨'],
    price: 138000, salePrice: 138000,
    image: U('1571781926291-c477ebfd024b', 900),
    hoverImage: U('1620916566398-39f1143ab7be', 900),
    localImage: 'oravin-ampoule-main.png',
    localHover: 'oravin-ampoule-hover.png',
    desc: '넉넉한 99.9ml로 매일 듬뿍 — 결·광채·수분볼륨을 채워주는 시그니처 앰플',
    detail: 'ORAVIN의 시그니처 데일리 앰플이에요. 넉넉한 99.9ml 용량으로 매일 부담 없이 듬뿍 사용하실 수 있어요. PDLLA와 Volufiline이 피부 깊은 곳까지 볼륨감을 채워주고, 정제수 대신 사용한 100% Centella Leaf Water가 피부 결을 차분하게 진정시켜드려요. 가볍게 발리지만 오래 머무는 에어리 텍스처가 광채로 가득한 피부 결을 완성합니다.',
    options: [
      { name: '99.9ml 단품', addPrice: 0 },
      { name: '99.9ml + 미니 30ml (선물 패키지)', addPrice: 15000 }
    ],
    detailContent: {
      heroTitle: '피부 본연의 힘을 깨우는<br><em>프리미엄 스킨부스터</em>',
      heroSub: '스킨부스터 핵심 성분으로 피부 속부터 탄력과 건강함을 채우다',
      heroEn: 'AWAKEN THE POWER OF YOUR SKIN',
      spotlight: {
        eyebrow: '스킨부스터 핵심성분',
        title: 'PDLLA란?',
        body: 'PDLLA(Poly-D,L-Lactic Acid)는 스킨부스터의 핵심 성분으로, 피부 속에서 콜라겐 생성을 촉진하여 탄력·밀도·볼륨 개선에 도움을 줍니다.',
        points: [
          { k: '콜라겐 생성 촉진', v: '피부 속 콜라겐 생성을 활성화하여 탄력 개선에 도움' },
          { k: '피부 밀도 향상', v: '피부 속 밀도를 높여 매끈하고 탄탄한 피부로 케어' },
          { k: '탄력 & 볼륨 개선', v: '처진 피부에 탄력을 부여하고 볼륨감을 개선' },
          { k: '안전한 바이오 성분', v: '생체 적합성이 우수한 바이오 성분으로 안심하고 사용' }
        ],
        quote: '피부 속부터 채우는 근본적인 탄력 솔루션, 오라빈 하이드로 리제네 에어앰플의 특별한 시작입니다.'
      },
      benefits: [
        { k: '광채', v: '자연스러운 빛나는 피부' },
        { k: '탄력', v: '피부 속부터 채워 매끄럽고 탱탱하게' },
        { k: '보습', v: '깊은 보습으로 오래도록 촉촉하게' }
      ],
      clinical: {
        title: '인체적용시험 완료',
        items: [
          { k: '피부 광채 개선', v: 100 },
          { k: '피부 보습 개선', v: 100 },
          { k: '피부 탄력 개선', v: 95 },
          { k: '피부결 개선', v: 95 },
          { k: '피부 치밀도 개선', v: 95 }
        ],
        note: '(주)피부임상연구센터 / 23.03.13~23.04.10 / 만 20~60세 성인 여성 22명 / 개인차 있음'
      },
      features: [
        { k: '미세 분사', v: '고운 미스트 입자가 피부에 균일하게 밀착 전달' },
        { k: '고농축 포뮬러', v: '엄선된 고농축 성분을 그대로 피부에 전달' },
        { k: '광채 부스팅', v: '피부 속부터 채워 자연스러운 건강한 광채 선사' },
        { k: '탄력 케어', v: '피부 탄력을 케어하여 매끈하고 탱탱한 피부로' }
      ],
      ingredients: [
        { k: '병풀잎수 100%', v: '정제수 대신 병풀잎수 100% 함유로 피부 진정과 보습에 도움' },
        { k: 'PDLLA', v: 'Poly-D,L-Lactic Acid 성분이 콜라겐 생성을 촉진하여 탄력·밀도·볼륨 개선' },
        { k: '보르피린 10000ppm', v: '고함량 보르피린이 탄탄한 피부 탄력과 볼륨 개선에 도움' },
        { k: '금사연동지추출물', v: '귀한 금사연동지 추출물이 피부에 영양을 공급해 맑고 빛나는 피부로' },
        { k: '5종 펩타이드', v: '5가지 펩타이드가 피부 탄력과 장벽 강화에 도움' },
        { k: '알부틴', v: '피부를 환하고 맑게 가꾸어 균일한 피부톤으로 케어' }
      ],
      howto: [
        { step: 'STEP 1', v: '세안 후 토너 사용 단계에서 눈을 감고 얼굴에서 20cm 정도 떨어뜨려 분사합니다.' },
        { step: 'STEP 2', v: '가볍게 두드려 흡수시켜 피부에 충분히 스며들 수 있도록 도와줍니다.' },
        { step: 'STEP 3', v: '이후 에센스/크림 단계에서 마무리하여 더욱 촉촉하고 탄력있는 피부로 케어합니다.' }
      ]
    }
  },
  {
    id: 2, slug: 'hydro-volume-boosting-spicule-balm', detailSlug: 'balm',
    name: 'Hydro Volume Boosting Spicule Balm',
    nameKo: '하이드로 볼륨 부스팅 스피큘 밤',
    size: '15g',
    category: 'skincare', cat_label: '스피큘 밤',
    tags: ['HERO', 'NEW'],
    bullets: ['집중 주름 케어', '팔자·목·입술 볼륨', 'Micro Spicule 함유'],
    price: 68000, salePrice: 68000,
    image: U('1611080626919-7cf5a9dbab12', 900),
    hoverImage: U('1608248543803-ba4f8c70ae0b', 900),
    localImage: 'oravin-balm-main.png',
    localHover: 'oravin-balm-hover.png',
    desc: '집중 주름·볼륨 케어 — Micro Spicule 흡수 시스템 발룸',
    detail: 'ORAVIN의 시그니처 집중 케어 발룸. Micro Spicule이 피부 표면에 미세한 채널을 만들어 PDLLA와 Volufiline 성분을 깊게 전달해드려요. 팔자, 목주름, 입술 볼륨이 신경 쓰이는 부위에 콕 짚어 발라보세요. 매일의 홈케어에서 시술 직후의 매끄러운 결을 경험하실 수 있어요.',
    options: [{ name: '15g 단품', addPrice: 0 }],
    detailContent: {
      heroTitle: '무너진 탄력을 끌어올리는<br><em>집중 스피큘 볼륨 케어</em>',
      heroSub: '오라빈 하이드로 볼륨부스팅 스피큘 밤',
      heroEn: 'ORAVIN HYDRO VOLUME BOOSTING SPICULE BALM',
      spotlight: {
        eyebrow: '미세 스피큘 전달 시스템',
        title: '피부 깊숙이,<br>정확하게 전달됩니다',
        body: '300μm 이하의 미세 스피큘이 피부 표면을 부드럽게 자극하여 유효 성분을 깊숙이 전달합니다.',
        points: [
          { k: '미세 스피큘', v: '300μm 이하의 미세 스피큘이 피부 표면을 부드럽게 자극' },
          { k: '전달 & 침투', v: '유효 성분을 피부 깊숙이 전달하여 탄력 케어' },
          { k: '자연스러운 재생', v: '피부 스스로 힘을 키워 건강하고 탄탄하게' }
        ],
        quote: '스피큘은 피부에 미세한 자극을 주어 피부 본연의 재생 능력을 활성화합니다.'
      },
      benefits: [
        { k: '탄력 & 리프팅', v: '무너진 탄력을 끌어올려 매끄럽고 탄탄한 피부로' },
        { k: '광채 & 생기', v: '피부 속부터 차오르는 맑고 건강한 광채' },
        { k: '보습 & 진정', v: '촉촉한 보습막이 피부를 편안하게 케어' }
      ],
      features: [
        { k: '집중 탄력 케어', v: '무너진 부위에 탄탄한 볼륨 선사' },
        { k: '리프팅 & 볼륨', v: '스피큘의 자극으로 탄력과 볼륨 개선' },
        { k: '데일리 스킨부스터', v: '집에서 간편하게 전문가급 케어' }
      ],
      areas: [
        { k: '팔자 주름', v: '깊어진 팔자 라인에 탄탄한 볼륨을 채워 생기 있는 인상으로 케어' },
        { k: '눈가 & 눈 밑', v: '얇은 눈가, 꺼진 눈 밑을 매끄럽고 탄력 있게 정돈하여 생기 부여' },
        { k: '턱선 & 볼', v: '무너진 턱선과 볼 볼륨을 탄력 있게 탄탄한 라인으로 가꿔줍니다' },
        { k: '이마 & 미간', v: '이마의 빈틈과 미간 주름을 매끄럽게 정돈하여 탄탄하고 생기 있는 피부로' }
      ],
      ingredients: [
        { k: 'PDLLA', v: '콜라겐 생성을 촉진하여 피부 밀도와 탄력을 개선' },
        { k: '스피큘', v: '300μm 이하의 미세 스피큘이 피부 깊숙이 유효 성분을 전달하고 재생을 도움' },
        { k: '보르피린 10000ppm', v: '탄력과 볼륨 개선에 도움을 주며 피부를 탱탱하게 케어' },
        { k: '5중 펩타이드 Complex', v: '피부 장벽을 강화하고 탄력과 리프팅 케어에 도움' },
        { k: '금사연동지 추출물', v: '피부 영양 공급과 보습에 도움을 주어 생기 있고 건강한 피부로' }
      ],
      howto: [
        { step: 'HOW TO USE', v: '스킨케어 마지막 단계에서 집중 케어가 필요한 부위에 내용물을 적당량 도포하여 부드럽게 롤링해 흡수시켜 줍니다.' },
        { step: 'TIP', v: '저녁 사용 시 더욱 효과적이며, 꾸준히 사용할수록 탄력 있고 볼륨감 있는 피부로 가꾸어 줍니다.' }
      ]
    }
  },
  {
    id: 3, slug: 'oravin-signature-duo', detailSlug: 'set',
    name: 'ORAVIN Signature Duo',
    nameKo: '하이드로 리제네 에어앰플 & 스피큘밤 2종 세트',
    size: 'Ampoule 99.9ml + Balm 15g',
    category: 'set', cat_label: '시그니처 듀오',
    tags: ['SET', 'BEST'],
    bullets: ['데일리 + 집중 케어', '풀 루틴 완성', '앰플 + 스피큘 밤'],
    price: 206000, salePrice: 206000,
    image: U('1612817288484-6f916006741a', 900),
    hoverImage: U('1583209814683-c023dd293cc6', 900),
    localImage: 'oravin-set-main.png',
    localHover: 'oravin-set-hover.png',
    desc: '앰플 + 스피큘 발룸 시그니처 듀오 — 데일리부터 집중 케어까지',
    detail: 'Hydro Regene Air Ampoule 99.9ml + Hydro Volume Boosting Spicule Balm 15g 2종 세트예요. 매일의 데일리 케어부터 부위별 집중 케어까지, ORAVIN의 모든 루틴을 한번에 만나보세요.',
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
