"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Play, 
  Code, 
  Smartphone, 
  Globe, 
  Database,
  Sparkles,
  Zap,
  Shield,
  Lock,
  Cpu,
  Network,
  Layers,
  Hexagon,
  Circle,
  Square,
  Triangle,
  Star,
  Diamond,
  Activity,
  TrendingUp,
  Target,
  Rocket,
  Atom,
  Brain,
  CircuitBoard
} from 'lucide-react'

const floatingElements = [
  { icon: Code, delay: 0, x: 20, y: 20, size: 'w-16 h-16', color: 'text-blue-500' },
  { icon: Database, delay: 0.5, x: -30, y: 40, size: 'w-14 h-14', color: 'text-green-500' },
  { icon: Smartphone, delay: 1, x: 40, y: -20, size: 'w-18 h-18', color: 'text-purple-500' },
  { icon: Globe, delay: 1.5, x: -20, y: -30, size: 'w-16 h-16', color: 'text-orange-500' },
  { icon: Shield, delay: 2, x: 60, y: 30, size: 'w-12 h-12', color: 'text-red-500' },
  { icon: Lock, delay: 2.5, x: -50, y: 20, size: 'w-14 h-14', color: 'text-indigo-500' },
  { icon: Cpu, delay: 3, x: 30, y: -40, size: 'w-16 h-16', color: 'text-cyan-500' },
  { icon: Network, delay: 3.5, x: -40, y: -50, size: 'w-18 h-18', color: 'text-pink-500' },
  { icon: Layers, delay: 4, x: 50, y: 10, size: 'w-12 h-12', color: 'text-yellow-500' },
  { icon: Hexagon, delay: 4.5, x: -60, y: 40, size: 'w-16 h-16', color: 'text-emerald-500' },
  { icon: Circle, delay: 5, x: 20, y: -60, size: 'w-10 h-10', color: 'text-violet-500' },
  { icon: Square, delay: 5.5, x: -30, y: -20, size: 'w-14 h-14', color: 'text-rose-500' },
  { icon: Triangle, delay: 6, x: 40, y: 50, size: 'w-12 h-12', color: 'text-sky-500' },
  { icon: Star, delay: 6.5, x: -50, y: -40, size: 'w-16 h-16', color: 'text-amber-500' },
  { icon: Diamond, delay: 7, x: 60, y: -30, size: 'w-14 h-14', color: 'text-teal-500' },
  { icon: Activity, delay: 7.5, x: -20, y: 60, size: 'w-18 h-18', color: 'text-lime-500' },
  { icon: TrendingUp, delay: 8, x: 30, y: 40, size: 'w-12 h-12', color: 'text-fuchsia-500' },
  { icon: Target, delay: 8.5, x: -40, y: 10, size: 'w-16 h-16', color: 'text-slate-500' },
  { icon: Rocket, delay: 9, x: 50, y: -50, size: 'w-14 h-14', color: 'text-orange-600' },
  { icon: Atom, delay: 9.5, x: -60, y: -60, size: 'w-16 h-16', color: 'text-blue-600' },
  { icon: Brain, delay: 10, x: 20, y: 70, size: 'w-18 h-18', color: 'text-purple-600' },
  { icon: CircuitBoard, delay: 10.5, x: -30, y: 70, size: 'w-14 h-14', color: 'text-green-600' },
]

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
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotateX: -90 }}
          animate={{ 
            opacity: [0, 1, 0.8, 1],
            scale: [0, 1, 0.9, 1],
            rotateX: [-90, 0, 10, 0],
            rotateY: [0, 180, 360, 0],
            x: [0, element.x, -element.x, 0],
            y: [0, element.y, -element.y, 0],
            z: [0, 50, -50, 0]
          }}
          transition={{
            duration: 10 + index * 0.5,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute hidden lg:block"
          style={{
            left: `${15 + (index % 8) * 12}%`,
            top: `${20 + (index % 6) * 15}%`,
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <motion.div 
            className={`${element.size} glass-effect rounded-2xl flex items-center justify-center hover-lift group relative`}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
            whileHover={{
              scale: 1.1,
              rotateY: 180,
              z: 20
            }}
            transition={{ duration: 0.3 }}
          >
            <element.icon className={`w-8 h-8 ${element.color} group-hover:scale-110 transition-transform duration-300`} />
            
            {/* 3D Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating Particles */}
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          </motion.div>
        </motion.div>
      ))}

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
              Enterprise-Grade{' '}
              <span className="gradient-text animate-glow">Blockchain Solutions</span>{' '}
              for Global Businesses
            </motion.h1>

            {/* Premium Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl font-medium"
            >
              Trivexa Technologies is a premier blockchain development company trusted by Fortune 500 
              companies and innovative startups worldwide. We deliver secure, scalable, and 
              production-ready blockchain solutions that drive digital transformation.
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
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* Main 3D Container */}
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central 3D Cube with Multiple Faces */}
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  rotateX: [0, 15, -15, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Main Cube */}
                <div className="relative w-48 h-48" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Front Face */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-600 to-navy-600 rounded-2xl shadow-2xl flex items-center justify-center hover-glow animate-pulse-glow"
                    style={{ transform: 'translateZ(24px)' }}
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                  >
                    <div className="text-white text-center">
                      <Database className="w-16 h-16 mx-auto mb-2 animate-float" />
                      <span className="text-sm font-semibold text-premium">Blockchain</span>
                    </div>
                  </motion.div>
                  
                  {/* Back Face */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl flex items-center justify-center"
                    style={{ transform: 'translateZ(-24px) rotateY(180deg)' }}
                  >
                    <div className="text-white text-center">
                      <Network className="w-16 h-16 mx-auto mb-2 animate-float" />
                      <span className="text-sm font-semibold text-premium">Web3</span>
                    </div>
                  </motion.div>
                  
                  {/* Right Face */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-2xl flex items-center justify-center"
                    style={{ transform: 'rotateY(90deg) translateZ(24px)' }}
                  >
                    <div className="text-white text-center">
                      <Shield className="w-16 h-16 mx-auto mb-2 animate-float" />
                      <span className="text-sm font-semibold text-premium">Security</span>
                    </div>
                  </motion.div>
                  
                  {/* Left Face */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl shadow-2xl flex items-center justify-center"
                    style={{ transform: 'rotateY(-90deg) translateZ(24px)' }}
                  >
                    <div className="text-white text-center">
                      <Cpu className="w-16 h-16 mx-auto mb-2 animate-float" />
                      <span className="text-sm font-semibold text-premium">Smart</span>
                    </div>
                  </motion.div>
                  
                  {/* Top Face */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center"
                    style={{ transform: 'rotateX(90deg) translateZ(24px)' }}
                  >
                    <div className="text-white text-center">
                      <Layers className="w-16 h-16 mx-auto mb-2 animate-float" />
                      <span className="text-sm font-semibold text-premium">Layer</span>
                    </div>
                  </motion.div>
                  
                  {/* Bottom Face */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center"
                    style={{ transform: 'rotateX(-90deg) translateZ(24px)' }}
                  >
                    <div className="text-white text-center">
                      <Globe className="w-16 h-16 mx-auto mb-2 animate-float" />
                      <span className="text-sm font-semibold text-premium">Global</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Multi-Layer 3D Orbiting Elements */}
              
              {/* Layer 1: Inner Orbit - Fast */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2">
                  {/* 8 orbiting elements */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                    <motion.div
                      key={index}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${angle}deg) translateX(160px) rotate(-${angle}deg) translateZ(20px)`
                      }}
                    >
                      <motion.div
                        className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg hover-glow"
                        whileHover={{ scale: 1.2, rotateY: 180 }}
                        style={{
                          background: `linear-gradient(135deg, ${['#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#ef4444', '#06b6d4', '#84cc16'][index]}, ${['#059669', '#1d4ed8', '#7c3aed', '#db2777', '#d97706', '#dc2626', '#0891b2', '#65a30d'][index]})`
                        }}
                      >
                        {[Code, Shield, Lock, Cpu, Network, Layers, Hexagon, Circle][index] && (
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          >
                            {React.createElement([Code, Shield, Lock, Cpu, Network, Layers, Hexagon, Circle][index], { 
                              className: "w-6 h-6 text-white" 
                            })}
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Layer 2: Middle Orbit - Medium Speed */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
                  {/* 6 orbiting elements */}
                  {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                    <motion.div
                      key={index}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${angle}deg) translateX(192px) rotate(-${angle}deg) translateZ(40px)`
                      }}
                    >
                      <motion.div
                        className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg hover-glow"
                        whileHover={{ scale: 1.3, rotateX: 180 }}
                        style={{
                          background: `linear-gradient(135deg, ${['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'][index]}, ${['#7c3aed', '#db2777', '#d97706', '#059669', '#1d4ed8', '#dc2626'][index]})`
                        }}
                      >
                        {[Smartphone, Globe, Database, Activity, TrendingUp, Target][index] && (
                          <motion.div
                            animate={{ rotate: [0, -360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          >
                            {React.createElement([Smartphone, Globe, Database, Activity, TrendingUp, Target][index], { 
                              className: "w-7 h-7 text-white" 
                            })}
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Layer 3: Outer Orbit - Slow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2">
                  {/* 4 large orbiting elements */}
                  {[0, 90, 180, 270].map((angle, index) => (
                    <motion.div
                      key={index}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${angle}deg) translateX(250px) rotate(-${angle}deg) translateZ(60px)`
                      }}
                    >
                      <motion.div
                        className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl hover-glow"
                        whileHover={{ scale: 1.4, rotateY: 360 }}
                        style={{
                          background: `linear-gradient(135deg, ${['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b'][index]}, ${['#0891b2', '#7c3aed', '#059669', '#d97706'][index]})`,
                          boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                        }}
                      >
                        {[Rocket, Atom, Brain, CircuitBoard][index] && (
                          <motion.div
                            animate={{ 
                              rotate: [0, 360],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {React.createElement([Rocket, Atom, Brain, CircuitBoard][index], { 
                              className: "w-8 h-8 text-white" 
                            })}
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* 3D Connection Lines Network */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'translateZ(10px)' }}>
                {/* Central Hub Lines */}
                <motion.line
                  x1="50%" y1="50%" x2="50%" y2="20%"
                  stroke="url(#gradient1)" strokeWidth="3"
                  strokeDasharray="8,4" opacity="0.8"
                  animate={{ 
                    strokeDashoffset: [0, -12],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.line
                  x1="50%" y1="50%" x2="50%" y2="80%"
                  stroke="url(#gradient2)" strokeWidth="3"
                  strokeDasharray="8,4" opacity="0.8"
                  animate={{ 
                    strokeDashoffset: [0, -12],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                  }}
                />
                <motion.line
                  x1="50%" y1="50%" x2="20%" y2="50%"
                  stroke="url(#gradient3)" strokeWidth="3"
                  strokeDasharray="8,4" opacity="0.8"
                  animate={{ 
                    strokeDashoffset: [0, -12],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                />
                <motion.line
                  x1="50%" y1="50%" x2="80%" y2="50%"
                  stroke="url(#gradient4)" strokeWidth="3"
                  strokeDasharray="8,4" opacity="0.8"
                  animate={{ 
                    strokeDashoffset: [0, -12],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1.5
                  }}
                />
                
                {/* Diagonal Connection Lines */}
                <motion.line
                  x1="50%" y1="50%" x2="30%" y2="30%"
                  stroke="url(#gradient5)" strokeWidth="2"
                  strokeDasharray="6,3" opacity="0.6"
                  animate={{ 
                    strokeDashoffset: [0, -9],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                  }}
                />
                <motion.line
                  x1="50%" y1="50%" x2="70%" y2="30%"
                  stroke="url(#gradient6)" strokeWidth="2"
                  strokeDasharray="6,3" opacity="0.6"
                  animate={{ 
                    strokeDashoffset: [0, -9],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2.5
                  }}
                />
                <motion.line
                  x1="50%" y1="50%" x2="30%" y2="70%"
                  stroke="url(#gradient7)" strokeWidth="2"
                  strokeDasharray="6,3" opacity="0.6"
                  animate={{ 
                    strokeDashoffset: [0, -9],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 3
                  }}
                />
                <motion.line
                  x1="50%" y1="50%" x2="70%" y2="70%"
                  stroke="url(#gradient8)" strokeWidth="2"
                  strokeDasharray="6,3" opacity="0.6"
                  animate={{ 
                    strokeDashoffset: [0, -9],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 3.5
                  }}
                />
                
                {/* Pulsing Energy Nodes */}
                <motion.circle
                  cx="50%" cy="50%" r="4"
                  fill="url(#gradient1)"
                  animate={{
                    r: [4, 8, 4],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
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
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#84cc16" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Premium Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-4 -right-4 card-premium hover-lift"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 animate-pulse-glow">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Projects</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-4 -left-4 card-premium hover-lift"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 animate-pulse-glow">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
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
