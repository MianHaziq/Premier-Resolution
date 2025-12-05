import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import AboutUs from '../components/AboutUs'
import QualityService from '../components/QualityService'
import AwardsSection from '../components/AwardsSection'
import ImpactSection from '../components/ImpactSection'
import TestimonialsSection from '../components/TestimonialsSection'

const Home = ({ preloaderComplete }) => {
  return (
    <>
      <div>
        <Hero preloaderComplete={preloaderComplete} />
        <ServicesSection />
        <AboutUs />
        <QualityService />
        <AwardsSection />
        <ImpactSection />
        <TestimonialsSection />
      </div>
    </>
  )
}

export default Home