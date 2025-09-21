"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Search, 
  Filter,
  Calendar,
  Tag,
  User
} from 'lucide-react'

const categories = [
  { name: "All", count: 25, active: true },
  { name: "Blockchain", count: 8, active: false },
  { name: "DeFi", count: 6, active: false },
  { name: "NFT", count: 4, active: false },
  { name: "Security", count: 3, active: false },
  { name: "Web3", count: 4, active: false }
]

const recentPosts = [
  { title: "The Future of Layer-2 Blockchain Solutions", date: "2024-01-15" },
  { title: "Smart Contract Security Best Practices", date: "2024-01-12" },
  { title: "Building Scalable DApps: A Complete Guide", date: "2024-01-10" },
  { title: "DeFi Protocol Development: Key Considerations", date: "2024-01-08" }
]

const popularTags = [
  "Blockchain", "DeFi", "NFT", "Smart Contracts", "Web3", 
  "Security", "Layer-2", "DApps", "Ethereum", "Cryptocurrency"
]

export default function BlogSearch() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <section ref={ref} className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Search and Filters */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Search Bar */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Search className="w-5 h-5 mr-2 text-primary-600" />
                  Search Articles
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for articles..."
                    className="w-full px-4 py-3 pl-10 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-primary-600" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        activeCategory === category.name
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                  Recent Posts
                </h3>
                <div className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-primary-600" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`}
                </h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {searchQuery ? `Search results for "${searchQuery}"` : 'Latest articles'}
                </div>
              </div>

              {/* Search Results Placeholder */}
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {searchQuery ? 'Search Results' : 'Blog Articles'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {searchQuery 
                    ? `Searching for articles containing "${searchQuery}"...`
                    : 'Blog articles will be displayed here with filtering and search functionality.'
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
