// 메인 Hero 섹션 - 풀스크린 비주얼, 카피, 통계 카운터
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import warehouse from '@/assets/images/warehouse.webp'
import { Counter } from '@/components/Counter'
import { company, stats } from '@/data/company'

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden bg-espresso-950 text-cream-50 grain">
      <motion.div className="absolute inset-0" style={{ y, scale, opacity }}>
        <img
          src={warehouse}
          alt=""
          className="h-full w-full object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/40 via-espresso-950/60 to-espresso-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,165,116,0.18),transparent_60%)]" />
      </motion.div>

      <div className="container-x relative z-10 flex min-h-[100svh] flex-col pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pill border-cream-50/15 bg-cream-50/5 text-cream-50/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          ONLYWON COFFEE × RAON TRADERS
        </motion.div>

        <div className="mt-10 flex-1 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.6rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-tight"
            >
              재료 하나가
              <br />
              <span className="italic text-gradient-gold">브랜드의 경쟁력</span>
              <br />
              입니다.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-cream-200/80"
            >
              {company.description}.
              <br className="hidden sm:block" />
              부산·김해·경기 거점 기반 전국 통합 물류와 OEM 라온제나 24종으로 브랜드의 성장을 함께 설계합니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#services" className="btn-primary bg-gold-400 text-espresso-950 hover:bg-gold-500">
                서비스 살펴보기
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#products" className="btn-ghost border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-espresso-950">
                RAON JENA 라인업
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-cream-50/10 border border-cream-50/10"
          >
            {stats.map(s => (
              <div key={s.label} className="bg-espresso-950/40 p-6 backdrop-blur">
                <div className="font-display text-4xl text-gold-400">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-cream-200/70">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 flex items-center justify-between border-t border-cream-50/10 pt-6 text-xs uppercase tracking-[0.25em] text-cream-200/50"
        >
          <span>Est. 2017 · Busan · Korea</span>
          <a href="#about" className="group flex items-center gap-3 hover:text-cream-50">
            Scroll
            <span className="relative inline-block h-px w-10 overflow-hidden bg-cream-200/30">
              <span className="absolute inset-y-0 left-0 w-1/2 bg-gold-400 animate-[marquee_3s_linear_infinite]" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
