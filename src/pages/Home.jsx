import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import AboutUs from '../components/AboutUs'
import QualityService from '../components/QualityService'
import AwardsSection from '../components/AwardsSection'
import ImpactSection from '../components/ImpactSection'
import TestimonialsSection from '../components/TestimonialsSection'
import RecruitmentSection from '../components/RecruitmentSection'

const Home = ({ preloaderComplete }) => {
  return (
    <>
      <main>
        <Hero preloaderComplete={preloaderComplete} />
        <div className="mt-8 md:mt-12 lg:mt-16">
          <ServicesSection />
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <AboutUs />
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <QualityService />
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <AwardsSection />
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <ImpactSection />
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <TestimonialsSection />
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <RecruitmentSection />
        </div>
      </main>
    </>
  )
}

export default Home