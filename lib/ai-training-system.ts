// Trivexa AI Training System with RAG (Retrieval-Augmented Generation)
// This system provides intelligent responses based on the training data

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
} from './ai-training-data'

export interface AIResponse {
  answer: string
  confidence: number
  sources: string[]
  category: string
  relatedQuestions?: string[]
}

export interface TrainingStats {
  totalDocuments: number
  categories: string[]
  lastUpdated: string
  totalFAQs: number
  totalServices: number
}

class TrivexaAITrainingSystem {
  private trainingData: TrainingDocument[]
  private faqData: FAQItem[]
  private servicesData: ServiceInfo[]

  constructor() {
    this.trainingData = allTrainingData
    this.faqData = faqData
    this.servicesData = servicesInfo
  }

  // Get training statistics
  getTrainingStats(): TrainingStats {
    const categorySet = new Set(this.trainingData.map(doc => doc.category))
    const categories = Array.from(categorySet)
    return {
      totalDocuments: this.trainingData.length,
      categories,
      lastUpdated: new Date().toISOString(),
      totalFAQs: this.faqData.length,
      totalServices: this.servicesData.length
    }
  }

  // Enhanced search with semantic understanding
  private calculateRelevance(query: string, document: TrainingDocument): number {
    const queryWords = query.toLowerCase().split(/\s+/)
    const titleWords = document.title.toLowerCase().split(/\s+/)
    const contentWords = document.content.toLowerCase().split(/\s+/)
    const keywordWords = document.keywords.map(k => k.toLowerCase())

    let score = 0

    // Title matches (highest weight)
    queryWords.forEach(qWord => {
      if (titleWords.includes(qWord)) score += 10
      if (titleWords.some(tWord => tWord.includes(qWord) || qWord.includes(tWord))) score += 5
    })

    // Content matches (medium weight)
    queryWords.forEach(qWord => {
      if (contentWords.includes(qWord)) score += 3
      if (contentWords.some(cWord => cWord.includes(qWord) || qWord.includes(cWord))) score += 1
    })

    // Keyword matches (high weight)
    queryWords.forEach(qWord => {
      if (keywordWords.includes(qWord)) score += 8
      if (keywordWords.some(kWord => kWord.includes(qWord) || qWord.includes(kWord))) score += 4
    })

    // Priority boost
    score += document.metadata.priority

    return score
  }

  // Find most relevant documents
  private findRelevantDocuments(query: string, limit: number = 3): TrainingDocument[] {
    const scoredDocs = this.trainingData.map(doc => ({
      document: doc,
      score: this.calculateRelevance(query, doc)
    }))

    return scoredDocs
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.document)
  }

  // Find most relevant FAQs
  private findRelevantFAQs(query: string, limit: number = 2): FAQItem[] {
    const scoredFAQs = this.faqData.map(faq => {
      const queryWords = query.toLowerCase().split(/\s+/)
      const questionWords = faq.question.toLowerCase().split(/\s+/)
      const answerWords = faq.answer.toLowerCase().split(/\s+/)
      const keywordWords = faq.keywords.map(k => k.toLowerCase())

      let score = 0

      // Question matches (highest weight)
      queryWords.forEach(qWord => {
        if (questionWords.includes(qWord)) score += 10
        if (questionWords.some(q => q.includes(qWord) || qWord.includes(q))) score += 5
      })

      // Answer matches (medium weight)
      queryWords.forEach(qWord => {
        if (answerWords.includes(qWord)) score += 3
        if (answerWords.some(a => a.includes(qWord) || qWord.includes(a))) score += 1
      })

      // Keyword matches (high weight)
      queryWords.forEach(qWord => {
        if (keywordWords.includes(qWord)) score += 8
        if (keywordWords.some(k => k.includes(qWord) || qWord.includes(k))) score += 4
      })

      return { faq, score }
    })

    return scoredFAQs
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.faq)
  }

  // Generate AI response using RAG
  generateResponse(query: string): AIResponse {
    const lowerQuery = query.toLowerCase()

    // Check for exact FAQ matches first
    const exactFAQMatch = this.faqData.find(faq => 
      faq.question.toLowerCase() === lowerQuery ||
      faq.question.toLowerCase().includes(lowerQuery)
    )

    if (exactFAQMatch) {
      return {
        answer: exactFAQMatch.answer,
        confidence: 0.95,
        sources: [exactFAQMatch.question],
        category: exactFAQMatch.category,
        relatedQuestions: this.getRelatedQuestions(exactFAQMatch.category)
      }
    }

    // Find relevant documents and FAQs
    const relevantDocs = this.findRelevantDocuments(query, 3)
    const relevantFAQs = this.findRelevantFAQs(query, 2)

    // Generate response based on context
    let answer = ""
    let confidence = 0.5
    const sources: string[] = []
    let category = "general"

    if (relevantDocs.length > 0) {
      const primaryDoc = relevantDocs[0]
      category = primaryDoc.category
      
      // Use the most relevant document as the primary answer
      answer = this.generateContextualAnswer(query, primaryDoc, relevantDocs.slice(1))
      confidence = Math.min(0.9, 0.6 + (relevantDocs.length * 0.1))
      sources.push(primaryDoc.title)
    }

    if (relevantFAQs.length > 0) {
      // Enhance answer with FAQ information
      const faqInfo = relevantFAQs[0]
      if (answer) {
        answer += `\n\nRelated information: ${faqInfo.answer}`
      } else {
        answer = faqInfo.answer
        category = faqInfo.category
        confidence = 0.8
      }
      sources.push(faqInfo.question)
    }

    // Fallback response if no relevant information found
    if (!answer) {
      answer = this.generateFallbackResponse(query)
      confidence = 0.3
    }

    return {
      answer,
      confidence,
      sources,
      category,
      relatedQuestions: this.getRelatedQuestions(category)
    }
  }

  // Generate contextual answer based on documents
  private generateContextualAnswer(query: string, primaryDoc: TrainingDocument, additionalDocs: TrainingDocument[]): string {
    let answer = primaryDoc.content

    // Add relevant information from additional documents
    if (additionalDocs.length > 0) {
      const additionalInfo = additionalDocs
        .map(doc => doc.content)
        .join(' ')
      
      // Check if additional info adds value
      if (additionalInfo.length > 0) {
        answer += `\n\nAdditional information: ${additionalInfo}`
      }
    }

    // Add specific service information if relevant
    if (primaryDoc.category === 'services' || query.toLowerCase().includes('service')) {
      const serviceInfo = this.servicesData.find(service => 
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        query.toLowerCase().includes(service.name.toLowerCase())
      )
      
      if (serviceInfo) {
        answer += `\n\nService Details:\n`
        answer += `- Timeline: ${serviceInfo.timeline}\n`
        answer += `- Pricing: ${serviceInfo.pricing}\n`
        answer += `- Key Features: ${serviceInfo.features.slice(0, 3).join(', ')}\n`
        answer += `- Technologies: ${serviceInfo.technologies.slice(0, 5).join(', ')}`
      }
    }

    return answer
  }

  // Generate fallback response
  private generateFallbackResponse(query: string): string {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('budget')) {
      return "Our pricing depends on project complexity and requirements. For accurate quotes, I recommend scheduling a consultation with our team. We offer competitive rates and flexible engagement models. Would you like to discuss your specific project needs?"
    }

    if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('get in touch')) {
      return "You can reach us at hello@trivexa.com or +916301846681. We also have a contact form on our website. Our team typically responds within 24 hours. Would you like me to help you with anything else?"
    }

    if (lowerQuery.includes('blockchain') || lowerQuery.includes('web3') || lowerQuery.includes('defi')) {
      return "We specialize in comprehensive blockchain development including Layer-1 and Layer-2 solutions, smart contracts, DApps, DeFi protocols, and custom blockchain networks. Our services cover everything from initial concept to deployment and maintenance. Would you like to know more about any specific aspect?"
    }

    return "I understand you're interested in our blockchain development services. While I can provide general information, for detailed technical discussions and project-specific queries, I recommend connecting with our expert team. You can reach us at hello@trivexa.com or schedule a consultation. Is there anything specific about blockchain development I can help clarify?"
  }

  // Get related questions for a category
  private getRelatedQuestions(category: string): string[] {
    const categoryFAQs = this.faqData.filter(faq => faq.category === category)
    return categoryFAQs.slice(0, 3).map(faq => faq.question)
  }

  // Get service information
  getServiceInfo(serviceName: string): ServiceInfo | null {
    return this.servicesData.find(service => 
      service.name.toLowerCase().includes(serviceName.toLowerCase()) ||
      serviceName.toLowerCase().includes(service.name.toLowerCase())
    ) || null
  }

  // Get all services
  getAllServices(): ServiceInfo[] {
    return this.servicesData
  }

  // Get training data by category
  getTrainingDataByCategory(category: string): TrainingDocument[] {
    return getTrainingDataByCategory(category)
  }

  // Search training data
  searchTrainingData(query: string): TrainingDocument[] {
    return searchTrainingData(query)
  }

  // Get FAQ by category
  getFAQByCategory(category: string): FAQItem[] {
    return getFAQByCategory(category)
  }

  // Search FAQ
  searchFAQ(query: string): FAQItem[] {
    return searchFAQ(query)
  }

  // Add new training document (for future expansion)
  addTrainingDocument(document: TrainingDocument): void {
    this.trainingData.push(document)
  }

  // Add new FAQ (for future expansion)
  addFAQ(faq: FAQItem): void {
    this.faqData.push(faq)
  }

  // Update training document
  updateTrainingDocument(id: string, updates: Partial<TrainingDocument>): boolean {
    const index = this.trainingData.findIndex(doc => doc.id === id)
    if (index !== -1) {
      this.trainingData[index] = { ...this.trainingData[index], ...updates }
      return true
    }
    return false
  }

  // Delete training document
  deleteTrainingDocument(id: string): boolean {
    const index = this.trainingData.findIndex(doc => doc.id === id)
    if (index !== -1) {
      this.trainingData.splice(index, 1)
      return true
    }
    return false
  }
}

// Create singleton instance
export const trivexaAI = new TrivexaAITrainingSystem()

// Export utility functions
export function generateAIResponse(query: string): AIResponse {
  return trivexaAI.generateResponse(query)
}

export function getTrainingStats(): TrainingStats {
  return trivexaAI.getTrainingStats()
}

export function getServiceInfo(serviceName: string): ServiceInfo | null {
  return trivexaAI.getServiceInfo(serviceName)
}

export function getAllServices(): ServiceInfo[] {
  return trivexaAI.getAllServices()
}
