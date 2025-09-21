"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Lock,
  Cpu,
  Network,
  Layers,
  Hexagon,
  Circle,
  Square,
  Triangle,
  Star,
  Diamond,
  Activity,
  TrendingUp,
  Target,
  Rocket,
  Atom,
  Brain,
  CircuitBoard,
  Zap,
  Sparkles,
  Database,
  Globe,
  Smartphone,
  Code
} from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    floatingIcons: [Phone, MessageCircle, Shield, Lock],
    rotationSpeed: 12
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your project details",
    value: "enterprise@trivexa.com",
    href: "mailto:enterprise@trivexa.com",
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    floatingIcons: [Mail, Database, Network, Cpu],
    rotationSpeed: 15
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our office location",
    value: "San Francisco, CA",
    href: "#",
    color: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    floatingIcons: [MapPin, Globe, Layers, Hexagon],
    rotationSpeed: 18
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "When we're available",
    value: "24/7 Support",
    href: "#",
    color: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    floatingIcons: [Clock, Circle, Square, Triangle],
    rotationSpeed: 14
  }
]

export default function ContactHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-navy-900 overflow-hidden">
      {/* 3D Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>
      
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient-shift"></div>
      </div>
      
      {/* 3D Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 160px 160px, 160px 160px',
          animation: 'background-shift 20s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating 3D Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/15 to-purple-400/15 blur-3xl"
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-pink-400/15 to-orange-400/15 blur-3xl"
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 100, -60, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '60%', right: '10%' }}
        />
        <motion.div
          className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-green-400/15 to-cyan-400/15 blur-3xl"
          animate={{
            x: [0, 120, -100, 0],
            y: [0, -80, 120, 0],
            scale: [1, 1.4, 0.6, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '20%', left: '20%' }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Get in Touch with Our Experts</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Ready to Start Your{' '}
            <span className="gradient-text">Blockchain Project?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Get in touch with our blockchain experts for a free consultation. We'll help you 
            understand how blockchain technology can transform your business and create a 
            custom solution that meets your specific needs.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="group block"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="relative h-full">
                {/* 3D Background Layers */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} rounded-3xl opacity-50`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-5 rounded-3xl blur-2xl group-hover:opacity-15 transition-all duration-500`}></div>
                
                {/* Floating 3D Icons */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {method.floatingIcons.map((Icon, iconIndex) => (
                    <motion.div
                      key={iconIndex}
                      className="absolute w-4 h-4 opacity-20"
                      animate={{
                        x: [0, 10, -10, 0],
                        y: [0, -10, 10, 0],
                        rotate: [0, 180, 360],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: method.rotationSpeed,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: iconIndex * 1
                      }}
                      style={{
                        left: `${20 + iconIndex * 20}%`,
                        top: `${20 + iconIndex * 15}%`,
                        transform: 'translateZ(10px)'
                      }}
                    >
                      <Icon className={`w-full h-full ${method.color.replace('from-', 'text-').replace(' to-', '-')}`} />
                    </motion.div>
                  ))}
                </div>
                
                {/* Main 3D Card */}
                <motion.div 
                  className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20 dark:border-gray-700/30 h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5,
                    z: 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* 3D Icon Container */}
                  <motion.div 
                    className={`relative w-20 h-20 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    style={{
                      background: `linear-gradient(135deg, ${method.color.replace('from-', '').replace(' to-', ', ')})`,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 180,
                      rotateZ: 10
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <method.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                    {method.description}
                  </p>

                  <div className="text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                    {method.value}
                  </div>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quick CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team is available 24/7 to answer your questions and provide expert guidance.
            </p>
            <a
              href="#contact-form"
              className="btn-primary inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
