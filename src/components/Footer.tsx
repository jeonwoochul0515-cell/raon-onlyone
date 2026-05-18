// 글로벌 푸터 - 연락처, 거점, 사업자 정보
import { company } from '@/data/company'

export function Footer() {
  return (
    <footer className="relative bg-espresso-950 text-cream-200 grain">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl text-cream-50">
              (주)라온트레이더스
              <span className="ml-2 text-sm tracking-[0.2em] text-gold-400/80">
                · ONLYWON COFFEE
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-200/70">
              프랜차이즈 커피 본사와 가맹점주의 편리성과 수익률에 집중하는 카페재료 유통 전문 기업.
              부산 본사를 중심으로 전국 3개 거점 통합 물류망을 운영합니다.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-cream-200/15 px-4 py-2 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="tracking-wider">전국 물류 운영중</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-gold-400">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={company.kakaoChat} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cream-50">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-gold-400">
                    <path d="M12 3C6.477 3 2 6.5 2 10.84c0 2.78 1.86 5.22 4.66 6.6-.18.6-.66 2.2-.76 2.55-.12.42.16.42.34.31.14-.08 2.21-1.5 3.1-2.1.86.12 1.74.18 2.66.18 5.52 0 10-3.5 10-7.84S17.52 3 12 3z" />
                  </svg>
                  카카오톡 채널
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/-/g, '')}`} className="hover:text-cream-50">
                  대표 {company.phone}
                </a>
              </li>
              <li>Office {company.office}</li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-cream-50">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-gold-400">Network</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {company.hubs.map(hub => (
                <li key={hub}>{hub}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-gold-400">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>대표이사 {company.ceo}</li>
              <li>설립 {company.founded}</li>
              <li>사업자 {company.businessNumber}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream-200/10 pt-8 text-xs text-cream-200/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} (주)라온트레이더스 · 온리원커피. All rights reserved.</p>
          <p className="tracking-wider">{company.hq}</p>
        </div>
      </div>
    </footer>
  )
}
