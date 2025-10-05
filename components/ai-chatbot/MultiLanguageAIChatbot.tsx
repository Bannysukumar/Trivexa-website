"use client"

import { useState, useRef, useEffect } from 'react'

// Add TypeScript declarations for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Loader2,
  BookOpen,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { saveChatMessage, generateSessionId, type ChatMessage } from '@/lib/firebase-utils'
import { generateMultiLanguageAIResponse, type AIResponse } from '@/lib/multi-language-ai-system'
import { getTrainingStats } from '@/lib/ai-training-system'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  confidence?: number
  sources?: string[]
  category?: string
  relatedQuestions?: string[]
  language?: string
  isVoice?: boolean
}

type Language = 'en' | 'te' | 'ta' | 'hi'

interface LanguageConfig {
  code: Language
  name: string
  nativeName: string
  flag: string
}

const languages: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
]

const welcomeMessages = {
  en: "Hello! I'm Trivexa's enhanced AI assistant with voice and multi-language support. I can help you with detailed questions about our blockchain development services, pricing, timelines, portfolio projects, and more. How can I assist you today?",
  te: "హలో! నేను Trivexa యొక్క enhanced AI assistant, voice మరియు multi-language support తో. మీరు మా blockchain development services, pricing, timelines, portfolio projects గురించి detailed questions అడగవచ్చు. నేను ఎలా help చేయగలను?",
  ta: "வணக்கம்! நான் Trivexa இன் enhanced AI assistant, voice மற்றும் multi-language support உடன். நீங்கள் எங்கள் blockchain development services, pricing, timelines, portfolio projects பற்றி detailed questions கேட்கலாம். நான் எப்படி உதவ முடியும்?",
  hi: "नमस्ते! मैं Trivexa का enhanced AI assistant हूं, voice और multi-language support के साथ। आप हमारी blockchain development services, pricing, timelines, portfolio projects के बारे में detailed questions पूछ सकते हैं। मैं कैसे मदद कर सकता हूं?"
}

export default function MultiLanguageAIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en')
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [sessionId] = useState(() => generateSessionId())
  const [voiceAvailable, setVoiceAvailable] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Initialize with welcome message in selected language
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        text: welcomeMessages[selectedLanguage],
        sender: 'bot',
        timestamp: new Date(),
        confidence: 1.0,
        sources: ["Trivexa AI Training System"],
        category: "greeting",
        language: selectedLanguage
      }])
    }
  }, [selectedLanguage])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageDropdownOpen) {
        const target = event.target as Element
        if (!target.closest('.language-dropdown-container')) {
          setIsLanguageDropdownOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isLanguageDropdownOpen])

  // Check voice availability on component mount
  useEffect(() => {
    const checkVoiceAvailability = async () => {
      const isSecure = window.location.protocol === 'https:' || 
                      window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1'
      
      const hasSpeechRecognition = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window
      const hasSpeechSynthesis = 'speechSynthesis' in window
      
      setVoiceAvailable(isSecure && hasSpeechRecognition && hasSpeechSynthesis)
    }

    checkVoiceAvailability()
  }, [])

  // Voice recording functionality using Web Speech API
  const startRecording = async () => {
    try {
      // Check if we're on HTTPS or localhost
      const isSecure = window.location.protocol === 'https:' || 
                      window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1'
      
      if (!isSecure) {
        alert('Voice recording requires HTTPS. Please use the text input instead.')
        return
      }

      // Check if Web Speech API is available
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Voice recognition is not supported in this browser. Please use the text input instead.')
        return
      }

      // Use Web Speech API directly
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = getLanguageCode(selectedLanguage)
      recognition.maxAlternatives = 1
      
      recognition.onstart = () => {
        console.log('Speech recognition started')
        setIsRecording(true)
      }
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        setInputValue(transcript)
        setIsRecording(false)
        
        // Show success message
        const successMessage = {
          id: Date.now().toString(),
          text: `Voice input captured: "${transcript}"`,
          sender: 'bot' as const,
          timestamp: new Date(),
          confidence: 1.0,
          sources: ["Voice Input System"],
          category: "system",
          language: selectedLanguage
        }
        
        setMessages(prev => [...prev, successMessage])
      }
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        setIsRecording(false)
        
        if (event.error === 'not-allowed') {
          alert('Microphone permission denied. Please allow microphone access and try again.')
        } else if (event.error === 'no-speech') {
          alert('No speech detected. Please try speaking again.')
        } else if (event.error === 'audio-capture') {
          alert('No microphone found. Please connect a microphone and try again.')
        } else {
          alert('Voice recognition error. Please try again or use the text input.')
        }
      }
      
      recognition.onend = () => {
        console.log('Speech recognition ended')
        setIsRecording(false)
      }
      
      recognition.start()
    } catch (error) {
      console.error('Error starting voice recognition:', error)
      setIsRecording(false)
      alert('Voice recognition is not available. Please use the text input instead.')
    }
  }

  const stopRecording = () => {
    // For Web Speech API, we don't need to manually stop
    // The recognition will stop automatically when speech ends
    setIsRecording(false)
  }


  // Load voices for text-to-speech
  const loadVoices = () => {
    return new Promise<void>((resolve) => {
      if (window.speechSynthesis.getVoices().length > 0) {
        resolve()
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          resolve()
        }
      }
    })
  }

  // Text-to-speech functionality
  const speakText = async (text: string) => {
    if ('speechSynthesis' in window) {
      try {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel()
        
        // Load voices first
        await loadVoices()
        
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = getLanguageCode(selectedLanguage)
        utterance.rate = 0.9
        utterance.pitch = 1.2  // Higher pitch for female voice
        utterance.volume = 1
        
        // Try to select a female voice
        const voices = window.speechSynthesis.getVoices()
        const femaleVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('female') || 
          voice.name.toLowerCase().includes('woman') ||
          voice.name.toLowerCase().includes('samantha') ||
          voice.name.toLowerCase().includes('karen') ||
          voice.name.toLowerCase().includes('susan') ||
          voice.name.toLowerCase().includes('zira') ||
          voice.name.toLowerCase().includes('hazel') ||
          voice.name.toLowerCase().includes('victoria') ||
          voice.name.toLowerCase().includes('serena') ||
          voice.name.toLowerCase().includes('sarah') ||
          voice.name.toLowerCase().includes('emma') ||
          voice.name.toLowerCase().includes('ava') ||
          voice.name.toLowerCase().includes('sophia') ||
          voice.name.toLowerCase().includes('isabella')
        )
        
        if (femaleVoice) {
          utterance.voice = femaleVoice
          console.log('Using female voice:', femaleVoice.name)
        } else {
          console.log('No female voice found, using default voice')
        }
        
        utterance.onstart = () => setIsPlaying(true)
        utterance.onend = () => setIsPlaying(false)
        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event.error)
          setIsPlaying(false)
        }
        
        speechSynthesisRef.current = utterance
        window.speechSynthesis.speak(utterance)
      } catch (error) {
        console.error('Error with text-to-speech:', error)
        setIsPlaying(false)
      }
    } else {
      console.warn('Text-to-speech is not supported in this browser')
    }
  }

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
    }
  }

  const getLanguageCode = (lang: Language): string => {
    const languageCodes = {
      en: 'en-US',
      te: 'te-IN',
      ta: 'ta-IN',
      hi: 'hi-IN'
    }
    return languageCodes[lang]
  }

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
      language: selectedLanguage
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
        const aiResponse: AIResponse = generateMultiLanguageAIResponse(text.trim(), selectedLanguage)
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse.answer,
          sender: 'bot',
          timestamp: new Date(),
          confidence: aiResponse.confidence,
          sources: aiResponse.sources,
          category: aiResponse.category,
          relatedQuestions: aiResponse.relatedQuestions,
          language: selectedLanguage
        }
        
        setMessages(prev => [...prev, botMessage])
        setIsTyping(false)

        // Auto-speak the response
        speakText(aiResponse.answer)

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
          confidence: 0.1,
          language: selectedLanguage
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

  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang)
    // Update welcome message for new language
    setMessages([{
      id: '1',
      text: welcomeMessages[lang],
      sender: 'bot',
      timestamp: new Date(),
      confidence: 1.0,
      sources: ["Trivexa AI Training System"],
      category: "greeting",
      language: lang
    }])
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
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center group backdrop-blur-sm border border-white/20",
          isOpen 
            ? "bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/25" 
            : "bg-gradient-to-br from-primary-600 via-primary-500 to-navy-600 hover:from-primary-700 hover:via-primary-600 hover:to-navy-700 text-white shadow-primary-500/25"
        )}
        style={{
          background: isOpen 
            ? 'linear-gradient(135deg, #ef4444, #dc2626)' 
            : 'linear-gradient(135deg, #3b82f6, #1e40af, #1e3a8a)'
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm"></div>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-10"
            >
              <X className="w-7 h-7 text-white mx-auto" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-10"
            >
              <MessageCircle className="w-7 h-7 text-white mx-auto" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse animation for new messages */}
        {!isOpen && messages.length > 1 && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9, rotateX: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 flex flex-col overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8))',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20 dark:border-gray-700/50 bg-gradient-to-r from-primary-50/50 to-navy-50/50 dark:from-primary-900/20 dark:to-navy-900/20">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 via-primary-500 to-navy-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Trivexa AI</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Multi-Language AI • Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-200 group"
              >
                <X className="w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              </button>
            </div>

            {/* Language Selector */}
            <div className="px-6 py-3 bg-gradient-to-r from-primary-50/30 to-navy-50/30 dark:from-primary-900/10 dark:to-navy-900/10 border-b border-white/20 dark:border-gray-700/50">
              <div className="flex items-center justify-center">
                <div className="relative language-dropdown-container">
                  <button
                    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    className="flex items-center space-x-3 px-4 py-2 bg-white/60 dark:bg-gray-800/60 hover:bg-white/80 dark:hover:bg-gray-700/60 rounded-xl transition-all duration-200 border border-white/30 dark:border-gray-600/50"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {languages.find(l => l.code === selectedLanguage)?.flag} {languages.find(l => l.code === selectedLanguage)?.nativeName}
                    </span>
                  </button>
                  
                  {/* Language Dropdown */}
                  {isLanguageDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/30 dark:border-gray-600/50 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            handleLanguageChange(lang.code)
                            setIsLanguageDropdownOpen(false)
                          }}
                          className={cn(
                            "w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 first:rounded-t-xl last:rounded-b-xl",
                            selectedLanguage === lang.code
                              ? "bg-gradient-to-r from-primary-600 to-navy-600 text-white"
                              : "text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/50"
                          )}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="text-sm font-medium">{lang.nativeName}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>


            {/* Voice Status */}
            {!voiceAvailable && (
              <div className="px-6 py-3 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/20 dark:to-orange-900/20 border-b border-yellow-200/50 dark:border-yellow-800/50">
                <div className="flex items-center space-x-3 text-sm text-yellow-700 dark:text-yellow-300">
                  <div className="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Mic className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium">Voice features require HTTPS. Use text input for now.</span>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white/50 to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={cn(
                    "flex",
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      "max-w-xs px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm border",
                      message.sender === 'user'
                        ? "bg-gradient-to-br from-primary-600 to-primary-700 text-white border-primary-500/20"
                        : "bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white border-white/30 dark:border-gray-700/50"
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                    
                    {/* Bot message metadata */}
                    {message.sender === 'bot' && (
                      <div className="mt-3 pt-3 border-t border-white/20 dark:border-gray-600/50">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2">
                            <div className={cn("w-2 h-2 rounded-full", 
                              message.confidence && message.confidence >= 0.8 ? "bg-green-500" :
                              message.confidence && message.confidence >= 0.6 ? "bg-yellow-500" : "bg-red-500"
                            )}></div>
                            <span className={cn("font-medium", getConfidenceColor(message.confidence))}>
                              {getConfidenceText(message.confidence)} Confidence
                            </span>
                          </div>
                          <span className="text-gray-500 dark:text-gray-400">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        
                        {/* Sources */}
                        {message.sources && message.sources.length > 0 && (
                          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                            <BookOpen className="w-3 h-3" />
                            <span>Sources: {message.sources.join(', ')}</span>
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
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl px-4 py-3 shadow-lg border border-white/30 dark:border-gray-700/50">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">AI is thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-white/20 dark:border-gray-700/50 bg-gradient-to-r from-primary-50/30 to-navy-50/30 dark:from-primary-900/10 dark:to-navy-900/10">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Quick questions:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "What is Layer-1 blockchain development?",
                    "How much does smart contract development cost?",
                    "What industries do you serve?",
                    "Do you provide blockchain consulting?"
                  ].map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="px-3 py-1.5 bg-white/60 dark:bg-gray-800/60 hover:bg-white/80 dark:hover:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-lg text-xs transition-colors border border-white/30 dark:border-gray-600/50"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-6 border-t border-white/20 dark:border-gray-700/50 bg-gradient-to-r from-white/50 to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder={`Ask about our services in ${languages.find(l => l.code === selectedLanguage)?.nativeName}...`}
                    className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-white/30 dark:border-gray-600/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 backdrop-blur-sm transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  {isTyping && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Loader2 className="w-4 h-4 animate-spin text-primary-500" />
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  {/* Voice Recording Button */}
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={!voiceAvailable}
                    title={voiceAvailable ? (isRecording ? "Stop recording" : "Start voice recording") : "Voice recording requires HTTPS"}
                    className={cn(
                      "p-3 rounded-2xl transition-all duration-200 shadow-lg backdrop-blur-sm border",
                      !voiceAvailable 
                        ? "bg-gray-100/50 dark:bg-gray-700/50 text-gray-400 cursor-not-allowed border-gray-200/50 dark:border-gray-600/50"
                        : isRecording 
                          ? "bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-red-400/20 shadow-red-500/25" 
                          : "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border-white/30 dark:border-gray-600/50 hover:shadow-lg"
                    )}
                  >
                    {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>
                  
                  {/* Text-to-Speech Button */}
                  <button
                    onClick={isPlaying ? stopSpeaking : () => speakText(messages[messages.length - 1]?.text || '')}
                    disabled={messages.length === 0 || !voiceAvailable}
                    title={voiceAvailable ? (isPlaying ? "Stop speaking" : "Play response as speech") : "Text-to-speech requires HTTPS"}
                    className={cn(
                      "p-3 rounded-2xl transition-all duration-200 shadow-lg backdrop-blur-sm border",
                      !voiceAvailable || messages.length === 0
                        ? "bg-gray-100/50 dark:bg-gray-700/50 text-gray-400 cursor-not-allowed border-gray-200/50 dark:border-gray-600/50"
                        : isPlaying 
                          ? "bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-green-400/20 shadow-green-500/25" 
                          : "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border-white/30 dark:border-gray-600/50 hover:shadow-lg"
                    )}
                  >
                    {isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  
                  {/* Send Button */}
                  <button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    className={cn(
                      "p-3 rounded-2xl transition-all duration-200 shadow-lg backdrop-blur-sm border",
                      !inputValue.trim() || isTyping
                        ? "bg-gray-100/50 dark:bg-gray-700/50 text-gray-400 cursor-not-allowed border-gray-200/50 dark:border-gray-600/50"
                        : "bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white border-primary-500/20 shadow-primary-500/25 hover:shadow-xl"
                    )}
                  >
                    {isTyping ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}