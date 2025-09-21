"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone,
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
  CircuitBoard,
  Zap,
  Sparkles
} from 'lucide-react'

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className = '' }) => {
  const floatingIcons = [
    Code, Database, Globe, Smartphone, Shield, Lock, Cpu, Network,
    Layers, Hexagon, Circle, Square, Triangle, Star, Diamond,
    Activity, TrendingUp, Target, Rocket, Atom, Brain, CircuitBoard, Zap, Sparkles
  ]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-transition"
        initial={{ opacity: 0, y: 20, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, y: -20, rotateX: 15 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`relative ${className}`}
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        {/* 3D Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-gradient-shift"></div>
          </div>
          
          {/* 3D Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              animation: 'background-shift 20s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Floating 3D Elements */}
          {floatingIcons.slice(0, 12).map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 opacity-10"
              animate={{
                x: [0, 30, -30, 0],
                y: [0, -30, 30, 0],
                rotate: [0, 180, 360],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 20 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1.5
              }}
              style={{
                left: `${10 + (index % 8) * 12}%`,
                top: `${10 + (index % 6) * 15}%`,
                transform: 'translateZ(20px)'
              }}
            >
              <Icon className="w-full h-full text-primary-500" />
            </motion.div>
          ))}
          
          {/* Floating 3D Shapes */}
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5 blur-3xl"
            animate={{
              x: [0, 100, -80, 0],
              y: [0, -100, 80, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '10%', left: '10%' }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-pink-400/5 to-orange-400/5 blur-3xl"
            animate={{
              x: [0, -120, 100, 0],
              y: [0, 120, -100, 0],
              scale: [1, 0.8, 1.3, 1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '60%', right: '10%' }}
          />
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-green-400/5 to-cyan-400/5 blur-3xl"
            animate={{
              x: [0, 150, -120, 0],
              y: [0, -80, 120, 0],
              scale: [1, 1.4, 0.6, 1],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ bottom: '20%', left: '20%' }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
