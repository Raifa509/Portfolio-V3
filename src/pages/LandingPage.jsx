import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

export default function LandingPage() {
  return (
    <div className='grid-background relative min-h-screen ' id="home">
      {/* overlay */}
      <div className='bg-black/70 absolute inset-0'></div>
      {/* light ray */}
      <div className="light-ray" />
      {/* main div */}
      <div className="relative z-10 md:mx-5">
        <Navbar />
        <div className='md:mt-25 md:mx-30 mx-10'>
          <HeroSection/>
          
        </div>
      </div>
    </div>
  )
}
