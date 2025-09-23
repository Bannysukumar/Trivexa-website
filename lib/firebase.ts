// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADwZ_uO9rYtxvBwz05SWBvbbcIMsbwy5Q",
  authDomain: "trivexa.firebaseapp.com",
  projectId: "trivexa",
  storageBucket: "trivexa.firebasestorage.app",
  messagingSenderId: "879403010091",
  appId: "1:879403010091:web:f0aac9c84358f24087426e",
  measurementId: "G-E1BSH9CBZC"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null

export default app
