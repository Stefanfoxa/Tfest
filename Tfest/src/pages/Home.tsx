import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Divider from '../components/Divider'
import SectionTitle from '../components/SectionTitle'
import CompetitionSlider from '../components/CompetitionSlider'
import Timeline from '../components/timeline/Timeline'

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Divider />

      <section aria-label="Lomba" className="px-4 pb-16 md:pb-24">
        <SectionTitle id="lomba" title="Competition" subtitle="Pilih lomba yang paling sesuai denganmu" />
        <CompetitionSlider />
      </section>

      <Divider />
      <SectionTitle id="timeline" title="Timeline" subtitle="Pantau jadwal setiap tahap lomba" />
      <Timeline />
    </>
  )
}
