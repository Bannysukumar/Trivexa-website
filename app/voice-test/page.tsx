'use client'

import { useState, useEffect } from 'react'
import { Mic, Volume2, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

export default function VoiceTestPage() {
  const [permissions, setPermissions] = useState({
    microphone: false,
    speechSynthesis: false,
    https: false,
    mediaDevices: false
  })
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    checkPermissions()
  }, [])

  const checkPermissions = async () => {
    // Check HTTPS
    const isHttps = window.location.protocol === 'https:' || 
                   window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1'

    // Check MediaDevices
    const hasMediaDevices = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)

    // Check Speech Synthesis
    const hasSpeechSynthesis = 'speechSynthesis' in window

    // Check Microphone Permission
    let microphonePermission = false
    if (hasMediaDevices) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        microphonePermission = true
        stream.getTracks().forEach(track => track.stop())
      } catch (error) {
        microphonePermission = false
      }
    }

    setPermissions({
      microphone: microphonePermission,
      speechSynthesis: hasSpeechSynthesis,
      https: isHttps,
      mediaDevices: hasMediaDevices
    })
  }

  const testMicrophone = async () => {
    try {
      setIsRecording(true)
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      
      // Simulate recording for 3 seconds
      setTimeout(() => {
        stream.getTracks().forEach(track => track.stop())
        setIsRecording(false)
        alert('Microphone test successful!')
      }, 3000)
    } catch (error) {
      setIsRecording(false)
      alert(`Microphone test failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const testSpeech = () => {
    if ('speechSynthesis' in window) {
      setIsPlaying(true)
      const utterance = new SpeechSynthesisUtterance('Hello! This is a test of the text-to-speech feature.')
      utterance.onend = () => setIsPlaying(false)
      utterance.onerror = () => setIsPlaying(false)
      window.speechSynthesis.speak(utterance)
    }
  }

  const allWorking = Object.values(permissions).every(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Voice Features Test
          </h1>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  permissions.https ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {permissions.https ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">HTTPS Connection</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {permissions.https ? 'Secure connection detected' : 'HTTPS required for voice features'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  permissions.mediaDevices ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {permissions.mediaDevices ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Media Devices API</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {permissions.mediaDevices ? 'MediaDevices API available' : 'MediaDevices API not supported'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  permissions.microphone ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {permissions.microphone ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Microphone Access</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {permissions.microphone ? 'Microphone permission granted' : 'Microphone permission required'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  permissions.speechSynthesis ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {permissions.speechSynthesis ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Speech Synthesis</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {permissions.speechSynthesis ? 'Text-to-speech available' : 'Text-to-speech not supported'}
              </p>
            </div>
          </div>

          {/* Test Buttons */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Test Voice Features
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={testMicrophone}
                disabled={!permissions.microphone || isRecording}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  permissions.microphone && !isRecording
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Mic className="w-5 h-5" />
                <span>{isRecording ? 'Recording...' : 'Test Microphone'}</span>
              </button>

              <button
                onClick={testSpeech}
                disabled={!permissions.speechSynthesis || isPlaying}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  permissions.speechSynthesis && !isPlaying
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Volume2 className="w-5 h-5" />
                <span>{isPlaying ? 'Speaking...' : 'Test Speech'}</span>
              </button>
            </div>

            {!allWorking && (
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center space-x-2 text-yellow-700 dark:text-yellow-300">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-medium">Voice features not fully available</span>
                </div>
                <p className="text-yellow-600 dark:text-yellow-400 text-sm mt-2">
                  Some voice features may not work properly. Please check the requirements above.
                </p>
              </div>
            )}

            {allWorking && (
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">All voice features are working!</span>
                </div>
                <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                  You can now use voice input and output in the AI chatbot.
                </p>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
              Troubleshooting Tips
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>• Make sure you're using HTTPS (not HTTP)</li>
              <li>• Allow microphone access when prompted by your browser</li>
              <li>• Use a modern browser (Chrome, Firefox, Safari, Edge)</li>
              <li>• Check that your microphone is connected and working</li>
              <li>• Try refreshing the page if permissions were recently granted</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
