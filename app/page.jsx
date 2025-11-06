"use client"
import { Audio } from "components/secure-audio";

const currentTracks = [
    {
        key: "3",
        url: "https://www.dropbox.com/scl/fi/7h6xhsx2ppq39opaxing1/2023-01-03-Cleavage-Master.mp3?rlkey=0n1pxqx3ffjzyqz5zu8401v73&st=gvn7vcog&raw=1",
        title: "Cleavage",
        artist: "Phenix Red",
        type: "audio/mpeg",
    },
    {
        key: "6",
        url: "https://www.dropbox.com/scl/fi/cn9rj72yr04mz7c0h1ud7/2022-09-14-Stone-In-Love.mp3?rlkey=t507ey43w4hmi372hjwui1eyc&st=j6dey14g&raw=1",
        title: "Stone In Love",
        artist: "Beyond Frontiers",
        type: "audio/mpeg",
    },
    {
        key: "4",
        url: "https://www.dropbox.com/scl/fi/i1iumz1u0hys2r2v2yx2p/2023-04-25-3-Fan.mp3?rlkey=ncb6mexr5yoowmuhst94ax3zq&st=i3r8get9&raw=1",
        title: "Fan",
        artist: "Phenix Red",
        type: "audio/mpeg",
    },
    {
        key: "7",
        url: "https://www.dropbox.com/scl/fi/mp05v75wgzqm0bp0xojh3/2022-09-26-Lacidasical-Mastered.mp3?rlkey=ez8aq4x5lhslzn3ugc9dg61wu&st=y2fyy8ae&raw=1",
        title: "Lacidasical",
        artist: "Chris West",
        type: "audio/mpeg",
    },
    {
        key: "5",
        url: "https://www.dropbox.com/scl/fi/49zo30i6aja2yvuyy2teg/2024-02-17-3-Moshpit.mp3?rlkey=49hp0jot43fi2mxgy5v19ad7r&st=sy9kimxg&raw=1",
        title: "Moshpit",
        artist: "Phenix Red",
        type: "audio/mpeg",
    },
    {
        key: "1",
        url: "https://www.dropbox.com/scl/fi/ewrtk4npqvcrk5lic2upf/2022-02-01-Funky-Gospel-Paul-Arntz-Mix_1.mp3?rlkey=ska4x7qb8fosfp6slp7dlala5&raw=1",
        title: "Funky Gospel",
        artist: "Jeff Lorber",
        type: "audio/mpeg",
    },
    {
        key: "2",
        url: "https://www.dropbox.com/scl/fi/pxh2tfti7lgm1uzy2a4q5/2024-02-02-Shout.mp3?rlkey=ifkvpiuw00z9jf8opkmqbea6c&st=vldslkd8&raw=1",
        title: "Shout",
        artist: "Product Like A Pro",
        type: "audio/mpeg",
    },
];

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Paul Arntz
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Professional Audio Engineering & Music Production
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">
                            Mixing & Mastering
                        </span>
                        <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">
                            Music Production
                        </span>
                        <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full border border-green-500/30">
                            Audio Post-Production
                        </span>
                        <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full border border-orange-500/30">
                            Video Post-Production
                        </span>
                    </div>
                </div>

                {/* Services Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Music Production</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Professional mixing, mastering, and production services that bring your musical vision to life with clarity and impact.
                        </p>
                        <a href="/about" className="inline-flex items-center bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors no-underline">
                            Learn More
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Video Post-Production</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Complete video and audio post-production services for film, television, commercials, and digital content. From editing and color grading to sound design and final mix.
                        </p>
                        <a href="/video-post-production" className="inline-flex items-center bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors no-underline">
                            Explore Services
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Audio Engineering</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Technical expertise in recording, editing, and sound design with decades of experience in professional audio production.
                        </p>
                        <a href="/messages/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors no-underline">
                            Get Quote
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Examples Section */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Portfolio Highlights</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Listen to a selection of mixing and mastering examples across various genres and styles
                        </p>
                    </div>

                    <style jsx global>{`
                        audio::-internal-media-controls-download-button {
                            display: none;
                        }
                        audio::-webkit-media-controls-download-button {
                            display: none;
                        }
                        audio::-webkit-media-controls-enclosure {
                            overflow: hidden;
                        }
                        audio::-webkit-media-controls-panel {
                            width: calc(100% + 30px);
                        }
                    `}</style>
                    
                    <Audio tracks={currentTracks} layout="grid" />
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Work Together?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Whether you're working on your next single, album, or audio project, 
                            let's discuss how we can bring your vision to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/messages/contact" 
                                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                            >
                                Start Your Project
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                            <a 
                                href="tel:6153903848" 
                                className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-gray-600"
                            >
                                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                Call (615) 390-3848
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
