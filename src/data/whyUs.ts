// 4가지 차별점 - PPT 슬라이드 2
export type WhyUsItem = {
  id: string
  number: string
  title: string
  description: string
}

export const whyUs: WhyUsItem[] = [
  {
    id: 'expertise',
    number: '01',
    title: '커피재료 유통 전문성',
    description:
      '오랜 경험과 노하우를 바탕으로 프랜차이즈에 최적화된 재료를 선별·공급합니다. 단순 유통이 아닌, 브랜드에 맞는 재료 솔루션을 제공합니다.',
  },
  {
    id: 'logistics',
    number: '02',
    title: '전국 물류 인프라',
    description:
      '커피재료 유통에서 출발해 전국 물류까지 함께 성장·발전했습니다. 부산·김해·경기 거점을 통한 안정적인 전국 배송망을 보유합니다.',
  },
  {
    id: 'consulting',
    number: '03',
    title: '본사 수익 극대화 컨설팅',
    description:
      '프랜차이즈 본사의 제품 경쟁력을 높이는 합리적인 재료 선택을 지원합니다. 수익 창출을 극대화할 수 있는 제품을 서칭하여 본사의 성장을 함께 설계합니다.',
  },
  {
    id: 'protection',
    number: '04',
    title: '점주 사입 예방 & 제품 컨설팅',
    description:
      '점주들의 무분별한 사입을 예방하고, 제품 수익을 안전하고 단단하게 지킵니다. 본사 성장 시 커피 프랜차이즈 시장에서 우위를 선점할 수 있는 든든한 제품군을 구성합니다.',
  },
]
