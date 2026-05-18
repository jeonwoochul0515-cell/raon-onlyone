// 상담 문의 CTA 섹션 - 큰 카피 + 연락처 카드
import { Reveal } from '@/components/Reveal'
import { company } from '@/data/company'

export function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-40">
      <div className="container-x">
        <Reveal>
          <span className="pill">Get in touch</span>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(2rem,5.5vw,5rem)] font-medium leading-[1] tracking-tight text-espresso-950">
            지금의 준비가
            <br />
            내일의 <span className="italic text-gradient-gold">경쟁력</span>입니다.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-espresso-800/85">
            라온트레이더스 · 온리원커피와 함께할 프랜차이즈 본사·가맹점주를 환영합니다.
            가장 빠른 응답은 <strong className="font-semibold text-espresso-900">카카오톡 상담</strong>이며, 전화·이메일도 함께 운영하고 있습니다.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.05}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-espresso-950 p-10 text-cream-50 grain lg:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(212,165,116,0.25),transparent_55%)]" />
              <div className="relative">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400">
                  Direct Contact
                </span>
                <h3 className="mt-6 font-display text-4xl lg:text-5xl">
                  대표 {company.ceo}
                  <span className="ml-3 text-sm font-normal tracking-widest text-cream-200/60">
                    CEO · {company.ceoEn}
                  </span>
                </h3>
                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                  <ContactRow label="카카오톡 채널" value="@라온트레이더스" href={company.kakaoChannel} external />
                  <ContactRow label="대표 번호" value={company.phone} href={`tel:${company.phone.replace(/-/g, '')}`} />
                  <ContactRow label="Office" value={company.office} href={`tel:${company.office.replace(/-/g, '')}`} />
                  <ContactRow label="이메일" value={company.email} href={`mailto:${company.email}`} />
                </div>
                <div className="mt-12 flex flex-wrap gap-3">
                  <a
                    href={company.kakaoChat}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FFEB3B]"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 3C6.477 3 2 6.5 2 10.84c0 2.78 1.86 5.22 4.66 6.6-.18.6-.66 2.2-.76 2.55-.12.42.16.42.34.31.14-.08 2.21-1.5 3.1-2.1.86.12 1.74.18 2.66.18 5.52 0 10-3.5 10-7.84S17.52 3 12 3z" />
                    </svg>
                    카톡 상담 시작
                  </a>
                  <a href={`mailto:${company.email}`} className="btn-ghost border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-espresso-950">
                    이메일
                  </a>
                  <a href={`tel:${company.phone.replace(/-/g, '')}`} className="btn-ghost border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-espresso-950">
                    전화
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid h-full gap-6">
              <div className="rounded-3xl border border-espresso-900/10 bg-cream-100/60 p-8">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-caramel-600">
                  Headquarters
                </span>
                <p className="mt-4 font-display text-2xl text-espresso-950">
                  {company.hqLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-espresso-700">
                  {company.hq}
                </p>
                <a
                  href={`https://map.naver.com/v5/search/${encodeURIComponent(company.hq)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-espresso-900 hover:text-caramel-600"
                >
                  지도 보기
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InfoCard label="설립" value={company.founded.replace('2017년 4월 3일', '2017.04.03')} />
                <InfoCard label="조직" value={company.org} />
                <InfoCard label="사업자번호" value={company.businessNumber} />
                <InfoCard label="법인등록" value={company.registrationNumber} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href, external }: { label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <>
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-200/50">
        {label}
      </span>
      <span className="mt-1.5 block text-base font-medium tracking-wide">{value}</span>
    </>
  )
  return href ? (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="group block transition-colors hover:text-gold-400"
    >
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-espresso-900/10 bg-cream-50 p-5">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-caramel-600">
        {label}
      </span>
      <p className="mt-2 text-sm font-medium text-espresso-950">{value}</p>
    </div>
  )
}
