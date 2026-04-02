// app/messages/thank-you/page.js
export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Thank You!
          </h1>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl text-center">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              I have received your message and will get back to you as soon as possible.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-xl p-6 border border-blue-500/30">
              <p className="text-lg text-gray-300 mb-2">
                <span className="text-blue-400 font-semibold">Response Time:</span> Typically within 24 hours
              </p>
              <p className="text-sm text-gray-400">
                For urgent inquiries, please call (615) 390-3848
              </p>
            </div>

            <div className="pt-4">
              <p className="text-lg text-gray-300 mb-2">Best regards,</p>
              <p className="text-2xl font-bold text-white mb-8">Paul Arntz</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              >
                Back to Home
              </a>
              <a 
                href="/about" 
                className="bg-gray-700/50 text-gray-300 font-semibold py-3 px-8 rounded-xl hover:bg-gray-700 border border-gray-600 transition-all"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
            <p className="text-gray-400 text-sm">
              Follow up on social media for mixing tips and behind-the-scenes content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}