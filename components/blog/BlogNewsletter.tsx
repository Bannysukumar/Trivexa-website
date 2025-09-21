"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  ArrowRight,
  CheckCircle,
  Users,
  Bell,
  TrendingUp
} from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle,
    text: "Weekly blockchain insights and analysis"
  },
  {
    icon: CheckCircle,
    text: "Exclusive industry reports and whitepapers"
  },
  {
    icon: CheckCircle,
    text: "Early access to new articles and tutorials"
  },
  {
    icon: CheckCircle,
    text: "Special offers and event invitations"
  }
]

export default function BlogNewsletter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-navy-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Stay Updated with{' '}
            <span className="text-yellow-300">Blockchain Insights</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
            Subscribe to our newsletter and get the latest blockchain insights, industry news, 
            and expert analysis delivered directly to your inbox.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-center"
              >
                <benefit.icon className="w-5 h-5 text-yellow-300 mr-3 flex-shrink-0" />
                <span className="text-blue-100 text-sm">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-md mx-auto"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            ) : (
              <div className="bg-green-500 text-white p-4 rounded-lg">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Successfully subscribed!</span>
                </div>
                <p className="text-sm mt-1">Thank you for subscribing to our newsletter.</p>
              </div>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">10K+</div>
              <div className="text-blue-100">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">Weekly</div>
              <div className="text-blue-100">Updates</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-blue-100">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
