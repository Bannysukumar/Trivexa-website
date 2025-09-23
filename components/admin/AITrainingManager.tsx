"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Database, 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter,
  BookOpen,
  MessageSquare,
  TrendingUp,
  Shield,
  Settings,
  Download,
  Upload,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'
import { 
  allTrainingData, 
  faqData, 
  servicesInfo,
  getTrainingDataByCategory,
  searchTrainingData,
  getFAQByCategory,
  searchFAQ,
  type TrainingDocument,
  type FAQItem,
  type ServiceInfo
} from '@/lib/ai-training-data'
import { trivexaAI, getTrainingStats, type TrainingStats } from '@/lib/ai-training-system'

interface TrainingManagerProps {
  className?: string
}

export default function AITrainingManager({ className }: TrainingManagerProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'faqs' | 'services' | 'analytics'>('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [trainingStats, setTrainingStats] = useState<TrainingStats | null>(null)
  const [documents, setDocuments] = useState<TrainingDocument[]>(allTrainingData)
  const [faqs, setFaqs] = useState<FAQItem[]>(faqData)
  const [services, setServices] = useState<ServiceInfo[]>(servicesInfo)
  const [selectedDocument, setSelectedDocument] = useState<TrainingDocument | null>(null)
  const [selectedFAQ, setSelectedFAQ] = useState<FAQItem | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setTrainingStats(getTrainingStats())
  }, [])

  const categories = ['all', 'company', 'team', 'portfolio', 'industries', 'contact', 'services']

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const handleAddDocument = () => {
    const newDocument: TrainingDocument = {
      id: `doc-${Date.now()}`,
      category: 'general',
      title: 'New Document',
      content: 'Document content...',
      keywords: [],
      metadata: {
        source: 'admin',
        lastUpdated: new Date().toISOString(),
        priority: 5
      }
    }
    setDocuments([...documents, newDocument])
    setSelectedDocument(newDocument)
    setIsEditing(true)
  }

  const handleAddFAQ = () => {
    const newFAQ: FAQItem = {
      question: 'New Question',
      answer: 'Answer...',
      category: 'general',
      keywords: []
    }
    setFaqs([...faqs, newFAQ])
    setSelectedFAQ(newFAQ)
    setIsEditing(true)
  }

  const handleDeleteDocument = (id: string) => {
    if (confirm('Are you sure you want to delete this document?')) {
      setDocuments(documents.filter(doc => doc.id !== id))
      if (selectedDocument?.id === id) {
        setSelectedDocument(null)
      }
    }
  }

  const handleDeleteFAQ = (index: number) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      const newFAQs = [...faqs]
      newFAQs.splice(index, 1)
      setFaqs(newFAQs)
      setSelectedFAQ(null)
    }
  }

  const handleSaveDocument = (updatedDoc: TrainingDocument) => {
    setDocuments(documents.map(doc => doc.id === updatedDoc.id ? updatedDoc : doc))
    setSelectedDocument(updatedDoc)
    setIsEditing(false)
  }

  const handleSaveFAQ = (updatedFAQ: FAQItem, index: number) => {
    const newFAQs = [...faqs]
    newFAQs[index] = updatedFAQ
    setFaqs(newFAQs)
    setSelectedFAQ(updatedFAQ)
    setIsEditing(false)
  }

  const testAIResponse = (query: string) => {
    const response = trivexaAI.generateResponse(query)
    alert(`Query: ${query}\n\nResponse: ${response.answer}\n\nConfidence: ${(response.confidence * 100).toFixed(1)}%\n\nSources: ${response.sources.join(', ')}`)
  }

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI Training Manager</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage Trivexa AI knowledge base and training data</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
              <RefreshCw className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
              <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
              <Upload className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {[
          { id: 'overview', label: 'Overview', icon: TrendingUp },
          { id: 'documents', label: 'Documents', icon: BookOpen },
          { id: 'faqs', label: 'FAQs', icon: MessageSquare },
          { id: 'services', label: 'Services', icon: Settings },
          { id: 'analytics', label: 'Analytics', icon: Database }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            {trainingStats && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Total Documents</p>
                      <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{trainingStats.totalDocuments}</p>
                    </div>
                    <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-600 dark:text-green-400 text-sm font-medium">FAQs</p>
                      <p className="text-2xl font-bold text-green-900 dark:text-green-100">{trainingStats.totalFAQs}</p>
                    </div>
                    <MessageSquare className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">Services</p>
                      <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">{trainingStats.totalServices}</p>
                    </div>
                    <Settings className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-600 dark:text-orange-400 text-sm font-medium">Categories</p>
                      <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">{trainingStats.categories.length}</p>
                    </div>
                    <Database className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
              </div>
            )}

            {/* Categories */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Knowledge Base Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trainingStats?.categories.map((category) => (
                  <div key={category} className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                    <p className="font-medium text-gray-900 dark:text-white capitalize">{category}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {documents.filter(doc => doc.category === category).length} docs
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => testAIResponse('What services do you offer?')}
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">Test AI Response</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Test the AI with sample queries</p>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab('documents')}
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <Plus className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">Add Document</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Add new training document</p>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab('faqs')}
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">Add FAQ</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Add new FAQ item</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="capitalize">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddDocument}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Document</span>
              </button>
            </div>

            {/* Documents List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Documents ({filteredDocuments.length})
                </h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDocument(doc)}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedDocument?.id === doc.id
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">{doc.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                            {doc.content.substring(0, 100)}...
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400">
                              {doc.category}
                            </span>
                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-xs rounded-full text-blue-600 dark:text-blue-400">
                              Priority: {doc.metadata.priority}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteDocument(doc.id)
                          }}
                          className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Document Editor */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                {selectedDocument ? (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {isEditing ? 'Edit Document' : 'Document Details'}
                    </h3>
                    {isEditing ? (
                      <DocumentEditor
                        document={selectedDocument}
                        onSave={handleSaveDocument}
                        onCancel={() => setIsEditing(false)}
                      />
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Title
                          </label>
                          <p className="text-gray-900 dark:text-white">{selectedDocument.title}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Category
                          </label>
                          <p className="text-gray-900 dark:text-white capitalize">{selectedDocument.category}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Content
                          </label>
                          <p className="text-gray-900 dark:text-white text-sm">{selectedDocument.content}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Keywords
                          </label>
                          <div className="flex flex-wrap gap-1">
                            {selectedDocument.keywords.map((keyword, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 text-xs rounded-full"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={() => setIsEditing(true)}
                          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          <span>Edit Document</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select a document to view details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'faqs' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="capitalize">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddFAQ}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add FAQ</span>
              </button>
            </div>

            {/* FAQs List */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                FAQs ({filteredFAQs.length})
              </h3>
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{faq.answer}</p>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400">
                            {faq.category}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {faq.keywords.map((keyword, keyIndex) => (
                              <span
                                key={keyIndex}
                                className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 text-xs rounded-full"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <button
                          onClick={() => {
                            setSelectedFAQ(faq)
                            setIsEditing(true)
                          }}
                          className="p-1 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteFAQ(index)}
                          className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Services Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{service.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Timeline:</span>
                      <span className="text-gray-900 dark:text-white">{service.timeline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Pricing:</span>
                      <span className="text-gray-900 dark:text-white">{service.pricing}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400">
                          +{service.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Training Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Knowledge Base Health</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Document Coverage</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Good</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">FAQ Coverage</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Good</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Service Coverage</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Good</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Training Recommendations</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Consider adding more industry-specific use cases
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      FAQ coverage is comprehensive
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Update pricing information regularly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Document Editor Component
interface DocumentEditorProps {
  document: TrainingDocument
  onSave: (doc: TrainingDocument) => void
  onCancel: () => void
}

function DocumentEditor({ document, onSave, onCancel }: DocumentEditorProps) {
  const [editedDoc, setEditedDoc] = useState<TrainingDocument>(document)

  const handleSave = () => {
    onSave(editedDoc)
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Title
        </label>
        <input
          type="text"
          value={editedDoc.title}
          onChange={(e) => setEditedDoc({ ...editedDoc, title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Category
        </label>
        <select
          value={editedDoc.category}
          onChange={(e) => setEditedDoc({ ...editedDoc, category: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="company">Company</option>
          <option value="team">Team</option>
          <option value="portfolio">Portfolio</option>
          <option value="industries">Industries</option>
          <option value="contact">Contact</option>
          <option value="services">Services</option>
          <option value="general">General</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Content
        </label>
        <textarea
          value={editedDoc.content}
          onChange={(e) => setEditedDoc({ ...editedDoc, content: e.target.value })}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Keywords (comma-separated)
        </label>
        <input
          type="text"
          value={editedDoc.keywords.join(', ')}
          onChange={(e) => setEditedDoc({ 
            ...editedDoc, 
            keywords: e.target.value.split(',').map(k => k.trim()).filter(k => k) 
          })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Priority
        </label>
        <input
          type="number"
          min="1"
          max="10"
          value={editedDoc.metadata.priority}
          onChange={(e) => setEditedDoc({ 
            ...editedDoc, 
            metadata: { ...editedDoc.metadata, priority: parseInt(e.target.value) }
          })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      <div className="flex space-x-3">
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Save</span>
        </button>
        <button
          onClick={onCancel}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </div>
  )
}
