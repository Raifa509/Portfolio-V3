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
import Navbar from './components/Navbar'
import MotionSection from './components/MotionSection'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <Loader onFinish={() => setLoading(false)} />

        :
        (
          <>
            <CustomCursor />
            <Navbar />
            <LandingPage />
            <MotionSection><AboutSection /></MotionSection>
            <MotionSection><SkillsSection /></MotionSection>
            <MotionSection><ExperienceSection /></MotionSection>
            <MotionSection><ProjectsSection /></MotionSection>
            <MotionSection><ContactSection /></MotionSection>
            <Footer />
            <WhatsAppButton />
          </>
        )

      }

    </>
  )
}

export default App
