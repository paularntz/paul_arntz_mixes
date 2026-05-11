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
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/redesign/hero_image.png')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                <div className="relative container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-2xl">
                            Paul Arntz <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Studios</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
                            Cutting-Edge Audio Engineering & Video Post-Production
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium tracking-wide">
                            <span className="bg-blue-500/10 text-blue-400 px-6 py-3 rounded-full border border-blue-500/20 backdrop-blur-md">
                                Mixing & Mastering
                            </span>
                            <span className="bg-purple-500/10 text-purple-400 px-6 py-3 rounded-full border border-purple-500/20 backdrop-blur-md">
                                Music Production
                            </span>
                            <span className="bg-cyan-500/10 text-cyan-400 px-6 py-3 rounded-full border border-cyan-500/20 backdrop-blur-md">
                                Video Post-Production
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">

                {/* Services Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] hover:border-blue-500/50 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Music Production</h3>
                        <p className="text-gray-400 leading-relaxed mb-8 font-light">
                            Professional mixing, mastering, and production services that bring your musical vision to life with absolute clarity and modern impact.
                        </p>
                        <a href="/about" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors no-underline group-hover:translate-x-2 duration-300">
                            Learn More
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] hover:border-purple-500/50 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[url('/images/redesign/video_post.png')] bg-cover bg-center rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700 blur-[2px]"></div>
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 relative z-10">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Video Post-Production</h3>
                        <p className="text-gray-400 leading-relaxed mb-8 font-light relative z-10">
                            Complete video and audio post-production services. From non-linear editing and HDR color grading to sound design and final layback.
                        </p>
                        <a href="/video-post-production" className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors no-underline group-hover:translate-x-2 duration-300 relative z-10">
                            Explore Services
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] hover:border-cyan-500/50 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Audio Engineering</h3>
                        <p className="text-gray-400 leading-relaxed mb-8 font-light">
                            Technical expertise in analog and digital recording, precision editing, and immersive sound design built on decades of professional experience.
                        </p>
                        <a href="/messages/contact" className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors no-underline group-hover:translate-x-2 duration-300">
                            Get Quote
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            Let&apos;s Make It Happen.
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            From your next track or record to complete video post-production, we&apos;ll shape it into something that feels and sounds exactly right.
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
