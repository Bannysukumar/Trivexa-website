"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  Award, 
  Globe, 
  Code,
  TrendingUp,
  Shield,
  Zap,
  Target,
  CheckCircle
} from 'lucide-react'

const achievements = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Global enterprises and startups"
  },
  {
    icon: Code,
    value: "100+",
    label: "Projects Delivered",
    description: "Blockchain and Web3 solutions"
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Served",
    description: "Worldwide client base"
  },
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
    description: "In blockchain development"
  }
]

export default function AboutHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 blockchain-bg opacity-30"></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4" />
              <span>Building the Future of Blockchain & Web3</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Pioneering{' '}
              <span className="gradient-text">Blockchain Innovation</span>{' '}
              Since 2019
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              Trivexa Technologies is a leading blockchain development company that has been at the forefront 
              of Web3 innovation. We combine technical expertise, industry experience, and innovative solutions 
              to help businesses transform their operations with cutting-edge blockchain technology.
            </motion.p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4 mb-8"
            >
              {[
                "Expert team of certified blockchain developers",
                "Proven track record with 100+ successful projects",
                "Comprehensive security-first approach",
                "24/7 support and maintenance services"
              ].map((point, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-navy-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Value */}
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {achievement.value}
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
