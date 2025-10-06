import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import { 
  Mic, 
  Volume2, 
  Globe, 
  Languages, 
  MessageCircle, 
  Bot,
  Sparkles,
  Zap,
  Shield,
  Users
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Features - Voice & Multi-Language Support | Trivexa Technologies',
  description: 'Experience Trivexa AI with advanced voice support and multi-language capabilities. Chat in English, Telugu, Tamil, and Hindi with voice input/output features.',
  keywords: [
    'AI chatbot voice support',
    'multi-language AI',
    'Telugu AI chatbot',
    'Tamil AI chatbot',
    'Hindi AI chatbot',
    'voice AI assistant',
    'Trivexa AI features',
    'blockchain AI chatbot'
  ]
}

const features = [
  {
    icon: Mic,
    title: 'Voice Input',
    description: 'Speak your questions directly to the AI assistant using your microphone. Perfect for hands-free interaction.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Volume2,
    title: 'Voice Output',
    description: 'Listen to AI responses with natural text-to-speech in multiple languages and accents.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Chat in English, Telugu, Tamil, and Hindi. Switch languages instantly with our language selector.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Languages,
    title: 'Smart Translation',
    description: 'AI automatically detects your language and provides responses in your preferred language.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Bot,
    title: 'Enhanced AI',
    description: 'Powered by advanced AI training system with comprehensive blockchain knowledge base.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Sparkles,
    title: 'Real-time Processing',
    description: 'Instant responses with confidence scoring and source attribution for reliable information.',
    color: 'from-pink-500 to-rose-500'
  }
]

const languages = [
  { name: 'English', nativeName: 'English', flag: '🇺🇸', code: 'en' },
  { name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', code: 'te' },
  { name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', code: 'ta' },
  { name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', code: 'hi' }
]

export default function AIFeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-navy-600 to-primary-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced AI Features
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Experience the future of AI interaction with voice support and multi-language capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-200">
              <div className="flex items-center space-x-2">
                <Mic className="w-4 h-4" />
                <span>Voice Input</span>
              </div>
              <div className="flex items-center space-x-2">
                <Volume2 className="w-4 h-4" />
                <span>Voice Output</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>4 Languages</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4" />
                <span>AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI assistant comes equipped with cutting-edge features to provide the best possible user experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Language Support */}
      <div className="bg-gradient-to-r from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Multi-Language Support
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Chat with our AI assistant in your preferred language. Switch between languages instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{language.flag}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {language.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {language.nativeName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How to Use
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get started with our AI assistant in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Click the Chat Button
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Look for the chat icon in the bottom-right corner of your screen
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Select Your Language
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Choose from English, Telugu, Tamil, or Hindi using the language selector
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Start Chatting
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Type your questions or use voice input to interact with our AI assistant
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-navy-600 py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience AI?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Try our advanced AI assistant with voice and multi-language support. 
            Get instant answers to your blockchain development questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Try AI Assistant
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300 flex items-center justify-center group">
              <Globe className="w-5 h-5 mr-2" />
              View All Features
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
