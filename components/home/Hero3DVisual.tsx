"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Database, 
  Network, 
  Shield, 
  Cpu, 
  Layers, 
  Globe, 
  Code, 
  Shield as ShieldIcon, 
  Lock, 
  Cpu as CpuIcon, 
  Network as NetworkIcon, 
  Layers as LayersIcon, 
  Hexagon, 
  Circle, 
  Smartphone, 
  Globe as GlobeIcon, 
  Database as DatabaseIcon, 
  Activity, 
  TrendingUp, 
  Target, 
  Rocket, 
  Atom, 
  Brain, 
  CircuitBoard
} from 'lucide-react'

export default function Hero3DVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* Main 3D Container */}
      <div className="relative w-full h-96 lg:h-[500px]">
        {/* Mobile-optimized simple version */}
        <div className="lg:hidden flex items-center justify-center h-full">
          <div className="w-32 h-32 bg-gradient-to-br from-primary-600 to-navy-600 rounded-2xl shadow-2xl flex items-center justify-center">
            <Database className="w-16 h-16 text-white" />
          </div>
        </div>
        
        {/* Central 3D Cube with Multiple Faces - Desktop only */}
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
          className="absolute inset-0 flex items-center justify-center hidden lg:flex"
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

        {/* Multi-Layer 3D Orbiting Elements - Simplified on mobile */}
        <div className="hidden lg:block">
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
        </div>

        {/* 3D Connection Lines Network - Hidden on mobile */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ transform: 'translateZ(10px)' }}>
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
  )
}
