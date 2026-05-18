// 우하단 떠다니는 카카오톡 채널 상담 버튼
import { motion } from 'framer-motion'
import { company } from '@/data/company'

export function FloatingKakao() {
  return (
    <motion.a
      href={company.kakaoChat}
      target="_blank"
      rel="noreferrer"
      aria-label="카카오톡 채널로 상담 문의"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#FEE500] py-3 pl-3 pr-5 shadow-[0_10px_30px_-8px_rgba(254,229,0,0.55),0_4px_12px_-2px_rgba(0,0,0,0.18)] sm:bottom-8 sm:right-8"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#3C1E1E]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#FEE500" aria-hidden="true">
          <path d="M12 3C6.477 3 2 6.5 2 10.84c0 2.78 1.86 5.22 4.66 6.6-.18.6-.66 2.2-.76 2.55-.12.42.16.42.34.31.14-.08 2.21-1.5 3.1-2.1.86.12 1.74.18 2.66.18 5.52 0 10-3.5 10-7.84S17.52 3 12 3z"/>
        </svg>
      </span>
      <span className="text-sm font-bold tracking-tight text-[#3C1E1E]">
        카톡 상담
      </span>
    </motion.a>
  )
}
