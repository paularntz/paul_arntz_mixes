import { revalidateTag } from 'next/cache';
import { SubmitButton } from '../../components/submit-button';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'On-Demand Revalidation'
};

const tagName = 'randomWiki';
const randomWikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
const maxExtractLength = 200;
const revalidateTTL = 60;

const explainer = `
This page perfoms a \`fetch\` on the server to get a random article from Wikipedia. 
The fetched data is then cached with a tag named "${tagName}" and a maximum age of ${revalidateTTL} seconds.

~~~jsx
const url = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';

async function RandomArticleComponent() {
    const randomArticle = await fetch(url, {
        next: { revalidate: ${revalidateTTL}, tags: ['${tagName}'] }
    });
    // ...render
}
~~~

After the set time has passed, the first request for this page would trigger its rebuild in the background. When the new page is ready, subsequent requests would return the new page - 
see [\`stale-white-revalidate\`](https://www.netlify.com/blog/swr-and-fine-grained-cache-control/).

Alternatively, if the cache tag is explicitly invalidated by \`revalidateTag('${tagName}')\`, any page using that tag would be rebuilt in the background when requested.

In real-life applications, tags are typically invalidated when data has changed in an external system (e.g., the CMS notifies the site about content changes via a webhook), or after a data mutation made through the site.

For this functionality to work, Next.js uses the [fine-grained caching headers](https://docs.netlify.com/platform/caching/) available on Netlify - but you can use these features on basically any Netlify site!
`;


export default async function Page() {
    async function revalidateWiki() {
        'use server';
        revalidateTag(tagName);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Revalidation Basics
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl mb-8">
                    <Markdown content={explainer} />
                    <form className="mt-8" action={revalidateWiki}>
                        <div className="text-center">
                            <SubmitButton text="Click to Revalidate" />
                        </div>
                    </form>
                </div>

                <RandomWikiArticle />
            </div>
        </div>
    );
}

async function RandomWikiArticle() {
    const randomWiki = await fetch(randomWikiUrl, {
        next: { revalidate: revalidateTTL, tags: [tagName] }
    });

    if (!randomWiki.ok) {
        const text = await randomWiki.text();
        throw new Error(`Failed to fetch ${randomWikiUrl}: ${randomWiki.status} ${randomWiki.statusText}. Response body: ${text}`);
    }

    const contentType = randomWiki.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
        const text = await randomWiki.text();
        throw new Error(`Expected JSON but got ${contentType}. Body: ${text}`);
    }

    const content = await randomWiki.json();
    let extract = content.extract;
    if (extract.length > maxExtractLength) {
        extract = extract.slice(0, extract.slice(0, maxExtractLength).lastIndexOf(' ')) + ' [...]';
    }

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl max-w-3xl mx-auto">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">{content.title}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-4">
                <div className="text-xl font-semibold text-blue-400">{content.description}</div>
                <p className="text-gray-300 leading-relaxed italic">{extract}</p>
                <div className="pt-4">
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={content.content_urls.desktop.page}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        <span>Read more on Wikipedia</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
