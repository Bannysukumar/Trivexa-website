import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Tag, Search } from 'lucide-react'
import React from 'react'

interface CategoryPageProps {
  params: {
    category: string
  }
}

// Category data
const categoryData = {
  blockchain: {
    name: 'Blockchain',
    description: 'Latest insights and developments in blockchain technology, including Layer-1 and Layer-2 solutions, consensus mechanisms, and blockchain infrastructure.',
    color: 'from-blue-500 to-cyan-600',
    posts: [
      {
        id: 1,
        title: 'The Future of Layer-2 Blockchain Solutions',
        excerpt: 'Explore how Layer-2 solutions are revolutionizing blockchain scalability and what it means for the future of Web3 applications.',
        author: 'Sarah Johnson',
        date: '2024-01-15',
        readTime: '5 min read',
        href: '/blog/layer2-blockchain-solutions'
      },
      {
        id: 2,
        title: 'Blockchain Consensus Mechanisms Explained',
        excerpt: 'Understanding different consensus mechanisms and their impact on blockchain security, scalability, and decentralization.',
        author: 'David Kim',
        date: '2024-01-08',
        readTime: '6 min read',
        href: '/blog/blockchain-consensus-mechanisms'
      },
      {
        id: 3,
        title: 'Cross-Chain Bridge Development Guide',
        excerpt: 'Learn how to build secure cross-chain bridges for seamless asset transfers between different blockchain networks.',
        author: 'Rachel Green',
        date: '2023-12-28',
        readTime: '8 min read',
        href: '/blog/cross-chain-bridge-development'
      }
    ]
  },
  development: {
    name: 'Development',
    description: 'Comprehensive guides and best practices for blockchain development, including smart contracts, DApps, and Web3 applications.',
    color: 'from-green-500 to-emerald-600',
    posts: [
      {
        id: 1,
        title: 'Building Scalable DApps: A Complete Guide',
        excerpt: 'Discover the key strategies and technologies for building decentralized applications that can handle millions of users.',
        author: 'Emily Rodriguez',
        date: '2024-01-10',
        readTime: '8 min read',
        href: '/blog/building-scalable-dapps-guide'
      },
      {
        id: 2,
        title: 'NFT Marketplace Development: Complete Guide',
        excerpt: 'Step-by-step guide to building a comprehensive NFT marketplace with advanced features and security considerations.',
        author: 'Alex Thompson',
        date: '2024-01-05',
        readTime: '10 min read',
        href: '/blog/nft-marketplace-development'
      },
      {
        id: 3,
        title: 'Building Decentralized Identity Solutions',
        excerpt: 'Explore the future of digital identity with blockchain-based solutions for secure, privacy-preserving authentication.',
        author: 'Maria Garcia',
        date: '2023-12-20',
        readTime: '7 min read',
        href: '/blog/decentralized-identity-solutions'
      }
    ]
  },
  security: {
    name: 'Security',
    description: 'Essential security practices, vulnerability assessments, and best practices for securing blockchain applications and smart contracts.',
    color: 'from-red-500 to-pink-600',
    posts: [
      {
        id: 1,
        title: 'Smart Contract Security Best Practices',
        excerpt: 'Learn essential security practices for smart contract development to protect your DeFi protocols and DApps from vulnerabilities.',
        author: 'Michael Chen',
        date: '2024-01-12',
        readTime: '7 min read',
        href: '/blog/smart-contract-security-best-practices'
      },
      {
        id: 2,
        title: 'Web3 Wallet Security: Best Practices',
        excerpt: 'Comprehensive guide to securing your Web3 wallet and protecting your digital assets from common threats.',
        author: 'Lisa Wang',
        date: '2024-01-07',
        readTime: '6 min read',
        href: '/blog/web3-wallet-security'
      },
      {
        id: 3,
        title: 'DeFi Security Audit Checklist',
        excerpt: 'Essential security considerations and audit checklist for DeFi protocols to ensure robust protection against attacks.',
        author: 'James Wilson',
        date: '2023-12-30',
        readTime: '9 min read',
        href: '/blog/defi-security-audit-checklist'
      }
    ]
  },
  web3: {
    name: 'Web3',
    description: 'Exploring the next generation of the internet with decentralized applications, protocols, and technologies that power the Web3 ecosystem.',
    color: 'from-purple-500 to-violet-600',
    posts: [
      {
        id: 1,
        title: 'Web3 Development Trends 2024',
        excerpt: 'Discover the latest trends and innovations shaping the Web3 development landscape in 2024.',
        author: 'Sophie Chen',
        date: '2024-01-18',
        readTime: '5 min read',
        href: '/blog/web3-development-trends-2024'
      },
      {
        id: 2,
        title: 'The Future of Decentralized Social Media',
        excerpt: 'Exploring how blockchain technology is revolutionizing social media with decentralized platforms and user ownership.',
        author: 'Ryan Patel',
        date: '2024-01-14',
        readTime: '6 min read',
        href: '/blog/decentralized-social-media'
      },
      {
        id: 3,
        title: 'Web3 Infrastructure: Building the Foundation',
        excerpt: 'Understanding the essential infrastructure components that power the Web3 ecosystem and decentralized applications.',
        author: 'Anna Kowalski',
        date: '2024-01-09',
        readTime: '7 min read',
        href: '/blog/web3-infrastructure'
      }
    ]
  },
  defi: {
    name: 'DeFi',
    description: 'Decentralized Finance insights, protocol development, yield farming strategies, and the latest innovations in the DeFi ecosystem.',
    color: 'from-orange-500 to-yellow-600',
    posts: [
      {
        id: 1,
        title: 'DeFi Protocol Development: Key Considerations',
        excerpt: 'Essential considerations for building robust and secure DeFi protocols that can handle high-value transactions.',
        author: 'Carlos Mendez',
        date: '2024-01-11',
        readTime: '8 min read',
        href: '/blog/defi-protocol-development'
      },
      {
        id: 2,
        title: 'DeFi Yield Farming Strategies',
        excerpt: 'Advanced strategies for maximizing returns in DeFi yield farming while managing risks and optimizing gas costs.',
        author: 'Jennifer Liu',
        date: '2024-01-06',
        readTime: '6 min read',
        href: '/blog/defi-yield-farming-strategies'
      },
      {
        id: 3,
        title: 'Liquidity Mining: A Complete Guide',
        excerpt: 'Understanding liquidity mining mechanisms and how to participate effectively in DeFi liquidity programs.',
        author: 'Thomas Anderson',
        date: '2023-12-25',
        readTime: '7 min read',
        href: '/blog/liquidity-mining-guide'
      }
    ]
  },
  nft: {
    name: 'NFT',
    description: 'Non-Fungible Token development, marketplace creation, metadata standards, and the evolving NFT ecosystem and use cases.',
    color: 'from-indigo-500 to-blue-600',
    posts: [
      {
        id: 1,
        title: 'NFT Metadata Standards and Best Practices',
        excerpt: 'Understanding NFT metadata standards and implementing best practices for creating robust and interoperable NFT collections.',
        author: 'Emma Davis',
        date: '2024-01-13',
        readTime: '6 min read',
        href: '/blog/nft-metadata-standards'
      },
      {
        id: 2,
        title: 'Creating Dynamic NFTs: A Technical Guide',
        excerpt: 'Learn how to create dynamic NFTs that can change based on external data and smart contract conditions.',
        author: 'Kevin Zhang',
        date: '2024-01-04',
        readTime: '8 min read',
        href: '/blog/dynamic-nfts-guide'
      },
      {
        id: 3,
        title: 'NFT Royalty Implementation: Complete Guide',
        excerpt: 'Implementing royalty mechanisms for NFT collections to ensure creators receive ongoing compensation.',
        author: 'Samantha Brown',
        date: '2023-12-22',
        readTime: '5 min read',
        href: '/blog/nft-royalty-implementation'
      }
    ]
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = params.category
  const categoryInfo = categoryData[category as keyof typeof categoryData]
  
  if (!categoryInfo) {
    return {
      title: 'Category Not Found - Trivexa Technologies',
      description: 'The requested category could not be found.'
    }
  }

  return {
    title: `${categoryInfo.name} Articles - Trivexa Technologies`,
    description: categoryInfo.description,
    keywords: [
      `${categoryInfo.name.toLowerCase()} articles`,
      `${categoryInfo.name.toLowerCase()} blog`,
      'blockchain blog',
      'web3 articles',
      'cryptocurrency news'
    ],
    openGraph: {
      title: `${categoryInfo.name} Articles - Trivexa Technologies`,
      description: categoryInfo.description,
      images: [`/og-${category}-category.jpg`],
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category
  const categoryInfo = categoryData[category as keyof typeof categoryData]

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The requested category could not be found.
          </p>
          <Link
            href="/blog"
            className="btn-primary"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className={`bg-gradient-to-r ${categoryInfo.color} text-white py-20`}>
        <div className="container-custom">
          <Link 
            href="/solutions" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Solutions
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <Tag className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                {categoryInfo.name} Articles
              </h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8">
              {categoryInfo.description}
            </p>
            
            <div className="flex items-center text-white/80">
              <span className="text-lg font-semibold">
                {categoryInfo.posts.length} Articles
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {categoryInfo.posts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        <Link href={post.href}>
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={post.href}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    Read Article
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {Object.entries(categoryData).map(([key, category]) => (
              <Link
                key={key}
                href={`/blog/category/${key}`}
                className={`bg-gradient-to-br ${category.color} text-white rounded-2xl p-6 hover:scale-105 transition-transform`}
              >
                <h3 className="text-xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  {category.description.substring(0, 100)}...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">
                    {category.posts.length} articles
                  </span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
