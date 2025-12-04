import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <ServicesSection />
        <AboutUs />
      </div>
    </>
  )
}

export default Home