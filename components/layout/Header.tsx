"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown,
  Code,
  Smartphone,
  Globe,
  Database,
  Users,
  Briefcase,
  FileText,
  MessageCircle,
  HelpCircle,
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
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    icon: Code,
    children: [
      { name: 'Blockchain Development', href: '/services/layer1-blockchain' },
      { name: 'Web & Mobile Development', href: '/services/web-mobile-development' },
      { name: 'DApps & Smart Contracts', href: '/services/smart-contracts' },
      { name: 'AI-Powered Solutions', href: '/services/ai-solutions' },
    ]
  },
  { 
    name: 'Solutions', 
    href: '/solutions',
    icon: Database
  },
  { 
    name: 'Industries', 
    href: '/industries',
    icon: Globe
  },
  { 
    name: 'Portfolio', 
    href: '/portfolio',
    icon: Briefcase
  },
  { 
    name: 'About', 
    href: '/about',
    icon: Users
  },
  { 
    name: 'Blog', 
    href: '/blog',
    icon: FileText
  },
  { 
    name: 'Careers', 
    href: '/careers',
    icon: Users
  },
  { 
    name: 'Contact', 
    href: '/contact',
    icon: MessageCircle
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            <div className="hidden lg:flex space-x-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "glass-effect shadow-2xl border-b border-white/20 dark:border-gray-700/30" 
          : "bg-transparent"
      )}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      role="banner"
      aria-label="Main navigation"
    >
      {/* 3D Background Layers */}
      {isScrolled && (
        <>
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-gradient-shift"></div>
          </div>
          
          {/* 3D Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'background-shift 15s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Floating 3D Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[Shield, Lock, Cpu, Network, Layers, Hexagon].map((Icon, index) => (
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
                  duration: 20 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 2
                }}
                style={{
                  left: `${10 + index * 15}%`,
                  top: `${20 + (index % 3) * 20}%`,
                  transform: 'translateZ(5px)'
                }}
              >
                <Icon className="w-full h-full text-primary-500" />
              </motion.div>
            ))}
          </div>
        </>
      )}
      
      <nav className="container-custom" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* 3D Premium Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative z-10">
            <motion.div 
              className="relative"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                rotateX: 5
              }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                className="w-12 h-12 rounded-xl overflow-hidden shadow-lg"
                style={{
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image 
                  src="/logo.png" 
                  alt="Trivexa Technologies Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                  onLoad={() => console.log('Header logo loaded successfully')}
                  onError={() => console.log('Header logo failed to load')}
                />
              </motion.div>
              
              {/* 3D Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse-glow"></div>
              
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
            </motion.div>
            
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text text-premium">Trivexa Technologies</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Enterprise Blockchain Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group z-40">
                {item.children ? (
                  <motion.div
                    className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover-lift group relative z-10"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      z: 10
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <span className="font-semibold text-premium">{item.name}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      z: 10
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover-lift group relative z-10"
                    >
                      {item.icon && (
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                      )}
                      <span className="font-semibold text-premium">{item.name}</span>
                    </Link>
                  </motion.div>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, rotateX: -15 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, y: 10, rotateX: -15 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 mt-2 w-64 py-2 z-50"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '1rem',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
                          zIndex: 9999
                        }}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.children.map((child, index) => (
                          <motion.div
                            key={child.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                          >
                            <Link
                              href={child.href}
                              className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-medium hover-lift relative group"
                            >
                              <motion.span
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                {child.name}
                              </motion.span>
                              
                              {/* Hover indicator */}
                              <motion.div
                                className="absolute left-0 top-1/2 w-1 h-0 bg-primary-500 rounded-r-full"
                                initial={{ height: 0 }}
                                whileHover={{ height: '60%' }}
                                transition={{ duration: 0.2 }}
                              />
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* 3D Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-xl glass-effect hover-lift group transition-all duration-300 relative z-10"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                rotateZ: 5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500 group-hover:animate-spin" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 group-hover:animate-pulse" />
                )}
              </motion.div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/20 to-navy-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            {/* Premium CTA Button */}
            <motion.div
              whileHover={{ 
                scale: 1.08, 
                rotateY: 8,
                rotateZ: 2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="hidden sm:block"
            >
              <a
                href="https://wa.me/6301846681?text=Hi%20Trivexa%20Technologies!%20I'm%20interested%20in%20your%20blockchain%20development%20services.%20Can%20you%20help%20me%20get%20started?"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden"
              >
                {/* Premium Button Container */}
                <div className="relative px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-700 to-navy-600 rounded-2xl shadow-2xl border border-primary-500/20">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-navy-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -top-2 -left-2 w-0 h-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:w-full group-hover:h-full transition-all duration-700 ease-out"></div>
                  
                  {/* Button Content */}
                  <div className="relative flex items-center space-x-3">
                    <span className="text-white font-bold text-lg tracking-wide">
                      Get Started
                    </span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <svg 
                      className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  
                  {/* Premium Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-navy-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-3 h-3 bg-white/20 rounded-bl-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 bg-white/20 rounded-tr-2xl"></div>
                </div>
              </a>
            </motion.div>

            {/* 3D Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl glass-effect hover-lift group transition-all duration-300 relative z-10"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                rotateZ: 5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{ transformStyle: 'preserve-3d' }}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" /> : <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />}
            </motion.button>
          </div>
        </div>

        {/* 3D Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, rotateX: -15 }}
              animate={{ opacity: 1, height: 'auto', rotateX: 0 }}
              exit={{ opacity: 0, height: 0, rotateX: -15 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/20 dark:border-gray-700/30 relative z-10"
              id="mobile-navigation"
              role="navigation"
              aria-label="Mobile navigation menu"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="px-4 py-2">
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.name}</span>
                        </div>
                        <div className="ml-6 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}