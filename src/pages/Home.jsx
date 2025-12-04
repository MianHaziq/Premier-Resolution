import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import AboutUs from '../components/AboutUs'
import QualityService from '../components/QualityService'

const Home = ({ preloaderComplete }) => {
  return (
    <>
      <div>
        <Hero preloaderComplete={preloaderComplete} />
        <ServicesSection />
        <AboutUs />
        <QualityService />
      </div>
    </>
  )
}

export default Home