import FadeIn from '@/components/FadeIn'
import DressCodeSlider from '@/components/DressCodeSlider'

const palette = [
  { color: '#B78953', label: 'Amber Glow' },
  { color: '#964734', label: 'Crimson Blaze' },
  { color: '#692721', label: 'Maple Spice' },
  { color: '#4C563F', label: 'Moss Mist' },
  { color: '#243533', label: 'Lagoon' },
]

export default function DressCode() {
  return (
    <section className="bg-[#FAF3E8] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">

        {/* Title */}
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-10 sm:w-16 bg-[#C9913A]/40" />
            <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase text-[#C9913A]">
              dress · code
            </span>
            <div className="h-px w-10 sm:w-16 bg-[#C9913A]/40" />
          </div>

          <h2 className="font-script text-5xl sm:text-6xl text-[#7C1A24] mb-10 leading-tight">
            dress&#8209;code
          </h2>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={150}>
          <p className="font-montserrat text-sm sm:text-base tracking-widest uppercase leading-relaxed text-[#1C0A06]/70 mb-12">
            Мы очень старались сделать праздник красивым.
            <br className="hidden sm:block" />
            {' '}Будем рады, если в своих нарядах
            <br className="hidden sm:block" />
            {' '}вы поддержите цветовую гамму нашей свадьбы:
          </p>
        </FadeIn>

        {/* Color swatches */}
        <FadeIn delay={300}>
          <div className="flex items-center justify-center gap-5 sm:gap-7 mb-14">
            {palette.map((item) => (
              <div key={item.color} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-md border-2 border-white/60"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-montserrat text-[9px] tracking-widest uppercase text-[#1C0A06]/50">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Photo slider */}
        <FadeIn delay={600}>
          <DressCodeSlider />
        </FadeIn>

      </div>
    </section>
  )
}
