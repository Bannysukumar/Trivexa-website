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
  Sparkles,
  Loader2
} from 'lucide-react'

interface Button3DProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  disabled?: boolean
  className?: string
  icon?: React.ComponentType<any>
  floatingIcons?: React.ComponentType<any>[]
  rotationSpeed?: number
}

const Button3D: React.FC<Button3DProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  icon: Icon,
  floatingIcons = [Code, Database, Globe, Smartphone],
  rotationSpeed = 15
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const variantClasses = {
    primary: 'bg-gradient-to-br from-primary-600 to-navy-600 text-white',
    secondary: 'bg-gradient-to-br from-gray-600 to-gray-700 text-white',
    outline: 'border-2 border-primary-600 text-primary-600 bg-transparent',
    ghost: 'text-primary-600 bg-transparent'
  }

  const bgGradients = {
    primary: 'from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20',
    secondary: 'from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20',
    outline: 'from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20',
    ghost: 'from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20'
  }

  const colorGradients = {
    primary: 'from-primary-500 to-navy-500',
    secondary: 'from-gray-500 to-gray-600',
    outline: 'from-primary-500 to-primary-600',
    ghost: 'from-primary-500 to-primary-600'
  }

  const buttonContent = (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden rounded-xl font-semibold transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled && !loading ? { 
        scale: 1.05, 
        rotateY: 5,
        rotateX: 5,
        z: 20
      } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      transition={{ duration: 0.2 }}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* 3D Background Layers */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[variant]} opacity-50`}></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${colorGradients[variant]} opacity-5 blur-2xl group-hover:opacity-15 transition-all duration-500`}></div>
      
      {/* Floating 3D Icons */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {floatingIcons.map((FloatingIcon, index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 opacity-20"
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: rotationSpeed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 1
            }}
            style={{
              left: `${20 + index * 20}%`,
              top: `${20 + index * 15}%`,
              transform: 'translateZ(10px)'
            }}
          >
            <FloatingIcon className={`w-full h-full ${colorGradients[variant].replace('from-', 'text-').replace(' to-', '-')}`} />
          </motion.div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center space-x-2">
        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-5 h-5" />
          </motion.div>
        ) : Icon ? (
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        ) : null}
        
        <span>{children}</span>
      </div>
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorGradients[variant]} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
      
      {/* Floating Particles */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
        animate={{
          y: [0, -5, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5
        }}
      />
    </motion.button>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className="inline-block"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return buttonContent
}

export default Button3D
