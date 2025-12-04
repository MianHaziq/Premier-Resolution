import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import AboutUs from '../components/AboutUs'
import QualityService from '../components/QualityService'

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <ServicesSection />
        <AboutUs />
        <QualityService />
      </div>
    </>
  )
}

export default Home