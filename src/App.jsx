import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AdmissionSection from './components/AdmissionSection'
import DepartmentSection from './components/DepartmentSection'
import PortfolioSection from './components/PortfolioSection'
import WhyChooseUs from './components/WhyChooseUs'
import AdmissionForm from './components/AdmissionForm'
import ContactSection from './components/ContactSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import BackToTop from './components/BackToTop'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <HeroSection />
        <AboutSection />
        <AdmissionSection />
        <DepartmentSection />
        <PortfolioSection />
        <WhyChooseUs />
        <AdmissionForm />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <BackToTop />
    </>
  )
}
