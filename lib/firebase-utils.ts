import { 
  collection, 
  addDoc, 
  serverTimestamp, 
  query, 
  orderBy, 
  limit, 
  getDocs,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore'
import { db } from './firebase'

// Types for our data structures
export interface ChatMessage {
  id?: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  sessionId?: string
  userAgent?: string
  pageUrl?: string
}

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone: string
  company?: string
  service: string
  budget?: string
  message: string
  timestamp: Date
  userAgent?: string
  pageUrl?: string
  ipAddress?: string
}

// Generate a session ID for chat conversations
export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Get user agent and current page URL
export const getBrowserInfo = () => {
  if (typeof window === 'undefined') return { userAgent: '', pageUrl: '' }
  
  return {
    userAgent: navigator.userAgent,
    pageUrl: window.location.href
  }
}

// Save chat message to Firebase
export const saveChatMessage = async (message: Omit<ChatMessage, 'id' | 'timestamp'>): Promise<string> => {
  try {
    const browserInfo = getBrowserInfo()
    
    const messageData = {
      ...message,
      timestamp: serverTimestamp(),
      userAgent: browserInfo.userAgent,
      pageUrl: browserInfo.pageUrl
    }

    const docRef = await addDoc(collection(db, 'chatMessages'), messageData)
    console.log('Chat message saved with ID:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Error saving chat message:', error)
    throw error
  }
}

// Save contact form submission to Firebase
export const saveContactSubmission = async (submission: Omit<ContactSubmission, 'id' | 'timestamp'>): Promise<string> => {
  try {
    const browserInfo = getBrowserInfo()
    
    const submissionData = {
      ...submission,
      timestamp: serverTimestamp(),
      userAgent: browserInfo.userAgent,
      pageUrl: browserInfo.pageUrl
    }

    const docRef = await addDoc(collection(db, 'contactSubmissions'), submissionData)
    console.log('Contact submission saved with ID:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Error saving contact submission:', error)
    throw error
  }
}

// Get recent chat messages (for analytics or admin purposes)
export const getRecentChatMessages = async (limitCount: number = 50): Promise<ChatMessage[]> => {
  try {
    const q = query(
      collection(db, 'chatMessages'),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    )
    
    const querySnapshot = await getDocs(q)
    const messages: ChatMessage[] = []
    
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const data = doc.data()
      messages.push({
        id: doc.id,
        text: data.text,
        sender: data.sender,
        timestamp: data.timestamp?.toDate() || new Date(),
        sessionId: data.sessionId,
        userAgent: data.userAgent,
        pageUrl: data.pageUrl
      })
    })
    
    return messages
  } catch (error) {
    console.error('Error getting chat messages:', error)
    return []
  }
}

// Get recent contact submissions (for analytics or admin purposes)
export const getRecentContactSubmissions = async (limitCount: number = 50): Promise<ContactSubmission[]> => {
  try {
    const q = query(
      collection(db, 'contactSubmissions'),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    )
    
    const querySnapshot = await getDocs(q)
    const submissions: ContactSubmission[] = []
    
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const data = doc.data()
      submissions.push({
        id: doc.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        service: data.service,
        budget: data.budget,
        message: data.message,
        timestamp: data.timestamp?.toDate() || new Date(),
        userAgent: data.userAgent,
        pageUrl: data.pageUrl,
        ipAddress: data.ipAddress
      })
    })
    
    return submissions
  } catch (error) {
    console.error('Error getting contact submissions:', error)
    return []
  }
}
