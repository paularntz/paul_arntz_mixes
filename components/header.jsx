"use client";

import { useState } from 'react';
import Link from 'next/link';
import { LuAudioLines } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'About Me', href: '/about' },
    { linkText: 'Video Post-Production', href: '/video-post-production' },
    { linkText: 'Contact', href: '/messages/contact' },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav
            className="relative bg-black text-white"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-[url('/images/S51.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-20">
                {/* Logo and site name */}
                <Link href="/" className="flex items-center no-underline">
                    <LuAudioLines className="text-white h-10 w-auto mr-4" />
                    <span className="text-3xl font-bold">Paul Arntz Online</span>
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white text-3xl sm:hidden focus:outline-none z-50"
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Navigation menu */}
                <ul
                    className={`${
                        isMenuOpen ? 'flex' : 'hidden'
                    } flex-col items-center absolute top-full left-0 w-full bg-black sm:static sm:w-auto sm:flex sm:flex-row sm:gap-4`}
                >
                    {navItems.map((item, index) => (
                        <li key={index} className="w-full sm:w-auto text-center sm:text-left">
                            <Link
                                href={item.href}
                                className="block w-full sm:w-auto px-4 py-2 text-black font-bold bg-white rounded-lg transition-all duration-300 hover:bg-black hover:text-white no-underline"
                                onClick={() => setIsMenuOpen(false)} // Close the menu after clicking
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}