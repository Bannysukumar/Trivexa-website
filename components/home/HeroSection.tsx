"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Play, 
  Sparkles,
  Zap
} from 'lucide-react'
import HeroFloatingElements from './HeroFloatingElements'
import Hero3DVisual from './Hero3DVisual'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-navy-900">
      {/* 3D Background Layers */}
      
      {/* Layer 1: Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>
      
      {/* Layer 2: Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient-shift"></div>
      </div>
      
      {/* Layer 3: 3D Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 200px 200px, 200px 200px',
          animation: 'background-shift 25s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Layer 4: Floating 3D Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large 3D Circles */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-pink-400/20 to-orange-400/20 blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '60%', right: '10%' }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-green-400/20 to-cyan-400/20 blur-3xl"
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -60, 100, 0],
            scale: [1, 1.4, 0.6, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '20%', left: '20%' }}
        />
      </div>
      
      {/* Layer 5: 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating 3D Cubes */}
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '15%', right: '20%' }}
        />
        <motion.div
          className="absolute w-24 h-24 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full"
          animate={{
            rotateX: [0, -360],
            rotateY: [0, -360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '30%', left: '15%' }}
        />
        <motion.div
          className="absolute w-20 h-20 bg-gradient-to-br from-green-500/30 to-cyan-500/30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '40%', left: '5%' }}
        />
      </div>
      
      {/* Layer 6: Blockchain Network Visualization */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {/* Animated Connection Lines */}
          <motion.line
            x1="100" y1="200" x2="300" y2="400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.line
            x1="700" y1="300" x2="900" y2="500"
            stroke="url(#gradient2)"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.line
            x1="200" y1="700" x2="800" y2="300"
            stroke="url(#gradient3)"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* 3D Floating Elements */}
      <HeroFloatingElements />

      {/* Main Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass-effect text-primary-700 dark:text-primary-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 hover-lift group"
            >
              <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              <span className="text-premium">Building the Future of Blockchain & Web3</span>
            </motion.div>

            {/* Premium Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-hero text-gray-900 dark:text-white mb-8 leading-tight text-shadow-lg"
            >
              AI-Powered{' '}
              <span className="gradient-text animate-glow">Blockchain Development</span>{' '}
              with ChatGPT Integration
            </motion.h1>

            {/* Premium Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl font-medium"
            >
              Trivexa Technologies is the leading AI blockchain development company, integrating ChatGPT 
              and advanced AI technologies for automated smart contract development, AI-powered DApps, 
              and intelligent Web3 solutions. Serving Fortune 500 companies with 100+ AI-driven projects.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <a
                href="https://wa.me/916301846681?text=Hi%20Trivexa%20Technologies!%20I'm%20interested%20in%20starting%20a%20blockchain%20project.%20Can%20you%20help%20me%20get%20started?"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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

          {/* Right Content - Advanced 3D Visual */}
          <Hero3DVisual />
        </div>
      </div>

      {/* Premium Scroll Indicator */}
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
    </section>
  )
}