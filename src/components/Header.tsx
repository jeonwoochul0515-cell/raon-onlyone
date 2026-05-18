// 글로벌 헤더 - 스크롤 시 글래스모피즘 적용, 모바일 메뉴 포함
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navItems } from '@/data/nav'
import { company } from '@/data/company'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/80 backdrop-blur-xl border-b border-espresso-900/8'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <a href="#top" className="group flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-espresso-900 text-cream-50">
            <span className="font-display text-base font-bold">R</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] uppercase tracking-[0.22em] text-espresso-600">
              RAON · ONLYWON
            </span>
            <span className="text-[15px] font-semibold text-espresso-900">
              (주)라온트레이더스
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-espresso-800 transition-colors hover:text-espresso-950"
            >
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-espresso-900 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        <a
          href={company.kakaoChat}
          target="_blank"
          rel="noreferrer"
          className="hidden btn-primary lg:inline-flex"
        >
          카톡 상담
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3C6.477 3 2 6.5 2 10.84c0 2.78 1.86 5.22 4.66 6.6-.18.6-.66 2.2-.76 2.55-.12.42.16.42.34.31.14-.08 2.21-1.5 3.1-2.1.86.12 1.74.18 2.66.18 5.52 0 10-3.5 10-7.84S17.52 3 12 3z" />
          </svg>
        </a>

        <button
          type="button"
          aria-label="메뉴 열기"
          className="grid h-10 w-10 place-items-center rounded-full border border-espresso-900/15 text-espresso-900 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-espresso-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.22em] text-cream-200">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="메뉴 닫기"
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream-50/20 text-cream-50"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <nav className="mt-16 flex flex-col gap-6">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.05 }}
                    className="font-display text-4xl text-cream-50 transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={company.kakaoChat}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FFEB3B]"
                >
                  카톡 상담
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 3C6.477 3 2 6.5 2 10.84c0 2.78 1.86 5.22 4.66 6.6-.18.6-.66 2.2-.76 2.55-.12.42.16.42.34.31.14-.08 2.21-1.5 3.1-2.1.86.12 1.74.18 2.66.18 5.52 0 10-3.5 10-7.84S17.52 3 12 3z" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-ghost border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-espresso-950"
                >
                  연락처 보기 →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
