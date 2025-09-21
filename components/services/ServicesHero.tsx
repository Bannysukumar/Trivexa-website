"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database,
  Bot,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Database,
    title: "Layer-1 Blockchain Development",
    description: "Build custom blockchain networks from scratch with advanced consensus mechanisms and governance systems.",
    href: "/services/layer1-blockchain"
  },
  {
    icon: Globe,
    title: "Layer-2 Blockchain Solutions",
    description: "Implement scaling solutions like sidechains, state channels, and rollups for enhanced performance.",
    href: "/services/layer2-blockchain"
  },
  {
    icon: Code,
    title: "Smart Contract Development",
    description: "Create secure, audited smart contracts for DeFi, NFTs, DAOs, and other blockchain applications.",
    href: "/services/smart-contracts"
  },
  {
    icon: Smartphone,
    title: "DApp Development",
    description: "Build decentralized applications with intuitive user interfaces and seamless blockchain integration.",
    href: "/services/dapp-development"
  },
  {
    icon: Globe,
    title: "Web & Mobile Development",
    description: "Develop responsive web applications and native mobile apps for iOS and Android platforms.",
    href: "/services/web-mobile-development"
  },
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description: "Integrate artificial intelligence and machine learning capabilities into blockchain applications.",
    href: "/services/ai-solutions"
  }
]

export default function ServicesHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 blockchain-bg opacity-30"></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Shield className="w-4 h-4" />
            <span>Comprehensive Blockchain Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Expert{' '}
            <span className="gradient-text">Blockchain Development</span>{' '}
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            From Layer-1 blockchain networks to AI-powered Web3 solutions, we provide 
            end-to-end blockchain development services that transform your business ideas into reality.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {[
              "Security-First Approach",
              "24/7 Support",
              "Scalable Solutions",
              "Expert Team"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="btn-primary flex items-center justify-center group"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary flex items-center justify-center group"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Services Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group"
            >
              <Link href={service.href}>
                <div className="relative h-full">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-navy-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
