import { Metadata } from 'next'
import MultiLanguageAIChatbot from '@/components/ai-chatbot/MultiLanguageAIChatbot'

export const metadata: Metadata = {
  title: 'AI Chatbot - Voice & Multi-Language Support | Trivexa Technologies',
  description: 'Experience Trivexa AI chatbot with voice support and multi-language capabilities. Chat in English, Telugu, Tamil, and Hindi.',
  keywords: [
    'AI chatbot',
    'voice AI',
    'multi-language chatbot',
    'Telugu AI',
    'Tamil AI',
    'Hindi AI',
    'voice assistant',
    'Trivexa AI'
  ],
  other: {
    'Permissions-Policy': 'microphone=(self)'
  }
}

export default function AIChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            AI Chatbot Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Try our advanced AI chatbot with voice and multi-language support
          </p>
        </div>
      </div>
      
      {/* The chatbot is already included in the layout */}
      <MultiLanguageAIChatbot />
    </div>
  )
}
