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
    year: "2019",
    title: "Company Founded",
    description: "Trivexa Technologies was established with a vision to revolutionize business operations through blockchain technology.",
    icon: Lightbulb
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Delivered our first enterprise blockchain solution, establishing our reputation in the industry.",
    icon: Target
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to 20+ blockchain experts and expanded our service offerings.",
    icon: Users
  },
  {
    year: "2022",
    title: "Global Recognition",
    description: "Received industry awards and recognition for innovative blockchain solutions.",
    icon: Award
  },
  {
    year: "2023",
    title: "International Expansion",
    description: "Extended our services to clients across 15+ countries worldwide.",
    icon: Globe
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Launched AI-powered blockchain solutions and advanced Web3 technologies.",
    icon: Code
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
            From a small startup to a leading blockchain development company, 
            our journey has been marked by continuous innovation and client success.
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
