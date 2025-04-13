'use client'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    const spinControls = useAnimation()

    useEffect(() => {
        spinControls.start({
            rotate: 360,
            transition: {
                repeat: Infinity,
                duration: 20,
                ease: 'linear',
            },
        })
    }, [spinControls])

    return (
        <footer className="">
            {/* Main Footer */}
            <div className="py-10 px-6 md:px-25 text-center items-center grid grid-cols-1 lg:grid-cols-5  relative">
                {/* COLUMN 1: Follow Us */}
                <div className="lg:col-span-1">
                    <h3 className="text-lg font-bold uppercase mb-4 text-[#222222] tracking-widest">Follow Us</h3>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <a href="#" className="hover:scale-110 transition-transform">
                            <FaInstagram className="text-[#787878] text-xl" />
                        </a>
                        <div className="w-10 h-[1px] bg-[#cdcac5]" />

                        <a href="#" className="hover:scale-110 transition-transform">
                            <FaFacebook className="text-[#787878] text-xl" />
                        </a>
                        <div className="w-10 h-[1px] bg-[#cdcac5]" />

                        <a href="#" className="hover:scale-110 transition-transform">
                            <FaYoutube className="text-[#787878] text-xl" />
                        </a>
                        <div className="w-10 h-[1px] bg-[#cdcac5]" />

                        <a href="#" className="hover:scale-110 transition-transform">
                            <FaTwitter className="text-[#787878] text-xl" />
                        </a>
                    </div>

                    <p className=" text-[#787878]">hello@bablephotography.com</p>
                </div>

                {/* Vertical Line 1 */}
                <div className="hidden lg:block w-px bg-[#cdcac5] h-full mx-auto" />

                {/* COLUMN 2: Circular Spinning Text + Signature */}
                <div className="lg:col-span-1 flex items-center justify-center relative h-64">
                    <motion.div
                        animate={spinControls}
                        className="w-48 h-48 rounded-full flex items-center justify-center"
                    >
                        <svg viewBox="0 0 200 200" className="w-full h-full tracking-widest">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 100, 100
                                     m -75, 0
                                     a 75,75 0 1,1 150,0
                                     a 75,75 0 1,1 -150,0"
                                />
                            </defs>
                            <text fill="gray" fontSize="15" fontWeight="500">
                                <textPath href="#circlePath" startOffset="0%"  textLength="470">
                                    BABLA - WEDDING - PHOTOGRAPHY - STUDIO • 
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>
                    <span className="absolute z-10 text-4xl font-signature text-white select-none">
                        B
                    </span>
                </div>

                {/* Vertical Line 2 */}
                <div className="hidden lg:block w-px bg-[#cdcac5] h-full mx-auto" />

                {/* COLUMN 3: Newsletter */}
                {/* COLUMN 3: Address */}
                <div className="lg:col-span-1">
                    <h3 className="text-lg font-bold uppercase mb-4 tracking-widest text-[#222222]">Address</h3>
                    <p className="text-gray-500 mb-2">
                        Babla Photography Studio<br />
                        T.r.s Road Front of, John Tower (AIRTEL CELL TOWER), Narendra Nagar, Amaiya Colony, Rewa<br />
                        Madhya Pradesh 486001
                    </p>
                    <p className="text-gray-500 mb-2">
                        Phone: +91 98765 43210
                    </p>
                    <p className="text-gray-500">
                        Email: hello@bablephotography.com
                    </p>
                </div>

            </div>

            {/* Subfooter */}
            <div className="border-t border-[#cdcac5] py-4 text-center  text-gray-500">
                © {new Date().getFullYear()} Babla Studio • All rights reserved.
            </div>
        </footer>
    )
}
