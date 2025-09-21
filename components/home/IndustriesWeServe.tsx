"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  DollarSign, 
  Heart, 
  Truck, 
  Home,
  Gamepad2,
  ShoppingCart,
  Building,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react'

const industries = [
  {
    icon: DollarSign,
    title: "Fintech & DeFi",
    description: "Revolutionize financial services with decentralized finance solutions, payment systems, and digital asset management.",
    features: ["DeFi Protocols", "Payment Solutions", "Digital Wallets", "Trading Platforms"],
    href: "/industries/fintech",
    color: "from-green-500 to-emerald-600",
    stats: "90% Cost Reduction"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Secure patient data management, drug traceability, and medical record systems with blockchain technology.",
    features: ["Patient Records", "Drug Traceability", "Clinical Trials", "Data Security"],
    href: "/industries/healthcare",
    color: "from-red-500 to-pink-600",
    stats: "100% Data Integrity"
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description: "Enhance transparency and traceability across supply chains with immutable record-keeping and smart contracts.",
    features: ["Product Tracking", "Quality Assurance", "Compliance", "Transparency"],
    href: "/industries/supply-chain",
    color: "from-blue-500 to-cyan-600",
    stats: "95% Transparency"
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Streamline property transactions, tokenization, and ownership verification with blockchain solutions.",
    features: ["Property Tokenization", "Smart Contracts", "Ownership Records", "Automated Transactions"],
    href: "/industries/real-estate",
    color: "from-purple-500 to-violet-600",
    stats: "60% Faster Transactions"
  },
  {
    icon: Gamepad2,
    title: "Gaming & NFT",
    description: "Create immersive gaming experiences with NFT integration, play-to-earn mechanics, and virtual economies.",
    features: ["NFT Marketplaces", "Play-to-Earn", "Virtual Assets", "Gaming Economies"],
    href: "/industries/gaming-nft",
    color: "from-orange-500 to-yellow-600",
    stats: "10x User Engagement"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Build secure, transparent e-commerce platforms with blockchain-based payment systems and loyalty programs.",
    features: ["Secure Payments", "Loyalty Programs", "Product Authentication", "Supply Chain"],
    href: "/industries/ecommerce",
    color: "from-indigo-500 to-blue-600",
    stats: "80% Trust Increase"
  },
  {
    icon: Building,
    title: "Government",
    description: "Enhance government services with transparent voting systems, identity verification, and public record management.",
    features: ["Digital Identity", "Voting Systems", "Public Records", "Transparency"],
    href: "/industries/government",
    color: "from-gray-500 to-slate-600",
    stats: "100% Transparency"
  }
]

export default function IndustriesWeServe() {
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
            Industries We{' '}
            <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our blockchain solutions are tailored to meet the unique challenges and opportunities 
            across diverse industries, driving innovation and efficiency.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 mb-4">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {industry.stats}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {industry.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                        <Zap className="w-3 h-3 text-primary-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={industry.href}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold text-sm group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We work across all industries and can create custom blockchain solutions 
              tailored to your specific business needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Discuss Your Industry
              </Link>
              <Link
                href="/industries"
                className="btn-secondary"
              >
                View All Industries
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
