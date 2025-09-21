"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database,
  Bot,
  Shield,
  Filter
} from 'lucide-react'

const categories = [
  {
    id: 'all',
    name: 'All Projects',
    icon: Filter,
    count: 25
  },
  {
    id: 'defi',
    name: 'DeFi',
    icon: Database,
    count: 8
  },
  {
    id: 'nft',
    name: 'NFT',
    icon: Globe,
    count: 6
  },
  {
    id: 'smart-contracts',
    name: 'Smart Contracts',
    icon: Code,
    count: 5
  },
  {
    id: 'dapps',
    name: 'DApps',
    icon: Smartphone,
    count: 4
  },
  {
    id: 'ai',
    name: 'AI Solutions',
    icon: Bot,
    count: 2
  }
]

interface PortfolioFilterProps {
  onFilterChange: (filter: string) => void
  activeFilter: string
}

export default function PortfolioFilter({ onFilterChange, activeFilter }: PortfolioFilterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Filter by{' '}
            <span className="gradient-text">Category</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our projects by category to find solutions relevant to your industry
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onFilterChange(category.id)}
              className={`group flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 shadow-md hover:shadow-lg'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeFilter === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
