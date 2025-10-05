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
  Award,
  Shield
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Business with{' '}
              <span className="text-yellow-300">Blockchain Technology?</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join 50+ successful companies who have already transformed their operations 
              with our cutting-edge blockchain solutions. Let's build the future together.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center"
                >
                  <benefit.icon className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span className="text-blue-100">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-1">50+</div>
                <div className="text-sm text-blue-100">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-1">100%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-1">24/7</div>
                <div className="text-sm text-blue-100">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Get in Touch Today
              </h3>
              <p className="text-blue-100">
                Choose your preferred way to connect with us
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {method.title}
                    </h4>
                    <p className="text-blue-100 text-sm mb-4">
                      {method.description}
                    </p>
                    <div className="text-yellow-300 font-semibold text-sm group-hover:text-yellow-200 transition-colors">
                      {method.action}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
            >
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Why Choose Trivexa?
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Award className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                    <div className="text-sm text-blue-100">Expert Team</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                    <div className="text-sm text-blue-100">Secure Solutions</div>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                    <div className="text-sm text-blue-100">Fast Delivery</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
