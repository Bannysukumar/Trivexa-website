"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import React from 'react'
import { 
  ArrowRight, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Bot,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Award
} from 'lucide-react'
import PortfolioFilter from './PortfolioFilter'

const projects = [
  {
    id: 1,
    title: "DeFi Lending Platform",
    category: "defi",
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
    featured: true
  },
  {
    id: 2,
    title: "NFT Marketplace",
    category: "nft",
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
    featured: true
  },
  {
    id: 3,
    title: "Supply Chain Tracking",
    category: "smart-contracts",
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
    featured: false
  },
  {
    id: 4,
    title: "Gaming DApp",
    category: "dapps",
    description: "Created a play-to-earn gaming DApp with NFT integration, token rewards, and multiplayer functionality.",
    image: "/api/placeholder/400/300",
    technologies: ["Unity", "Web3.js", "Solidity", "IPFS"],
    results: [
      { metric: "Players", value: "25K+", icon: Users },
      { metric: "Rewards", value: "$2M+", icon: DollarSign },
      { metric: "Engagement", value: "10x", icon: TrendingUp }
    ],
    href: "/portfolio/gaming-dapp",
    color: "from-orange-500 to-red-600",
    featured: false
  },
  {
    id: 5,
    title: "AI Trading Bot",
    category: "ai",
    description: "Developed an AI-powered trading bot with machine learning algorithms for automated cryptocurrency trading.",
    image: "/api/placeholder/400/300",
    technologies: ["Python", "TensorFlow", "Web3.js", "APIs"],
    results: [
      { metric: "ROI", value: "150%", icon: TrendingUp },
      { metric: "Trades", value: "10K+", icon: Database },
      { metric: "Accuracy", value: "85%", icon: Award }
    ],
    href: "/portfolio/ai-trading-bot",
    color: "from-indigo-500 to-blue-600",
    featured: false
  },
  {
    id: 6,
    title: "Healthcare Records",
    category: "smart-contracts",
    description: "Built a secure healthcare records management system using blockchain for patient data privacy and interoperability.",
    image: "/api/placeholder/400/300",
    technologies: ["Ethereum", "React", "IPFS", "Encryption"],
    results: [
      { metric: "Records", value: "500K+", icon: Database },
      { metric: "Hospitals", value: "20+", icon: Users },
      { metric: "Security", value: "100%", icon: Award }
    ],
    href: "/portfolio/healthcare-records",
    color: "from-red-500 to-pink-600",
    featured: false
  }
]

const getCategoryIcon = (category: string) => {
  const icons: { [key: string]: any } = {
    defi: Database,
    nft: Globe,
    'smart-contracts': Code,
    dapps: Smartphone,
    ai: Bot
  }
  return icons[category] || Code
}

export default function PortfolioGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900" id="portfolio-grid">
      <div className="container-custom">
        {/* Filter Component */}
        <PortfolioFilter 
          onFilterChange={setActiveFilter} 
          activeFilter={activeFilter} 
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                          {React.createElement(getCategoryIcon(project.category), { className: "w-8 h-8 text-white" })}
                        </div>
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                          {project.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Results:</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {project.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center">
                              <div className="flex items-center justify-center mb-1">
                                <result.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                              </div>
                              <div className="text-lg font-bold text-gray-900 dark:text-white">
                                {result.value}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">
                                {result.metric}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex space-x-3">
                        <Link
                          href={project.href}
                          className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                        >
                          View Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          href={project.href}
                          className="inline-flex items-center justify-center px-4 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 group-hover:shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            Load More Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}
