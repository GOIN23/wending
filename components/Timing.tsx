import FadeIn from './FadeIn'
import Photo from './Photo'
import Countdown from './Countdown'

const events = [
  {
    time: '15:00',
    title: 'СБОР ГОСТЕЙ',
    side: 'right' as const,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-16 h-16 sm:w-20 sm:h-20">
        <path d="M22 8 L22 28 C22 36 28 42 32 44 C36 42 42 36 42 28 L42 8" />
        <path d="M18 8 L46 8" />
        <path d="M32 44 L32 54" />
        <path d="M24 54 L40 54" />
        <path d="M14 8 L14 20 C14 26 18 30 22 32" strokeDasharray="2 3" opacity="0.5" />
        <path d="M50 8 L50 20 C50 26 46 30 42 32" strokeDasharray="2 3" opacity="0.5" />
        <circle cx="22" cy="20" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="42" cy="20" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    time: '16:00',
    title: 'НАЧАЛО БАНКЕТА',
    side: 'left' as const,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-16 h-16 sm:w-20 sm:h-20">
        <circle cx="32" cy="32" r="18" />
        <circle cx="32" cy="32" r="13" strokeDasharray="2 3" opacity="0.4" />
        <path d="M14 32 L50 32" opacity="0.3" />
        <path d="M10 20 L10 44 M10 32 Q8 28 10 20" />
        <path d="M54 20 L54 44" />
        <path d="M51 20 L57 20 M51 26 L57 26 M51 32 L54 32" />
      </svg>
    ),
  },
  {
    time: '22:00',
    title: 'ЗАВЕРШЕНИЕ ВЕЧЕРА',
    side: 'right' as const,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-16 h-16 sm:w-20 sm:h-20">
        <path d="M32 10 L32 40" />
        <path d="M26 14 Q32 12 38 14" />
        <ellipse cx="32" cy="40" rx="8" ry="4" />
        <path d="M24 44 L40 44" />
        <path d="M26 48 L38 48" />
        <path d="M32 10 Q34 6 32 2 Q36 5 33 10" fill="currentColor" opacity="0.5" />
        <circle cx="48" cy="18" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="16" cy="22" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="52" cy="30" r="1" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
]

export default function Timing() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-cream-dark">
      {/* ── Header: title left + engagement photo right ── */}
      <div className="max-w-5xl mx-auto mb-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: title + date */}
          <FadeIn className="text-center md:text-left">
            <p className="font-montserrat text-xs sm:text-sm tracking-[0.5em] uppercase text-[#3C1C0C]/50 mb-1">
              Timing of
            </p>
            <h2 className="font-cormorant font-light text-5xl sm:text-6xl md:text-7xl text-burgundy mb-4">
              The Day
            </h2>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="h-px w-8 sm:w-12 bg-gold/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-8 sm:w-12 bg-gold/50" />
            </div>
            <p className="font-cormorant text-lg sm:text-xl text-[#3C1C0C]/60 tracking-widest mb-1">
              01 | october | 2026
            </p>
            <p className="font-montserrat text-xs tracking-[0.35em] uppercase text-[#3C1C0C]/40">
              friday
            </p>

            {/* Countdown lives here on desktop */}
            <div className="hidden md:block">
              <Countdown />
            </div>
          </FadeIn>

          {/* Right: engagement photo */}
          <FadeIn delay={150}>
            <div className="relative max-w-xs mx-auto md:max-w-none">
              {/* Decorative offset frame */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border border-gold/25 rounded-xl pointer-events-none" />
              <div className="gallery-item relative aspect-[2/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#0D1F2D] to-[#1C2C3C]">
                {/* Place your engagement photo at public/images/engagement.jpg */}
                <Photo src="/images/engagement.jpg" alt="Георгий и Полина" />
                {/* Subtle gold vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Countdown on mobile (below photo) */}
        <div className="md:hidden">
          <Countdown />
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto flex items-center gap-4 mb-12 sm:mb-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30" />
      </div>

      {/* ── Timeline events ── */}
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical connector line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <div className="flex flex-col gap-10 sm:gap-14">
          {events.map((event, i) => (
            <FadeIn key={event.time} delay={i * 150}>
              {/* Mobile layout */}
              <div className="md:hidden flex items-center gap-5">
                <div className="text-gold flex-shrink-0">{event.icon}</div>
                <div>
                  <p className="font-montserrat text-2xl sm:text-3xl tracking-[0.15em] text-burgundy font-light">
                    {event.time}
                  </p>
                  <p className="font-montserrat text-xs sm:text-sm tracking-[0.3em] text-[#3C1C0C]/70 mt-1">
                    {event.title}
                  </p>
                </div>
              </div>

              {/* Desktop alternating layout */}
              <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-6">
                {/* Left */}
                <div className="text-right">
                  {event.side === 'left' && (
                    <>
                      <p className="font-montserrat text-3xl tracking-[0.15em] text-burgundy font-light">
                        {event.time}
                      </p>
                      <p className="font-montserrat text-xs tracking-[0.3em] text-[#3C1C0C]/60 mt-1">
                        {event.title}
                      </p>
                    </>
                  )}
                </div>

                {/* Center dot + icon */}
                <div className="flex flex-col items-center gap-2">
                  <div className="timeline-dot" />
                  <div className="text-gold">{event.icon}</div>
                  <div className="timeline-dot" />
                </div>

                {/* Right */}
                <div className="text-left">
                  {event.side === 'right' && (
                    <>
                      <p className="font-montserrat text-3xl tracking-[0.15em] text-burgundy font-light">
                        {event.time}
                      </p>
                      <p className="font-montserrat text-xs tracking-[0.3em] text-[#3C1C0C]/60 mt-1">
                        {event.title}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
