import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#1C0A06]">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover"
          style={{ objectPosition: 'center 65%' }}
        />
      </div>

      {/* Overlay: тёмный сверху, прозрачный у лиц */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(8,3,1,0.93) 0%, rgba(8,3,1,0.85) 20%, rgba(8,3,1,0.70) 40%, rgba(8,3,1,0.52) 56%, rgba(8,3,1,0.20) 68%, rgba(8,3,1,0.05) 78%, rgba(8,3,1,0.40) 100%)'
      }} />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 pt-8 sm:pt-10 w-full max-w-4xl mx-auto">
        {/* Top label */}
        <div className="flex items-center justify-center gap-4 mb-3 sm:mb-4">
          <div className="h-px w-10 sm:w-16 bg-gold opacity-60" />
          <span className="font-montserrat text-[10px] sm:text-xs tracking-[0.45em] uppercase text-gold opacity-90">
            Wedding Invitation
          </span>
          <div className="h-px w-10 sm:w-16 bg-gold opacity-60" />
        </div>

        {/* Couple names */}
        <h1 className="font-cormorant font-light text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-1 text-glow">
          Георгий
          <span className="block font-script text-gold text-4xl sm:text-4xl md:text-5xl my-0">
            &amp;
          </span>
          Полина
        </h1>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 my-2 sm:my-3">
          <div className="h-px w-8 sm:w-14 bg-gold/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-16 sm:w-24 bg-gold/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-8 sm:w-14 bg-gold/50" />
        </div>

        {/* Date */}
        <p className="font-cormorant font-semibold text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] pl-[0.25em] text-gold mb-0.5"
          style={{ textShadow: '0 0 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8), 0 2px 12px rgba(201,145,58,0.4)' }}>
          01 · Октября · 2026
        </p>
        <p className="font-montserrat text-xs sm:text-sm tracking-[0.4em] pl-[0.4em] uppercase text-white/60"
          style={{ textShadow: '0 0 16px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.8)' }}>
          Четверг
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1 opacity-60 animate-bounce">
        <span className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-gold">
          Scroll
        </span>
        <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
