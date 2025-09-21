"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  Code, 
  Globe, 
  Award,
  TrendingUp,
  Shield,
  Database,
  Network,
  Lock,
  Cpu,
  Layers,
  Hexagon,
  Circle,
  Square,
  Triangle,
  Star,
  Diamond,
  Activity,
  Target,
  Rocket,
  Atom,
  Brain,
  CircuitBoard,
  Zap,
  Sparkles
} from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Global enterprises and startups",
    color: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    floatingIcons: [Users, Globe, Award, TrendingUp],
    rotationSpeed: 12
  },
  {
    icon: Code,
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
    description: "Blockchain and Web3 solutions",
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    floatingIcons: [Code, Database, Network, Shield],
    rotationSpeed: 15
  },
  {
    icon: Globe,
    value: 15,
    suffix: "+",
    label: "Countries Served",
    description: "Worldwide client base",
    color: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    floatingIcons: [Globe, Layers, Hexagon, Circle],
    rotationSpeed: 18
  },
  {
    icon: Award,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "In blockchain development",
    color: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    floatingIcons: [Award, Square, Triangle, Star],
    rotationSpeed: 14
  },
  {
    icon: TrendingUp,
    value: 99,
    suffix: "%",
    label: "Success Rate",
    description: "Project completion rate",
    color: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    floatingIcons: [TrendingUp, Diamond, Activity, Target],
    rotationSpeed: 16
  },
  {
    icon: Shield,
    value: 24,
    suffix: "/7",
    label: "Support",
    description: "Round-the-clock assistance",
    color: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-indigo-900/20",
    floatingIcons: [Shield, Rocket, Atom, Brain],
    rotationSpeed: 20
  }
]

// Animated Counter Component
function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const increment = value / (duration / 16) // 60fps
      const timer = setInterval(() => {
        setCount(prev => {
          const next = prev + increment
          if (next >= value) {
            clearInterval(timer)
            return value
          }
          return next
        })
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, value, duration])

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-bold gradient-text"
    >
      {Math.floor(count)}{suffix}
    </motion.span>
  )
}

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped businesses across the globe 
            transform their operations with cutting-edge blockchain solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="relative">
                {/* 3D Background Layers */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-3xl opacity-50`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-3xl blur-2xl group-hover:opacity-15 transition-all duration-500`}></div>
                
                {/* Floating 3D Icons */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {stat.floatingIcons.map((Icon, iconIndex) => (
                    <motion.div
                      key={iconIndex}
                      className="absolute w-4 h-4 opacity-20"
                      animate={{
                        x: [0, 10, -10, 0],
                        y: [0, -10, 10, 0],
                        rotate: [0, 180, 360],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: stat.rotationSpeed,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: iconIndex * 1
                      }}
                      style={{
                        left: `${20 + iconIndex * 20}%`,
                        top: `${20 + iconIndex * 15}%`,
                        transform: 'translateZ(10px)'
                      }}
                    >
                      <Icon className={`w-full h-full ${stat.color.replace('from-', 'text-').replace(' to-', '-')}`} />
                    </motion.div>
                  ))}
                </div>
                
                {/* Main 3D Card */}
                <motion.div 
                  className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20 dark:border-gray-700/30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    z: 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* 3D Icon Container */}
                  <motion.div 
                    className={`relative w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    style={{
                      background: `linear-gradient(135deg, ${stat.color.replace('from-', '').replace(' to-', ', ')})`,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 180,
                      rotateZ: 10
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <stat.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </motion.div>

                  {/* Animated Counter Value */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="mb-2"
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}