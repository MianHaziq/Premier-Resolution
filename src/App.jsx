import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Preloader from './components/ui/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import { ToastProvider } from './components/ui/Toast'
import Home from './pages/Home'
import AboutUsPage from './pages/AboutUsPage'
import CareerPage from './pages/CareerPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

// Service Pages
import DebtCollectionPage from './pages/services/DebtCollectionPage'
import CustomerServicesPage from './pages/services/CustomerServicesPage'
import EmailSupportPage from './pages/services/EmailSupportPage'
import LiveChatSupportPage from './pages/services/LiveChatSupportPage'
import AIChatbotPage from './pages/services/AIChatbotPage'
import BusinessManagementPage from './pages/services/BusinessManagementPage'
import SalesServicesPage from './pages/services/SalesServicesPage'

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <ToastProvider>
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

        {/* Individual Service Pages */}
        <Route path="/services/debt-collection" element={<DebtCollectionPage />} />
        <Route path="/services/email-support" element={<EmailSupportPage />} />
        <Route path="/services/ai-chatbot" element={<AIChatbotPage />} />
        <Route path="/services/business-management" element={<BusinessManagementPage />} />
        <Route path="/services/customer-services" element={<CustomerServicesPage />} />
        <Route path="/services/live-chat-support" element={<LiveChatSupportPage />} />
        <Route path="/services/sales-services" element={<SalesServicesPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </ToastProvider>
  )
}

export default App
