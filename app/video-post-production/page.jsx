"use client";

export default function VideoPostProduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Video Post-Production
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete video and audio post-production services that bring your visual stories to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Video Editing & Production</h3>
            <p className="text-gray-300 leading-relaxed">
              Complete video editing services including cuts, transitions, color correction, visual effects, 
              and motion graphics to create compelling visual narratives that engage your audience.
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Audio Post-Production</h3>
            <p className="text-gray-300 leading-relaxed">
              Professional audio services including dialogue editing, sound design, music integration, 
              and stereo mixing for broadcast, streaming, and theatrical distribution.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl mb-16">
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-8">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-blue-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              The same attention to detail I bring to music production carries over into my video post-production work. Whether it&apos;s editing, color, sound, or the final polish, my goal is to make sure what people see and what they hear feel completely connected — because great video only works when both are working together.
            </p>
            
            <p>
              I approach post-production the same way I approach mixing: it&apos;s all about the story. Once I understand the emotion you want to convey, I shape both the visual flow and the sonic landscape to support it. That might mean tightening the edit for impact, grading for tone and consistency, cleaning up dialogue, layering in sound design, or balancing everything so it feels natural and immersive.
            </p>
            
            <p>
              I handle the full range of post services — <span className="text-blue-400 font-medium">video editing and assembly</span>, <span className="text-blue-400 font-medium">color correction and grading</span>, <span className="text-blue-400 font-medium">motion graphics</span>, <span className="text-blue-400 font-medium">dialogue cleanup</span>, <span className="text-blue-400 font-medium">sound design</span>, <span className="text-blue-400 font-medium">music integration</span>, and <span className="text-blue-400 font-medium">final mix</span> — ready for any delivery format from social media to broadcast to film.
            </p>
            
            <p>
              Technical standards today are higher than ever, and I&apos;m fully equipped to meet them — <span className="text-purple-400 font-medium">4K video</span>, <span className="text-purple-400 font-medium">HDR color</span>, <span className="text-purple-400 font-medium">stereo mixing</span>, and all the details that make content look and sound its best. But what really matters is the end result: something that doesn&apos;t just look and sound right, but feels alive. Every cut, every color, every fade is there to serve the story.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 border border-blue-500/30 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">My Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Project Analysis & Planning</h3>
              <p className="text-gray-300">
                I review your raw footage and audio, understand your narrative goals, and develop a comprehensive post-production strategy covering both visual and audio elements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Editing & Post-Production</h3>
              <p className="text-gray-300">
                Video assembly, color grading, motion graphics, dialogue cleanup, sound design, and music integration all work together to build your story&apos;s foundation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Final Mix & Delivery</h3>
              <p className="text-gray-300">
                Professional finishing ensures your video looks stunning and sounds exceptional across all platforms, meeting industry standards for any distribution format.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Elevate Your Video Project?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how professional video and audio post-production can enhance your visual storytelling and create a truly immersive experience for your audience.
            </p>
            <a 
              href="/messages/contact" 
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}