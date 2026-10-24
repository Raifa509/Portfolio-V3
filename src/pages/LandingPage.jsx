import HeroSection from '../components/HeroSection'
import { motion, useReducedMotion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className='grid-background relative min-h-screen' id="home">
      <div className='bg-black/70 absolute inset-0'></div>
      <div className="light-ray" />
      <div className="relative z-10 md:mx-5">
        <div className="h-16" />
        <motion.div
          className='md:mt-25 md:mx-30 mx-10'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <HeroSection />
        </motion.div>
      </div>
    </div>
  )
}