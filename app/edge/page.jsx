import Link from 'next/link';
import { Alert } from '../../components/alert';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Fallback'
};

const explainer = `
This page is using a [Netlify Edge Function](https://docs.netlify.com/edge-functions/overview/) to rewrite the URL based on visitor geography.

For it to be invoked, please either run this site locally with \`netlify dev\` or deploy it to Netlify.

Edge Functions are framework-agnostic, but are also used behind the scenes to run Next.js Middleware on Netlify.
There are advatanges to using Edge Functions directly, such as the ability to access & transform the response body.

[See more examples](https://edge-functions-examples.netlify.app)
`

export default function FallbackPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Edge Function Fallback
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
                    <Markdown content={explainer} />
                </div>
            </div>
        </div>
    );
}
