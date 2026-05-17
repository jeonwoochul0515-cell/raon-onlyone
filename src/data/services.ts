// 3대 핵심 서비스 - PPT 슬라이드 6, 7, 10
export type Service = {
  id: string
  kicker: string
  title: string
  description: string
  bullets: string[]
}

export const services: Service[] = [
  {
    id: 'logistics',
    kicker: '01 · Integrated Logistics',
    title: '전국 통합 물류 운영',
    description:
      '부산·김해·경기 3개 거점을 중심으로 전국 어디서나 안정적인 물류 서비스를 제공합니다. 단순 배송을 넘어 통합 물류 운영 동력을 확보하고 있습니다.',
    bullets: [
      '3PL · 4PL 통합 운영 체계',
      '지역 밀착형 인프라로 빠르고 정확한 납품',
      '수주 · 현장 · 배송 · CS 전담 인력 운영',
      'One-Stop 통합 운영으로 Cost 절감',
    ],
  },
  {
    id: 'consulting',
    kicker: '02 · Brand Consulting',
    title: '프랜차이즈 제품 컨설팅',
    description:
      '본사의 제품 경쟁력을 높이는 합리적인 재료 선택을 지원합니다. 수익을 극대화할 수 있는 제품을 서칭하여 본사의 성장을 함께 설계합니다.',
    bullets: [
      '브랜드별 전담 조직 구성',
      '본사 수익 구조 분석 · 원가 개선',
      '점주 사입 예방 · 제품 라인업 설계',
      '시즌별 신제품 기획 지원',
    ],
  },
  {
    id: 'oem',
    kicker: '03 · OEM · PB',
    title: 'OEM · PB 자체 제품 공급',
    description:
      '자체 브랜드 RAON JENA로 21종 음료 베이스·라떼·파우더·프라페와 3종 스무디 라인업을 운영합니다. 본사 단독 PB 개발도 함께 진행합니다.',
    bullets: [
      'RAON JENA 24종 정규 라인업',
      '브랜드 단독 PB 제품 개발',
      '대량 OEM 생산 파트너 네트워크',
      '품질 관리 · QC 일관성 보장',
    ],
  },
]
