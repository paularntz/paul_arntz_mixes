import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Paul Arntz Mixes'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                {/* <link rel="icon" href="/favicon.svg" sizes="any" /> */}
                <script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" id="dropboxjs" data-app-key="z4jo4b5qm11lojx"></script>
            </head>
            <body className="w-screen antialiased text-slate-300 bg-slate-800">
                <div className="flex flex-col w-screen min-h-screen">
                    <div className="flex flex-col w-screen mx-auto grow">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
