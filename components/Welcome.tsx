import FadeIn from './FadeIn'

export default function Welcome() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-cream">
      <div className="max-w-2xl mx-auto text-center">
        {/* Top ornament */}
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-8 sm:w-12 bg-gold/40" />
            <svg
              className="w-7 h-7 text-gold"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M20 6 C20 6, 28 14, 28 21 C28 28, 20 34, 20 34 C20 34, 12 28, 12 21 C12 14, 20 6, 20 6Z" />
              <path d="M14 12 L26 12 M11 18 L29 18 M13 24 L27 24" opacity="0.5" />
            </svg>
            <div className="h-px w-8 sm:w-12 bg-gold/40" />
          </div>
        </FadeIn>

        {/* Handwritten heading */}
        <FadeIn delay={100}>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#1C0A06] mb-6 leading-normal">
            Дорогие гости!
          </h2>
        </FadeIn>

        {/* Gold rule */}
        <FadeIn delay={200}>
          <div className="w-20 h-px bg-gold mx-auto mb-8" />
        </FadeIn>

        {/* Main invitation text */}
        <FadeIn delay={300}>
          <p className="font-cormorant text-xl sm:text-2xl text-[#3C1C0C] leading-relaxed mb-6">
            С большой радостью приглашаем вас на наш первый семейный праздник — нашу свадьбу!
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="font-cormorant text-lg sm:text-xl text-[#3C1C0C]/75 leading-relaxed">
            Мы очень хотим, чтобы в этот день с нами рядом были самые близкие люди.
          </p>
        </FadeIn>

        {/* Bottom ornament */}
        <FadeIn delay={500}>
          <div className="mt-12 flex items-center justify-center gap-2">
            <div className="h-px w-6 bg-gold/30" />
            <div className="w-1 h-1 rounded-full bg-gold/60" />
            <div className="h-px w-12 bg-gold/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/60" />
            <div className="w-1 h-1 rounded-full bg-gold/60" />
            <div className="h-px w-6 bg-gold/30" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
