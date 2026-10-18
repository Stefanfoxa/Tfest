import SubHeader from '../components/SubHeader'
import CompetitionSlider from '../components/CompetitionSlider'

export default function Competition() {
  return (
    <>
      <SubHeader title="Competition" />
      <section aria-label="Daftar kompetisi" className="relative isolate bg-forest px-4 py-12 md:py-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-batik opacity-60" />
        <CompetitionSlider />
      </section>
    </>
  )
}
