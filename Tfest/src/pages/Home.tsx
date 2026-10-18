import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Divider from '../components/Divider'

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Divider />
      {/* Placeholder Timeline: dibuat di tahap berikutnya. */}
      <section id="timeline" aria-label="Timeline" className="bg-forest" />
    </>
  )
}
