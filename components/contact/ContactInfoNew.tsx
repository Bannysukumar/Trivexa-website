"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Calendar,
  CheckCircle,
  Users,
  Award,
  Shield
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+916301846681"],
    description: "Call us for immediate assistance"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@trivexa.com", "support@trivexa.com"],
    description: "Send us your project details"
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["India (Global Clientele)", "Remote & On-site Services"],
    description: "Serving clients worldwide"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["24/7 Support Available", "Response within 24 hours"],
    description: "We're always here to help"
  }
]

const quickActions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant answers to your questions",
    action: "Start Chat",
    href: "#chat"
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    description: "Book a free consultation call",
    action: "Book Now",
    href: "/contact"
  }
]

const guarantees = [
  {
    icon: CheckCircle,
    title: "Free Consultation",
    description: "No obligation project assessment"
  },
  {
    icon: Shield,
    title: "NDA Protection",
    description: "Your ideas are safe with us"
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Certified blockchain developers"
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock assistance"
  }
]

export default function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h3>
        
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {info.title}
                </h4>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-primary-600 dark:text-primary-400 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {info.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Quick Actions
        </h3>
        
        <div className="space-y-4">
          {quickActions.map((action, index) => (
            <motion.a
              key={action.title}
              href={action.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group block"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {action.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {action.description}
                    </p>
                  </div>
                  <div className="text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                    {action.action}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Our Guarantees
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <guarantee.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {guarantee.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {guarantee.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Fast Response Time
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We typically respond to all inquiries within 24 hours, often much sooner.
          </p>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            &lt; 24 Hours
          </div>
        </div>
      </div>
    </motion.div>
  )
}
