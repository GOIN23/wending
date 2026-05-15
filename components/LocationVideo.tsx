'use client'

import { useRef, useState } from 'react'
import { pauseMusicForVideo, resumeMusicAfterVideo } from '@/lib/audioStore'

export default function LocationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    const v = videoRef.current
    if (!v) return
    pauseMusicForVideo()
    v.play().then(() => setPlaying(true)).catch(() => {})
  }

  const handlePause = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    setPlaying(false)
    resumeMusicAfterVideo()
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
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Dark vignette edges */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 60px rgba(28,10,6,0.25)' }}
        />

        {/* Большая кнопка Play — пока видео не запущено */}
        {!playing && (
          <button
            onClick={handlePlay}
            aria-label="Воспроизвести"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="w-16 h-16 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/30 text-white/90 transition-all duration-200 active:bg-black/60 hover:bg-black/60">
              <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}

        {/* Маленькая кнопка Pause — пока видео играет */}
        {playing && (
          <button
            onClick={handlePause}
            aria-label="Пауза"
            className="absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-black/50 hover:text-white transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
