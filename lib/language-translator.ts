// Language translation utilities for AI chatbot

export type Language = 'en' | 'te' | 'ta' | 'hi'

export interface LanguageConfig {
  code: Language
  name: string
  nativeName: string
  flag: string
  rtl: boolean
}

export const languages: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', rtl: false },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', rtl: false },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', rtl: false },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', rtl: false }
]

// Common phrases and responses in different languages
export const translations = {
  // Greetings
  greeting: {
    en: "Hello! I'm Trivexa's enhanced AI assistant with voice and multi-language support. I can help you with detailed questions about our blockchain development services, pricing, timelines, portfolio projects, and more. How can I assist you today?",
    te: "హలో! నేను Trivexa యొక్క enhanced AI assistant, voice మరియు multi-language support తో. మీరు మా blockchain development services, pricing, timelines, portfolio projects గురించి detailed questions అడగవచ్చు. నేను ఎలా help చేయగలను?",
    ta: "வணக்கம்! நான் Trivexa இன் enhanced AI assistant, voice மற்றும் multi-language support உடன். நீங்கள் எங்கள் blockchain development services, pricing, timelines, portfolio projects பற்றி detailed questions கேட்கலாம். நான் எப்படி உதவ முடியும்?",
    hi: "नमस्ते! मैं Trivexa का enhanced AI assistant हूं, voice और multi-language support के साथ। आप हमारी blockchain development services, pricing, timelines, portfolio projects के बारे में detailed questions पूछ सकते हैं। मैं कैसे मदद कर सकता हूं?"
  },

  // Error messages
  error: {
    en: "I apologize, but I'm experiencing some technical difficulties. Please try again or contact our team directly at customer@trivexatechnologies.com.",
    te: "క్షమించండి, నేను కొన్ని technical difficulties ఎదుర్కొంటున్నాను. దయచేసి మళ్లీ ప్రయత్నించండి లేదా మా team ని నేరుగా customer@trivexatechnologies.com వద్ద contact చేయండి.",
    ta: "மன்னிக்கவும், நான் சில technical difficulties எதிர்கொள்கிறேன். தயவுசெய்து மீண்டும் முயற்சிக்கவும் அல்லது எங்கள் team ஐ நேரடியாக customer@trivexatechnologies.com இல் தொடர்பு கொள்ளவும்.",
    hi: "मुझे खेद है, लेकिन मैं कुछ technical difficulties का सामना कर रहा हूं। कृपया फिर से कोशिश करें या हमारी team से सीधे customer@trivexatechnologies.com पर संपर्क करें।"
  },

  // Contact information
  contact: {
    en: "You can reach us at customer@trivexatechnologies.com or 6301846681. We also have a contact form on our website. Our team typically responds within 24 hours. Would you like me to help you with anything else?",
    te: "మీరు మమ్మల్ని customer@trivexatechnologies.com లేదా 6301846681 వద్ద చేరుకోవచ్చు. మా website లో contact form కూడా ఉంది. మా team సాధారణంగా 24 గంటలలో response చేస్తుంది. నేను మీకు మరేదైనా help చేయగలనా?",
    ta: "நீங்கள் எங்களை customer@trivexatechnologies.com அல்லது 6301846681 இல் அடையலாம். எங்கள் website இல் contact form ம் உள்ளது. எங்கள் team பொதுவாக 24 மணி நேரத்தில் பதிலளிக்கும். நான் உங்களுக்கு வேறு எதையாவது உதவ முடியுமா?",
    hi: "आप हमसे customer@trivexatechnologies.com या 6301846681 पर संपर्क कर सकते हैं। हमारी website पर contact form भी है। हमारी team आमतौर पर 24 घंटे में response करती है। क्या मैं आपकी किसी और चीज़ में मदद कर सकता हूं?"
  },

  // Service descriptions
  services: {
    en: "We specialize in comprehensive blockchain development including Layer-1 and Layer-2 solutions, smart contracts, DApps, DeFi protocols, and custom blockchain networks. Our services cover everything from initial concept to deployment and maintenance.",
    te: "మేము Layer-1 మరియు Layer-2 solutions, smart contracts, DApps, DeFi protocols, మరియు custom blockchain networks సహా comprehensive blockchain development లో specialize చేస్తాము. మా services initial concept నుండి deployment మరియు maintenance వరకు cover చేస్తాయి.",
    ta: "நாங்கள் Layer-1 மற்றும் Layer-2 solutions, smart contracts, DApps, DeFi protocols, மற்றும் custom blockchain networks உட்பட comprehensive blockchain development இல் specialize செய்கிறோம். எங்கள் services initial concept முதல் deployment மற்றும் maintenance வரை cover செய்கின்றன.",
    hi: "हम Layer-1 और Layer-2 solutions, smart contracts, DApps, DeFi protocols, और custom blockchain networks सहित comprehensive blockchain development में specialize करते हैं। हमारी services initial concept से deployment और maintenance तक सब कुछ cover करती हैं।"
  },

  // Pricing information
  pricing: {
    en: "Our pricing depends on project complexity and requirements. For accurate quotes, I recommend scheduling a consultation with our team. We offer competitive rates and flexible engagement models. Would you like to discuss your specific project needs?",
    te: "మా pricing project complexity మరియు requirements మీద depend చేస్తుంది. accurate quotes కోసం, మా team తో consultation schedule చేయాలని recommend చేస్తున్నాను. మేము competitive rates మరియు flexible engagement models offer చేస్తాము. మీ specific project needs గురించి discuss చేయాలనుకుంటున్నారా?",
    ta: "எங்கள் pricing project complexity மற்றும் requirements மீது depend செய்கிறது. accurate quotes க்கு, எங்கள் team உடன் consultation schedule செய்ய பரிந்துரைக்கிறேன். நாங்கள் competitive rates மற்றும் flexible engagement models வழங்குகிறோம். உங்கள் specific project needs பற்றி discuss செய்ய விரும்புகிறீர்களா?",
    hi: "हमारी pricing project complexity और requirements पर depend करती है। accurate quotes के लिए, मैं हमारी team के साथ consultation schedule करने की recommend करता हूं। हम competitive rates और flexible engagement models offer करते हैं। क्या आप अपनी specific project needs पर discuss करना चाहेंगे?"
  }
}

// Function to get translated text
export function getTranslation(key: keyof typeof translations, language: Language): string {
  return translations[key][language] || translations[key].en
}

// Function to detect language from text (basic implementation)
export function detectLanguage(text: string): Language {
  // Simple language detection based on character patterns
  const teluguPattern = /[\u0C00-\u0C7F]/
  const tamilPattern = /[\u0B80-\u0BFF]/
  const hindiPattern = /[\u0900-\u097F]/
  
  if (teluguPattern.test(text)) return 'te'
  if (tamilPattern.test(text)) return 'ta'
  if (hindiPattern.test(text)) return 'hi'
  
  return 'en' // Default to English
}

// Function to get language code for speech synthesis
export function getLanguageCode(lang: Language): string {
  const languageCodes = {
    en: 'en-US',
    te: 'te-IN',
    ta: 'ta-IN',
    hi: 'hi-IN'
  }
  return languageCodes[lang]
}

// Function to get language name
export function getLanguageName(lang: Language): string {
  const language = languages.find(l => l.code === lang)
  return language?.nativeName || 'English'
}

// Function to check if language is RTL
export function isRTL(lang: Language): boolean {
  const language = languages.find(l => l.code === lang)
  return language?.rtl || false
}

// Common questions in different languages
export const commonQuestions = {
  en: [
    "What is Layer-1 blockchain development?",
    "How much does smart contract development cost?",
    "What industries do you serve?",
    "Do you provide blockchain consulting?",
    "What is the development timeline for a DApp?",
    "How do you ensure security in blockchain projects?",
    "What technologies do you use?",
    "Do you provide post-deployment support?"
  ],
  te: [
    "Layer-1 blockchain development అంటే ఏమిటి?",
    "Smart contract development ఎంత ఖర్చు అవుతుంది?",
    "మీరు ఏ industries కు service చేస్తారు?",
    "మీరు blockchain consulting అందిస్తారా?",
    "DApp development timeline ఎంత?",
    "Blockchain projects లో security ఎలా ensure చేస్తారు?",
    "మీరు ఏ technologies use చేస్తారు?",
    "Post-deployment support అందిస్తారా?"
  ],
  ta: [
    "Layer-1 blockchain development என்றால் என்ன?",
    "Smart contract development எவ்வளவு செலவு?",
    "நீங்கள் எந்த industries க்கு service செய்கிறீர்கள்?",
    "நீங்கள் blockchain consulting வழங்குகிறீர்களா?",
    "DApp development timeline எவ்வளவு?",
    "Blockchain projects ல் security எப்படி ensure செய்கிறீர்கள்?",
    "நீங்கள் எந்த technologies பயன்படுத்துகிறீர்கள்?",
    "Post-deployment support வழங்குகிறீர்களா?"
  ],
  hi: [
    "Layer-1 blockchain development क्या है?",
    "Smart contract development की लागत कितनी है?",
    "आप किन industries को service देते हैं?",
    "क्या आप blockchain consulting प्रदान करते हैं?",
    "DApp development का timeline क्या है?",
    "Blockchain projects में security कैसे ensure करते हैं?",
    "आप कौन सी technologies use करते हैं?",
    "क्या आप post-deployment support प्रदान करते हैं?"
  ]
}

// Quick actions in different languages
export const quickActions = {
  en: [
    { icon: "📚", label: "Services", action: "Tell me about your services" },
    { icon: "📈", label: "Portfolio", action: "Show me your portfolio projects" },
    { icon: "🛡️", label: "Security", action: "How do you ensure security?" },
    { icon: "⚡", label: "Pricing", action: "What are your pricing options?" }
  ],
  te: [
    { icon: "📚", label: "Services", action: "మీ services గురించి చెప్పండి" },
    { icon: "📈", label: "Portfolio", action: "మీ portfolio projects చూపించండి" },
    { icon: "🛡️", label: "Security", action: "Security ఎలా ensure చేస్తారు?" },
    { icon: "⚡", label: "Pricing", action: "మీ pricing options ఏమిటి?" }
  ],
  ta: [
    { icon: "📚", label: "Services", action: "உங்கள் services பற்றி சொல்லுங்கள்" },
    { icon: "📈", label: "Portfolio", action: "உங்கள் portfolio projects காட்டுங்கள்" },
    { icon: "🛡️", label: "Security", action: "Security எப்படி ensure செய்கிறீர்கள்?" },
    { icon: "⚡", label: "Pricing", action: "உங்கள் pricing options என்ன?" }
  ],
  hi: [
    { icon: "📚", label: "Services", action: "अपनी services के बारे में बताएं" },
    { icon: "📈", label: "Portfolio", action: "अपने portfolio projects दिखाएं" },
    { icon: "🛡️", label: "Security", action: "Security कैसे ensure करते हैं?" },
    { icon: "⚡", label: "Pricing", action: "आपके pricing options क्या हैं?" }
  ]
}
