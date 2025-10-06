import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import AITrainingManager from '@/components/admin/AITrainingManager'
import EnhancedAIChatbot from '@/components/ai-chatbot/EnhancedAIChatbot'
import AITrainingDemo from '@/components/ai-demo/AITrainingDemo'

export const metadata: Metadata = {
  title: 'AI Training System - Trivexa Technologies',
  description: 'Advanced AI training system for Trivexa Technologies with comprehensive knowledge base, RAG capabilities, and intelligent response generation.',
  keywords: [
    'ai training',
    'machine learning',
    'knowledge base',
    'rag system',
    'ai chatbot',
    'trivexa ai',
    'blockchain ai',
    'intelligent assistant'
  ],
  openGraph: {
    title: 'AI Training System - Trivexa Technologies',
    description: 'Advanced AI training system for Trivexa Technologies with comprehensive knowledge base, RAG capabilities, and intelligent response generation.',
    images: ['/og-ai-training.jpg'],
  },
}

export default function AITrainingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trivexa AI Training System
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced AI training system with comprehensive knowledge base, RAG (Retrieval-Augmented Generation) 
              capabilities, and intelligent response generation for enhanced customer support and engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="container-custom py-12">
        <AITrainingDemo />
      </div>

      {/* Admin Manager */}
      <div className="container-custom py-12">
        <AITrainingManager />
      </div>

      {/* Enhanced AI Chatbot */}
      <EnhancedAIChatbot />
    </div>
  )
}
