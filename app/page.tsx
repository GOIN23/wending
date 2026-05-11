import LockScreen from '@/components/LockScreen'
import Hero from '@/components/Hero'
import Welcome from '@/components/Welcome'
import MusicPlayer from '@/components/MusicPlayer'
import Timing from '@/components/Timing'
import Location from '@/components/Location'
import ParallaxQuote from '@/components/ParallaxQuote'
import DressCode from '@/components/DressCode'
import Wishes from '@/components/Wishes'
import Rsvp from '@/components/Rsvp'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <LockScreen />
      <Hero />
      <Welcome />
      <MusicPlayer />
      <Timing />
      <Location />
      <ParallaxQuote />
      <DressCode />
      <Wishes />
      <Rsvp />
      <Footer />
    </main>
  )
}
