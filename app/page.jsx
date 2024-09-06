"use client"
import { Audio } from "components/audio";

const currentTracks = [
    {
        key: "3",
        url: "https://www.dropbox.com/scl/fi/7h6xhsx2ppq39opaxing1/2023-01-03-Cleavage-Master.mp3?rlkey=0n1pxqx3ffjzyqz5zu8401v73&st=gvn7vcog&raw=1                      ",
        title: "Cleavage",
        artist: "Phenix Red",
        type: "audio/mpeg",
    },
    {
        key: "6",
        url: "https://www.dropbox.com/scl/fi/cn9rj72yr04mz7c0h1ud7/2022-09-14-Stone-In-Love.mp3?rlkey=t507ey43w4hmi372hjwui1eyc&st=j6dey14g&dl=1",
        title: "Stone In Love",
        artist: "Beyond Frontiers",
        type: "audio/mpeg",
    },
    {
        key: "4",
        url: "https://www.dropbox.com/scl/fi/i1iumz1u0hys2r2v2yx2p/2023-04-25-3-Fan.mp3?rlkey=ncb6mexr5yoowmuhst94ax3zq&st=i3r8get9&dl=1",
        title: "Fan",
        artist: "Phenix Red",
        type: "audio/mpeg",
    },
    {
        key: "7",
        url: "https://www.dropbox.com/scl/fi/mp05v75wgzqm0bp0xojh3/2022-09-26-Lacidasical-Mastered.mp3?rlkey=ez8aq4x5lhslzn3ugc9dg61wu&st=y2fyy8ae&dl=1",
        title: "Lacidasical",
        artist: "Chris West",
        type: "audio/mpeg",
    },
    {
        key: "5",
        url: "https://www.dropbox.com/scl/fi/49zo30i6aja2yvuyy2teg/2024-02-17-3-Moshpit.mp3?rlkey=49hp0jot43fi2mxgy5v19ad7r&st=sy9kimxg&dl=1",
        title: "Moshpit",
        artist: "Phenix Red",
        type: "audio/mpeg",
    },
    {
        key: "1",
        url: "https://www.dropbox.com/scl/fi/ewrtk4npqvcrk5lic2upf/2022-02-01-Funky-Gospel-Paul-Arntz-Mix_1.mp3?rlkey=ska4x7qb8fosfp6slp7dlala5&dl=1",
        title: "Funky Gospel",
        artist: "Jeff Lorber",
        type: "audio/mpeg",
    },
    {
        key: "2",
        url: "https://www.dropbox.com/scl/fi/pxh2tfti7lgm1uzy2a4q5/2024-02-02-Shout.mp3?rlkey=ifkvpiuw00z9jf8opkmqbea6c&st=vldslkd8&dl=1",
        title: "Shout",
        artist: "Product Like A Pro",
        type: "audio/mpeg",
    },
];

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="px-9 flex flex-col items-start gap-3 sm:gap-4 w-screen">
                <h1 className="mb-0 text-4xl">Paul Arntz</h1>
                <p className="text-lg">professional mixing services</p>
            </section>
            <section className="bg-slate-950 w-screen p-9">
                <h1 className="text-2xl">A Few Examples</h1>
                <Audio tracks={currentTracks} />
            </section>
        </main>
    );
}
