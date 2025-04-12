// components/testimonials/Testimonials.js

import HomeSlider from "@/clientComponent/HomeSlider";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Founder, Memories World Studio",
    feedback: "TechYard Web Solutions ne humara studio website itna beautiful banaya!",
    image: "https://images.pexels.com/photos/30497747/pexels-photo-30497747/free-photo-of-elegant-traditional-south-asian-bride-in-red-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Aman Gupta",
    role: "CEO, EVFix.in",
    feedback: "Inka design or SEO dono top-notch hai. Within weeks, traffic double ho gaya!",
    image: "https://images.pexels.com/photos/19442466/pexels-photo-19442466/free-photo-of-beautiful-woman-in-a-traditional-indian-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Neha Verma",
    role: "Owner, HardwareMetals",
    feedback: "Catalog website perfect bana. clients ko dikhane me classy hai.",
    image: "https://images.pexels.com/photos/2053851/pexels-photo-2053851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Ravi Sharma",
    role: "Founder, Memories World Studio",
    feedback: "TechYard Web Solutions ne humara studio website itna beautiful banaya!",
    image: "https://images.pexels.com/photos/24549116/pexels-photo-24549116/free-photo-of-woman-wearing-traditional-indian-clothing-and-jewelry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Aman Gupta",
    role: "CEO, EVFix.in",
    feedback: "Inka design or SEO dono top-notch hai. Within weeks, traffic double ho gaya!",
    image: "https://cdn.pixabay.com/photo/2020/12/10/19/03/wedding-5821098_1280.jpg"
  },
  {
    name: "Neha Verma",
    role: "Owner, HardwareMetals",
    feedback: "Catalog website perfect bana. clients ko dikhane me classy hai.",
    image: "https://images.pexels.com/photos/2053851/pexels-photo-2053851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

export default function HomeSliderCarousel() {
  return (
    <div className="">
      {/* Top Center Paragraph */}
      <div className="text-center  px-4">
        <p className=" text-[#222222] p-4 uppercase tracking-wide">
          We are creating fiction out of reality.
        </p>
      </div>

      {/* Testimonial Slider */}
      <div className="text-center py-4">
        <HomeSlider testimonials={testimonials} />
      </div>
    </div>
  );
}
