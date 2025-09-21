"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Shield,
  Globe,
  TrendingUp,
  Users
} from 'lucide-react'

const categories = [
  {
    name: "Blockchain Development",
    description: "Latest trends and insights in blockchain technology",
    icon: Code,
    count: 8,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "DeFi",
    description: "Decentralized finance protocols and strategies",
    icon: Database,
    count: 6,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Security",
    description: "Blockchain security best practices and audits",
    icon: Shield,
    count: 4,
    color: "from-red-500 to-pink-600"
  },
  {
    name: "Web3",
    description: "The future of the decentralized web",
    icon: Globe,
    count: 5,
    color: "from-purple-500 to-violet-600"
  },
  {
    name: "NFT",
    description: "Non-fungible tokens and digital collectibles",
    icon: TrendingUp,
    count: 3,
    color: "from-orange-500 to-yellow-600"
  },
  {
    name: "Industry News",
    description: "Latest blockchain industry updates and news",
    icon: Users,
    count: 7,
    color: "from-indigo-500 to-blue-600"
  }
]

export default function BlogCategories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Explore by{' '}
            <span className="gradient-text">Category</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Browse our articles by category to find content that matches your interests 
            and expertise level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {category.count} articles
                    </span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
