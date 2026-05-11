'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const target = new Date('2026-10-01T00:00:00')
  const now = new Date()
  const diff = target.getTime() - now.getTime()

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

const labels = ['дней', 'часов', 'минут', 'секунд']

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const values = [time.days, time.hours, time.minutes, time.seconds]

  return (
    <div className="my-10 sm:my-14">
      {/* Label */}
      <p className="font-montserrat text-[10px] sm:text-xs tracking-[0.45em] uppercase text-[#3C1C0C]/50 text-center mb-6">
        до нашей свадьбы осталось
      </p>

      {/* Timer blocks */}
      <div className="flex items-start justify-center gap-2 sm:gap-4 md:gap-6">
        {values.map((val, i) => (
          <div key={i} className="flex items-start gap-2 sm:gap-4 md:gap-6">
            <div className="text-center">
              <div className="relative">
                {/* Background card */}
                <div className="bg-[#1C0A06] rounded-md sm:rounded-lg px-3 sm:px-5 md:px-7 py-3 sm:py-4 min-w-[56px] sm:min-w-[72px] md:min-w-[90px]">
                  <span className="font-cormorant font-light text-3xl sm:text-4xl md:text-5xl text-gold leading-none block">
                    {mounted ? pad(val) : '00'}
                  </span>
                </div>
                {/* Gold border accent */}
                <div className="absolute inset-0 rounded-md sm:rounded-lg border border-gold/20 pointer-events-none" />
              </div>
              <p className="mt-2 font-montserrat text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#3C1C0C]/50">
                {labels[i]}
              </p>
            </div>

            {/* Colon separator (except after last) */}
            {i < 3 && (
              <span className="font-cormorant text-2xl sm:text-3xl text-gold/40 mt-2 sm:mt-3 leading-none select-none">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
