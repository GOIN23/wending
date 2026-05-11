'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

const slides = Array.from({ length: 10 }, (_, i) => `/images/dresscode${i + 1}.jpg`)

export default function DressCodeSlider() {
  const [current, setCurrent] = useState(0)
  const [imgError, setImgError] = useState<Record<number, boolean>>({})
  const touchStartX = useRef<number | null>(null)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  // Рендерим текущий + соседние слайды чтобы они уже были загружены
  const visible = new Set([
    current,
    (current + 1) % slides.length,
    (current - 1 + slides.length) % slides.length,
  ])

  return (
    <div className="relative w-full max-w-lg mx-auto mt-12">
      {/* Photo */}
      <div
        className="relative aspect-[3/4] sm:aspect-[4/5] rounded-sm overflow-hidden bg-[#E8D9C0] cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {imgError[current] ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#E8D9C0] to-[#D4C4A8]">
            <svg className="w-12 h-12 text-[#C9913A]/40 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-montserrat text-[10px] tracking-widest uppercase text-[#1C0A06]/30">
              фото {current + 1}
            </span>
          </div>
        ) : (
          slides.map((src, i) =>
            visible.has(i) && !imgError[i] ? (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-300"
                style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
              >
                <Image
                  src={src}
                  alt={`dress code фото ${i + 1}`}
                  fill
                  className="object-cover"
                  onError={() => setImgError((e) => ({ ...e, [i]: true }))}
                />
              </div>
            ) : null
          )
        )}

        {/* Arrow left */}
        <button
          onClick={prev}
          aria-label="Предыдущее фото"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#1C0A06] hover:bg-white transition-colors shadow-sm z-10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Arrow right */}
        <button
          onClick={next}
          aria-label="Следующее фото"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#1C0A06] hover:bg-white transition-colors shadow-sm z-10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Фото ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-4 h-1.5 bg-[#C9913A]'
                : 'w-1.5 h-1.5 bg-[#C9913A]/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
