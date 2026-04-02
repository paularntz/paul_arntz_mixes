"use client"
import { useEffect, useRef, createContext, useContext, useState } from 'react';

// Create a context to manage the currently playing audio
const AudioContext = createContext();

// Global audio manager to ensure only one audio plays at a time
const audioManager = {
    activeAudio: null,
    stopAll: function() {
        if (this.activeAudio) {
            this.activeAudio.pause();
            this.activeAudio = null;
        }
    },
    setActive: function(audio) {
        this.stopAll();
        this.activeAudio = audio;
    }
};

// Loading spinner component
function LoadingSpinner() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-lg z-10">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
    );
}

export function Audio({ tracks, layout = "list" }) {
    const currentlyPlayingRef = useRef(null);

    const gridClass = layout === "grid" 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        : "grid gap-10";

    return (
        <AudioContext.Provider value={{ currentlyPlayingRef }}>
            <div className={gridClass}>
                {tracks.map(track => (
                    <div key={track.key} className="w-full">
                        <div className="mb-4">
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-1 line-clamp-1">{track.title}</h2>
                            <div className="text-sm md:text-base text-gray-400">{track.artist}</div>
                        </div>
                        <SecureAudioPlayer url={track.url} type={track.type} />
                    </div>
                ))}
            </div>
        </AudioContext.Provider>
    );
}

function SecureAudioPlayer({ url, type }) {
    const audioRef = useRef(null);
    const { currentlyPlayingRef } = useContext(AudioContext);
    const [isLoading, setIsLoading] = useState(false);
    const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            // Prevent context menu on right click
            audio.oncontextmenu = (e) => e.preventDefault();
            
            // Add event listeners to prevent keyboard shortcuts
            const preventKeyboardShortcuts = (e) => {
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                }
            };

            // Handle actual playback start
            const handlePlay = () => {
                // Stop all other audio first
                audioManager.stopAll();
                audioManager.setActive(audio);
                setIsLoading(true);
                setHasStartedPlaying(true);
            };

            // Handle loading states
            const handleWaiting = () => {
                if (hasStartedPlaying) {
                    setIsLoading(true);
                }
            };

            const handlePlaying = () => {
                setIsLoading(false);
            };

            const handlePause = () => {
                setIsLoading(false);
                if (audioManager.activeAudio === audio) {
                    audioManager.activeAudio = null;
                }
            };

            const handleEnded = () => {
                setIsLoading(false);
                setHasStartedPlaying(false);
                if (audioManager.activeAudio === audio) {
                    audioManager.activeAudio = null;
                }
            };
            
            audio.addEventListener('play', handlePlay);
            audio.addEventListener('playing', handlePlaying);
            audio.addEventListener('waiting', handleWaiting);
            audio.addEventListener('pause', handlePause);
            audio.addEventListener('ended', handleEnded);
            audio.addEventListener('keydown', preventKeyboardShortcuts);
            
            return () => {
                audio.removeEventListener('play', handlePlay);
                audio.removeEventListener('playing', handlePlaying);
                audio.removeEventListener('waiting', handleWaiting);
                audio.removeEventListener('pause', handlePause);
                audio.removeEventListener('ended', handleEnded);
                audio.removeEventListener('keydown', preventKeyboardShortcuts);
                // Clean up reference if this audio was playing
                if (currentlyPlayingRef.current === audio) {
                    currentlyPlayingRef.current = null;
                }
            };
        }
    }, [hasStartedPlaying, currentlyPlayingRef]);

    return (
        <div className="relative">
            {isLoading && <LoadingSpinner />}
            <audio 
                ref={audioRef}
                controls 
                preload="none"
                controlsList="nodownload nofullscreen noplaybackrate"
                onContextMenu={(e) => e.preventDefault()}
                className={`w-full ${isLoading ? 'opacity-50' : ''}`}
                style={{
                    background: 'transparent',
                    borderRadius: '8px',
                }}
            >
                <source src={url} type={type} />
            </audio>
            <style jsx global>{`
                /* Base audio element styling */
                audio {
                    width: 100%;
                    height: 44px;
                    border-radius: 8px;
                    user-select: none;
                    -webkit-user-select: none;
                    background: transparent;
                }

                /* Hide download button and unnecessary controls */
                audio::-webkit-media-controls-download-button,
                audio::-internal-media-controls-download-button,
                audio::-webkit-media-controls-timeline-container,
                audio::-webkit-media-controls-mute-button {
                    display: none !important;
                }

                /* Main controls panel styling */
                audio::-webkit-media-controls-panel {
                    background: rgba(30, 41, 59, 0.95) !important;
                    border-radius: 8px;
                    padding: 8px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
                }

                /* Time display styling */
                audio::-webkit-media-controls-current-time-display,
                audio::-webkit-media-controls-time-remaining-display {
                    color: #FFFFFF !important;
                    font-family: -apple-system, system-ui, sans-serif;
                    font-size: 13px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                }

                /* Timeline and controls styling */
                audio::-webkit-media-controls-play-button,
                audio::-webkit-media-controls-timeline {
                    filter: invert(1) brightness(2);
                }

                /* Adjust spacing between elements */
                audio::-webkit-media-controls-enclosure {
                    gap: 8px;
                }

                @media (max-width: 768px) {
                    audio {
                        height: 52px;
                    }
                    
                    audio::-webkit-media-controls-panel {
                        padding: 10px;
                    }

                    audio::-webkit-media-controls-current-time-display,
                    audio::-webkit-media-controls-time-remaining-display {
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    );
}
