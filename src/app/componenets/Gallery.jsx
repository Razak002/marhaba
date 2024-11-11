"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image'; // If you use Next.js's Image component
import { motion } from 'framer-motion';

const Gallery = () => {
  // Array of image data (can be URLs, captions, etc.)
  const images = [
    { src: '/images/img1.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img2.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img3.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img4.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img5.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img6.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img7.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img8.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img9.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img10.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img11.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img12.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img13.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
    { src: '/images/img14.jpg', alt: 'wedding', caption: 'Alhamdulilah ❤️' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full flex justify-center items-center"
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-lg md:max-w-5xl" // Increased width for larger images
      >
        <CarouselContent>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="md:basis-1/4" // Adjust the width of each image on larger screens
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="p-2">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center justify-center">
                    {/* Displaying the image */}
                    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden group">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Caption */}
                    <p className="mt-2 text-center text-sm font-mono ❤️ text-gray-800 font-medium">{image.caption}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </CarouselContent>

        <div className="hidden md:flex justify-between absolute inset-x-0 bottom-5 z-10">
          <CarouselPrevious className="text-white bg-black rounded-full p-2 shadow-md hover:bg-gray-700" />
          <CarouselNext className="text-white bg-black rounded-full p-2 shadow-md hover:bg-gray-700" />
        </div>
      </Carousel>
    </motion.div>
  );
};

export default Gallery;
