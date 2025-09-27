"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
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

export default function HeroFloatingElements() {
  return (
    <>
      {/* 3D Floating Elements - Hidden on mobile for performance */}
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
    </>
  )
}
