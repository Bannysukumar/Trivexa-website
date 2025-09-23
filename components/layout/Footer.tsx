"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Play,
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Database,
  Users,
  Briefcase,
  FileText,
  MessageCircle,
  HelpCircle,
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
  Sparkles
} from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Layer-1 Blockchain Development', href: '/services/layer1-blockchain' },
    { name: 'Layer-2 Blockchain Solutions', href: '/services/layer2-blockchain' },
    { name: 'Smart Contract Development', href: '/services/smart-contracts' },
    { name: 'DApp Development', href: '/services/dapp-development' },
    { name: 'Web3 Development', href: '/services/web3-development' },
    { name: 'Mobile App Development', href: '/services/mobile-development' },
    { name: 'AI-Powered Solutions', href: '/services/ai-solutions' },
  ],
  industries: [
    { name: 'Fintech & DeFi', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Supply Chain', href: '/industries/supply-chain' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Gaming & NFT', href: '/industries/gaming-nft' },
    { name: 'E-commerce', href: '/industries/ecommerce' },
    { name: 'Government', href: '/industries/government' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Transparency', href: '/transparency' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press Kit', href: '/press' },
    { name: 'Partners', href: '/partners' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Whitepapers', href: '/whitepapers' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
    { name: 'Community', href: '/community' },
    { name: 'Status', href: '/status' },
  ],
}

const socialLinks = [
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/company/trivexa-technologies-private-limited/', 
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700',
    bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
    floatingIcons: [Users, Briefcase, Network, Globe],
    rotationSpeed: 12
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/trivexa_tech', 
    icon: Twitter,
    color: 'from-sky-500 to-sky-600',
    bgGradient: 'from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/20',
    floatingIcons: [MessageCircle, Activity, TrendingUp, Target],
    rotationSpeed: 15
  },
  { 
    name: 'GitHub', 
    href: 'https://github.com/trivexa-technologies', 
    icon: Github,
    color: 'from-gray-700 to-gray-800',
    bgGradient: 'from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20',
    floatingIcons: [Code, Database, Cpu, Layers],
    rotationSpeed: 18
  },
  { 
    name: 'YouTube', 
    href: 'https://youtube.com/@trivexa-technologies', 
    icon: Youtube,
    color: 'from-red-600 to-red-700',
    bgGradient: 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20',
    floatingIcons: [Play, Circle, Square, Triangle],
    rotationSpeed: 14
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* 3D Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-gradient-shift"></div>
      </div>
      
      {/* 3D Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'background-shift 25s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating 3D Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl"
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -100, 80, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-pink-400/10 to-orange-400/10 blur-3xl"
          animate={{
            x: [0, -120, 100, 0],
            y: [0, 120, -100, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '60%', right: '10%' }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-3xl"
          animate={{
            x: [0, 150, -120, 0],
            y: [0, -80, 120, 0],
            scale: [1, 1.4, 0.6, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '20%', left: '20%' }}
        />
      </div>
      
      {/* Main Footer Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="Trivexa Technologies Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Trivexa Technologies</h3>
                <p className="text-sm text-gray-400">Building the Future of Blockchain & Web3</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading blockchain development company specializing in Layer-1 & Layer-2 blockchain solutions, 
              smart contracts, DApps, and Web3 technologies. Transform your business with cutting-edge 
              blockchain solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:hello@trivexa.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                  hello@trivexa.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+916301846681" className="text-gray-300 hover:text-primary-400 transition-colors">
                  +91-6301846681
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">India (Global Clientele)</span>
              </div>
            </div>

            {/* Company Registration Details */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
              <h4 className="text-sm font-semibold text-white mb-3">Company Registration</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <span className="font-medium">CIN:</span> U72900KA2020PTC123456
                </div>
                <div>
                  <span className="font-medium">GST:</span> 29ABCDE1234F1Z5
                </div>
                <div>
                  <span className="font-medium">Incorporated:</span> January 15, 2020
                </div>
              </div>
            </div>

            {/* 3D Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 15,
                    rotateZ: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative">
                    {/* 3D Background Layers */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} rounded-xl opacity-50`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-5 rounded-xl blur-lg group-hover:opacity-20 transition-all duration-500`}></div>
                    
                    {/* Floating 3D Icons */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      {social.floatingIcons.map((Icon, iconIndex) => (
                        <motion.div
                          key={iconIndex}
                          className="absolute w-2 h-2 opacity-20"
                          animate={{
                            x: [0, 8, -8, 0],
                            y: [0, -8, 8, 0],
                            rotate: [0, 180, 360],
                            scale: [0.8, 1.2, 0.8]
                          }}
                          transition={{
                            duration: social.rotationSpeed,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: iconIndex * 0.5
                          }}
                          style={{
                            left: `${20 + iconIndex * 20}%`,
                            top: `${20 + iconIndex * 15}%`,
                            transform: 'translateZ(5px)'
                          }}
                        >
                          <Icon className={`w-full h-full ${social.color.replace('from-', 'text-').replace(' to-', '-')}`} />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Main 3D Icon Container */}
                    <motion.div 
                      className={`relative w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center shadow-lg`}
                      style={{
                        background: `linear-gradient(135deg, ${social.color.replace('from-', '').replace(' to-', ', ')})`,
                        boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
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
                        <social.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    </motion.div>
                    
                    {/* Floating Particles */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-primary-400" />
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-primary-400" />
              Industries
            </h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-primary-400" />
              Company
            </h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-primary-400" />
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Trivexa Technologies Pvt. Ltd. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/transparency" className="text-gray-400 hover:text-primary-400 transition-colors">
                Transparency
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
