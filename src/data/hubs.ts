// 3개 거점 정보 - PPT 슬라이드 7, 14
export type Hub = {
  id: string
  city: string
  region: string
  role: string
  description: string
}

export const hubs: Hub[] = [
  {
    id: 'busan',
    city: '부산',
    region: '금정',
    role: '본사 · 메인 물류센터',
    description:
      '온리원커피 물류센터 본부. 영남권 카페 본사·가맹점 통합 운영 거점.',
  },
  {
    id: 'gimhae',
    city: '김해',
    region: '경남',
    role: '중부 권역 허브',
    description:
      '경남·영남 일대 가맹점 배송 최적화 거점. 보관·재공급 신속 처리.',
  },
  {
    id: 'gwangju',
    city: '광주',
    region: '경기',
    role: '수도권 허브',
    description:
      '수도권·경기 일원 가맹점 대응. 당일·익일 배송 인프라 보유.',
  },
]
