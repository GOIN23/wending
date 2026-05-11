'use client'

import { useRef, useEffect, useState } from 'react'

export default function ParallaxQuote() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // На тач-устройствах (iOS/Android) параллакс вызывает лаг — отключаем
    const isTouch = window.matchMedia('(pointer: coarse)').matches

    const onScroll = () => {
      if (!sectionRef.current || !bgRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      if (!isTouch) {
        const offset = -rect.top * 0.35
        bgRef.current.style.transform = `translateY(${offset}px)`
      }
      if (rect.top < window.innerHeight * 0.75) setVisible(true)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Параллакс-фон */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-125 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: "url('/images/parallax.jpg')" }}
      />

      {/* Тёмный градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C0A06]/70 via-[#1C0A06]/50 to-[#1C0A06]/70" />

      {/* Контент */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
        }}
      >
        {/* Декоративный элемент сверху */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-12 sm:w-20 bg-gold/50" />
          <svg className="w-4 h-4 text-gold/70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
          </svg>
          <div className="h-px w-12 sm:w-20 bg-gold/50" />
        </div>

        {/* Цитата */}
        <blockquote className="font-cormorant italic font-light text-3xl sm:text-4xl md:text-5xl text-white leading-snug mb-8 text-glow">
          «Каждая история любви прекрасна,<br className="hidden sm:block" />
          но наша — любимая»
        </blockquote>

        {/* Имена */}
        <p className="font-montserrat text-xs sm:text-sm tracking-[0.5em] uppercase text-gold/80">
          Георгий &amp; Полина
        </p>

        {/* Декоративный элемент снизу */}
        <div className="flex items-center gap-3 mt-10">
          <div className="h-px w-8 bg-gold/30" />
          <div className="w-1 h-1 rounded-full bg-gold/50" />
          <div className="h-px w-16 bg-gold/50" />
          <div className="w-1 h-1 rounded-full bg-gold/50" />
          <div className="h-px w-8 bg-gold/30" />
        </div>
      </div>
    </section>
  )
}
