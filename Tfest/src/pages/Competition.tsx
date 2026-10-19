import SubHeader from '../components/SubHeader'
import CompetitionSlider from '../components/CompetitionSlider'

export default function Competition() {
  return (
    <>
      <SubHeader title="Competition" />
      <section aria-label="Daftar kompetisi" className="px-4 py-12 md:py-20">
        <CompetitionSlider />
      </section>
    </>
  )
}
