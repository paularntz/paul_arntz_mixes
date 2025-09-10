"use client"
import { useEffect, useRef } from 'react';

export function Audio({ tracks }) {
    return (
        <div className="flex flex-wrap gap-10 max-w-full">
            {tracks.map(track => (
                <div key={track.key} className="w-full max-w-md">
                    <div className="mb-2">
                        <strong className="text-lg">{track.title}</strong><br />
                        <span className="text-gray-600">{track.artist}</span>
                    </div>
                    <SecureAudioPlayer url={track.url} type={track.type} />
                </div>
            ))}
        </div>
    );
}

function SecureAudioPlayer({ url, type }) {
    const audioRef = useRef(null);

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
            
            audio.addEventListener('keydown', preventKeyboardShortcuts);
            
            return () => {
                audio.removeEventListener('keydown', preventKeyboardShortcuts);
            };
        }
    }, []);

    return (
        <div className="relative">
            <audio 
                ref={audioRef}
                controls 
                preload="none"
                controlsList="nodownload nofullscreen noplaybackrate"
                onContextMenu={(e) => e.preventDefault()}
                className="w-full"
                style={{
                    backgroundColor: '#f3f4f6',
                    borderRadius: '8px',
                    padding: '8px',
                }}
            >
                <source src={url} type={type} />
            </audio>
            <style jsx global>{`
                /* Hide download button */
                audio::-webkit-media-controls-download-button,
                audio::-internal-media-controls-download-button {
                    display: none !important;
                }
                
                /* Hide the timeline popup preview */
                audio::-webkit-media-controls-timeline-container {
                    display: none !important;
                }
                
                /* Prevent selection */
                audio {
                    user-select: none;
                    -webkit-user-select: none;
                }
                
                /* Custom styling */
                audio::-webkit-media-controls-panel {
                    background-color: #f3f4f6;
                }
                
                audio::-webkit-media-controls-current-time-display,
                audio::-webkit-media-controls-time-remaining-display {
                    color: #374151;
                }
            `}</style>
        </div>
    );
}
