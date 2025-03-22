"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function PartnersSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="container mx-auto px- py-12 overflow-hidden">
            <p className="text-center text-[hsla(232,30%,19%,1)] text-lg font-semibold mb-6">
                Join 4,000+ companies already growing
            </p>
            {/* <Slider {...settings} className="mx-auto max-w-6xl"> */}
            <div className="flex justify-center items-center gap-5">
                <PartnerLogo name="SnapPlus" imageSrc="/Company.png" />
                <PartnerLogo name="Circadee" imageSrc="/company1.png" />
                <PartnerLogo name="Catalog" imageSrc="/company2.png" />
                <PartnerLogo name="Quantum" imageSrc="/company3.png" />
                <PartnerLogo name="InnovateX" imageSrc="/company4.png" />
            </div>
            {/* </Slider> */}
        </section>
    );
}

function PartnerLogo({ name, imageSrc }) {
    return (
        <div className="flex justify-center items-center p-4">
            <Image src={imageSrc} alt={`${name} logo`} width={120} height={70} loader={({ src }) => src} />
        </div>
    );
}
