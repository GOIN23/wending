'use client'

import { useState, useRef, useEffect } from 'react'
import { registerPlay } from '@/lib/audioStore'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const userPausedRef = useRef(false)

  useEffect(() => {
    const audio = new Audio('/music/wedding.mp3')
    audio.loop = true
    audio.preload = 'metadata'
    audioRef.current = audio

    // Если браузер прервал музыку (не пользователь) — возобновляем
    const onPause = () => {
      if (!userPausedRef.current) {
        audio.play().catch(() => {})
      }
    }
    audio.addEventListener('pause', onPause)

    // iOS Safari: разблокируем audio-контекст через нативный touchstart
    // (React делегирует события и теряет жест-контекст — нужен прямой listener)
    const silentUnlock = () => {
      audio.play().then(() => { audio.pause(); audio.currentTime = 0 }).catch(() => {})
    }
    document.addEventListener('touchstart', silentUnlock, { once: true, passive: true })

    registerPlay(() => {
      userPausedRef.current = false
      audio.currentTime = 0
      audio.play().then(() => setPlaying(true)).catch(() => {})
    })

    return () => {
      audio.removeEventListener('pause', onPause)
      document.removeEventListener('touchstart', silentUnlock)
      audio.pause()
      audio.src = ''
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      userPausedRef.current = true
      audio.pause()
      setPlaying(false)
    } else {
      userPausedRef.current = false
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <section className="py-16 sm:py-20 px-6 bg-[#1C0A06] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-gold/5" />
        <div className="absolute w-96 h-96 sm:w-[480px] sm:h-[480px] rounded-full border border-gold/5" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 sm:w-14 bg-gold/30" />
          <svg className="w-4 h-4 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z" />
          </svg>
          <div className="h-px w-8 sm:w-14 bg-gold/30" />
        </div>

        <p className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-white/80 leading-relaxed mb-2">
          Нажмите play и погрузитесь
        </p>
        <p className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-white/80 leading-relaxed mb-10">
          в атмосферу нашей любви
        </p>

        <button
          onClick={toggle}
          aria-label={playing ? 'Пауза' : 'Воспроизвести'}
          className="group relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-gold/40 hover:border-gold transition-colors duration-500 focus:outline-none"
        >
          {playing && (
            <span className="absolute inset-0 rounded-full border border-gold/20 animate-ping" />
          )}
          <span className="absolute inset-2 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300" />
          <span className="relative z-10 text-gold">
            {playing ? (
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-7 h-7 sm:w-8 sm:h-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
        </button>

        <p className="mt-5 font-montserrat text-[10px] tracking-[0.4em] uppercase text-white/30">
          {playing ? 'playing' : 'press to play'}
        </p>
      </div>
    </section>
  )
}
