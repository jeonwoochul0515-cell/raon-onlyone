// 3대 핵심 서비스 - 통합 물류 / 컨설팅 / OEM·PB
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
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <article className="group grid gap-8 rounded-3xl border border-espresso-900/10 bg-cream-100/40 p-8 transition-all duration-500 hover:border-espresso-900/30 hover:bg-cream-100 lg:grid-cols-[auto_1fr_1fr] lg:p-12">
                <div className="font-display text-6xl text-espresso-900/15 lg:text-7xl">
                  0{i + 1}
                </div>
                <div className="lg:max-w-md">
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
                <ul className="grid gap-3 self-center border-l border-espresso-900/10 pl-8">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-start gap-3 text-sm text-espresso-800">
                      <span className="mt-2 inline-block h-1 w-1 rounded-full bg-caramel-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
