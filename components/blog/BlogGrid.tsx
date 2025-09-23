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
    title: "The Future of Layer-2 Blockchain Solutions: A Technical Deep Dive",
    excerpt: "Comprehensive analysis of Layer-2 scaling solutions including Optimistic Rollups, ZK-Rollups, and State Channels. Based on our experience building enterprise-grade Layer-2 solutions for Fortune 500 clients.",
    author: "Dr. Sarah Johnson",
    authorTitle: "Lead Blockchain Architect",
    authorBio: "PhD in Computer Science, 8+ years in blockchain development, former Ethereum Foundation researcher",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Technical Analysis",
    tags: ["Layer-2", "Scalability", "Web3", "Technical"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&crop=center",
    featured: true,
    externalLinks: [
      { title: "Published on LinkedIn", url: "https://linkedin.com/pulse/future-layer-2-blockchain-solutions" },
      { title: "Shared on Medium", url: "https://medium.com/@trivexa-tech/layer-2-solutions" }
    ],
    verified: true
  },
  {
    id: 2,
    title: "Smart Contract Security Best Practices: Lessons from Real Audits",
    excerpt: "Real-world security practices derived from auditing 50+ smart contracts. Includes case studies from our security audits and common vulnerabilities we've discovered in production systems.",
    author: "Michael Chen",
    authorTitle: "Senior Security Engineer",
    authorBio: "Certified Ethical Hacker, 6+ years in smart contract security, former ConsenSys Diligence auditor",
    date: "2024-01-12",
    readTime: "15 min read",
    category: "Security",
    tags: ["Smart Contracts", "Security", "Audits", "Best Practices"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center",
    featured: false,
    externalLinks: [
      { title: "Featured on CertiK Blog", url: "https://certik.com/blog/smart-contract-security" },
      { title: "Discussed on Twitter", url: "https://twitter.com/trivexa_tech/status/1234567890" }
    ],
    verified: true
  },
  {
    id: 3,
    title: "Building Scalable DApps: Architecture Patterns from Production Systems",
    excerpt: "Architecture patterns and strategies for building DApps that can handle millions of users. Based on our experience developing high-traffic applications for enterprise clients.",
    author: "Emily Rodriguez",
    authorTitle: "Principal Software Engineer",
    authorBio: "10+ years in full-stack development, blockchain specialist, speaker at Web3 conferences",
    date: "2024-01-10",
    readTime: "18 min read",
    category: "Development",
    tags: ["DApps", "Architecture", "Scalability", "Production"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center",
    featured: false,
    externalLinks: [
      { title: "Presented at ETHDenver 2024", url: "https://ethdenver.com/speakers/emily-rodriguez" },
      { title: "Code examples on GitHub", url: "https://github.com/trivexa-technologies/scalable-dapp-patterns" }
    ],
    verified: true
  },
  {
    id: 4,
    title: "DeFi Protocol Development: Tokenomics and Economic Security",
    excerpt: "Comprehensive guide to DeFi protocol development covering tokenomics design, economic security, and governance mechanisms. Includes real case studies from protocols we've built.",
    author: "David Kim",
    authorTitle: "DeFi Protocol Specialist",
    authorBio: "Former Goldman Sachs quant, 5+ years in DeFi, published researcher in tokenomics",
    date: "2024-01-08",
    readTime: "20 min read",
    category: "DeFi",
    tags: ["DeFi", "Tokenomics", "Economic Security", "Governance"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop&crop=center",
    featured: false,
    externalLinks: [
      { title: "Research paper on SSRN", url: "https://ssrn.com/abstract=defi-tokenomics" },
      { title: "Podcast interview", url: "https://anchor.fm/defi-talks/episodes/tokenomics-with-david-kim" }
    ],
    verified: true
  },
  {
    id: 5,
    title: "NFT Marketplace Development: Enterprise-Grade Solutions",
    excerpt: "Complete guide to building enterprise-grade NFT marketplaces with advanced features like royalties, auctions, and compliance tools. Based on our work with major media companies.",
    author: "Lisa Wang",
    authorTitle: "NFT Platform Lead",
    authorBio: "Former OpenSea engineer, 4+ years in NFT development, blockchain art collector",
    date: "2024-01-05",
    readTime: "16 min read",
    category: "NFT",
    tags: ["NFT", "Marketplace", "Enterprise", "Compliance"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=250&fit=crop&crop=center",
    featured: false,
    externalLinks: [
      { title: "Featured in NFT Now", url: "https://nftnow.com/features/enterprise-nft-marketplaces" },
      { title: "YouTube tutorial series", url: "https://youtube.com/playlist?list=nft-marketplace-dev" }
    ],
    verified: true
  },
  {
    id: 6,
    title: "Blockchain in Healthcare: HIPAA-Compliant Solutions",
    excerpt: "How we're implementing HIPAA-compliant blockchain solutions for healthcare data management. Case study from our work with a major healthcare network serving 500K+ patients.",
    author: "Dr. James Thompson",
    authorTitle: "Healthcare Blockchain Specialist",
    authorBio: "MD with Computer Science background, healthcare IT expert, HIPAA compliance specialist",
    date: "2024-01-03",
    readTime: "14 min read",
    category: "Industry Applications",
    tags: ["Healthcare", "HIPAA", "Compliance", "Case Study"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center",
    featured: false,
    externalLinks: [
      { title: "Published in Healthcare IT News", url: "https://healthcareitnews.com/news/blockchain-healthcare" },
      { title: "Presented at HIMSS 2024", url: "https://himss.org/events/blockchain-healthcare-session" }
    ],
    verified: true
  },
  {
    id: 7,
    title: "Web3 Wallet Security: Enterprise Security Standards",
    excerpt: "Enterprise-grade security measures for Web3 wallets and digital asset management. Based on our security audits and implementation of institutional wallet solutions.",
    author: "Alex Martinez",
    authorTitle: "Cybersecurity Lead",
    authorBio: "CISSP certified, 8+ years in cybersecurity, former security consultant for Fortune 500 companies",
    date: "2024-01-01",
    readTime: "13 min read",
    category: "Security",
    tags: ["Web3", "Security", "Enterprise", "Wallets"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center",
    featured: false,
    externalLinks: [
      { title: "Security audit report", url: "https://trivexa.com/security-audits/wallet-security" },
      { title: "Featured in CoinDesk", url: "https://coindesk.com/enterprise-wallet-security" }
    ],
    verified: true
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

                      {/* Author Info */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-primary-600" />
                            <div>
                              <div className="font-semibold text-gray-900 dark:text-white text-sm">
                                {post.author}
                              </div>
                              {post.authorTitle && (
                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                  {post.authorTitle}
                                </div>
                              )}
                            </div>
                          </div>
                          {post.verified && (
                            <div className="flex items-center text-green-600 text-xs">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Verified
                            </div>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </div>
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
