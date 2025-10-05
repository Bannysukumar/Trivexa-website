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
  Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { saveChatMessage, generateSessionId, type ChatMessage } from '@/lib/firebase-utils'
import { generateAIResponse } from '@/lib/ai-training-system'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const predefinedQuestions = [
  "What is Layer-1 blockchain development?",
  "How much does smart contract development cost?",
  "What industries do you serve?",
  "Do you provide blockchain consulting?",
  "What is the development timeline for a DApp?",
]

const botResponses: Record<string, string> = {
  "What is Layer-1 blockchain development?": "Layer-1 blockchain development involves creating the foundational blockchain protocol itself, including consensus mechanisms, network architecture, and core functionality. We specialize in building custom Layer-1 solutions with features like smart contracts, token standards, and governance systems.",
  
  "How much does smart contract development cost?": "Smart contract development costs vary based on complexity, features, and security requirements. Basic contracts start from $5,000, while complex DeFi protocols can range from $50,000 to $200,000+. We provide detailed quotes after understanding your specific requirements.",
  
  "What industries do you serve?": "We serve diverse industries including Fintech & DeFi, Healthcare, Supply Chain, Real Estate, Gaming & NFT, E-commerce, and Government sectors. Our blockchain solutions are tailored to meet specific industry requirements and compliance standards.",
  
  "Do you provide blockchain consulting?": "Yes! We offer comprehensive blockchain consulting services including technology assessment, architecture design, tokenomics planning, security audits, and implementation strategies. Our experts help you make informed decisions about blockchain adoption.",
  
  "What is the development timeline for a DApp?": "DApp development timelines typically range from 3-6 months for basic applications to 12+ months for complex DeFi protocols. Factors include smart contract complexity, frontend requirements, testing, and security audits. We provide detailed project timelines during consultation.",
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Trivexa's AI assistant. I can help you with questions about our blockchain development services, pricing, timelines, and more. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [sessionId] = useState(() => generateSessionId())
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

    // Simulate bot response delay
    setTimeout(async () => {
      const botResponse = getBotResponse(text)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)

      // Save bot response to Firebase
      try {
        await saveChatMessage({
          text: botResponse,
          sender: 'bot',
          sessionId: sessionId
        })
      } catch (error) {
        console.error('Failed to save bot message:', error)
      }
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    try {
      // Use the enhanced AI training system
      const aiResponse = generateAIResponse(userInput)
      return aiResponse.answer
    } catch (error) {
      console.error('Error generating AI response:', error)
      
      // Fallback to original logic
      const lowerInput = userInput.toLowerCase()
      
      // Check for exact matches first
      for (const [question, answer] of Object.entries(botResponses)) {
        if (lowerInput.includes(question.toLowerCase().split(' ')[0])) {
          return answer
        }
      }

      // Keyword-based responses
      if (lowerInput.includes('blockchain') || lowerInput.includes('layer-1') || lowerInput.includes('layer-2')) {
        return "We specialize in comprehensive blockchain development including Layer-1 and Layer-2 solutions. Our services cover smart contracts, DApps, DeFi protocols, and custom blockchain networks. Would you like to know more about any specific aspect?"
      }
      
      if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('budget')) {
        return "Our pricing depends on project complexity and requirements. For accurate quotes, I recommend scheduling a consultation with our team. We offer competitive rates and flexible engagement models. Would you like to discuss your specific project needs?"
      }
      
      if (lowerInput.includes('timeline') || lowerInput.includes('duration') || lowerInput.includes('how long')) {
        return "Project timelines vary based on complexity. Simple smart contracts take 2-4 weeks, while complex DApps can take 3-6 months. We provide detailed project roadmaps during consultation. What type of project are you planning?"
      }
      
      if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('get in touch')) {
        return "You can reach us at trivexatechpvt@gmail.com or 6301846681. We also have a contact form on our website. Our team typically responds within 24 hours. Would you like me to help you with anything else?"
      }

      // Default response
      return "I understand you're interested in our blockchain development services. While I can provide general information, for detailed technical discussions and project-specific queries, I recommend connecting with our expert team. You can reach us at trivexatechpvt@gmail.com or schedule a consultation. Is there anything specific about blockchain development I can help clarify?"
    }
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    handleSendMessage(question)
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
            : "bg-primary-600 hover:bg-primary-700"
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
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-navy-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Trivexa AI</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
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
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {predefinedQuestions.slice(0, 3).map((question) => (
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
                  placeholder="Ask about our services..."
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
