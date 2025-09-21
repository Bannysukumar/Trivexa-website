"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  ArrowRight, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  TrendingUp,
  Users,
  DollarSign,
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
  Target,
  Rocket,
  Atom,
  Brain,
  CircuitBoard,
  Zap,
  Sparkles
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: "DeFi Lending Platform",
    category: "Fintech",
    description: "Built a comprehensive DeFi lending platform with smart contracts, yield farming, and automated market making capabilities.",
    image: "/api/placeholder/400/300",
    technologies: ["Solidity", "React", "Web3.js", "IPFS"],
    results: [
      { metric: "TVL", value: "$50M+", icon: DollarSign },
      { metric: "Users", value: "10K+", icon: Users },
      { metric: "Growth", value: "300%", icon: TrendingUp }
    ],
    href: "/portfolio/defi-lending-platform",
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    floatingIcons: [DollarSign, TrendingUp, Users, Activity],
    rotationSpeed: 12,
    techIcons: [Code, Database, Globe, Shield]
  },
  {
    id: 2,
    title: "NFT Marketplace",
    category: "Gaming & NFT",
    description: "Developed a full-featured NFT marketplace with minting, trading, and auction capabilities for digital art and collectibles.",
    image: "/api/placeholder/400/300",
    technologies: ["Ethereum", "Next.js", "OpenSea API", "MetaMask"],
    results: [
      { metric: "NFTs", value: "100K+", icon: Database },
      { metric: "Volume", value: "$5M+", icon: DollarSign },
      { metric: "Growth", value: "500%", icon: TrendingUp }
    ],
    href: "/portfolio/nft-marketplace",
    color: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    floatingIcons: [Database, Star, Diamond, Sparkles],
    rotationSpeed: 15,
    techIcons: [Globe, Smartphone, Network, Lock]
  },
  {
    id: 3,
    title: "Supply Chain Tracking",
    category: "Supply Chain",
    description: "Implemented blockchain-based supply chain tracking system for pharmaceutical companies ensuring product authenticity.",
    image: "/api/placeholder/400/300",
    technologies: ["Hyperledger", "React", "Node.js", "MongoDB"],
    results: [
      { metric: "Products", value: "1M+", icon: Database },
      { metric: "Accuracy", value: "99.9%", icon: TrendingUp },
      { metric: "Partners", value: "50+", icon: Users }
    ],
    href: "/portfolio/supply-chain-tracking",
    color: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    floatingIcons: [Target, Rocket, Atom, Brain],
    rotationSpeed: 18,
    techIcons: [Cpu, Network, Layers, Hexagon]
  }
]

export default function CaseStudiesPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Success Stories &{' '}
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore how we've helped businesses across various industries transform their operations 
            with innovative blockchain solutions.
          </p>
        </motion.div>

        {/* 3D Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="relative h-full">
                {/* 3D Background Layers */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} rounded-3xl opacity-50`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-5 rounded-3xl blur-2xl group-hover:opacity-15 transition-all duration-500`}></div>
                
                {/* Floating 3D Icons */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {study.floatingIcons.map((Icon, iconIndex) => (
                    <motion.div
                      key={iconIndex}
                      className="absolute w-6 h-6 opacity-20"
                      animate={{
                        x: [0, 15, -15, 0],
                        y: [0, -15, 15, 0],
                        rotate: [0, 180, 360],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: study.rotationSpeed,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: iconIndex * 1.5
                      }}
                      style={{
                        left: `${15 + iconIndex * 25}%`,
                        top: `${15 + iconIndex * 20}%`,
                        transform: 'translateZ(15px)'
                      }}
                    >
                      <Icon className={`w-full h-full ${study.color.replace('from-', 'text-').replace(' to-', '-')}`} />
                    </motion.div>
                  ))}
                </div>
                
                {/* Main 3D Card */}
                <motion.div 
                  className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 h-full overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5,
                    z: 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* 3D Image Section */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                    {/* 3D Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `
                          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                        animation: 'background-shift 10s ease-in-out infinite'
                      }}></div>
                    </div>
                    
                    {/* 3D Central Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className={`relative w-20 h-20 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center shadow-lg`}
                        style={{
                          background: `linear-gradient(135deg, ${study.color.replace('from-', '').replace(' to-', ', ')})`,
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
                        }}
                        animate={{
                          rotateY: [0, 360],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div
                          animate={{ rotate: [0, -360] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        >
                          <Database className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        {/* Icon Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${study.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      </motion.div>
                    </div>
                    
                    {/* Floating Tech Icons */}
                    <div className="absolute inset-0">
                      {study.techIcons.map((Icon, iconIndex) => (
                        <motion.div
                          key={iconIndex}
                          className="absolute w-8 h-8 opacity-30"
                          animate={{
                            x: [0, 20, -20, 0],
                            y: [0, -20, 20, 0],
                            rotate: [0, 180, 360],
                            scale: [0.8, 1.2, 0.8]
                          }}
                          transition={{
                            duration: 10 + iconIndex * 2,
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
                          <Icon className={`w-full h-full ${study.color.replace('from-', 'text-').replace(' to-', '-')}`} />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* 3D Category Badge */}
                    <motion.div 
                      className="absolute top-4 left-4"
                      whileHover={{ scale: 1.05, rotateY: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg border border-white/20">
                        {study.category}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2 text-sm">
                            <result.icon className={`w-4 h-4 ${study.color.replace('from-', 'text-').replace(' to-', '-')}`} />
                            <span className="font-medium text-gray-700 dark:text-gray-300">{result.value} {result.metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action */}
                    <Link href={study.href} className={`inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors`}>
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-4">
            <Link
              href="/portfolio"
              className="btn-primary"
            >
              View All Case Studies
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}