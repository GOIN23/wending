import FadeIn from './FadeIn'

export default function Transfer() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-[#F0E5D0]">
      <div className="max-w-xl mx-auto text-center">
        <FadeIn>
          <p className="font-montserrat text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Важно знать
          </p>

          <h2 className="font-cormorant font-light text-4xl sm:text-5xl text-[#1C0A06] mb-6 leading-snug">
            Трансфер
          </h2>

          <div className="w-16 h-px bg-gold mb-8 mx-auto" />

          <div className="flex justify-center mb-8">
            <svg className="w-12 h-12 text-[#7C1A24]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
              <rect x="9" y="11" width="14" height="10" rx="2" />
              <circle cx="12" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
          </div>

          <p className="font-cormorant text-xl sm:text-2xl text-[#3C1C0C] leading-relaxed">
            Хотим заранее предупредить, что трансфер до места проведения торжества и после окончания мероприятия не предусмотрен.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
