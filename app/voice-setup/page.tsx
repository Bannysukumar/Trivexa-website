import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import { Mic, Volume2, Shield, Globe, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Voice Setup - HTTPS Required | Trivexa Technologies',
  description: 'Learn how to enable voice features in Trivexa AI chatbot. Voice recording and text-to-speech require HTTPS for security.',
  keywords: [
    'voice setup',
    'HTTPS required',
    'microphone permission',
    'voice AI chatbot',
    'Trivexa AI setup'
  ]
}

const requirements = [
  {
    icon: Shield,
    title: 'HTTPS Connection',
    description: 'Voice features require a secure HTTPS connection for security reasons.',
    required: true,
    status: 'checking'
  },
  {
    icon: Mic,
    title: 'Microphone Permission',
    description: 'Allow microphone access when prompted by your browser.',
    required: true,
    status: 'pending'
  },
  {
    icon: Volume2,
    title: 'Audio Output',
    description: 'Ensure your device has speakers or headphones for voice output.',
    required: true,
    status: 'pending'
  },
  {
    icon: Globe,
    title: 'Modern Browser',
    description: 'Use Chrome, Firefox, Safari, or Edge for best compatibility.',
    required: true,
    status: 'pending'
  }
]

export default function VoiceSetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-navy-600 to-primary-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Voice Setup Guide
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Enable voice features in Trivexa AI chatbot with these simple steps
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-200">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>HTTPS Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mic className="w-4 h-4" />
                <span>Microphone Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <Volume2 className="w-4 h-4" />
                <span>Audio Output</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Voice Requirements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Voice features require specific browser permissions and security settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  req.status === 'checking' ? 'bg-yellow-100 text-yellow-600' :
                  req.status === 'pending' ? 'bg-gray-100 text-gray-400' :
                  'bg-green-100 text-green-600'
                }`}>
                  {req.status === 'checking' ? (
                    <div className="w-4 h-4 border-2 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
                  ) : req.status === 'pending' ? (
                    <XCircle className="w-6 h-6" />
                  ) : (
                    <CheckCircle className="w-6 h-6" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {req.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {req.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Setup Steps */}
      <div className="bg-gradient-to-r from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Setup Steps
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Follow these steps to enable voice features in your browser
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Use HTTPS
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make sure you're accessing the website over HTTPS. Voice features won't work on HTTP connections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Allow Microphone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                When prompted by your browser, click "Allow" to grant microphone access for voice recording.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Test Voice Features
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Click the microphone button in the AI chatbot to test voice recording and playback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Browser Compatibility */}
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Browser Compatibility
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Voice features work best with modern browsers that support Web Speech API
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Chrome</h3>
            <p className="text-green-600 dark:text-green-400 text-sm font-medium">Full Support</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-4">🦊</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Firefox</h3>
            <p className="text-green-600 dark:text-green-400 text-sm font-medium">Full Support</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-4">🧭</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Safari</h3>
            <p className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">Limited TTS</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Edge</h3>
            <p className="text-green-600 dark:text-green-400 text-sm font-medium">Full Support</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-navy-600 py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Try Voice Features?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Once you have HTTPS enabled, you can use voice input and output with our AI chatbot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group"
            >
              <Mic className="w-5 h-5 mr-2" />
              Try AI Chatbot
            </a>
            <a 
              href="/ai-features" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300 flex items-center justify-center group"
            >
              <Globe className="w-5 h-5 mr-2" />
              View All Features
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
