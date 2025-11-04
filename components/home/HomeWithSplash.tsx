"use client"

import React, { useState } from 'react'
import SplashScreen from '@/components/common/SplashScreen'
import HeroSection from '@/components/home/HeroSection'
import AnimatedWelcome from '@/components/home/AnimatedWelcome'

export default function HomeWithSplash() {
  const [showSplash, setShowSplash] = useState(true)

  const handleFinish = () => {
    setShowSplash(false)
  }

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleFinish} />}
      <AnimatedWelcome typingDelayMs={45} subtitleTypingDelayMs={55} />
      <HeroSection />
    </>
  )
}


