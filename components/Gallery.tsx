import FadeIn from './FadeIn'
import Photo from './Photo'

/*
  Replace the src paths below with your actual photos.
  Drop photos into: public/images/
  Suggested naming: gallery1.jpg ... gallery6.jpg
*/
const photos = [
  { src: '/images/gallery1.jpg', alt: 'Георгий и Полина' },
  { src: '/images/gallery2.jpg', alt: 'Помолвка' },
  { src: '/images/gallery3.jpg', alt: 'Наша история' },
  { src: '/images/gallery4.jpg', alt: 'Вместе' },
  { src: '/images/gallery5.jpg', alt: 'Кольцо' },
  { src: '/images/gallery6.jpg', alt: 'Влюблённые' },
]

const gradients = [
  'from-[#7C1A24]/25 to-[#C9913A]/20',
  'from-[#C9913A]/20 to-[#C47832]/25',
  'from-[#3C1C0C]/30 to-[#7C1A24]/20',
  'from-[#C47832]/20 to-[#C9913A]/25',
  'from-[#7C1A24]/20 to-[#3C1C0C]/30',
  'from-[#C9913A]/25 to-[#7C1A24]/20',
]

export default function Gallery() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-cream-dark">
      {/* Header */}
      <FadeIn>
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-montserrat text-xs tracking-[0.5em] uppercase text-[#3C1C0C]/50 mb-2">
            Our story
          </p>
          <h2 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl text-[#1C0A06]">
            Наши фотографии
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="h-px w-10 sm:w-16 bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-10 sm:w-16 bg-gold/50" />
          </div>
        </div>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {photos.map((photo, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className={`gallery-item relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br ${gradients[i]}`}>
                <Photo src={photo.src} alt={photo.alt} />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tablet+: masonry-like 3-column grid */}
        <div className="hidden sm:grid grid-cols-3 gap-4 auto-rows-[220px] lg:auto-rows-[260px]">
          {/* Photo 1 — tall, spans 2 rows */}
          <FadeIn delay={0} className="row-span-2">
            <div className={`gallery-item relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br ${gradients[0]}`}>
              <Photo src={photos[0].src} alt={photos[0].alt} />
            </div>
          </FadeIn>

          {[1, 2].map((i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className={`gallery-item relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br ${gradients[i]}`}>
                <Photo src={photos[i].src} alt={photos[i].alt} />
              </div>
            </FadeIn>
          ))}

          {/* Photo 4 — tall, spans 2 rows */}
          <FadeIn delay={150} className="row-span-2">
            <div className={`gallery-item relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br ${gradients[3]}`}>
              <Photo src={photos[3].src} alt={photos[3].alt} />
            </div>
          </FadeIn>

          {[4, 5].map((i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className={`gallery-item relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br ${gradients[i]}`}>
                <Photo src={photos[i].src} alt={photos[i].alt} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
