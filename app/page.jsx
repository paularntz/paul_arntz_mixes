"use client"
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const tracks = [
    {
      url: "Cleavage.mp3",
      title: "Cleavage - Phenix Red",
      tags: ["RNB"],
    },
    {
        url:"Shout.mp3",
        title: "Shout - PLAP Band - (PLAP)",
        tags: ["Rock", "Pop"],
    },
  ];

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">Welcome to Paul Arntz Online</h1>
                <p className="text-lg">Providing professional mixing service in Nashville, TN</p>
            </section>
            {/* <h2>All tracks mixed by Paul Arntz</h2>
            <Player trackList={tracks} /> */}
        </main>
    );
}
