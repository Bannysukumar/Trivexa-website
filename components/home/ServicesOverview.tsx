"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database,
  Bot,
  Shield,
  Zap,
  ArrowRight,
  Layers,
  Link as LinkIcon,
  Cpu,
  Network,
  Lock,
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
  Sparkles
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: "Layer-1 Blockchain Development",
    description: "Build custom blockchain networks from scratch with advanced consensus mechanisms, smart contract capabilities, and enterprise-grade security.",
    features: ["Custom Consensus Algorithms", "Smart Contract Integration", "Enterprise Security", "Scalable Architecture"],
    href: "/services/layer1-blockchain",
    color: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    floatingIcons: [Code, Database, Network, Shield],
    rotationSpeed: 12
  },
  {
    icon: Layers,
    title: "Layer-2 Blockchain Solutions",
    description: "Implement scaling solutions like sidechains, state channels, and rollups to enhance transaction throughput and reduce costs.",
    features: ["Sidechain Development", "State Channels", "Rollup Solutions", "Cross-chain Bridges"],
    href: "/services/layer2-blockchain",
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    floatingIcons: [Layers, Hexagon, Circle, Square],
    rotationSpeed: 15
  },
  {
    icon: Shield,
    title: "Smart Contract Development",
    description: "Create secure, audited smart contracts for DeFi, NFTs, DAOs, and enterprise applications with comprehensive testing.",
    features: ["DeFi Protocols", "NFT Marketplaces", "DAO Governance", "Security Audits"],
    href: "/services/smart-contracts",
    color: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    floatingIcons: [Shield, Lock, Cpu, Network],
    rotationSpeed: 18
  },
  {
    icon: Globe,
    title: "DApp Development",
    description: "Build decentralized applications with modern frontend frameworks, Web3 integration, and seamless user experiences.",
    features: ["React/Next.js Frontend", "Web3 Integration", "Wallet Connectivity", "User Experience"],
    href: "/services/dapp-development",
    color: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    floatingIcons: [Globe, Smartphone, Triangle, Star],
    rotationSpeed: 14
  },
  {
    icon: Smartphone,
    title: "Web3 Development",
    description: "Develop Web3 applications with advanced features like IPFS integration, decentralized storage, and blockchain connectivity.",
    features: ["IPFS Integration", "Decentralized Storage", "Blockchain APIs", "Web3 Libraries"],
    href: "/services/web3-development",
    color: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    floatingIcons: [Smartphone, Diamond, Activity, Target],
    rotationSpeed: 16
  },
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description: "Integrate artificial intelligence with blockchain technology for automated trading, predictive analytics, and smart automation.",
    features: ["AI Trading Bots", "Predictive Analytics", "Smart Automation", "Machine Learning"],
    href: "/services/ai-solutions",
    color: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-indigo-900/20",
    floatingIcons: [Bot, Rocket, Atom, Brain],
    rotationSpeed: 20
  }
]

export default function ServicesOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Blockchain Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive blockchain development services to help businesses 
            leverage the power of decentralized technology for innovation and growth.
          </p>
        </motion.div>

        {/* 3D Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="relative h-full">
                {/* 3D Background Layers */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-50`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-3xl blur-2xl group-hover:opacity-15 transition-all duration-500`}></div>
                
                {/* Floating 3D Icons */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {service.floatingIcons.map((Icon, iconIndex) => (
                    <motion.div
                      key={iconIndex}
                      className="absolute w-4 h-4 opacity-20"
                      animate={{
                        x: [0, 15, -15, 0],
                        y: [0, -15, 15, 0],
                        rotate: [0, 180, 360],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: service.rotationSpeed,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: iconIndex * 1.5
                      }}
                      style={{
                        left: `${20 + iconIndex * 20}%`,
                        top: `${20 + iconIndex * 15}%`,
                        transform: 'translateZ(10px)'
                      }}
                    >
                      <Icon className={`w-full h-full ${service.color.replace('from-', 'text-').replace(' to-', '-')}`} />
                    </motion.div>
                  ))}
                </div>
                
                {/* Main 3D Card */}
                <motion.div 
                  className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 h-full"
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
                  {/* 3D Icon Container */}
                  <motion.div 
                    className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    style={{
                      background: `linear-gradient(135deg, ${service.color.replace('from-', '').replace(' to-', ', ')})`,
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
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Zap className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Call to Action */}
                  <Link 
                    href={service.href} 
                    className={`inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Business with Blockchain?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how our blockchain solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="btn-secondary"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}