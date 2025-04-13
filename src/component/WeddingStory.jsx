// components/WeddingStory.js
import GallerySlider from "@/clientComponent/GallerySlider";
export default function WeddingStory({ title, date, description, images }) {
  return (
    <div className="mx-auto my-10">
      {/* Top Left Content */}
      <div className="text-left w-[90%] mx-auto mb-6">
        <h2 className="text-3xl text-[#222222] tracking-wide">{title}</h2>
        <p className="text-sm text-[#B3B3B3] mt-1">{date}</p>
        <p className="mt-4 leading-relaxed text-[#575757]">{description}</p>
      </div>

      {/* Image Slider */}
      <div className="mb-20">
        <GallerySlider testimonials={images} />
      </div>
    </div>
  );
}
