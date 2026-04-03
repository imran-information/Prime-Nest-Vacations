import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Testimonials.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const testimonials = [
    {
        name: "Michael R.",
        review:
            "This property was amazing! The house was spotless, beautifully decorated, and had incredible lake views. The host was very responsive and helpful.",
    },
    {
        name: "Sarah L.",
        review:
            "Perfect vacation home for families. The kids loved the dock and water activities. Everything was exactly as described and we had a wonderful stay.",
    },
    {
        name: "David K.",
        review:
            "One of the best vacation homes we’ve stayed in. The location is great and the house had everything we needed for a relaxing weekend.",
    },
    {
        name: "Laura M.",
        review:
            "Incredible experience! The home had everything we needed and the views were breathtaking. Highly recommend for a family getaway.",
    },
    {
        name: "Michael R.",
        review:
            "This property was amazing! The house was spotless, beautifully decorated, and had incredible lake views. The host was very responsive and helpful.",
    },
    {
        name: "Sarah L.",
        review:
            "Perfect vacation home for families. The kids loved the dock and water activities. Everything was exactly as described and we had a wonderful stay.",
    },
    {
        name: "David K.",
        review:
            "One of the best vacation homes we’ve stayed in. The location is great and the house had everything we needed for a relaxing weekend.",
    },
    {
        name: "Laura M.",
        review:
            "Incredible experience! The home had everything we needed and the views were breathtaking. Highly recommend for a family getaway.",
    },
];

const Testimonials = () => {
    return (
        <section className='sm:py-0 lg:py-16 bg-gray-100'>
            <div className="container mx-auto">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {testimonials.map((item, index) => (
                        <div className="grid grid-cols-3">
                            <SwiperSlide key={index}>
                                <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition h-full flex flex-col justify-between">
                                    <div>
                                        {/* Stars */}
                                        <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                                        {/* Review */}
                                        <p className="text-gray-600 mb-4">"{item.review}"</p>
                                    </div>
                                    {/* Name */}
                                    <h4 className="font-semibold text-gray-900 mt-4">{item.name}</h4>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>

            </div>

        </section>
    );
}


export default Testimonials;