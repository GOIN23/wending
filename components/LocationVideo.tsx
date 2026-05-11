'use client'

import { useRef, useState, useEffect } from 'react'

export default function LocationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  // Start loading + playing only when the video scrolls into view
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.load()
          const tryPlay = () => video.play().catch(() => {})
          video.addEventListener('canplay', tryPlay, { once: true })
          // Fallback: если canplay уже произошёл
          if (video.readyState >= 3) tryPlay()
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPaused(false) }
    else { v.pause(); setPaused(true) }
  }

  return (
    <div className="relative">
      {/* Decorative offset frame */}
      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full border border-gold/30 rounded-lg pointer-events-none" />

      <div className="relative aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3] rounded-lg overflow-hidden bg-[#3C1C0C]/30">
        <video
          ref={videoRef}
          src="/videos/location.mp4"
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Dark vignette edges */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 60px rgba(28,10,6,0.25)' }}
        />

        {/* Play/Pause button */}
        <button
          onClick={toggle}
          aria-label={paused ? 'Воспроизвести' : 'Пауза'}
          className="absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-black/50 hover:text-white transition-all duration-200 opacity-0 hover:opacity-100 focus:opacity-100 group-hover:opacity-100"
          style={{ opacity: paused ? 1 : undefined }}
        >
          {paused ? (
            <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
