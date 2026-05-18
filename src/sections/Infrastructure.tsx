// 3개 거점 (부산/김해/경기) + 트럭 + 창고 인테리어 듀얼 비주얼
import { Reveal } from '@/components/Reveal'
import { hubs } from '@/data/hubs'
import truck from '@/assets/images/truck.webp'
import warehouseInterior from '@/assets/images/warehouse-interior.webp'

export function Infrastructure() {
  return (
    <section id="infra" className="relative overflow-hidden bg-espresso-950 py-32 text-cream-50 lg:py-40 grain">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(212,165,116,0.18),transparent_55%)]" />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Reveal>
            <span className="pill border-cream-50/15 bg-cream-50/5 text-cream-50/80">
              Nationwide Network
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.05]">
              부산에서 시작해
              <br />
              <span className="italic text-gradient-gold">전국으로 닿는</span> 물류망.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-cream-200/75 lg:text-right">
              부산 본사를 중심으로 김해·경기 거점을 운영하며 전국 어디서나 안정적인 배송을 보장합니다.
              지역 밀착형 인프라로 빠르고 정확한 납품을 실현합니다.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          <div className="grid gap-4">
            {hubs.map((hub, i) => (
              <Reveal key={hub.id} delay={i * 0.08}>
                <article className="group flex items-center justify-between gap-6 rounded-2xl border border-cream-50/10 bg-cream-50/[0.03] px-6 py-6 transition-all duration-500 hover:border-gold-400/40 hover:bg-cream-50/[0.06] lg:px-8">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-display text-3xl font-medium">
                          {hub.city}
                        </h3>
                        <span className="text-sm text-cream-200/60">{hub.region}</span>
                      </div>
                      <p className="mt-2 max-w-md text-sm text-cream-200/70">{hub.description}</p>
                    </div>
                  </div>
                  <span className="hidden text-xs uppercase tracking-[0.2em] text-cream-200/60 sm:inline-block">
                    {hub.role}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4">
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-3xl border border-cream-50/10">
                <img
                  src={truck}
                  alt="라온트레이더스 물류 차량"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
                    Logistics in motion
                  </div>
                  <p className="mt-1 font-display text-xl">
                    무중단 서비스를 약속합니다.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="relative overflow-hidden rounded-3xl border border-cream-50/10">
                <img
                  src={warehouseInterior}
                  alt="물류센터 내부"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
                    Distribution Center
                  </div>
                  <p className="mt-1 font-display text-xl">
                    정밀하게 관리되는 재고.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
