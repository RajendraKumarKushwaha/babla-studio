// components/ClientContactForm.js (CSR Component)
"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function ClientContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // ✅ Collect selected checkboxes manually
        const selectedServices = [];
        event.target.querySelectorAll('input[name="service They Want"]:checked').forEach((checkbox) => {
            selectedServices.push(checkbox.value);
        });

        // Append selected services as a single string
        formData.delete("service They Want"); // remove if any auto-added by default
        formData.append("service They Want", selectedServices.join(", "));

        formData.append("access_key", "d7811bbb-ff23-4568-82ab-027d417236b4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        console.log("data ", data);

        if (data.success) {
            Swal.fire({
                title: "🎉 Message Sent!",
                html: "<b>Thanks for reaching out.</b><br>We'll contact you shortly.",
                icon: "success",
                background: "#f5f1eb",
                color: "#333",
                confirmButtonColor: "#272727",
                confirmButtonText: "Okay!",
                customClass: {
                    popup: "rounded-2xl shadow-lg px-6 py-4"
                }
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="">
            {/* Contact Form */}
            <div className=" ">
                {/* <h3 className="text-2xl text-[#787878] font-bold mb-6">Get in Touch</h3> */}

                <form onSubmit={onSubmit} className="max-w-md mx-auto">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="First Name" id="First Name" className="block py-2.5 px-0 w-full text-sm text-[#787878] bg-transparent border-0 border-b-2 border-[#787878] appearance-none focus:outline-none focus:ring-0 focus:border-[#222222] peer" placeholder=" " required />
                            <label htmlFor="First Name" className="peer-focus:font-medium absolute text-sm text-[#787878] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="Last Name" id="Last Name" className="block py-2.5 px-0 w-full text-sm text-[#787878] bg-transparent border-0 border-b-2 border-[#787878] appearance-none focus:outline-none focus:ring-0 focus:border-[#222222] peer" placeholder=" " required />
                            <label htmlFor="Last Name" className="peer-focus:font-medium absolute text-sm text-[#787878] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="Email" id="Email" className="block py-2.5 px-0 w-full text-sm text-[#787878] bg-transparent border-0 border-b-2 border-[#787878] appearance-none focus:outline-none focus:ring-0 focus:border-[#222222] peer" placeholder=" " required />
                        <label htmlFor="Email" className="peer-focus:font-medium absolute text-sm text-[#787878] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="Mobile Number" id="Mobile Number" className="block py-2.5 px-0 w-full text-sm text-[#787878] bg-transparent border-0 border-b-2 border-[#787878] appearance-none focus:outline-none focus:ring-0 focus:border-[#222222] peer" placeholder=" " required />
                        <label htmlFor="Mobile Number" className="peer-focus:font-medium absolute text-sm text-[#787878] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>
                    </div>

                    {/* Dropdown */}
                    {/* Services with Checkboxes */}
                    <div className="relative z-0 w-full mb-5 group">
                        <p className="block mb-2 text-sm font-medium text-[#787878]">Select Services</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#787878]">
                            {[
                                "Event Photography",
                                "Wedding Photography",
                                "Pre-Wedding Photography",
                                "Maternity & New Born Baby Photography",
                                "Fashion Photography",
                                "Candid & Cinematic",
                                "Aerial Photography (drone)",
                                "Product Photography",
                                "Video Conferencing"
                            ].map((service, index) => (
                                <label key={index} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="service They Want"
                                        value={service}
                                        className="accent-[#787878]"
                                    />
                                    <span>{service}</span>
                                </label>
                            ))}
                        </div>
                    </div>


                    <button type="submit" className="text-white tracking-wider cta cursor-pointer bg-[#272727] hover:bg-[#4a2c2c] focus:ring-4 focus:outline-none focus:ring-[#272727] font-medium text-sm w-full sm:w-auto px-15 py-4 text-center">Send</button>
                </form>
            </div>


            {/* Google Map */}

        </div>
    );
}
