// components/testimonials/Testimonials.js

import HomeSlider from "@/clientComponent/HomeSlider";

const testimonials = [
  {
    image: "https://images.pexels.com/photos/2100868/pexels-photo-2100868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
   
    image: "https://images.pexels.com/photos/19442466/pexels-photo-19442466/free-photo-of-beautiful-woman-in-a-traditional-indian-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
  
    image: "https://images.pexels.com/photos/10410840/pexels-photo-10410840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
 
  {
   
    image: "https://images.pexels.com/photos/29192719/pexels-photo-29192719/free-photo-of-elegant-indian-bride-in-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
