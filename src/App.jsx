import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Preloader from './components/ui/Preloader'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUsPage from './pages/AboutUsPage'
import CareerPage from './pages/CareerPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <>
      {/* Preloader - Easy to remove: just delete this line */}
      <Preloader onComplete={() => setPreloaderComplete(true)} />

      {/* Main Content */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home preloaderComplete={preloaderComplete} />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
