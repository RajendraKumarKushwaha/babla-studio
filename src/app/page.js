import HomePage4 from "@/component/HomeSection";
import HomeSliderCarousel from "@/component/HomeSliderCarousel";
import WeddingCards from "@/component/WeddingCards";
import WeddingIntro from "@/component/WeddingIntro";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HomePage4/>
   <WeddingIntro/>
   <HomeSliderCarousel/>
   <WeddingCards/>
   </>
  );
}
