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
        <header className="w-full pt-serif uppercase mb-[45px]  text-[#000000] hover:text-[#4a2c2c]">
            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-col items-center justify-center text-[#000000] px-4 py-6 gap-6">
                {/* Logo Centered */}
                <img src="/images/logo.png" className="w-30" alt="logo" />

                {/* Navigation Centered Below Logo */}
                <div className="flex gap-23 text-[15px]">
                    <Link className="hover:text-[#4a2c2c]" href="/">Home</Link>
                    <Link className="hover:text-[#4a2c2c]" href="/gallery">Gallery</Link>
                    <Link className="hover:text-[#4a2c2c]" href="/films">Films</Link>
                    <Link className="hover:text-[#4a2c2c]" href="/services">Services</Link>
                    <Link className="hover:text-[#4a2c2c]" href="/about-us">About Us</Link>
                    <Link className="hover:text-[#4a2c2c]" href="/contact-us">Contact</Link>
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
                <img src="/images/home/kalpanalogo.png" className="w-32" alt="logo" />
                <button
                    className="text-white"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Slide-In Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-[#D1A1A1] shadow-md transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    <img src="/images/home/kalpanalogo.png" className="w-24" alt="logo" />
                    <button onClick={() => setIsOpen(false)} aria-label="Close Menu" className="text-oklch">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col gap-4 px-6 py-6 bg-[#D1A1A1] text-oklch">
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Home size={20} className="text-oklch" /> Home
                    </Link>
                    <Link href="/gallery" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Image size={20} className="text-oklch" /> Gallery
                    </Link>
                    <Link href="/films" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Image size={20} className="text-oklch" /> Films
                    </Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Briefcase size={20} className="text-oklch" /> Services
                    </Link>
                    <Link href="/about-us" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Info size={20} className="text-oklch" /> About Us
                    </Link>
                    <Link href="/contact-us" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Mail size={20} className="text-oklch" /> Contact
                    </Link>
                    <a
                        href="https://g.page/r/CQ_S4e81XFoMEAI/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition hover:text-[#4a2c2c]"
                    >
                        <StarIcon size={20} className="text-oklch" />
                        <span>Rate Us</span>
                    </a>
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
