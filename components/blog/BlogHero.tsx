"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FileText, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Search,
  Calendar,
  User,
  Tag,
  Clock
} from 'lucide-react'
import Link from 'next/link'

const featuredPosts = [
  {
    id: 1,
    title: "The Future of Layer-2 Blockchain Solutions",
    excerpt: "Explore how Layer-2 solutions are revolutionizing blockchain scalability and what it means for the future of Web3 applications.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Blockchain",
    tags: ["Layer-2", "Scalability", "Web3"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "Smart Contract Security Best Practices",
    excerpt: "Learn essential security practices for smart contract development to protect your DeFi protocols and DApps from vulnerabilities.",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Security",
    tags: ["Smart Contracts", "Security", "DeFi"],
    image: "/api/placeholder/600/400",
    featured: true
  }
]

export default function BlogHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 blockchain-bg opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <FileText className="w-4 h-4" />
            <span>Latest Blockchain Insights & News</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Blockchain{' '}
            <span className="gradient-text">Insights</span>{' '}
            & News
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Stay updated with the latest blockchain insights, Web3 news, development guides, 
            and industry trends from our expert team. Learn from real-world case studies 
            and cutting-edge research.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {[
              "Expert Insights",
              "Latest Trends",
              "Practical Guides",
              "Industry News"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-full">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-navy-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
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
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
