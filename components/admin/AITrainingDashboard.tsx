"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  BarChart3, 
  Target,
  Lightbulb,
  RefreshCw,
  Download,
  Upload,
  Settings,
  Zap
} from 'lucide-react'
import { advancedAISystem } from '@/lib/advanced-ai-training-system'

interface TrainingStats {
  totalQuestions: number
  categories: number
  difficulties: number
  averageConfidence: number
  categoryBreakdown: Array<{
    category: string
    count: number
  }>
  interactions: number
  performance: {
    totalInteractions: number
    averageConfidence: number
    positiveFeedback: number
    negativeFeedback: number
    categoryPerformance: Record<string, number>
    languagePerformance: Record<string, number>
    improvementAreas: string[]
  }
}

export default function AITrainingDashboard() {
  const [stats, setStats] = useState<TrainingStats | null>(null)
  const [insights, setInsights] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    loadTrainingData()
  }, [])

  const loadTrainingData = async () => {
    setIsLoading(true)
    try {
      const trainingStats = advancedAISystem.getTrainingStats()
      const learningInsights = advancedAISystem.getLearningInsights()
      
      setStats(trainingStats)
      setInsights(learningInsights)
    } catch (error) {
      console.error('Error loading training data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const exportTrainingData = () => {
    const data = advancedAISystem.exportTrainingData()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'trivexa-ai-training-data.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const refreshData = () => {
    loadTrainingData()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-primary-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300">Loading AI Training Dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Trivexa AI Training Dashboard
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Advanced AI Learning & Performance Analytics
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={refreshData}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
              <button
                onClick={exportTrainingData}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export Data</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'performance', label: 'Performance', icon: TrendingUp },
              { id: 'insights', label: 'Insights', icon: Lightbulb },
              { id: 'training', label: 'Training Data', icon: Brain }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'overview' && stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Total Questions</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalQuestions}</p>
                </div>
                <Brain className="w-8 h-8 text-primary-600" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Categories</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.categories}</p>
                </div>
                <Target className="w-8 h-8 text-green-600" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Interactions</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.interactions}</p>
                </div>
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Avg Confidence</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {(stats.averageConfidence * 100).toFixed(1)}%
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === 'performance' && stats && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Category Performance</h3>
              <div className="space-y-4">
                {Object.entries(stats.performance.categoryPerformance).map(([category, count]) => (
                  <div key={category} className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300 capitalize">{category}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${(count / stats.interactions) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Language Performance</h3>
              <div className="space-y-4">
                {Object.entries(stats.performance.languagePerformance).map(([language, count]) => (
                  <div key={language} className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{language.toUpperCase()}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${(count / stats.interactions) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'insights' && insights && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                Key Insights
              </h3>
              <div className="space-y-3">
                {insights.insights.map((insight: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-blue-500" />
                Recommendations
              </h3>
              <div className="space-y-3">
                {insights.recommendations.map((recommendation: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'training' && stats && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Training Data Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.categoryBreakdown.map((category) => (
                <div key={category.category} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white capitalize mb-2">
                    {category.category}
                  </h4>
                  <p className="text-2xl font-bold text-primary-600">{category.count}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">training items</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
