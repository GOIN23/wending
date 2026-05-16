'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { triggerPlay, triggerPreunlock } from '@/lib/audioStore'
import { triggerVideoStart } from '@/lib/videoStore'

const BUTTON_SIZE = 56

export default function LockScreen() {
  const [hidden, setHidden] = useState(false)
  const [unlocking, setUnlocking] = useState(false)
  const [trackWidth, setTrackWidth] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef<number | null>(null)
  const dragXRef = useRef(0)
  const isDragging = useRef(false)

  // Блокируем скролл страницы пока лок-скрин виден
  useEffect(() => {
    const html = document.documentElement
    html.style.overflow = 'hidden'
    html.style.height = '100%'
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
    return () => {
      html.style.overflow = ''
      html.style.height = ''
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [])

  useEffect(() => {
    if (hidden) {
      const html = document.documentElement
      html.style.overflow = ''
      html.style.height = ''
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [hidden])

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.offsetWidth)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const maxDrag = Math.max(0, trackWidth - BUTTON_SIZE)

  const unlock = useCallback(() => {
    if (unlocking) return
    setUnlocking(true)
    triggerVideoStart()
    triggerPlay()
    setTimeout(() => setHidden(true), 700)
  }, [unlocking])

  const moveTo = (x: number) => {
    const clamped = Math.max(0, Math.min(x, maxDrag))
    dragXRef.current = clamped
    if (buttonRef.current) {
      buttonRef.current.style.transition = 'none'
      buttonRef.current.style.transform = `translateX(${clamped}px)`
    }
  }

  const snapBack = () => {
    dragXRef.current = 0
    if (buttonRef.current) {
      buttonRef.current.style.transition = 'transform 0.4s ease'
      buttonRef.current.style.transform = 'translateX(0px)'
    }
  }

  const onDragEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    if (dragXRef.current >= maxDrag * 0.75) {
      unlock()
    } else {
      snapBack()
    }
  }

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    triggerPreunlock()
    isDragging.current = true
    startXRef.current = e.touches[0].clientX
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || startXRef.current === null) return
    moveTo(e.touches[0].clientX - startXRef.current)
  }
  const onTouchEnd = () => onDragEnd()

  // Mouse (desktop)
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startXRef.current = e.clientX
  }

  // These go on the parent overlay so mouse doesn't escape the button
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || startXRef.current === null) return
    moveTo(e.clientX - startXRef.current)
  }
  const onMouseUp = () => onDragEnd()

  if (hidden) return null

  const NUM_DOTS = 7

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-between py-16 px-6 overflow-hidden select-none"
      style={{
        opacity: unlocking ? 0 : 1,
        transition: unlocking ? 'opacity 0.7s ease' : 'none',
        pointerEvents: unlocking ? 'none' : undefined,
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#1C0A06]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Top spacer */}
      <div />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5">
        <p className="font-montserrat text-xl sm:text-2xl tracking-[0.6em] uppercase text-white font-light">
          Wedding Day
        </p>

        <p className="font-cormorant font-light text-5xl sm:text-6xl text-white leading-none">
          01/10/<strong className="font-semibold">2026</strong>
        </p>

        <p className="font-script text-4xl sm:text-5xl text-white/90 leading-tight">
          Георгий и Полина
        </p>

        <p className="font-montserrat text-xs sm:text-sm tracking-[0.25em] text-white/60 mt-2">
          разблокировать приглашение&nbsp;🤍
        </p>
      </div>

      {/* Slider */}
      <div className="relative z-10 w-full max-w-[280px]">
        <div
          ref={trackRef}
          className="relative flex items-center"
          style={{ height: BUTTON_SIZE }}
        >
          {/* Track dots */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 px-16">
            {Array.from({ length: NUM_DOTS }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/35" />
            ))}
          </div>

          {/* Target circle — right */}
          <div
            className="absolute right-0 rounded-full border border-white/40"
            style={{ width: BUTTON_SIZE, height: BUTTON_SIZE }}
          />

          {/* Draggable button — left */}
          <div
            ref={buttonRef}
            className="absolute left-0 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{
              width: BUTTON_SIZE,
              height: BUTTON_SIZE,
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.35)',
            }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
