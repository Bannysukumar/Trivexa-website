"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  ArrowRight, 
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  CheckCircle,
  Zap,
  Users,
  Award
} from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle,
    text: "Free consultation and project assessment"
  },
  {
    icon: CheckCircle,
    text: "Custom blockchain solution design"
  },
  {
    icon: CheckCircle,
    text: "Transparent pricing and timeline"
  },
  {
    icon: CheckCircle,
    text: "24/7 technical support"
  }
]

const contactMethods = [
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
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    action: "6301846681",
    href: "tel:6301846681"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your project details",
    action: "trivexatechpvt@gmail.com",
    href: "mailto:trivexatechpvt@gmail.com"
  }
]

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-navy-700 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Create Your{' '}
            <span className="text-yellow-300">Success Story?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
            Join 50+ successful companies who have already transformed their operations 
            with our cutting-edge blockchain solutions. Let's build the future together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
            >
              View Our Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
