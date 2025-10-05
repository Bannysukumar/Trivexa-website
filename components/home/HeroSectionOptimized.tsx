"use client"

import React, { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Play, 
  Sparkles,
  Zap
} from 'lucide-react'
import dynamic from 'next/dynamic'

// Lazy load heavy components
const HeroFloatingElements = dynamic(() => import('./HeroFloatingElements'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
})

const Hero3DVisual = dynamic(() => import('./Hero3DVisual'), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl animate-pulse" />
})

export default function HeroSectionOptimized() {
  const [isLoaded, setIsLoaded] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.8,
        staggerChildren: shouldReduceMotion ? 0.1 : 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.6 }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-navy-900">
      {/* Optimized Background Layers - Only render when loaded */}
      {isLoaded && (
        <>
          {/* Layer 1: Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>
          
          {/* Layer 2: Simplified Animated Mesh Gradient */}
          {!shouldReduceMotion && (
            <div className="absolute inset-0 opacity-60">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient-shift"></div>
            </div>
          )}
          
          {/* Layer 3: Simplified Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              animation: shouldReduceMotion ? 'none' : 'background-shift 25s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Layer 4: Simplified Floating Shapes */}
          {!shouldReduceMotion && (
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ top: '10%', left: '10%' }}
              />
              <motion.div
                className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-pink-400/20 to-orange-400/20 blur-3xl"
                animate={{
                  x: [0, -40, 0],
                  y: [0, 40, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ top: '60%', right: '10%' }}
              />
            </div>
          )}
          
          {/* Layer 5: Simplified Geometric Shapes */}
          {!shouldReduceMotion && (
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg"
                animate={{
                  rotateZ: [0, 180],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ top: '15%', right: '20%' }}
              />
            </div>
          )}
        </>
      )}

      {/* Lazy load floating elements */}
      {isLoaded && <HeroFloatingElements />}

      {/* Main Content */}
      <div className="container-custom section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            {/* Premium Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 glass-effect text-primary-700 dark:text-primary-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 hover-lift group"
            >
              <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              <span className="text-premium">Building the Future of Blockchain & Web3</span>
            </motion.div>

            {/* Premium Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-hero text-gray-900 dark:text-white mb-8 leading-tight text-shadow-lg"
            >
              AI-Powered{' '}
              <span className="gradient-text animate-glow">Blockchain Development</span>{' '}
              with AI Integration
            </motion.h1>

            {/* Premium Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl font-medium"
            >
              Trivexa Technologies is the leading AI blockchain development company, integrating AI 
              and advanced AI technologies for automated smart contract development, AI-powered DApps, 
              and intelligent Web3 solutions. Serving Fortune 500 companies with 100+ AI-driven projects.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <a
                href="https://wa.me/6301846681?text=Hi%20Trivexa%20Technologies!%20I'm%20interested%20in%20starting%20a%20blockchain%20project.%20Can%20you%20help%20me%20get%20started?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center group text-lg font-semibold"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <Link
                href="/portfolio"
                className="btn-secondary flex items-center justify-center group text-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>View Our Work</span>
              </Link>
            </motion.div>

            {/* Premium Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-8 text-sm"
            >
              <div className="flex items-center space-x-3 glass-effect px-4 py-2 rounded-full hover-lift group">
                <Zap className="w-5 h-5 text-green-500 group-hover:animate-pulse" />
                <span className="font-semibold text-gray-700 dark:text-gray-300">100+ Enterprise Projects</span>
              </div>
              <div className="flex items-center space-x-3 glass-effect px-4 py-2 rounded-full hover-lift group">
                <Zap className="w-5 h-5 text-blue-500 group-hover:animate-pulse" />
                <span className="font-semibold text-gray-700 dark:text-gray-300">Fortune 500 Clients</span>
              </div>
              <div className="flex items-center space-x-3 glass-effect px-4 py-2 rounded-full hover-lift group">
                <Zap className="w-5 h-5 text-purple-500 group-hover:animate-pulse" />
                <span className="font-semibold text-gray-700 dark:text-gray-300">99.9% Uptime SLA</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Lazy loaded 3D Visual */}
          <motion.div variants={itemVariants}>
            <Hero3DVisual />
          </motion.div>
        </motion.div>
      </div>

      {/* Premium Scroll Indicator */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 dark:border-primary-600 rounded-full flex justify-center glass-effect hover-glow"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-500 dark:bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
