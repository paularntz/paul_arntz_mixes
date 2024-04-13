"use client"
import { Card } from 'components/card';
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const tracks = [
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      tags: ["house"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    },
  ];

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">Welcome to Paul Arntz Online</h1>
                <p className="text-lg">Providing professional mixing service in Nashville, TN</p>
                {/* <Link
                    href="https://docs.netlify.com/frameworks/next-js/overview/"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                    Read the Docs
                </Link> */}
            </section>
            <Player trackList={tracks} />
            <Card title="Mix Example" text="Check This Out!" linkText="Go HERE" href="https://paularntz.com" />
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}
        </main>
    );
}
