"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  Code, 
  Globe, 
  Award,
  TrendingUp,
  Shield,
  Clock,
  Star
} from 'lucide-react'

const stats = [
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
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Success Rate",
    description: "Project completion rate"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Security Audit",
    description: "Coverage on all projects"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance"
  },
  {
    icon: Star,
    value: "5.0",
    label: "Client Rating",
    description: "Average satisfaction score"
  }
]

export default function StatsSection() {
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
            Our Track Record of{' '}
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Numbers don't lie. Our consistent performance and client satisfaction 
            speak volumes about our commitment to excellence.
          </p>
        </motion.div>

        {/* Stats Grid */}
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

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our clients include Fortune 500 companies, innovative startups, and government organizations
            </p>
            
            {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            { name: "TERM", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
            { name: "Zerokost", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop&crop=center" },
            { name: "Thanvish AI", logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=120&h=60&fit=crop&crop=center" },
            { name: "Sync AI Solutions", logo: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=120&h=60&fit=crop&crop=center" }
          ].map((client, i) => (
            <div
              key={i}
              className="w-32 h-16 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="w-24 h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
