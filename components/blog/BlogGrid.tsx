"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  ArrowRight, 
  Calendar,
  User,
  Clock,
  Tag,
  Loader2
} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Layer-2 Blockchain Solutions",
    excerpt: "Explore how Layer-2 solutions are revolutionizing blockchain scalability and what it means for the future of Web3 applications.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Blockchain",
    tags: ["Layer-2", "Scalability", "Web3"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&crop=center",
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
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center",
    featured: false
  },
  {
    id: 3,
    title: "Building Scalable DApps: A Complete Guide",
    excerpt: "Discover the key strategies and technologies for building decentralized applications that can handle millions of users.",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Web3",
    tags: ["DApps", "Scalability", "Development"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center",
    featured: false
  },
  {
    id: 4,
    title: "DeFi Protocol Development: Key Considerations",
    excerpt: "Essential factors to consider when developing DeFi protocols, from tokenomics to security and user experience.",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "DeFi",
    tags: ["DeFi", "Protocols", "Development"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop&crop=center",
    featured: false
  },
  {
    id: 5,
    title: "NFT Marketplace Development: Complete Guide",
    excerpt: "Step-by-step guide to building a successful NFT marketplace with all the essential features and best practices.",
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "NFT",
    tags: ["NFT", "Marketplace", "Development"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=250&fit=crop&crop=center",
    featured: false
  },
  {
    id: 6,
    title: "Blockchain Integration in Healthcare",
    excerpt: "How blockchain technology is transforming healthcare with secure patient data management and interoperability.",
    author: "James Thompson",
    date: "2024-01-03",
    readTime: "7 min read",
    category: "Industry News",
    tags: ["Healthcare", "Blockchain", "Integration"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center",
    featured: false
  },
  {
    id: 7,
    title: "Web3 Wallet Security: Best Practices",
    excerpt: "Essential security measures to protect your Web3 wallet and digital assets from common threats and attacks.",
    author: "Alex Martinez",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Security",
    tags: ["Web3", "Security", "Wallets"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center",
    featured: false
  },
  {
    id: 8,
    title: "Cross-Chain Bridge Development Guide",
    excerpt: "Learn how to build secure cross-chain bridges for seamless asset transfers between different blockchain networks.",
    author: "Rachel Green",
    date: "2023-12-28",
    readTime: "8 min read",
    category: "Blockchain",
    tags: ["Cross-Chain", "Bridges", "Development"],
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=400&h=250&fit=crop&crop=center",
    featured: false
  },
  {
    id: 9,
    title: "DeFi Yield Farming Strategies",
    excerpt: "Advanced yield farming strategies and risk management techniques for maximizing returns in DeFi protocols.",
    author: "Tom Wilson",
    date: "2023-12-25",
    readTime: "9 min read",
    category: "DeFi",
    tags: ["DeFi", "Yield Farming", "Strategies"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop&crop=center",
    featured: false
  },
  {
    id: 10,
    title: "NFT Metadata Standards and Best Practices",
    excerpt: "Understanding NFT metadata standards, IPFS integration, and best practices for creating robust NFT collections.",
    author: "Sophie Lee",
    date: "2023-12-22",
    readTime: "7 min read",
    category: "NFT",
    tags: ["NFT", "Metadata", "IPFS"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=250&fit=crop&crop=center",
    featured: false
  },
  {
    id: 11,
    title: "Blockchain Consensus Mechanisms Explained",
    excerpt: "A comprehensive guide to different blockchain consensus mechanisms and their trade-offs in security and scalability.",
    author: "Mark Johnson",
    date: "2023-12-20",
    readTime: "10 min read",
    category: "Blockchain",
    tags: ["Consensus", "Blockchain", "Security"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&crop=center",
    featured: false
  },
  {
    id: 12,
    title: "Building Decentralized Identity Solutions",
    excerpt: "How to implement decentralized identity (DID) solutions using blockchain technology for enhanced privacy and security.",
    author: "Anna Chen",
    date: "2023-12-18",
    readTime: "8 min read",
    category: "Web3",
    tags: ["DID", "Identity", "Privacy"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center",
    featured: false
  }
]

export default function BlogGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [visiblePosts, setVisiblePosts] = useState(6)
  const [isLoading, setIsLoading] = useState(false)
  const postsPerLoad = 3

  const handleLoadMore = async () => {
    setIsLoading(true)
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setVisiblePosts(prev => Math.min(prev + postsPerLoad, blogPosts.length))
    setIsLoading(false)
  }

  const displayedPosts = blogPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < blogPosts.length

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest{' '}
            <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with our latest insights, tutorials, and industry analysis 
            from our expert team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-navy-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      {/* Featured Badge */}
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
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

        {/* Load More Button */}
        {hasMorePosts && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <button 
              onClick={handleLoadMore}
              disabled={isLoading}
              className="btn-primary inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Load More Articles
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Showing {visiblePosts} of {blogPosts.length} articles
            </p>
          </motion.div>
        )}

        {/* No More Posts Message */}
        {!hasMorePosts && visiblePosts > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                🎉 You've reached the end! All {blogPosts.length} articles are now displayed.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
