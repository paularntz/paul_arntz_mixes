import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-slate-950 w-screen pt-16 pb-12 sm:pt-24 sm:pb-16">

            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* Copyright Section */}
                    <div className="mb-4 sm:mb-0">
                        <p>&copy; 2025 Paul Arntz. All rights reserved.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-4">
                        <a href="/privacy" className="no-underline hover:underline">
                            Privacy Policy
                        </a>
                        <a href="/terms-of-service" className="no-underline hover:underline">
                            Terms of Service
                        </a>
                        <a href="/messages/contact" className="no-underline hover:underline">
                            Contact
                        </a>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-6 flex justify-center space-x-6">
                    <a
                        href="https://x.com/PaulArntz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <span className="sr-only">Twitter</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 19c6.627 0 10.256-5.496 10.256-10.256 0-.157 0-.313-.011-.469A7.291 7.291 0 0 0 20 6.345a7.04 7.04 0 0 1-2.024.553 3.528 3.528 0 0 0 1.547-1.948 7.05 7.05 0 0 1-2.23.854 3.518 3.518 0 0 0-5.993 3.208 9.979 9.979 0 0 1-7.243-3.674 3.503 3.503 0 0 0 1.087 4.69A3.516 3.516 0 0 1 2.8 9.605v.043a3.52 3.52 0 0 0 2.823 3.446 3.527 3.527 0 0 1-.928.124 3.507 3.507 0 0 1-.662-.063 3.52 3.52 0 0 0 3.288 2.446 7.046 7.046 0 0 1-4.364 1.506c-.283 0-.564-.016-.844-.048A9.934 9.934 0 0 0 8 19z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.facebook.com/paularntz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <span className="sr-only">Facebook</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54v-2.89h2.54v-2.205c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.24.195 2.24.195v2.465h-1.26c-1.244 0-1.63.774-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                    </a>
                </div>
            </div>







        </footer>
    );
};
