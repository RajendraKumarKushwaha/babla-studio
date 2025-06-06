'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HomePage4.css'; // import your styles here

const slides = [
    {
        title: 'Desert',
        subtitle: 'Lonliness',
        outline: 'Folio',
        image: 'https://images.pexels.com/photos/1295946/pexels-photo-1295946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // layer: 'https://imgpanda.com/upload/ib/QTBKjzDqxD.png',
    },
    {
        title: 'Desert',
        subtitle: 'Lonliness',
        outline: 'Folio',
        image: 'https://images.pexels.com/photos/1491282/pexels-photo-1491282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // layer: 'https://imgpanda.com/upload/ib/QTBKjzDqxD.png',
    },
    {
        title: 'Desert',
        subtitle: 'Lonliness',
        outline: 'Folio',
        image: 'https://cdn.pixabay.com/photo/2022/01/30/05/50/couple-6979884_1280.jpg',
        // layer: 'https://imgpanda.com/upload/ib/QTBKjzDqxD.png',
    },
];

export default function HomePage4() {
    return (
        <section className="creative-photography--slider  w-[90%] md:w-[68vw] lg:w-[68vw]  theme1">
            <Swiper
                loop
                parallax
                autoplay={{ delay: 5000 }}
                effect="fade"
                autoHeight
                speed={2500}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Autoplay, Parallax, Pagination, Navigation, EffectFade]}
                className="photography-swiper--slider"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="photography-slider--item">
                            {/* <div className="photography-slider--layer w-full h-[20vh] object-cover object-top absolute top-0 left-0 z-10" data-swiper-parallax="-200">
                <img src={slide.layer} alt="Layer" className="w-full h-[20vh] object-cover object-top absolute top-0 left-0 z-10" />
              </div> */}
                            <div
                                className="absolute top-0 left-0 z-10"
                                style={{
                                    width: '50%',
                                    height: '50vh',
                                    clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)',
                                    overflow: 'hidden'
                                }}
                                data-swiper-parallax="-200"
                            >
                                {/* <img
                                    src={slide.layer}
                                    alt="Layer"
                                    className="w-full h-full object-cover object-top opacity-50"
                                /> */}
                            </div>


                            <div className="photography-slider--content">
                                <div className="photography-slider--image ">
                                    <img src={slide.image} alt="Main" className='object-cover object-top' />
                                    <div className="photography-slider--inner">
                                        {/* <div className="photography-heading">
                      <div className="photography-item--inner">
                        <h1 className="photography-item--title">
                          {slide.title} <br />
                          <span>{slide.subtitle}</span>
                        </h1>
                        <h1 className="photography-item--title-outline">{slide.outline}</h1>
                      </div>
                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Dots */}
                <div className="creative-swiper--dots">
                    <div className="swiper-pagination"></div>
                </div>

                {/* Sidebar */}
                {/* <div className="creative-photography--sidebar">
                    <ul>
                        <li><a href="#">Fb</a></li>
                        <li><a href="#">In</a></li>
                        <li><a href="#">Tw</a></li>
                    </ul>
                </div> */}

                {/* Navigation Arrows */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
        </section>
    );
}
