// 4가지 차별점 섹션 - PPT 슬라이드 2 기반
import { Reveal } from '@/components/Reveal'
import { whyUs } from '@/data/whyUs'

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-espresso-950 py-32 text-cream-50 lg:py-40 grain">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,165,116,0.15),transparent_60%)]" />

      <div className="container-x relative">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <span className="pill border-cream-50/15 bg-cream-50/5 text-cream-50/80">
                Why Raon Traders
              </span>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.05]">
                단순 유통사가 아닌,
                <br />
                <span className="italic text-gradient-gold">커피 프랜차이즈 전문 파트너</span>
              </h2>
            </div>
            <p className="text-base leading-relaxed text-cream-200/70 lg:text-right">
              유통 전문성과 전국 물류 인프라, 그리고 본사·가맹점 모두의 수익을 지키는 컨설팅까지.
              <br />
              우리는 브랜드와 함께 길게 갑니다.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-cream-50/10 bg-cream-50/5 lg:grid-cols-2">
          {whyUs.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <article className="group relative h-full bg-espresso-950 p-10 transition-colors duration-500 hover:bg-espresso-900 lg:p-12">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400">
                    {item.number}
                  </span>
                  <span className="font-display text-7xl leading-none text-cream-50/5 transition-colors duration-500 group-hover:text-gold-400/20">
                    →
                  </span>
                </div>
                <h3 className="mt-12 font-display text-2xl font-medium text-cream-50 lg:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-200/70">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center font-display text-xl italic text-gold-400 lg:text-2xl">
            "재료 하나가 브랜드의 경쟁력입니다 — 라온트레이더스가 함께합니다."
          </p>
        </Reveal>
      </div>
    </section>
  )
}
