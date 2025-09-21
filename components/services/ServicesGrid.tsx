"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database,
  Bot,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react'

const services = [
  {
    icon: Database,
    title: "Layer-1 Blockchain Development",
    description: "Build custom blockchain networks from scratch with advanced consensus mechanisms, smart contract capabilities, and governance systems.",
    features: [
      "Custom Consensus Algorithms",
      "Token Standards & Economics",
      "Network Architecture Design",
      "Governance Systems",
      "Security Audits",
      "Mainnet Deployment"
    ],
    technologies: ["Rust", "Go", "C++", "Solidity", "Web3.js"],
    timeline: "3-6 months",
    href: "/services/layer1-blockchain",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Globe,
    title: "Layer-2 Blockchain Solutions",
    description: "Implement scaling solutions like sidechains, state channels, and rollups to enhance blockchain performance and reduce costs.",
    features: [
      "Sidechain Development",
      "State Channel Implementation",
      "Rollup Solutions",
      "Cross-chain Bridges",
      "Optimistic & ZK Rollups",
      "Performance Optimization"
    ],
    technologies: ["Solidity", "Web3.js", "Ethers.js", "Polygon", "Arbitrum"],
    timeline: "2-4 months",
    href: "/services/layer2-blockchain",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Code,
    title: "Smart Contract Development",
    description: "Create secure, audited smart contracts for DeFi, NFTs, DAOs, and other blockchain applications with comprehensive testing.",
    features: [
      "DeFi Protocol Development",
      "NFT Smart Contracts",
      "DAO Governance Contracts",
      "Multi-signature Wallets",
      "Security Audits",
      "Gas Optimization"
    ],
    technologies: ["Solidity", "Vyper", "Hardhat", "Truffle", "OpenZeppelin"],
    timeline: "1-3 months",
    href: "/services/smart-contracts",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Smartphone,
    title: "DApp Development",
    description: "Build decentralized applications with intuitive user interfaces, seamless blockchain integration, and optimal user experience.",
    features: [
      "Frontend Development",
      "Blockchain Integration",
      "Wallet Connectivity",
      "User Experience Design",
      "Performance Optimization",
      "Mobile Responsiveness"
    ],
    technologies: ["React", "Next.js", "Web3.js", "Ethers.js", "MetaMask"],
    timeline: "2-5 months",
    href: "/services/dapp-development",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Globe,
    title: "Web & Mobile Development",
    description: "Develop responsive web applications and native mobile apps for iOS and Android with modern frameworks and technologies.",
    features: [
      "React/Next.js Applications",
      "React Native Development",
      "iOS Native Development",
      "Android Native Development",
      "Progressive Web Apps",
      "Cross-platform Solutions"
    ],
    technologies: ["React", "Next.js", "React Native", "Swift", "Kotlin"],
    timeline: "2-6 months",
    href: "/services/web-mobile-development",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description: "Integrate artificial intelligence and machine learning capabilities into your blockchain applications for enhanced functionality.",
    features: [
      "AI Integration",
      "Machine Learning Models",
      "Predictive Analytics",
      "Automated Systems",
      "Natural Language Processing",
      "Computer Vision"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Blockchain APIs"],
    timeline: "3-8 months",
    href: "/services/ai-solutions",
    color: "from-indigo-500 to-blue-600"
  }
]

export default function ServicesGrid() {
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
            Our Comprehensive{' '}
            <span className="gradient-text">Service Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We offer end-to-end blockchain development services, from initial concept to 
            deployment and maintenance. Each service is tailored to meet your specific business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.timeline}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
          <div className="bg-gradient-to-br from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We can create custom blockchain solutions tailored to your specific requirements. 
              Let's discuss your project and find the perfect approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/portfolio"
                className="btn-secondary"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
