"use client"

import React from 'react'
import { motion } from 'framer-motion'
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

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  showText?: boolean
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  const floatingIcons = [
    Code, Database, Globe, Smartphone, Shield, Lock, Cpu, Network,
    Layers, Hexagon, Circle, Square, Triangle, Star, Diamond,
    Activity, TrendingUp, Target, Rocket, Atom, Brain, CircuitBoard, Zap, Sparkles
  ]

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* 3D Loading Container */}
      <div className="relative" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
        {/* 3D Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-navy-500 opacity-5 rounded-full blur-2xl animate-pulse-glow"></div>
        
        {/* Floating 3D Icons */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {floatingIcons.slice(0, 8).map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute w-3 h-3 opacity-20"
              animate={{
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0],
                rotate: [0, 180, 360],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 15 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1
              }}
              style={{
                left: `${20 + index * 10}%`,
                top: `${20 + (index % 4) * 15}%`,
                transform: 'translateZ(10px)'
              }}
            >
              <Icon className="w-full h-full text-primary-500" />
            </motion.div>
          ))}
        </div>
        
        {/* Main 3D Spinner */}
        <motion.div 
          className={`relative ${sizeClasses[size]} bg-gradient-to-br from-primary-600 to-navy-600 rounded-full flex items-center justify-center shadow-2xl`}
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 15, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Inner Rotating Ring */}
          <motion.div
            className="absolute inset-2 border-2 border-white/30 rounded-full"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Central Icon */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Database className="w-8 h-8 text-white" />
          </motion.div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-navy-600 rounded-full blur-lg opacity-0 animate-pulse-glow"></div>
        </motion.div>
        
        {/* Orbiting Elements */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {[0, 90, 180, 270].map((angle, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${angle}deg) translateX(${size === 'sm' ? 20 : size === 'md' ? 30 : size === 'lg' ? 40 : 50}px) rotate(-${angle}deg) translateZ(15px)`
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Loading Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-center ${textSizeClasses[size]}`}
        >
          <motion.p
            className="text-gray-600 dark:text-gray-300 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {text}
          </motion.p>
          
          {/* Animated Dots */}
          <div className="flex justify-center space-x-1 mt-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-primary-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default LoadingSpinner
