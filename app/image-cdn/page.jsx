import Image from 'next/image';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import { ImageWithSizeOverlay } from './image-with-size-overlay';
import { ContextAlert } from 'components/context-alert';

export const metadata = {
    title: 'Image CDN'
};

const sampleImage = '/images/corgi.jpg';

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';
const sampleImageSrcSet = [640, 1280, 2048]
    .map((size) => {
        return `/.netlify/images?url=${sampleImage}&w=${size}${forceWebP ? '&fm=webp' : ''} ${size}w`;
    })
    .join(', ');

const nextImageSnippet = `
When running on Netlify, \`next/image\` is automatically set-up to use Netlify Image CDN for optimized images.

~~~jsx
import Image from 'next/image';

// In your component
<Image src="/images/corgi.jpg" alt="Corgi" /* ... additional props */ />
~~~
`;

const originalVsCdnSnippet = `
In the code below, a regular \`<img>\` tag is used in both cases for a framework-agnostic example. 
Other than using \`next/image\` or rolling your own \`<img>\` tags, you can also use the excellent [unpic-img](https://unpic.pics/).

~~~jsx
// <== On the left, the original image
<img src="/images/corgi.jpg" alt="Corgi" />

// ==> On the right, explicitly using Netlify Image CDN endpoint for a responsive image
<img 
  srcSet="/.netlify/images?url=images/corgi.jpg&w=640 640w, /.netlify/images?url=images/corgi.jpg&w=1280 1280w, /.netlify/images?url=images/corgi.jpg&w=2048 2048w"
  sizes="(max-width: 1024px) 100vw, 1024px" 
  alt="Corgi" 
/>
~~~
`;

const devModeWarning = `
In local development, optimization is performed locally without automatic format
detection, so format is set to WebP.
`;

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Image CDN
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-12">
                    <section>
                        <ContextAlert addedChecksFunction={
                            (ctx) => {
                                return ctx === "dev" ? devModeWarning : null;
                            }
                        } />
                    </section>

                    <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Using next/image component</h2>
                        <Markdown content={nextImageSnippet} />
                        <div
                            className="mt-8 overflow-hidden border-2 border-gray-600 rounded-lg relative max-w-4xl mx-auto"
                            style={{ aspectRatio: '3/2' }}
                        >
                            <Image
                                src="/images/corgi.jpg"
                                priority
                                fill={true}
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                alt="Corgi"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <span className="text-sm italic text-gray-400">
                                Credit: photo by{' '}
                                <a 
                                    href="https://unsplash.com/@alvannee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Alvan Nee
                                </a>{' '}
                                on{' '}
                                <a 
                                    href="https://unsplash.com/photos/long-coated-white-and-brown-dog-lvFlpqEvuRM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Unsplash
                                </a>
                            </span>
                        </div>
                    </section>

                    <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Original vs. optimized image: can you tell the difference?
                        </h2>
                        <Markdown content={originalVsCdnSnippet} />
                        <div className="diff aspect-[3/2] rounded-lg border-2 border-gray-600 mt-8 max-w-4xl mx-auto">
                            <div className="diff-item-1">
                                <div>
                                    <ImageWithSizeOverlay
                                        srcSet={sampleImageSrcSet}
                                        sizes={sampleImageSrcSet}
                                        overlayPosition="right"
                                    />
                                </div>
                            </div>
                            <div className="diff-item-2">
                                <div>
                                    <ImageWithSizeOverlay src="/images/corgi.jpg" />
                                </div>
                            </div>
                            <div className="diff-resizer"></div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
