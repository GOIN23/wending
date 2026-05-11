import FadeIn from '@/components/FadeIn'
import RsvpModal from '@/components/RsvpModal'

export default function Rsvp() {
  return (
    <section className="bg-[#FAF3E8] py-24 px-6">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-10">

        <FadeIn>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#C9913A]/40" />
              <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase text-[#C9913A]">rsvp</span>
              <div className="h-px w-10 bg-[#C9913A]/40" />
            </div>

            <p className="font-montserrat text-xs sm:text-sm tracking-widest uppercase leading-loose text-[#1C0A06]/65">
              Подтвердите своё присутствие<br />
              на нашем празднике до{' '}
              <strong className="font-semibold text-[#1C0A06]/80">01 июля 2026</strong> года,<br />
              нажав на кнопку «Я буду»
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <RsvpModal />
        </FadeIn>

      </div>
    </section>
  )
}
