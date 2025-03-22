
"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

export function PartnersSection() {
    return (
        <section className="container mx-auto px-4 py-12">
            <p className="text-center text-lg font-semibold mb-6 text-gray-700">
                Join 4,000+ companies already growing
            </p>
            <Swiper
                modules={[Autoplay, FreeMode]}
                slidesPerView={5}
                spaceBetween={20}
                loop={true} // Infinite loop
                freeMode={true} // Smooth continuous movement
                autoplay={{
                    delay: 1, // Ensures no sudden jumps
                    disableOnInteraction: false, // Keeps sliding after user interaction
                }}
                speed={7000} // Slow and steady speed (increase if needed)
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    480: { slidesPerView: 1 },
                }}
            >
                <SwiperSlide><PartnerLogo name="SnapPlus" imageSrc="/images/Company.png" /></SwiperSlide>
                <SwiperSlide><PartnerLogo name="Circadee" imageSrc="/images/company1.png" /></SwiperSlide>
                <SwiperSlide><PartnerLogo name="Catalog" imageSrc="/images/company2.png" /></SwiperSlide>
                <SwiperSlide><PartnerLogo name="Quantum" imageSrc="/images/company3.png" /></SwiperSlide>
                <SwiperSlide><PartnerLogo name="InnovateX" imageSrc="/images/company4.png" /></SwiperSlide>
                {/* Duplicate slides to make the transition seamless */}
                <SwiperSlide><PartnerLogo name="SnapPlus" imageSrc="/images/Company.png" /></SwiperSlide>
                <SwiperSlide><PartnerLogo name="Circadee" imageSrc="/images/company1.png" /></SwiperSlide>
                <SwiperSlide><PartnerLogo name="Catalog" imageSrc="/images/company2.png" /></SwiperSlide>
                <SwiperSlide><PartnerLogo name="Quantum" imageSrc="/images/company3.png" /></SwiperSlide>
                <SwiperSlide><PartnerLogo name="InnovateX" imageSrc="/images/company4.png" /></SwiperSlide>
            </Swiper>
        </section>
    );
}

function PartnerLogo({ name, imageSrc }) {
    return (
        <div className="flex justify-center items-center p-4">
            <Image src={imageSrc} alt={`${name} logo`} width={120} height={70} />
        </div>
    );
}
