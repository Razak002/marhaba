import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image' // If you use Next.js's Image component

const Gallery = () => {
    // Array of image data (can be URLs, captions, etc.)
    const images = [
        { src: '/images/img1.jpg',  alt:'weedings',  caption: 'Beautiful Landscape 1' },
        { src: '/images/img2.jpg',  alt:'weedings',  caption: 'Beautiful Landscape 2' },
        { src: '/images/img3.jpg',  alt:'weedings',  caption: 'Beautiful Landscape 3' },
        { src: '/images/img4.jpg',  alt:'weedings',  caption: 'Beautiful Landscape 4' },
        { src: '/images/img5.jpg',  alt:'weedings',  caption: 'Beautiful Landscape 5' },
        { src: '/images/img6.jpg',  alt:'weedings',  caption: 'Beautiful Landscape 5' },
        { src: '/images/img7.jpg',  alt:'weedings',  caption: 'Beautiful Landscape 5' },
        { src: '/images/img8.jpg',  alt:'weedings',  caption: 'Beautiful Landscape 5' },
        { src: '/images/img9.jpg',  alt:'weedings',  caption: 'Beautiful Landscape 5' },
        { src: '/images/img10.jpg',  alt:'weedings',caption: 'Beautiful Landscape 5' },
        { src: '/images/img11.jpg',  alt:'weedings',caption: 'Beautiful Landscape 5' },
        { src: '/images/img12.jpg',  alt:'weedings',caption: 'Beautiful Landscape 5' },
        { src: '/images/img13.jpg', alt:'weedings', caption: 'Beautiful Landscape 5' },
        { src: '/images/img14.jpg', alt:'weedings', caption: 'Beautiful Landscape 5' },
    ];

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-lg md:max-w-4xl " // Increased width
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                        <div className="p">
                            <Card className='border-none'>
                                <CardContent className="flex flex-col items-center justify-center ">
                                    {/* Displaying the image */}
                                    <div className="relative w-full h-96 rounded-2xl bg-gray-800">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            layout="fill"
                                            objectFit="contain"
                                            objectPosition="center" 
                                           className="rounded-2xl"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="hidden md:flex"> {/* Hide buttons on mobile */}
                <CarouselPrevious className="mr-2" />
                <CarouselNext />
            </div>
        </Carousel>
    )
}

export default Gallery
