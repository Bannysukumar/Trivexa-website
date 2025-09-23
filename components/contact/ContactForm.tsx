"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  Building,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import toast from 'react-hot-toast'
import { saveContactSubmission, type ContactSubmission } from '@/lib/firebase-utils'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

const services = [
  "Layer-1 Blockchain Development",
  "Layer-2 Blockchain Solutions",
  "Smart Contract Development",
  "DApp Development",
  "Web & Mobile Development",
  "AI-Powered Solutions",
  "Blockchain Consulting",
  "Other"
]

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "Above $250,000"
]

export default function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [touchedFields, setTouchedFields] = useState<Set<keyof FormData>>(new Set())

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long'
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Name must be less than 50 characters'
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    } else if (formData.email.trim().length > 100) {
      newErrors.email = 'Email must be less than 100 characters'
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else {
      // Remove all non-digit characters for validation
      const phoneDigits = formData.phone.replace(/\D/g, '')
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Phone number must be at least 10 digits'
      } else if (phoneDigits.length > 15) {
        newErrors.phone = 'Phone number must be less than 15 digits'
      } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(phoneDigits)) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    }

    // Company validation (optional but if provided, should be valid)
    if (formData.company.trim() && formData.company.trim().length < 2) {
      newErrors.company = 'Company name must be at least 2 characters long'
    } else if (formData.company.trim() && formData.company.trim().length > 100) {
      newErrors.company = 'Company name must be less than 100 characters'
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly')
      return
    }

    setIsSubmitting(true)

    try {
      // Save to Firebase
      const submissionData: Omit<ContactSubmission, 'id' | 'timestamp'> = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || '',
        service: formData.service,
        budget: formData.budget || '',
        message: formData.message
      }

      await saveContactSubmission(submissionData)
      
      toast.success('Thank you! We\'ll get back to you within 24 hours.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    let formattedValue = value

    // Format phone number as user types
    if (field === 'phone') {
      // Remove all non-digit characters
      const phoneDigits = value.replace(/\D/g, '')
      // Format as (XXX) XXX-XXXX for US numbers, or keep international format
      if (phoneDigits.length <= 10) {
        formattedValue = phoneDigits.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
      } else {
        // For international numbers, just add spaces every 3-4 digits
        formattedValue = phoneDigits.replace(/(\d{3,4})(?=\d)/g, '$1 ')
      }
    }

    // Format name - capitalize first letter of each word
    if (field === 'name') {
      formattedValue = value.replace(/\b\w/g, l => l.toUpperCase())
    }

    // Format email - convert to lowercase
    if (field === 'email') {
      formattedValue = value.toLowerCase()
    }

    setFormData(prev => ({ ...prev, [field]: formattedValue }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  // Real-time validation for specific fields
  const validateField = (field: keyof FormData, value: string) => {
    const newErrors: Partial<FormData> = { ...errors }
    setTouchedFields(prev => new Set(prev).add(field))

    switch (field) {
      case 'name':
        if (value.trim() && value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters long'
        } else if (value.trim() && !/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          newErrors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes'
        } else {
          delete newErrors.name
        }
        break

      case 'email':
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          newErrors.email = 'Please enter a valid email address'
        } else {
          delete newErrors.email
        }
        break

      case 'phone':
        if (value.trim()) {
          const phoneDigits = value.replace(/\D/g, '')
          if (phoneDigits.length < 10) {
            newErrors.phone = 'Phone number must be at least 10 digits'
          } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(phoneDigits)) {
            newErrors.phone = 'Please enter a valid phone number'
          } else {
            delete newErrors.phone
          }
        }
        break

      case 'company':
        if (value.trim() && value.trim().length < 2) {
          newErrors.company = 'Company name must be at least 2 characters long'
        } else {
          delete newErrors.company
        }
        break

      case 'message':
        if (value.trim() && value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters long'
        } else if (value.trim() && value.trim().length > 1000) {
          newErrors.message = 'Message must be less than 1000 characters'
        } else {
          delete newErrors.message
        }
        break
    }

    setErrors(newErrors)
  }

  // Check if form is valid
  const isFormValid = () => {
    return formData.name.trim().length >= 2 &&
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) &&
           formData.phone.replace(/\D/g, '').length >= 10 &&
           formData.service &&
           formData.message.trim().length >= 10 &&
           Object.keys(errors).length === 0
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      id="contact-form"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Fill out the form below and our blockchain experts will get back to you within 24 hours.
          </p>
          
          {/* Form Progress Indicator */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-4">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${Math.round(
                  ((formData.name.trim() ? 1 : 0) +
                   (formData.email.trim() ? 1 : 0) +
                   (formData.phone.trim() ? 1 : 0) +
                   (formData.service ? 1 : 0) +
                   (formData.message.trim() ? 1 : 0)) / 5 * 100
                )}%` 
              }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {Math.round(
              ((formData.name.trim() ? 1 : 0) +
               (formData.email.trim() ? 1 : 0) +
               (formData.phone.trim() ? 1 : 0) +
               (formData.service ? 1 : 0) +
               (formData.message.trim() ? 1 : 0)) / 5 * 100
            )}% Complete
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onBlur={(e) => validateField('name', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                  errors.name 
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                }`}
                placeholder="Enter your full name"
                maxLength={50}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onBlur={(e) => validateField('email', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                  errors.email 
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                }`}
                placeholder="Enter your email address"
                maxLength={100}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                onBlur={(e) => validateField('phone', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                  errors.phone 
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                }`}
                placeholder="Enter your phone number (e.g., (555) 123-4567)"
                maxLength={20}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Company Name
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                onBlur={(e) => validateField('company', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                  errors.company 
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                }`}
                placeholder="Enter your company name"
                maxLength={100}
              />
            </div>
            {errors.company && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.company}
              </p>
            )}
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Service Required *
            </label>
            <select
              value={formData.service}
              onChange={(e) => handleInputChange('service', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.service 
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
              }`}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.service}
              </p>
            )}
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Project Budget
            </label>
            <select
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Project Details *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                onBlur={(e) => validateField('message', e.target.value)}
                rows={5}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none transition-colors ${
                  errors.message 
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                }`}
                placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                maxLength={1000}
              />
            </div>
            <div className="flex justify-between items-center mt-1">
              {errors.message && (
                <p className="text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message}
                </p>
              )}
              <p className={`text-sm ml-auto ${
                formData.message.length > 900 
                  ? 'text-red-600' 
                  : formData.message.length > 800 
                    ? 'text-yellow-600' 
                    : 'text-gray-500 dark:text-gray-400'
              }`}>
                {formData.message.length}/1000 characters
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !isFormValid()}
            className={`w-full flex items-center justify-center transition-all duration-200 ${
              isFormValid() && !isSubmitting
                ? 'btn-primary hover:bg-primary-700'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {isFormValid() ? 'Send Message' : 'Complete Required Fields'}
              </>
            )}
          </button>

          {/* Privacy Note */}
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
          </p>
        </form>
      </div>
    </motion.div>
  )
}
