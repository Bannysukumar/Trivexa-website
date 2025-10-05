// Multi-Language AI Training System with RAG (Retrieval-Augmented Generation)
// This system provides intelligent responses in multiple languages

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
import { getTranslation, detectLanguage, type Language } from './language-translator'

export interface MultiLanguageAIResponse {
  answer: string
  confidence: number
  sources: string[]
  category: string
  relatedQuestions?: string[]
  language: Language
  originalLanguage?: Language
}

export interface TrainingStats {
  totalDocuments: number
  categories: string[]
  lastUpdated: string
  totalFAQs: number
  totalServices: number
  supportedLanguages: Language[]
}

class MultiLanguageTrivexaAITrainingSystem {
  private trainingData: TrainingDocument[]
  private faqData: FAQItem[]
  private servicesData: ServiceInfo[]
  private supportedLanguages: Language[] = ['en', 'te', 'ta', 'hi']

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
      totalServices: this.servicesData.length,
      supportedLanguages: this.supportedLanguages
    }
  }

  // Generate AI response with language support
  generateMultiLanguageResponse(query: string, targetLanguage: Language = 'en'): MultiLanguageAIResponse {
    const detectedLanguage = detectLanguage(query)
    const lowerQuery = query.toLowerCase()

    // Handle greetings
    if (this.isGreeting(lowerQuery)) {
      return {
        answer: getTranslation('greeting', targetLanguage),
        confidence: 0.9,
        sources: ['Trivexa AI Training System'],
        category: 'greeting',
        language: targetLanguage,
        originalLanguage: detectedLanguage
      }
    }

    // Handle contact requests
    if (this.isContactQuery(lowerQuery)) {
      return {
        answer: getTranslation('contact', targetLanguage),
        confidence: 0.95,
        sources: ['Contact Information'],
        category: 'contact',
        language: targetLanguage,
        originalLanguage: detectedLanguage
      }
    }

    // Handle service queries
    if (this.isServiceQuery(lowerQuery)) {
      const serviceResponse = this.getServiceResponse(lowerQuery, targetLanguage)
      return {
        answer: serviceResponse.answer,
        confidence: serviceResponse.confidence,
        sources: serviceResponse.sources,
        category: 'services',
        relatedQuestions: serviceResponse.relatedQuestions,
        language: targetLanguage,
        originalLanguage: detectedLanguage
      }
    }

    // Handle pricing queries
    if (this.isPricingQuery(lowerQuery)) {
      return {
        answer: getTranslation('pricing', targetLanguage),
        confidence: 0.9,
        sources: ['Pricing Information'],
        category: 'pricing',
        relatedQuestions: this.getRelatedQuestions('pricing', targetLanguage),
        language: targetLanguage,
        originalLanguage: detectedLanguage
      }
    }

    // Search training data for relevant information
    const searchResults = searchTrainingData(query)
    if (searchResults.length > 0) {
      const bestMatch = searchResults[0]
      return {
        answer: this.translateResponse(bestMatch.content, targetLanguage),
        confidence: 0.8,
        sources: [bestMatch.source || 'Training Data'],
        category: bestMatch.category,
        relatedQuestions: this.getRelatedQuestions(bestMatch.category, targetLanguage),
        language: targetLanguage,
        originalLanguage: detectedLanguage
      }
    }

    // Search FAQ data
    const faqResults = searchFAQ(query)
    if (faqResults.length > 0) {
      const bestFAQ = faqResults[0]
      return {
        answer: this.translateResponse(bestFAQ.answer, targetLanguage),
        confidence: 0.85,
        sources: ['FAQ Database'],
        category: bestFAQ.category,
        relatedQuestions: this.getRelatedQuestions(bestFAQ.category, targetLanguage),
        language: targetLanguage,
        originalLanguage: detectedLanguage
      }
    }

    // Default response
    return {
      answer: this.getDefaultResponse(targetLanguage),
      confidence: 0.6,
      sources: ['Trivexa AI Training System'],
      category: 'general',
      relatedQuestions: this.getRelatedQuestions('general', targetLanguage),
      language: targetLanguage,
      originalLanguage: detectedLanguage
    }
  }

  // Check if query is a greeting
  private isGreeting(query: string): boolean {
    const greetingPatterns = [
      'hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening',
      'namaste', 'namaskar', 'vanakkam', 'namaskaram',
      'హలో', 'నమస్కారం', 'వందనాలు',
      'வணக்கம்', 'நமஸ்காரம்', 'வாழ்த்துக்கள்',
      'नमस्ते', 'नमस्कार', 'सत श्री अकाल'
    ]
    return greetingPatterns.some(pattern => query.includes(pattern))
  }

  // Check if query is about contact
  private isContactQuery(query: string): boolean {
    const contactPatterns = [
      'contact', 'reach', 'get in touch', 'phone', 'email', 'address',
      'సంప్రదించండి', 'చేరుకోండి', 'ఫోన్', 'ఇమెయిల్',
      'தொடர்பு', 'அடைய', 'தொலைபேசி', 'மின்னஞ்சல்',
      'संपर्क', 'पहुंच', 'फोन', 'ईमेल'
    ]
    return contactPatterns.some(pattern => query.includes(pattern))
  }

  // Check if query is about services
  private isServiceQuery(query: string): boolean {
    const servicePatterns = [
      'service', 'blockchain', 'smart contract', 'dapp', 'defi', 'web3',
      'సేవ', 'బ్లాక్‌చెయిన్', 'స్మార్ట్ కాంట్రాక్ట్',
      'சேவை', 'பிளாக்‌செயின்', 'ஸ்மார்ட் காண்ட்ராக்ட்',
      'सेवा', 'ब्लॉकचेन', 'स्मार्ट कॉन्ट्रैक्ट'
    ]
    return servicePatterns.some(pattern => query.includes(pattern))
  }

  // Check if query is about pricing
  private isPricingQuery(query: string): boolean {
    const pricingPatterns = [
      'price', 'cost', 'budget', 'pricing', 'quote', 'estimate',
      'ధర', 'ఖర్చు', 'బడ్జెట్', 'అంచనా',
      'விலை', 'செலவு', 'பட்ஜெட்', 'மதிப்பீடு',
      'मूल्य', 'लागत', 'बजट', 'अनुमान'
    ]
    return pricingPatterns.some(pattern => query.includes(pattern))
  }

  // Get service-specific response
  private getServiceResponse(query: string, language: Language) {
    const serviceKeywords = {
      'layer-1': ['layer-1', 'layer 1', 'blockchain protocol', 'consensus'],
      'layer-2': ['layer-2', 'layer 2', 'scaling', 'sidechain'],
      'smart-contract': ['smart contract', 'solidity', 'contract'],
      'dapp': ['dapp', 'decentralized app', 'web3 app'],
      'defi': ['defi', 'decentralized finance', 'yield farming']
    }

    for (const [service, keywords] of Object.entries(serviceKeywords)) {
      if (keywords.some(keyword => query.includes(keyword))) {
        return this.getServiceInfo(service, language)
      }
    }

    return {
      answer: getTranslation('services', language),
      confidence: 0.8,
      sources: ['Services Information'],
      relatedQuestions: this.getRelatedQuestions('services', language)
    }
  }

  // Get service information
  private getServiceInfo(serviceType: string, language: Language) {
    const serviceInfo = this.servicesData.find(service => 
      service.title && service.title.toLowerCase().includes(serviceType)
    )

    if (serviceInfo) {
      return {
        answer: this.translateResponse(serviceInfo.description, language),
        confidence: 0.9,
        sources: ['Services Database'],
        relatedQuestions: this.getRelatedQuestions('services', language)
      }
    }

    return {
      answer: getTranslation('services', language),
      confidence: 0.8,
      sources: ['Services Information'],
      relatedQuestions: this.getRelatedQuestions('services', language)
    }
  }

  // Translate response to target language
  private translateResponse(text: string, targetLanguage: Language): string {
    // In a real implementation, you would use a translation service
    // For now, we'll return the original text for English and use our translations for others
    if (targetLanguage === 'en') {
      return text
    }

    // Simple keyword-based translation for common terms
    const translations: Record<string, Record<Language, string>> = {
      'blockchain development': {
        en: 'blockchain development',
        te: 'బ్లాక్‌చెయిన్ డెవలప్‌మెంట్',
        ta: 'பிளாக்‌செயின் டெவலப்மென்ட்',
        hi: 'ब्लॉकचेन डेवलपमेंट'
      },
      'smart contract': {
        en: 'smart contract',
        te: 'స్మార్ట్ కాంట్రాక్ట్',
        ta: 'ஸ்மார்ட் காண்ட்ராக்ட்',
        hi: 'स्मार्ट कॉन्ट्रैक्ट'
      },
      'DApp': {
        en: 'DApp',
        te: 'DApp',
        ta: 'DApp',
        hi: 'DApp'
      }
    }

    let translatedText = text
    for (const [english, translations] of Object.entries(translations)) {
      if (text.toLowerCase().includes(english.toLowerCase())) {
        translatedText = translatedText.replace(
          new RegExp(english, 'gi'),
          translations[targetLanguage]
        )
      }
    }

    return translatedText
  }

  // Get default response
  private getDefaultResponse(language: Language): string {
    const defaultResponses = {
      en: "I understand you're interested in our blockchain development services. While I can provide general information, for detailed technical discussions and project-specific queries, I recommend connecting with our expert team. You can reach us at trivexatechpvt@gmail.com or schedule a consultation. Is there anything specific about blockchain development I can help clarify?",
      te: "మీరు మా blockchain development services గురించి interested అని అర్థమవుతోంది. నేను general information provide చేయగలను, detailed technical discussions మరియు project-specific queries కోసం, మా expert team తో connect చేయాలని recommend చేస్తున్నాను. మీరు మమ్మల్ని trivexatechpvt@gmail.com వద్ద reach చేయవచ్చు లేదా consultation schedule చేయవచ్చు. blockchain development గురించి నేను help చేయగల specific విషయం ఏదైనా ఉందా?",
      ta: "நீங்கள் எங்கள் blockchain development services பற்றி interested என்று புரிகிறது. நான் general information provide செய்யலாம், detailed technical discussions மற்றும் project-specific queries க்கு, எங்கள் expert team உடன் connect செய்ய பரிந்துரைக்கிறேன். நீங்கள் எங்களை trivexatechpvt@gmail.com இல் reach செய்யலாம் அல்லது consultation schedule செய்யலாம். blockchain development பற்றி நான் help செய்யக்கூடிய specific விஷயம் ஏதாவது உள்ளதா?",
      hi: "मैं समझ गया कि आप हमारी blockchain development services में interested हैं। जबकि मैं general information provide कर सकता हूं, detailed technical discussions और project-specific queries के लिए, मैं हमारी expert team से connect करने की recommend करता हूं। आप हमसे trivexatechpvt@gmail.com पर reach कर सकते हैं या consultation schedule कर सकते हैं। blockchain development के बारे में कोई specific चीज़ है जिसमें मैं help कर सकूं?"
    }
    return defaultResponses[language]
  }

  // Get related questions for a category
  private getRelatedQuestions(category: string, language: Language): string[] {
    const questions = {
      services: {
        en: [
          "What blockchain technologies do you use?",
          "Do you provide smart contract auditing?",
          "What is your development process?"
        ],
        te: [
          "మీరు ఏ blockchain technologies use చేస్తారు?",
          "మీరు smart contract auditing అందిస్తారా?",
          "మీ development process ఏమిటి?"
        ],
        ta: [
          "நீங்கள் எந்த blockchain technologies பயன்படுத்துகிறீர்கள்?",
          "நீங்கள் smart contract auditing வழங்குகிறீர்களா?",
          "உங்கள் development process என்ன?"
        ],
        hi: [
          "आप कौन सी blockchain technologies use करते हैं?",
          "क्या आप smart contract auditing प्रदान करते हैं?",
          "आपका development process क्या है?"
        ]
      },
      pricing: {
        en: [
          "What are your payment terms?",
          "Do you offer flexible pricing?",
          "What is included in the cost?"
        ],
        te: [
          "మీ payment terms ఏమిటి?",
          "మీరు flexible pricing offer చేస్తారా?",
          "cost లో ఏమి include చేయబడింది?"
        ],
        ta: [
          "உங்கள் payment terms என்ன?",
          "நீங்கள் flexible pricing வழங்குகிறீர்களா?",
          "cost இல் என்ன include செய்யப்பட்டுள்ளது?"
        ],
        hi: [
          "आपके payment terms क्या हैं?",
          "क्या आप flexible pricing offer करते हैं?",
          "cost में क्या include है?"
        ]
      },
      contact: {
        en: [
          "What are your business hours?",
          "Do you provide 24/7 support?",
          "How quickly do you respond?"
        ],
        te: [
          "మీ business hours ఏమిటి?",
          "మీరు 24/7 support అందిస్తారా?",
          "మీరు ఎంత త్వరగా response చేస్తారు?"
        ],
        ta: [
          "உங்கள் business hours என்ன?",
          "நீங்கள் 24/7 support வழங்குகிறீர்களா?",
          "நீங்கள் எவ்வளவு விரைவில் response செய்கிறீர்கள்?"
        ],
        hi: [
          "आपके business hours क्या हैं?",
          "क्या आप 24/7 support प्रदान करते हैं?",
          "आप कितनी जल्दी response करते हैं?"
        ]
      },
      general: {
        en: [
          "What makes you different from competitors?",
          "Do you have case studies?",
          "What is your success rate?"
        ],
        te: [
          "మీరు competitors నుండి ఎలా different?",
          "మీకు case studies ఉన్నాయా?",
          "మీ success rate ఏమిటి?"
        ],
        ta: [
          "நீங்கள் competitors இலிருந்து எப்படி different?",
          "உங்களிடம் case studies உள்ளதா?",
          "உங்கள் success rate என்ன?"
        ],
        hi: [
          "आप competitors से कैसे different हैं?",
          "क्या आपके पास case studies हैं?",
          "आपकी success rate क्या है?"
        ]
      }
    }

    return questions[category as keyof typeof questions]?.[language] || []
  }
}

// Create singleton instance
const multiLanguageAISystem = new MultiLanguageTrivexaAITrainingSystem()

// Export functions
export function generateMultiLanguageAIResponse(query: string, language: Language = 'en'): MultiLanguageAIResponse {
  return multiLanguageAISystem.generateMultiLanguageResponse(query, language)
}

export function getMultiLanguageTrainingStats(): TrainingStats {
  return multiLanguageAISystem.getTrainingStats()
}

export { MultiLanguageTrivexaAITrainingSystem }
