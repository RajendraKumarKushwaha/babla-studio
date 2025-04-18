import ClientContactForm from "@/clientComponent/ContactUsClient";
import { MapPin, Phone, Mail } from "lucide-react";
export default function ContactUs() {
    return (
        <div className="w-[90%] mx-auto">
            {/* Map Section */}
            <div className="w-full h-[400px]">

                <div className="w-full h-[400px] relative overflow-hidden">
                    {/* Original Map */}
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931891.5737578849!2d80.54616121089916!3d24.164666464224997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de689d95d647e55%3A0xc5a5c35efe1d20f!2sTechYard%20Web%20Solutions!5e0!3m2!1sen!2sin!4v1744956529688!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                    
                    {/* Overlay with f5f1eb */}
                    <div className="absolute inset-0 bg-[#f5f1eb] opacity-20 pointer-events-none"></div>
                </div>


            </div>

            {/* Contact Info Section */}
            <div className="grid md:grid-cols-2 gap-6  py-12 ">
                {/* Left - Address */}
                <div className="space-y-4">
                    <h1 className="">Get in Touch</h1>

                    <div className="flex items-center gap-3 text-[#787878]">
                        <MapPin className="w-5 h-5 text-[#787878]" />
                        <span>123 Main Street, TechCity, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#787878]">
                        <Phone className="w-5 h-5 text-[#787878]" />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#787878]">
                        <Mail className="w-5 h-5 text-[#787878]" />
                        <span>contact@youragency.com</span>
                    </div>

                    {/* Extra content to fill space */}
                    <div className="pt-6 ">
                        <h3 className="text-xl font-medium text-[#222222] mb-3">Business Hours</h3>
                        <p className="text-[#787878] mb-3">Mon - Fri: 9:00 AM – 6:00 PM</p>
                        <p className="text-[#787878] mb-3">Saturday: 10:00 AM – 4:00 PM</p>
                        <p className="text-[#787878] mb-3">Sunday: Closed</p>
                    </div>
                </div>


                {/* Right - Contact Form (you can insert here later) */}
                <div>
                    <ClientContactForm />
                </div>
            </div>
        </div>
    );
}
