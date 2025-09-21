"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Briefcase, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Globe
} from 'lucide-react'
import Link from 'next/link'

const achievements = [
  {
    icon: Briefcase,
    value: "100+",
    label: "Projects Delivered",
    description: "Successful blockchain solutions"
  },
  {
    icon: Award,
    value: "50+",
    label: "Happy Clients",
    description: "Global enterprises and startups"
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Success Rate",
    description: "Project completion rate"
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Served",
    description: "Worldwide client base"
  }
]

export default function PortfolioHero() {
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
            <Briefcase className="w-4 h-4" />
            <span>Proven Track Record of Success</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Our{' '}
            <span className="gradient-text">Portfolio</span>{' '}
            of Success
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Explore our portfolio of successful blockchain development projects. From DeFi platforms 
            to NFT marketplaces, we've helped businesses across various industries transform their 
            operations with cutting-edge blockchain solutions.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {[
              "100% Project Success Rate",
              "24/7 Support & Maintenance",
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
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portfolio-grid"
              className="btn-secondary flex items-center justify-center group"
            >
              View Case Studies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
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
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  >
                    {achievement.value}
                  </motion.div>

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
        </div>
      </div>
    </section>
  )
}
