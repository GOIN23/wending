import FadeIn from '@/components/FadeIn'

export default function Wishes() {
  return (
    <section className="bg-[#F0E5D0] py-20 px-6">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          {/* Card */}
          <div className="relative bg-[#FAF3E8] border border-[#C9913A]/30 rounded-sm px-8 pt-12 pb-10 shadow-sm">

            {/* Paperclip */}
            <div className="absolute -top-4 left-8">
              <svg className="w-10 h-10 text-[#1C0A06]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
              </svg>
            </div>

            {/* ПОЖЕЛАНИЯ */}
            <div className="mb-10 text-center">
              <h3 className="font-cormorant text-3xl sm:text-4xl text-[#7C1A24] tracking-widest uppercase mb-6">
                Пожелания
              </h3>
              <p className="font-montserrat text-xs sm:text-sm tracking-widest uppercase leading-loose text-[#1C0A06]/70">
                Мы хотим, чтобы вы провели этот день с улыбкой на лице. Знакомьтесь, общайтесь с другими гостями, участвуйте в развлечениях и просто наслаждайтесь прекрасной атмосферой.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-10">
              <div className="flex-1 h-px bg-[#C9913A]/20" />
              <div className="w-1 h-1 rounded-full bg-[#C9913A]/40" />
              <div className="flex-1 h-px bg-[#C9913A]/20" />
            </div>

            {/* ЦВЕТЫ */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-[#7C1A24]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12" />
                  <path d="M12 12C12 12 8 10 8 6a4 4 0 018 0c0 4-4 6-4 6z" />
                  <path d="M12 12C12 12 16 10 16 6" />
                  <path d="M12 12C12 12 9 8 6 9s-2 5 2 6" />
                  <path d="M12 12C12 12 15 8 18 9s2 5-2 6" />
                </svg>
              </div>
              <h3 className="font-cormorant text-3xl sm:text-4xl text-[#7C1A24] tracking-widest uppercase mb-4">
                Цветы
              </h3>
              <p className="font-montserrat text-xs sm:text-sm tracking-widest uppercase leading-loose text-[#1C0A06]/70 mb-6">
                Мы хотим, чтобы в течение первого года нашей семейной жизни дом наполнялся цветами. Вместо букетов на свадьбу вы можете поддержать нас цветочной подпиской от MATE Flowers
              </p>
              <a
                href="https://mate-wedding.ru/polina-and-georgiy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#7C1A24] border-b border-[#7C1A24]/40 pb-0.5 hover:border-[#7C1A24] transition-colors"
              >
                mate flowers →
              </a>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
