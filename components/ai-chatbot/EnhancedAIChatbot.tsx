"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Loader2,
  Sparkles,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { saveChatMessage, generateSessionId, type ChatMessage } from '@/lib/firebase-utils'
import { generateAIResponse, getTrainingStats, type AIResponse } from '@/lib/ai-training-system'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  confidence?: number
  sources?: string[]
  category?: string
  relatedQuestions?: string[]
}

const predefinedQuestions = [
  "What is Layer-1 blockchain development?",
  "How much does smart contract development cost?",
  "What industries do you serve?",
  "Do you provide blockchain consulting?",
  "What is the development timeline for a DApp?",
  "How do you ensure security in blockchain projects?",
  "What technologies do you use?",
  "Do you provide post-deployment support?"
]

const quickActions = [
  { icon: BookOpen, label: "Services", action: "Tell me about your services" },
  { icon: TrendingUp, label: "Portfolio", action: "Show me your portfolio projects" },
  { icon: Shield, label: "Security", action: "How do you ensure security?" },
  { icon: Zap, label: "Pricing", action: "What are your pricing options?" }
]

export default function EnhancedAIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Trivexa's enhanced AI assistant, trained on our complete knowledge base. I can help you with detailed questions about our blockchain development services, pricing, timelines, portfolio projects, and more. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      confidence: 1.0,
      sources: ["Trivexa AI Training System"],
      category: "greeting"
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [sessionId] = useState(() => generateSessionId())
  const [trainingStats, setTrainingStats] = useState(getTrainingStats())
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Save user message to Firebase
    try {
      await saveChatMessage({
        text: text.trim(),
        sender: 'user',
        sessionId: sessionId
      })
    } catch (error) {
      console.error('Failed to save user message:', error)
    }

    // Generate AI response using training system
    setTimeout(async () => {
      try {
        const aiResponse: AIResponse = generateAIResponse(text.trim())
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse.answer,
          sender: 'bot',
          timestamp: new Date(),
          confidence: aiResponse.confidence,
          sources: aiResponse.sources,
          category: aiResponse.category,
          relatedQuestions: aiResponse.relatedQuestions
        }
        
        setMessages(prev => [...prev, botMessage])
        setIsTyping(false)

        // Save bot response to Firebase
        try {
          await saveChatMessage({
            text: aiResponse.answer,
            sender: 'bot',
            sessionId: sessionId
          })
        } catch (error) {
          console.error('Failed to save bot message:', error)
        }
      } catch (error) {
        console.error('Error generating AI response:', error)
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "I apologize, but I'm experiencing some technical difficulties. Please try again or contact our team directly at trivexatechpvt@gmail.com.",
          sender: 'bot',
          timestamp: new Date(),
          confidence: 0.1
        }
        setMessages(prev => [...prev, errorMessage])
        setIsTyping(false)
      }
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    handleSendMessage(question)
  }

  const handleQuickAction = (action: string) => {
    handleSendMessage(action)
  }

  const getConfidenceColor = (confidence?: number) => {
    if (!confidence) return 'text-gray-500'
    if (confidence >= 0.8) return 'text-green-500'
    if (confidence >= 0.6) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getConfidenceText = (confidence?: number) => {
    if (!confidence) return 'Unknown'
    if (confidence >= 0.8) return 'High'
    if (confidence >= 0.6) return 'Medium'
    return 'Low'
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300",
          isOpen 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-gradient-to-r from-primary-600 to-navy-600 hover:from-primary-700 hover:to-navy-700"
        )}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white mx-auto" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-white mx-auto" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-navy-600 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Trivexa AI</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Enhanced AI Assistant</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Training Stats */}
            <div className="px-4 py-2 bg-gradient-to-r from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>Knowledge Base: {trainingStats.totalDocuments} docs</span>
                <span>FAQs: {trainingStats.totalFAQs}</span>
                <span>Services: {trainingStats.totalServices}</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      "max-w-xs px-3 py-2 rounded-lg",
                      message.sender === 'user'
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    
                    {/* Bot message metadata */}
                    {message.sender === 'bot' && (
                      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                        <div className="flex items-center justify-between text-xs">
                          <span className={cn("font-medium", getConfidenceColor(message.confidence))}>
                            Confidence: {getConfidenceText(message.confidence)}
                          </span>
                          <span className="text-gray-500">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        
                        {/* Sources */}
                        {message.sources && message.sources.length > 0 && (
                          <div className="mt-1 text-xs text-gray-500">
                            Sources: {message.sources.join(', ')}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* User message timestamp */}
                    {message.sender === 'user' && (
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-gray-500">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick actions:</p>
                <div className="grid grid-cols-2 gap-1">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.action)}
                      className="flex items-center space-x-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded-full transition-colors"
                    >
                      <action.icon className="w-3 h-3" />
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Related Questions */}
            {messages.length > 1 && messages[messages.length - 1].relatedQuestions && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Related questions:</p>
                <div className="flex flex-wrap gap-1">
                  {messages[messages.length - 1].relatedQuestions?.slice(0, 2).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Popular questions:</p>
                <div className="flex flex-wrap gap-1">
                  {predefinedQuestions.slice(0, 4).map((question) => (
                    <button
                      key={question}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Ask about our services, pricing, or projects..."
                  className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg transition-colors"
                >
                  {isTyping ? (
                    <Loader2 className="w-4 h-4 text-white animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
