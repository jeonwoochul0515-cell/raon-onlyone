// 핵심 가치 - PPT 슬라이드 3
export type CoreValue = {
  id: string
  ko: string
  en: string
  title: string
  description: string
}

export const coreValues: CoreValue[] = [
  {
    id: 'coexistence',
    ko: '공존',
    en: 'Coexistence',
    title: '인생 동반 파트너',
    description:
      '라온트레이더스와 함께하는 모든 업체와 꾸준히 동행하는 인생 동반 파트너로 나아갑니다.',
  },
  {
    id: 'success',
    ko: '성공',
    en: 'Success',
    title: '동등한 관계, 함께 성장',
    description:
      '동등한 관계에서 꾸준한 성공을 목표로, 합리적인 물류 수수료와 프랜차이즈 특화 제품으로 함께 성장합니다.',
  },
  {
    id: 'change',
    ko: '변화',
    en: 'Change',
    title: '이유 있는 가치',
    description:
      '실패를 두려워하지 않고 새로운 도전으로 이유 있는 가치를 만들며, 빠른 변화에 신속히 대응합니다.',
  },
]
