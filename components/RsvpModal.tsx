'use client'

import { useState, useTransition, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { submitRsvp } from '@/app/actions/rsvp'

const ALCOHOL = ['Вино красное', 'Вино белое', 'Шампанское', 'Коньяк', 'Водка', 'Виски', 'Не употребляю алкоголь']
type Status = 'attending' | 'maybe' | 'not_attending'

const STATUSES: { value: Status; label: string }[] = [
  { value: 'attending',     label: 'Подтверждаю' },
  { value: 'maybe',         label: 'Затрудняюсь ответить' },
  { value: 'not_attending', label: 'Не смогу прийти' },
]

export default function RsvpModal() {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()
  const [mounted, setMounted] = useState(false)

  const [name, setName] = useState('')
  const [status, setStatus] = useState<Status>('attending')
  const [alcohol, setAlcohol] = useState<string[]>([])
  const [notes, setNotes] = useState('')

  useEffect(() => { setMounted(true) }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const toggleAlcohol = (item: string) =>
    setAlcohol((prev) =>
      prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]
    )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!name.trim()) { setError('Пожалуйста, введите имя и фамилию'); return }

    startTransition(async () => {
      try {
        await submitRsvp({ name, status, alcohol, notes })
        setDone(true)
      } catch {
        setError('Что-то пошло не так. Попробуйте ещё раз.')
      }
    })
  }

  const close = () => { setOpen(false); setDone(false); setError('') }

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
      style={{ isolation: 'isolate' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1C0A06]/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Card — на мобиле снизу, на десктопе по центру */}
      <div className="relative bg-[#FAF3E8] w-full sm:w-[480px] sm:max-w-[calc(100vw-32px)] rounded-t-2xl sm:rounded-sm shadow-2xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto border-t border-[#C9913A]/20 sm:border">

        {/* Drag handle (mobile) */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#1C0A06]/15" />
        </div>

        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#1C0A06]/30 hover:text-[#7C1A24] transition-colors"
        >
          ✕
        </button>

        {done ? (
          <div className="flex flex-col items-center justify-center py-14 px-8 text-center gap-5">
            <div className="w-16 h-16 rounded-full border border-[#7C1A24]/40 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#7C1A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-cormorant text-4xl text-[#7C1A24]">Спасибо!</h3>
            <p className="font-montserrat text-sm text-[#1C0A06]/60 leading-relaxed tracking-wide">
              Мы получили ваш ответ<br />и будем вас ждать 🤍
            </p>
            <button
              onClick={close}
              className="mt-2 font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#1C0A06]/40 hover:text-[#7C1A24] transition-colors"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 sm:px-8 pt-4 pb-8 flex flex-col gap-6">

            {/* Header */}
            <p className="font-cormorant italic text-[#C9913A] text-lg text-center leading-snug pt-2">
              Ответьте на пару вопросов,<br />чтобы облегчить нам выбор
            </p>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-cormorant text-xl text-[#7C1A24]">Как вас зовут? <span className="text-[#1C0A06]/40 text-base">(имя и фамилия)</span></label>
              <input
                type="text"
                placeholder="Антон Иванов, Ира Смирнова"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-[#C9913A]/30 bg-white/70 rounded-sm px-4 py-3 font-cormorant text-lg text-[#1C0A06] placeholder:text-[#1C0A06]/25 focus:outline-none focus:border-[#7C1A24]/60 transition-colors"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2">
              <label className="font-cormorant text-xl text-[#7C1A24]">Подтвердите своё присутствие</label>
              <div className="flex flex-col gap-2.5 mt-1">
                {STATUSES.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setStatus(s.value)}
                    className="flex items-center gap-3 text-left"
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                      status === s.value ? 'border-[#7C1A24] bg-[#7C1A24]' : 'border-[#1C0A06]/25'
                    }`}>
                      {status === s.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className={`font-cormorant text-lg transition-colors ${
                      status === s.value ? 'text-[#7C1A24]' : 'text-[#1C0A06]/60'
                    }`}>
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Alcohol */}
            <div className="flex flex-col gap-2">
              <label className="font-cormorant text-xl text-[#7C1A24]">Какой алкоголь вы предпочитаете?</label>
              <div className="flex flex-col gap-2.5 mt-1">
                {ALCOHOL.map((item) => {
                  const checked = alcohol.includes(item)
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleAlcohol(item)}
                      className="flex items-center gap-3 text-left"
                    >
                      <div className={`w-4 h-4 rounded-sm border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                        checked ? 'border-[#7C1A24] bg-[#7C1A24]' : 'border-[#1C0A06]/25'
                      }`}>
                        {checked && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        )}
                      </div>
                      <span className={`font-cormorant text-lg transition-colors ${
                        checked ? 'text-[#7C1A24]' : 'text-[#1C0A06]/60'
                      }`}>
                        {item}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-2">
              <label className="font-cormorant text-xl text-[#7C1A24]">
                Пожелания по еде, аллергия<br />или просто «вы классные» ♥
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-[#C9913A]/30 bg-white/70 rounded-sm px-4 py-3 font-cormorant text-lg text-[#1C0A06] focus:outline-none focus:border-[#7C1A24]/60 transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="font-montserrat text-xs text-[#7C1A24] tracking-wide -mt-2">{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full border border-[#7C1A24]/50 py-4 font-montserrat text-xs tracking-[0.4em] uppercase text-[#7C1A24] hover:bg-[#7C1A24] hover:text-white transition-all duration-300 disabled:opacity-40 rounded-sm"
            >
              {isPending ? 'Отправляем...' : 'Подтвердить'}
            </button>

          </form>
        )}
      </div>
    </div>
  )

  return (
    <>
      {/* «Я БУДУ» circle button */}
      <button
        onClick={() => setOpen(true)}
        className="group relative w-40 h-40 rounded-full border border-[#7C1A24]/50 flex items-center justify-center transition-all duration-500 hover:bg-[#7C1A24] hover:border-[#7C1A24] hover:shadow-xl"
      >
        <span className="font-cormorant text-3xl sm:text-4xl text-[#7C1A24] group-hover:text-white transition-colors duration-500 leading-tight text-center select-none">
          Я<br />БУДУ
        </span>
        <span className="absolute inset-0 rounded-full border border-[#7C1A24]/20 animate-ping" style={{ animationDuration: '2.5s' }} />
      </button>

      {/* Portal — рендерится прямо в body */}
      {open && mounted && createPortal(modal, document.body)}
    </>
  )
}
