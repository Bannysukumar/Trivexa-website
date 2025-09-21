"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  DollarSign, 
  Users, 
  TrendingUp,
  Shield,
  Clock,
  Award,
  Code,
  Globe
} from 'lucide-react'

const stats = [
  {
    icon: DollarSign,
    value: "$500M+",
    label: "Total Value Locked",
    description: "Across all DeFi projects"
  },
  {
    icon: Users,
    value: "1M+",
    label: "Active Users",
    description: "Using our blockchain solutions"
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average Growth",
    description: "In user engagement"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Security Audit",
    description: "Coverage on all projects"
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime",
    description: "System availability"
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards",
    description: "Recognition received"
  },
  {
    icon: Code,
    value: "1M+",
    label: "Lines of Code",
    description: "Written and maintained"
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries",
    description: "Global presence"
  }
]

export default function PortfolioStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
            Our Impact in{' '}
            <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The success of our projects is reflected in the impressive metrics and 
            achievements we've accomplished for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-navy-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-2xl md:text-3xl font-bold gradient-text mb-2 text-center"
                  >
                    {stat.value}
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-1 text-center">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                    {stat.description}
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
