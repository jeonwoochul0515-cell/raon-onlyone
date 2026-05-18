// RAON JENA 24종 제품 라인업 - PPT 슬라이드 12, 13
import product1 from '@/assets/images/product-1.webp'
import product2 from '@/assets/images/product-2.webp'
import product3 from '@/assets/images/product-3.webp'
import product4 from '@/assets/images/product-4.webp'
import baseImg from '@/assets/images/stock/espresso.webp'
import latteImg from '@/assets/images/stock/latte-art.webp'
import frappeImg from '@/assets/images/stock/dessert.webp'
import smoothieImg from '@/assets/images/stock/smoothie.webp'

export type ProductCategory = 'base' | 'latte' | 'frappe' | 'smoothie'

export type Product = {
  id: string
  category: ProductCategory
  name: string
  description?: string
  image?: string
}

export const productCategories: {
  id: ProductCategory
  label: string
  en: string
  cover: string
  tone: string
}[] = [
  { id: 'base', label: '음료 베이스', en: 'Beverage Base', cover: baseImg, tone: '깊고 진한 베이스로 메뉴의 기준을 세웁니다.' },
  { id: 'latte', label: '라떼 & 파우더', en: 'Latte & Powder', cover: latteImg, tone: '시그니처 라떼의 풍부한 질감을 구현합니다.' },
  { id: 'frappe', label: '프라페 & 디저트', en: 'Frappé & Dessert', cover: frappeImg, tone: '계절을 사로잡는 디저트성 메뉴 라인업.' },
  { id: 'smoothie', label: '스무디', en: 'Smoothie', cover: smoothieImg, tone: '과일 본연의 신선함을 그대로 담아냅니다.' },
]

export const products: Product[] = [
  // 음료 베이스
  { id: 'b-yogurt', category: 'base', name: '프리미엄 요거트' },
  { id: 'b-peach', category: 'base', name: '복숭아 아이스티' },
  { id: 'b-icetea', category: 'base', name: '아이스티 원액' },
  { id: 'b-coldbrew', category: 'base', name: '콜드브루' },

  // 라떼 & 파우더
  { id: 'l-dalgona', category: 'latte', name: '달고나 라떼 & 파우더', image: product2 },
  { id: 'l-melon', category: 'latte', name: '메론 라떼' },
  { id: 'l-banana', category: 'latte', name: '바나나 라떼' },
  { id: 'l-green', category: 'latte', name: '그린티 라떼', image: product2 },
  { id: 'l-purple', category: 'latte', name: '자색고구마 라떼' },
  { id: 'l-grain', category: 'latte', name: '곡물 라떼' },
  { id: 'l-black', category: 'latte', name: '흑임자 파우더' },
  { id: 'l-toffee', category: 'latte', name: '토피모카 파우더' },
  { id: 'l-cream', category: 'latte', name: '슈크림 파우더' },
  { id: 'l-base', category: 'latte', name: '프리미엄 베이스 파우더' },

  // 프라페 & 디저트
  { id: 'f-soda', category: 'frappe', name: '소다 프라페' },
  { id: 'f-mint', category: 'frappe', name: '그린민트 초코칩 프라페', image: product3 },
  { id: 'f-java', category: 'frappe', name: '더블 자바칩 프라페' },
  { id: 'f-cookie', category: 'frappe', name: '쿠키앤크림 밀크쉐이크' },
  { id: 'f-vanilla', category: 'frappe', name: '바닐라빈 밀크쉐이크' },
  { id: 'f-choco', category: 'frappe', name: '프리미엄 핫초코' },
  { id: 'f-coffee', category: 'frappe', name: '커피믹스' },

  // 스무디
  { id: 's-strawberry', category: 'smoothie', name: '딸기 스무디', image: product4 },
  { id: 's-mango', category: 'smoothie', name: '망고 스무디', image: product4 },
  { id: 's-blueberry', category: 'smoothie', name: '블루베리 스무디', image: product1 },
]
