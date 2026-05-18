// 3대 핵심 서비스 - 통합 물류 / 컨설팅 / OEM·PB (서비스별 비주얼 포함)
import { Reveal } from '@/components/Reveal'
import { services } from '@/data/services'

export function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-40">
      <div className="container-x">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <span className="pill">Services</span>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.05] text-espresso-950">
                커피 한 잔이 매장에 닿기까지,
                <br />
                <span className="italic">우리가 책임지는 모든 것.</span>
              </h2>
            </div>
            <span className="hidden text-xs uppercase tracking-[0.25em] text-espresso-600 lg:block">
              Logistics · Consulting · OEM
            </span>
          </div>
        </Reveal>

        <div className="mt-20 space-y-6">
          {services.map((s, i) => {
            const reverse = i % 2 === 1
            return (
              <Reveal key={s.id} delay={i * 0.08}>
                <article
                  className={`group grid overflow-hidden rounded-3xl border border-espresso-900/10 bg-cream-100/40 transition-all duration-500 hover:border-espresso-900/30 hover:bg-cream-100 lg:grid-cols-[1fr_1.1fr]`}
                >
                  {/* 비주얼 */}
                  <div className={`relative aspect-[4/3] overflow-hidden bg-espresso-950 lg:aspect-auto ${reverse ? 'lg:order-2' : ''}`}>
                    <img
                      src={s.image}
                      alt={`${s.title} 비주얼`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-espresso-950/40 via-transparent to-transparent" />
                    <div className="absolute left-6 top-6 font-display text-6xl text-cream-50/85 lg:text-7xl">
                      0{i + 1}
                    </div>
                  </div>

                  {/* 콘텐츠 */}
                  <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1fr] lg:p-12">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.22em] text-caramel-600">
                        {s.kicker}
                      </div>
                      <h3 className="mt-3 font-display text-3xl font-medium text-espresso-950 lg:text-4xl">
                        {s.title}
                      </h3>
                      <p className="mt-5 text-sm leading-relaxed text-espresso-700/85">
                        {s.description}
                      </p>
                    </div>
                    <ul className="grid gap-3 self-center lg:border-l lg:border-espresso-900/10 lg:pl-8">
                      {s.bullets.map(b => (
                        <li key={b} className="flex items-start gap-3 text-sm text-espresso-800">
                          <span className="mt-2 inline-block h-1 w-1 rounded-full bg-caramel-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
