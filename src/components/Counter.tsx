// 뷰포트 진입 시 0에서 target까지 카운트업
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type Props = {
  to: number
  duration?: number
  suffix?: string
  className?: string
}

export function Counter({ to, duration = 1.8, suffix = '', className }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let rafId = 0
    const start = performance.now()
    const tick = (t: number) => {
      const elapsed = (t - start) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(to * eased))
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  )
}
