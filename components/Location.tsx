import FadeIn from './FadeIn'
import LocationVideo from './LocationVideo'

export default function Location() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text column */}
          <FadeIn className="text-center md:text-left order-2 md:order-1">
            <p className="font-montserrat text-xs tracking-[0.5em] uppercase text-gold mb-4">
              Location
            </p>

            <h2 className="font-cormorant font-light text-4xl sm:text-5xl text-[#1C0A06] mb-6 leading-snug">
              Forest Dew
            </h2>

            <div className="w-16 h-px bg-gold mb-6 mx-auto md:mx-0" />

            <p className="font-cormorant text-lg sm:text-xl text-[#3C1C0C] leading-relaxed mb-3 uppercase tracking-wide">
              Программа вечера пройдёт в ресторане
            </p>
            <p className="font-cormorant italic text-2xl sm:text-3xl text-burgundy mb-8 leading-snug">
              «Forest Dew»
            </p>

            <div className="flex items-start gap-3 justify-center md:justify-start">
              <svg
                className="w-5 h-5 text-gold mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="font-cormorant text-base sm:text-lg text-[#3C1C0C]/80 leading-relaxed uppercase tracking-wide">
                Подольский район, п. Быково,<br />
                ул. Луговая, 17
              </p>
            </div>

            <a
              href="https://yandex.ru/maps/?text=Подольский+район+п+Быково+ул+Луговая+17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 font-montserrat text-xs tracking-[0.3em] uppercase text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors duration-300"
            >
              Посмотреть на карте
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </FadeIn>

          {/* Video column */}
          <FadeIn delay={200} className="order-1 md:order-2">
            <LocationVideo />
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
