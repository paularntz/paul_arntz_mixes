"use client"
import { Audio } from "components/secure-audio";
import { PasswordProtect } from "components/password-protect";

const tracks = [
    {
        key: "3",
        url: "https://www.dropbox.com/scl/fi/nww2ynfsb5rz5ixoktu4i/2025-09-30-Third-Of-The-3rd-In-Three.wav?rlkey=9f1lfhckc1at30cbjsgnauphp&raw=1",
        title: "A Third Of The 3rd In Three",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "6",
        url: "https://www.dropbox.com/scl/fi/7ag0j1szgwj03lmoacq6n/2025-09-30-Falling-Grace.wav?rlkey=6jy05iix6qk3bhw82kxf820kk&raw=1",
        title: "Falling Grace",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "1",
        url: "https://www.dropbox.com/scl/fi/hmgp0so5eosfikbv8p4ds/2025-09-30-Pile-Driving-Miss-Daisy.wav?rlkey=ivny07wm11vgjyydefukqp1pu&raw=1",
        title: "Tequila Mockingbird",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "5",
        url: "https://www.dropbox.com/scl/fi/c2hf58p2mxgqxnk3de7j4/2025-09-30-Desert-Air.wav?rlkey=z4i51kqrkpq9biqmfdux1sljp&raw=1",
        title: "Desert Air",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "8",
        url: "https://www.dropbox.com/scl/fi/vax5go8u0gjjnx6jbf66e/2025-09-30-Better-Early-Than-Always.wav?rlkey=phredt82kc4o5bv1wkgw20d2f&raw=1",
        title: "Better Early Than Always",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "4",
        url: "https://www.dropbox.com/scl/fi/865qsnlkflxln7nrqyebn/2025-09-02-02-Tears-In-Heaven.wav?rlkey=odakqplyki53e8cyke7w3ujxc&raw=1",
        title: "Psalm Thing",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "7",
        url: "https://www.dropbox.com/scl/fi/ht5pmspuf02x8utmqp96q/2025-09-01-03-Windows.wav?rlkey=unywxpkz52d0ybdbd795tey5k&raw=1",
        title: "Windows",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "9",
        url: "https://www.dropbox.com/scl/fi/ejca9241zklt7o45zo8ro/2025-08-27-02-Two-Thoughts.wav?rlkey=orvwtxoz7bou3xii2jgw1nky4&raw=1",
        title: "Owed to Joy",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "2",
        url: "https://www.dropbox.com/scl/fi/9w2vcz2lwteoa55evyvs1/2025-09-09-Salmon-Dave.wav?rlkey=kdpcxphxn1h2f1pb2pift91h0&raw=1",
        title: "Salmon Dave",
        artist: "Jeff Berlin",
        type: "audio/wav",
    }
];

export default function MixesPage() {
    return (
        <PasswordProtect>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
                <div className="container mx-auto px-4 py-12 max-w-7xl">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Jeff Berlin Mixes
                        </h1>
                        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6 max-w-3xl mx-auto">
                            <div className="flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                </svg>
                                <span className="text-yellow-300 font-semibold">Private Collection</span>
                            </div>
                            <p className="text-yellow-200 leading-relaxed">
                                These recordings are for private listening only. Please do not download or distribute.
                            </p>
                        </div>
                    </div>

                    {/* Audio Collection */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Exclusive Audio Collection</h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                A curated selection of Jeff Berlin&apos;s latest compositions and performances, 
                                mixed and mastered with precision and artistic vision.
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
                        
                        <Audio tracks={tracks} layout="grid" />
                    </div>

                    {/* Footer Note */}
                    <div className="text-center mt-12">
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                            <p className="text-gray-400 text-sm leading-relaxed">
                                All tracks are mixed and mastered by Paul Arntz. For inquiries about similar work, 
                                please <a href="/messages/contact" className="text-blue-400 hover:text-blue-300 transition-colors">get in touch</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PasswordProtect>
    );
}
