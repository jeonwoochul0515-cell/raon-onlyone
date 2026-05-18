// RAON JENA 24종 라인업 - 브랜드 인트로 + 카테고리 탭 + 카테고리별 큰 비주얼 + 제품 그리드
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '@/components/Reveal'
import { products, productCategories, type ProductCategory } from '@/data/products'
import jenaHero from '@/assets/images/raon-jena-hero.webp'

export function Products() {
  const [active, setActive] = useState<ProductCategory>('latte')

  const filtered = useMemo(
    () => products.filter(p => p.category === active),
    [active]
  )
  const activeCat = useMemo(
    () => productCategories.find(c => c.id === active)!,
    [active]
  )

  return (
    <section id="products" className="relative overflow-hidden bg-cream-100 py-32 lg:py-40">
      <div className="container-x">
        {/* 브랜드 인트로 */}
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-espresso-950">
              <img
                src={jenaHero}
                alt="RAON JENA 키 비주얼"
                className="aspect-[4/5] w-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-cream-50 lg:p-10">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
                  Our Brand
                </div>
                <h3 className="mt-2 font-display text-5xl font-medium tracking-tight lg:text-6xl">
                  RAON JENA
                </h3>
                <p className="mt-4 max-w-sm text-sm text-cream-200/80">
                  가루 안의 깊은 맛을 담아낸 자체 OEM 브랜드. 음료 베이스부터 디저트까지 21종 + 스무디 3종 라인업.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="pill">Product Lineup · 24 SKU</span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] text-espresso-950">
              브랜드의 시그니처가 되는,
              <br />
              <span className="italic">검증된 라인업</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-espresso-700">
              프랜차이즈 본사가 단독 PB를 의뢰하기 전, 검증된 RAON JENA 라인업으로 시즌 메뉴를 빠르게 운영할 수 있습니다.
              모든 제품은 일관된 QC를 거쳐 전국 거점에서 동일한 품질로 공급됩니다.
            </p>
          </Reveal>
        </div>

        {/* 카테고리 탭 */}
        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-wrap gap-2">
            {productCategories.map(cat => {
              const isActive = active === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-espresso-950 text-cream-50'
                      : 'bg-cream-50 text-espresso-800 hover:bg-cream-200'
                  }`}
                >
                  {cat.label}
                  <span className="ml-2 text-[10px] tracking-wider opacity-60">
                    {products.filter(p => p.category === cat.id).length}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* 카테고리별 큰 비주얼 + 제품 리스트 */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`cover-${active}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl bg-espresso-950"
            >
              <img
                src={activeCat.cover}
                alt={`${activeCat.label} 카테고리 비주얼`}
                className="aspect-[5/4] w-full object-cover lg:aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-cream-50 lg:p-10">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
                  {activeCat.en}
                </div>
                <h3 className="mt-2 font-display text-3xl font-medium tracking-tight lg:text-5xl">
                  {activeCat.label}
                </h3>
                <p className="mt-3 max-w-sm text-sm text-cream-200/85">
                  {activeCat.tone}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="overflow-hidden rounded-3xl border border-espresso-900/10 bg-cream-50">
            <AnimatePresence mode="wait">
              <motion.ul
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2"
              >
                {filtered.map((p, idx) => (
                  <motion.li
                    key={p.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.4 }}
                    className="group flex items-center justify-between gap-4 border-b border-espresso-900/8 px-5 py-4 last:border-b-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0 sm:odd:border-r"
                  >
                    <span className="text-sm font-medium text-espresso-950">{p.name}</span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-caramel-600 opacity-0 transition-opacity group-hover:opacity-100">
                      New →
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
