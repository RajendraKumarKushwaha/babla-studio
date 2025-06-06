import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderPage1 from "@/component/Header";
import Footer from "@/component/Footer";
import WhatsAppButton from "@/clientComponent/Whatsapp";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Lora&display=swap"
          rel="stylesheet"
        />

       
      
      </head>
      <body>
        <HeaderPage1 />
        {children}
        <Footer />
        <WhatsAppButton/>
      </body>
    </html>
  );
}
  