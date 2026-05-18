// 회사 소개 + 핵심 가치(공존/성공/변화) + 카페 분위기 사이드 비주얼
import { Reveal } from '@/components/Reveal'
import { coreValues } from '@/data/values'
import { company } from '@/data/company'
import cafeBar from '@/assets/images/stock/cafe-bar.webp'
import coffeeBeans from '@/assets/images/stock/coffee-beans.webp'

export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <span className="pill">About</span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] text-espresso-950">
              카페재료 유통,
              <br />
              <span className="italic">하나의 기준</span>이 되다.
            </h2>
            <div className="mt-10 hidden overflow-hidden rounded-3xl bg-espresso-950 lg:block">
              <img
                src={cafeBar}
                alt="카페 바 인테리어"
                className="aspect-[4/5] w-full object-cover opacity-95"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-espresso-800/90">
              {company.name}와 온리원커피는 2017년 부산에서 시작해 오늘날 전국 3개 거점 기반 통합 물류 기업으로 성장했습니다.
              단순 유통을 넘어 프랜차이즈 본사의 제품 경쟁력을 함께 설계하고, 가맹점주의 수익을 지키는 파트너로 동행합니다.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 border-y border-espresso-900/10 py-8">
              <Detail label="설립" value={company.founded} />
              <Detail label="대표이사" value={`${company.ceo} · ${company.ceoEn}`} />
              <Detail label="본사" value={company.hq} />
              <Detail label="조직" value={company.org} />
            </div>
            <p className="mt-8 text-sm leading-relaxed text-espresso-700">
              "다양한 운영 Know-How로 고객 Needs에 기여하는 카페물류 기업" — 3PL·4PL 물류, 제품 컨설팅, OEM/PB 등 다양한 영역을 운영하며
              고객이 요구하는 어떠한 서비스도 <em className="italic text-espresso-900">One-Stop</em>으로 처리합니다.
            </p>
            <div className="mt-10 overflow-hidden rounded-3xl bg-espresso-950">
              <img
                src={coffeeBeans}
                alt="커피 한 잔과 원두"
                className="aspect-[16/9] w-full object-cover opacity-95"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <span className="pill">Core Values</span>
                <h3 className="mt-5 font-display text-3xl font-medium text-espresso-950 sm:text-4xl">
                  세 가지 가치, 하나의 약속
                </h3>
              </div>
              <span className="hidden text-xs uppercase tracking-[0.25em] text-espresso-600 sm:block">
                Coexistence · Success · Change
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.id} delay={0.1 + i * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-espresso-900/10 bg-cream-100/60 p-8 transition-all duration-500 hover:border-espresso-900/30 hover:bg-cream-100">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-caramel-600">
                      0{i + 1} · {v.en}
                    </span>
                    <span className="font-display text-5xl text-espresso-900/10 transition-colors duration-500 group-hover:text-caramel-500/40">
                      {v.ko[0]}
                    </span>
                  </div>
                  <h4 className="mt-10 font-display text-3xl text-espresso-950">
                    {v.ko}
                  </h4>
                  <p className="mt-2 text-sm font-medium text-espresso-700">{v.title}</p>
                  <p className="mt-5 text-sm leading-relaxed text-espresso-700/85">
                    {v.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.22em] text-caramel-600">{label}</dt>
      <dd className="mt-1.5 text-sm text-espresso-900">{value}</dd>
    </div>
  )
}
