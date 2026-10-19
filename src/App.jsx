import { useState } from 'react'
import './App.css'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Loader from './components/Loader'
import AboutSection from './pages/AboutSection'
import ContactSection from './pages/ContactSection'
import ExperienceSection from './pages/ExperienceSection'
import LandingPage from './pages/LandingPage'
import ProjectsSection from './pages/ProjectSection'
import SkillsSection from './pages/SkillsSection'
import WhatsAppButton from './components/WhatsappButton'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <Loader onFinish={() => setLoading(false)} />

        :
        (
          <>
            <CustomCursor />
            <LandingPage />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
            <WhatsAppButton />
          </>
        )

      }

    </>
  )
}

export default App
