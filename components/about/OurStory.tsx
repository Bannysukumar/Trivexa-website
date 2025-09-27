"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Users,
  Award,
  Globe,
  Code,
  Shield
} from 'lucide-react'

const milestones = [
  {
    year: "2025",
    title: "Company Founded",
    description: "Trivexa Technologies was established with a vision to revolutionize business operations through blockchain technology and cutting-edge Web3 solutions.",
    icon: Lightbulb
  },
  {
    year: "2025",
    title: "Expert Team Assembly",
    description: "Assembled a world-class team of blockchain experts, security specialists, and technology leaders with decades of combined experience.",
    icon: Users
  },
  {
    year: "2025",
    title: "Security-First Approach",
    description: "Implemented comprehensive security frameworks including ISO 27001, SOC 2 compliance, and advanced cybersecurity measures from day one.",
    icon: Shield
  },
  {
    year: "2025",
    title: "Enterprise Solutions Launch",
    description: "Launched our enterprise blockchain development services with focus on DeFi protocols, NFT platforms, and Web3 applications.",
    icon: Target
  },
  {
    year: "2025",
    title: "AI-Powered Innovation",
    description: "Integrated artificial intelligence and machine learning capabilities into our blockchain solutions for enhanced performance and security.",
    icon: Code
  },
  {
    year: "2025",
    title: "Global Vision",
    description: "Established our presence as a global blockchain development company serving clients worldwide with cutting-edge solutions.",
    icon: Globe
  }
]

export default function OurStory() {
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
            Our Journey of{' '}
            <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Founded in 2025 with a vision to lead the blockchain revolution, 
            we've quickly established ourselves as innovators in Web3 technology and enterprise solutions. 
            Our team of 50+ experts has delivered 100+ blockchain projects for Fortune 500 companies, 
            achieving 99.9% uptime and zero security breaches across all deployments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-navy-600 rounded-full"></div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center mr-4">
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-primary-600 rounded-full"></div>

                {/* Spacer */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To democratize blockchain technology and make it accessible to businesses of all sizes, 
              enabling them to leverage the power of decentralized systems for enhanced security, 
              transparency, and efficiency.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To become the world's leading blockchain development company, recognized for our 
              innovative solutions, exceptional service quality, and contribution to the global 
              Web3 ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
