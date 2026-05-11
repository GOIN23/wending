export default function Footer() {
  return (
    <footer className="bg-[#1C0A06] py-16 px-6 text-center">
      {/* Decorative top */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-px w-12 sm:w-20 bg-gold/30" />
        <svg className="w-5 h-5 text-gold/60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.09 6.26L20.62 8.27l-5.17 3.87 2.1 6.26L12 14.54l-5.55 3.86 2.1-6.26L3.38 8.27l6.53-.01L12 2z" />
        </svg>
        <div className="h-px w-12 sm:w-20 bg-gold/30" />
      </div>

      {/* Names */}
      <h2 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl text-white mb-3">
        Георгий <span className="text-gold">&amp;</span> Полина
      </h2>

      {/* Date */}
      <p className="font-montserrat text-xs sm:text-sm tracking-[0.4em] uppercase text-gold/70 mb-10">
        01 · Октября · 2026
      </p>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-px w-8 bg-gold/20" />
        <div className="w-1 h-1 rounded-full bg-gold/40" />
        <div className="h-px w-16 bg-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        <div className="h-px w-16 bg-gold/40" />
        <div className="w-1 h-1 rounded-full bg-gold/40" />
        <div className="h-px w-8 bg-gold/20" />
      </div>

      {/* Venue */}
      <p className="font-cormorant italic text-lg sm:text-xl text-white/40">
        Forest Dew · Подольский район, п. Быково, ул. Луговая, 17
      </p>

      {/* Bottom credit */}
      <p className="mt-10 font-montserrat text-[10px] tracking-[0.3em] uppercase text-white/20">
        with love ♥
      </p>
    </footer>
  )
}
