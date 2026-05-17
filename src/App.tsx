// 루트 컴포넌트 - Lenis smooth scroll 활성화 + 섹션 조립
import { useEffect } from 'react'
import Lenis from 'lenis'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { WhyUs } from '@/sections/WhyUs'
import { Services } from '@/sections/Services'
import { Products } from '@/sections/Products'
import { Infrastructure } from '@/sections/Infrastructure'
import { Contact } from '@/sections/Contact'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Products />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
