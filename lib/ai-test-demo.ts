// Trivexa AI Training System Demo
// This file demonstrates the AI training system capabilities

import { generateAIResponse, getTrainingStats, getAllServices } from './ai-training-system'

export function runAIDemo() {
  console.log('🤖 Trivexa AI Training System Demo')
  console.log('=====================================\n')

  // Get training statistics
  const stats = getTrainingStats()
  console.log('📊 Training Statistics:')
  console.log(`- Total Documents: ${stats.totalDocuments}`)
  console.log(`- Total FAQs: ${stats.totalFAQs}`)
  console.log(`- Total Services: ${stats.totalServices}`)
  console.log(`- Categories: ${stats.categories.join(', ')}`)
  console.log(`- Last Updated: ${stats.lastUpdated}\n`)

  // Test queries
  const testQueries = [
    "What services do you offer?",
    "How much does smart contract development cost?",
    "What is Layer-1 blockchain development?",
    "Tell me about your team",
    "What industries do you serve?",
    "How do you ensure security?",
    "What is your contact information?",
    "Tell me about your portfolio projects"
  ]

  console.log('🧪 Testing AI Responses:')
  console.log('========================\n')

  testQueries.forEach((query, index) => {
    console.log(`${index + 1}. Query: "${query}"`)
    
    try {
      const response = generateAIResponse(query)
      console.log(`   Answer: ${response.answer.substring(0, 150)}...`)
      console.log(`   Confidence: ${(response.confidence * 100).toFixed(1)}%`)
      console.log(`   Category: ${response.category}`)
      console.log(`   Sources: ${response.sources.join(', ')}`)
      if (response.relatedQuestions && response.relatedQuestions.length > 0) {
        console.log(`   Related: ${response.relatedQuestions[0]}`)
      }
    } catch (error) {
      console.log(`   Error: ${error}`)
    }
    console.log('')
  })

  // Display services
  console.log('🛠️ Available Services:')
  console.log('======================\n')
  
  const services = getAllServices()
  services.forEach((service, index) => {
    console.log(`${index + 1}. ${service.name}`)
    console.log(`   Description: ${service.description.substring(0, 100)}...`)
    console.log(`   Timeline: ${service.timeline}`)
    console.log(`   Pricing: ${service.pricing}`)
    console.log(`   Technologies: ${service.technologies.slice(0, 3).join(', ')}`)
    console.log('')
  })

  console.log('✅ Demo completed successfully!')
  console.log('The AI training system is ready for use.')
}

// Export for use in components
export function testAIQuery(query: string) {
  try {
    const response = generateAIResponse(query)
    return {
      success: true,
      query,
      response: {
        answer: response.answer,
        confidence: response.confidence,
        category: response.category,
        sources: response.sources,
        relatedQuestions: response.relatedQuestions
      }
    }
  } catch (error) {
    return {
      success: false,
      query,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

// Run demo if this file is executed directly
if (typeof window === 'undefined') {
  // Only run in Node.js environment
  runAIDemo()
}
