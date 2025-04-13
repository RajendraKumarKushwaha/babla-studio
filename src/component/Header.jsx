"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown, StarIcon } from "lucide-react"
import { Home, Info, Camera, Briefcase, Image, Mail } from "lucide-react"

export default function HeaderPage1() {
    const pathname = usePathname()
    const isHome = pathname === "/"

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full uppercase mb-[45px]  text-[#000000]">
            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-col items-center justify-center text-[#787878]  px-4 py-6 gap-6">
                {/* Logo Centered */}
                <img src="/images/logo.png" className="w-30" alt="logo" />

                {/* Navigation Centered Below Logo */}
                <div className="flex gap-23 text-[15px]">
                    <Link className="hover:text-[#B3B3B3]" href="/">Home</Link>
                    <Link className="hover:text-[#B3B3B3]" href="/gallery">Gallery</Link>
                    <Link className="hover:text-[#B3B3B3]" href="/gallery2">Gallery2</Link>
                    <Link className="hover:text-[#B3B3B3]" href="/services">Services</Link>
                    <Link className="hover:text-[#B3B3B3]" href="/about-us">About Us</Link>
                    <Link className="hover:text-[#B3B3B3]" href="/contact-us">Contact</Link>
                    {/* <a
                        href="https://g.page/r/CQ_S4e81XFoMEAI/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-[#4a2c2c]"
                    >
                        Rate Us
                    </a> */}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex lg:hidden items-center justify-between px-4 py-4">
                <img src="/images/logo.png" className="w-12" alt="logo" />
                <button
                    className="text-white"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Slide-In Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-[#f5f1eb] shadow-md transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    <img src="/images/logo.png" className="w-12" alt="logo" />
                    <button onClick={() => setIsOpen(false)} aria-label="Close Menu" className="text-oklch">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col gap-4 px-6 py-6 bg-[#f5f1eb] text-[#222222]">
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Home size={20} className="text-[#222222]" /> Home
                    </Link>
                    <Link href="/gallery" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Image size={20} className="text-[#222222]" /> Gallery
                    </Link>
                    <Link href="/gallery2" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Image size={20} className="text-[#222222]" /> Gallery2
                    </Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Briefcase size={20} className="text-[#222222]" /> Services
                    </Link>
                    <Link href="/about-us" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Info size={20} className="text-[#222222]" /> About Us
                    </Link>
                    <Link href="/contact-us" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Mail size={20} className="text-[#222222]" /> Contact
                    </Link>
                    {/* <a
                        href="https://g.page/r/CQ_S4e81XFoMEAI/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition hover:text-[#4a2c2c]"
                    >
                        <StarIcon size={20} className="text-oklch" />
                        <span>Rate Us</span>
                    </a> */}
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    )
}
