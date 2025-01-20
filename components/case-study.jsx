"use client";

import { Audio } from "components/audio";

export default function CaseStudy({ params }) {
  const { id } = params;

  // Define case study details for each song
  const caseStudies = {
    1: {
      title: "Funky Gospel",
      artist: "Jeff Lorber",
      description: `
        <p>This track highlights my collaboration with Jeff Lorber on a funky gospel masterpiece. 
        It's a blend of traditional gospel elements with a funky, modern twist.</p>
        <p>Here's a <a href="https://www.youtube.com/watch?v=example" target="_blank">YouTube walkthrough</a> of the mixing process.</p>
      `,
      image: "/images/funky-gospel.jpg",
      tracks: [
        {
          key: "1",
          url: "https://www.dropbox.com/scl/fi/ewrtk4npqvcrk5lic2upf/2022-02-01-Funky-Gospel-Paul-Arntz-Mix_1.mp3?raw=1",
          title: "Funky Gospel",
          artist: "Jeff Lorber",
          type: "audio/mpeg",
        },
      ],
    },
    // Add more case studies as needed
  };

  const caseStudy = caseStudies[id];

  if (!caseStudy) {
    return <div>Case study not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{caseStudy.title}</h1>
      <img
        src={caseStudy.image}
        alt={caseStudy.title}
        className="w-full max-w-lg mb-6"
      />
      <div
        className="text-lg mb-8"
        dangerouslySetInnerHTML={{ __html: caseStudy.description }}
      />
      <Audio tracks={caseStudy.tracks} />
    </div>
  );
}