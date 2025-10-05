"use client"

import { useState } from 'react'
import { Mic, MicOff, Volume2 } from 'lucide-react'

export default function VoiceTestSimplePage() {
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(false)

  // Check if Web Speech API is supported
  useState(() => {
    const hasSpeechRecognition = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window
    setIsSupported(hasSpeechRecognition)
  })

  const startRecording = () => {
    if (!isSupported) {
      alert('Speech recognition is not supported in this browser')
      return
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'
    recognition.maxAlternatives = 1
    
    recognition.onstart = () => {
      console.log('Speech recognition started')
      setIsRecording(true)
    }
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setTranscript(transcript)
      setIsRecording(false)
    }
    
    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error)
      setIsRecording(false)
      alert(`Speech recognition error: ${event.error}`)
    }
    
    recognition.onend = () => {
      console.log('Speech recognition ended')
      setIsRecording(false)
    }
    
    recognition.start()
  }

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.pitch = 1.2  // Higher pitch for female voice
      utterance.rate = 0.9
      
      // Try to select a female voice
      const voices = window.speechSynthesis.getVoices()
      const femaleVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('female') || 
        voice.name.toLowerCase().includes('woman') ||
        voice.name.toLowerCase().includes('samantha') ||
        voice.name.toLowerCase().includes('karen') ||
        voice.name.toLowerCase().includes('susan') ||
        voice.name.toLowerCase().includes('zira') ||
        voice.name.toLowerCase().includes('hazel') ||
        voice.name.toLowerCase().includes('victoria') ||
        voice.name.toLowerCase().includes('serena')
      )
      
      if (femaleVoice) {
        utterance.voice = femaleVoice
        console.log('Using female voice:', femaleVoice.name)
      }
      
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Simple Voice Test
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Test voice recognition and text-to-speech functionality
        </p>
      </div>

      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Speech Recognition Support: {isSupported ? '✅ Supported' : '❌ Not Supported'}
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={startRecording}
            disabled={!isSupported || isRecording}
            className={`px-6 py-3 rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2 ${
              isRecording
                ? 'bg-red-600 text-white'
                : isSupported
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
            }`}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            <span>{isRecording ? 'Listening...' : 'Start Voice Input'}</span>
          </button>

          {transcript && (
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Recognized Text:</p>
              <p className="text-gray-900 dark:text-white font-medium">{transcript}</p>
            </div>
          )}

          {transcript && (
            <button
              onClick={() => speakText(transcript)}
              className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Volume2 className="w-5 h-5" />
              <span>Speak Back</span>
            </button>
          )}
        </div>
      </div>

      <p className="mt-12 text-gray-600 dark:text-gray-400 text-sm text-center">
        Note: Voice recognition requires HTTPS or localhost. Make sure to allow microphone access when prompted.
      </p>
    </div>
  )
}
