'use client'

export default function LocationVideo() {
  return (
    <div className="relative">
      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full border border-gold/30 rounded-lg pointer-events-none" />

      <div className="relative aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3] rounded-lg overflow-hidden bg-[#3C1C0C]/30">
        <img
          src="/videos/location.gif"
          alt="Место проведения"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 60px rgba(28,10,6,0.25)' }}
        />
      </div>
    </div>
  )
}
