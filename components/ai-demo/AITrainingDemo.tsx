"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bot, 
  Send, 
  Loader2, 
  CheckCircle, 
  AlertCircle, 
  Info,
  TrendingUp,
  Database,
  MessageSquare,
  Settings,
  Sparkles
} from 'lucide-react'
import { generateAIResponse, getTrainingStats, getAllServices, type AIResponse } from '@/lib/ai-training-system'

export default function AITrainingDemo() {
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState<AIResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [stats] = useState(getTrainingStats())
  const [services] = useState(getAllServices())

  const handleQuery = async () => {
    if (!query.trim()) return

    setIsLoading(true)
    try {
      const aiResponse = generateAIResponse(query)
      setResponse(aiResponse)
    } catch (error) {
      console.error('Error generating response:', error)
      setResponse({
        answer: "I apologize, but I'm experiencing some technical difficulties. Please try again.",
        confidence: 0.1,
        sources: ['Error Handler'],
        category: 'error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const sampleQueries = [
    "What services do you offer?",
    "How much does smart contract development cost?",
    "Tell me about your team",
    "What industries do you serve?",
    "How do you ensure security?"
  ]

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-500'
    if (confidence >= 0.6) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 0.8) return 'High'
    if (confidence >= 0.6) return 'Medium'
    return 'Low'
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-navy-600 text-white px-6 py-3 rounded-full mb-6"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">Trivexa AI Training System Demo</span>
        </motion.div>
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Intelligent AI Assistant
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Experience our advanced AI training system with RAG capabilities, trained on comprehensive 
          Trivexa knowledge base for intelligent, context-aware responses.
        </p>
      </div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Training Documents</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalDocuments}</p>
            </div>
            <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">FAQ Items</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalFAQs}</p>
            </div>
            <MessageSquare className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Services</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalServices}</p>
            </div>
            <Settings className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Categories</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.categories.length}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
        </div>
      </motion.div>

      {/* Demo Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Query Interface */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Ask the AI Assistant
          </h2>
          
          <div className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleQuery()}
                placeholder="Ask about our services, team, or company..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={handleQuery}
                disabled={!query.trim() || isLoading}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Sample Queries */}
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Try these sample queries:</p>
              <div className="flex flex-wrap gap-2">
                {sampleQueries.map((sampleQuery, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(sampleQuery)}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {sampleQuery}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Response Display */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            AI Response
          </h2>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="flex items-center space-x-3">
                <Loader2 className="w-6 h-6 animate-spin text-primary-600" />
                <span className="text-gray-600 dark:text-gray-400">AI is thinking...</span>
              </div>
            </div>
          ) : response ? (
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-900 dark:text-white whitespace-pre-wrap">
                  {response.answer}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Confidence:</span>
                  <span className={`text-sm font-medium ${getConfidenceColor(response.confidence)}`}>
                    {getConfidenceText(response.confidence)} ({(response.confidence * 100).toFixed(1)}%)
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Category:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                    {response.category}
                  </span>
                </div>
                
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Sources:</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {response.sources.map((source, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 text-xs rounded-full"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
                
                {response.relatedQuestions && response.relatedQuestions.length > 0 && (
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Related Questions:</span>
                    <div className="mt-1 space-y-1">
                      {response.relatedQuestions.slice(0, 2).map((question, index) => (
                        <button
                          key={index}
                          onClick={() => setQuery(question)}
                          className="block text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-left"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Ask a question to see the AI response</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Services Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Available Services in Knowledge Base
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {service.description.substring(0, 100)}...
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Timeline:</span>
                <span className="text-gray-900 dark:text-white">{service.timeline}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Pricing:</span>
                <span className="text-gray-900 dark:text-white">{service.pricing}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 rounded-xl p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          AI Training System Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">RAG Technology</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Retrieval-Augmented Generation for context-aware responses
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Confidence Scoring</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Response confidence levels for quality assurance
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Source Attribution</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Track and display sources for each response
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Semantic Search</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Intelligent search across knowledge base
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Admin Interface</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete management system for training data
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Real-time Updates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Instant updates to knowledge base and responses
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
