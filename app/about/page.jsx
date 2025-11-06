"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-8">
            <p>
              I&apos;ve been making records in Nashville since 1994, helping artists get the sound they&apos;ve been chasing—whether that means dialing in the perfect mix, producing a track from the ground up, crafting audio for visual media, or just making sure the music hits the way it should.
            </p>
            
            <p>
              I grew up in Michigan and studied classical guitar, theory, and composition at Spring Arbor University, which gave me a deep appreciation for both the technical and emotional sides of music. That foundation still shapes everything I do in the studio today.
            </p>
            
            <p>
              After moving to Nashville, I dove headfirst into studio life and never really came up for air. Over the years I&apos;ve had the chance to work with a wide range of artists—<span className="text-blue-400 font-medium">Jeff Berlin</span>, <span className="text-blue-400 font-medium">Joey Belladonna of Anthrax</span> (Beyond Frontiers), <span className="text-blue-400 font-medium">Phenix Red</span>, <span className="text-blue-400 font-medium">Chris West</span>, and the <span className="text-blue-400 font-medium">Mixtape 80&apos;s Tribute Band</span>, among others.
            </p>
            
            <p>
              My obsession with mixing started early. I was the kid who couldn&apos;t stop wondering why albums like <span className="text-purple-400 font-medium italic">Steely Dan&apos;s Aja</span> and <span className="text-purple-400 font-medium italic">Toy Matinee</span> sounded so good. That curiosity turned into a lifelong pursuit—figuring out what makes a great mix truly translate, no matter where it&apos;s played.
            </p>
            
            <p>
              To me, mixing isn&apos;t just about balance and clarity—it&apos;s about connection. Whether I&apos;m working on a music project or crafting audio for video content, my job is to understand where the artist or filmmaker wants to go and help them get there without losing the heart of what they&apos;ve created. Every project is different, and that&apos;s what keeps me passionate about doing this every single day.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Elevate Your Project?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life—whether it&apos;s music production, mixing, or video post-production audio.
            </p>
            <a 
              href="/messages/contact" 
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}