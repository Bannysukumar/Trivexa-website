"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  ArrowRight, 
  Calendar,
  User,
  Clock,
  Tag,
  TrendingUp
} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Layer-2 Blockchain Solutions",
    excerpt: "Explore how Layer-2 solutions are revolutionizing blockchain scalability and what it means for the future of Web3 applications.",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=400&h=250&fit=crop&crop=center",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Blockchain",
    tags: ["Layer-2", "Scalability", "Web3"],
    href: "/blog/layer2-blockchain-solutions"
  },
  {
    id: 2,
    title: "Smart Contract Security Best Practices",
    excerpt: "Learn essential security practices for smart contract development to protect your DeFi protocols and DApps from vulnerabilities.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Security",
    tags: ["Smart Contracts", "Security", "DeFi"],
    href: "/blog/smart-contract-security-best-practices"
  },
  {
    id: 3,
    title: "Building Scalable DApps: A Complete Guide",
    excerpt: "Discover the key strategies and technologies for building decentralized applications that can handle millions of users.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Development",
    tags: ["DApps", "Scalability", "Development"],
    href: "/blog/building-scalable-dapps-guide"
  }
]

const categories = [
  { name: "Blockchain", count: 15, href: "/blog/category/blockchain" },
  { name: "Development", count: 12, href: "/blog/category/development" },
  { name: "Security", count: 8, href: "/blog/category/security" },
  { name: "Web3", count: 10, href: "/blog/category/web3" },
  { name: "DeFi", count: 6, href: "/blog/category/defi" },
  { name: "NFT", count: 4, href: "/blog/category/nft" }
]

export default function BlogPreview() {
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
            Latest Insights &{' '}
            <span className="gradient-text">Industry News</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and best practices in blockchain 
            development and Web3 technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-navy-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                      {/* Image */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>

                        {/* CTA */}
                        <Link
                          href={post.href}
                          className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Get the latest blockchain insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="w-full btn-primary text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/blog"
            className="btn-primary"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
