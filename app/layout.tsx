import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat, Marck_Script } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const marckScript = Marck_Script({
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Георгий & Полина | 1 октября 2026',
  description: 'Приглашение на свадьбу Георгия и Полины — 1 октября 2026, ресторан Forest Dew',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${montserrat.variable} ${marckScript.variable}`}>
      <body>{children}</body>
    </html>
  )
}
