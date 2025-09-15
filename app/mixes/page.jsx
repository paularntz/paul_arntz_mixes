"use client"
import { Audio } from "components/secure-audio";
import { PasswordProtect } from "components/password-protect";

const tracks = [
    {
        key: "3",
        url: "https://www.dropbox.com/scl/fi/e7kd3rihrsf28y9qyxp8n/2025-09-01-A-Third-Of-The-3rd-In-Three.wav?rlkey=scs6zcdm4ebg9qnemb6chgkma&raw=1",
        title: "A Third Of The 3rd In Three",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "6",
        url: "https://www.dropbox.com/scl/fi/xaitfpqg754ofveuu73ta/2025-09-15-Falling-Grace.wav?rlkey=slg64yd6evgbawu6y2nj7aakq&raw=1",
        title: "Falling Grace",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "1",
        url: "https://www.dropbox.com/scl/fi/4yorck0oej4d28bvw9606/2025-09-14-Pile-Driving-Miss-Daisy.wav?rlkey=24q1wquox140baf4gn770dzsz&raw=1",
        title: "Tequila Mockingbird",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "5",
        url: "https://www.dropbox.com/scl/fi/pc3g5rwfl9cus7ncikpau/2025-09-01-Desert-Air.wav?rlkey=wjaa47pwms35zjbznzvkn1v16&raw=1",
        title: "Desert Air",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "8",
        url: "https://www.dropbox.com/scl/fi/73km0hfj470gsdzcv4u73/2025-09-28-Better-Early-Than-Always.wav?rlkey=lgfamgzr6aanflkrwvfjcxv8y&raw=1",
        title: "Better Early Than Always",
        artist: "Jeff Berlin",
        type: "audio/wav",
    },
    {
        key: "4",
        url: "https://www.dropbox.com/scl/fi/865qsnlkflxln7nrqyebn/2025-09-02-02-Tears-In-Heaven.wav?rlkey=odakqplyki53e8cyke7w3ujxc&raw=1",
        title: "Tears In Heaven",
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
        title: "Two Thoughts",
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
            <main className="flex flex-col gap-8 sm:gap-16">
                <section className="w-screen p-9">
                    <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">Jeff Berlin Mixes</h1>
                    <div className="text-base md:text-lg text-gray-300 mb-8">
                        These recordings are for private listening only. Please do not download or distribute.
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
                    <div className="max-w-7xl mx-auto">
                        <Audio tracks={tracks} layout="grid" />
                    </div>
                </section>
            </main>
        </PasswordProtect>
    );
}
