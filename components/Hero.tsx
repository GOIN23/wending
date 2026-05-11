export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#1C0A06]">
      {/* Background photo — cover + top alignment → пара попадает в нижние 60% */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat' }}
      />

      {/* Overlay: тёмный верх (текст), прозрачная середина (лица) */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(8,3,1,0.88) 0%, rgba(8,3,1,0.72) 28%, rgba(8,3,1,0.08) 52%, rgba(8,3,1,0.08) 75%, rgba(8,3,1,0.50) 100%)'
      }} />

      {/* Content — прижат к верху */}
      <div className="relative z-10 text-center text-white px-6 pt-10 sm:pt-20 w-full max-w-4xl mx-auto">
        {/* Top label */}
        <div className="flex items-center justify-center gap-4 mb-4 sm:mb-8">
          <div className="h-px w-10 sm:w-16 bg-gold opacity-60" />
          <span className="font-montserrat text-[10px] sm:text-xs tracking-[0.45em] uppercase text-gold opacity-90">
            Wedding Invitation
          </span>
          <div className="h-px w-10 sm:w-16 bg-gold opacity-60" />
        </div>

        {/* Couple names */}
        <h1 className="font-cormorant font-light text-5xl sm:text-7xl md:text-8xl text-white leading-tight mb-1 sm:mb-3 text-glow">
          Георгий
          <span className="block font-script text-gold text-4xl sm:text-5xl md:text-6xl my-0 sm:my-2">
            &amp;
          </span>
          Полина
        </h1>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 my-3 sm:my-6">
          <div className="h-px w-8 sm:w-14 bg-gold/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-16 sm:w-24 bg-gold/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-8 sm:w-14 bg-gold/50" />
        </div>

        {/* Date */}
        <p className="font-cormorant font-semibold text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] uppercase text-gold mb-0.5"
          style={{ textShadow: '0 2px 12px rgba(201,145,58,0.5)' }}>
          01 · Октябрь · 2026
        </p>
        <p className="font-montserrat text-xs sm:text-sm tracking-[0.4em] uppercase text-white/50">
          Четверг
        </p>
      </div>

      {/* Scroll indicator — прямо в section, чтобы left-0 right-0 работал от краёв экрана */}
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
