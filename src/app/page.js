"use client"

import Image from "next/image";
import Navbar from "./componenets/Navbar";
import Rsvp from "./componenets/Rsvp";
import Reception from "./componenets/Reception";
import Form from "./componenets/Form";
import TypingAnimation from "@/components/ui/typing-animation";
import Location from "./componenets/Location";
import Gallery from "./componenets/Gallery";
import Timer from "./componenets/Timer";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import ShimmerButton from "@/components/ui/shimmer-button";
import Footer from "./componenets/Footer";




export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle the play state
      
    }
  };

  return (
    <main className="w-full ">

      <audio ref={audioRef} loop preload="auto">
        <source src="/music/song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <Navbar />
      {/* hero */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/bg1.jpg"
          alt="cover"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 z-10">
          {/* Your content here */}
          <div className="flex flex-col justify-center items-center h-screen">

            <TypingAnimation
              className="font-serif text-6xl font-extrabold text-yellow-800"
              text="Abdullahi & Majidat."
            />
            {/* <div><h1 className="font-serif text-6xl font-extrabold text-yellow-800 ">Abdullahi</h1></div>
            <div><h1 className="font-serif text-6xl font-extrabold text-yellow-800 ">& Majeedat</h1></div> */}

            <div className="py-3 mt-5 px-20 flex justify-center items-center bg-gray-300 border rounded-full">
              <div>
                <h2 className="text-xs whitespace-nowrap">Friday to sunday,</h2>
                <h2 className="text-xs whitespace-nowrap">Dec. 5-12-2024</h2>
              </div>

              <div className="border-l h-[50px] my-0 mx-[10px] border-black"></div>

              <div>
                <h2 className="text-xs whitespace-nowrap">Federal capital Teritorry</h2>
                <h2 className="text-xs whitespace-nowrap">Abuja</h2>
              </div>
            </div>
            <Timer targetDate="2024-12-07T00:00:00" />

            <div
              onClick={togglePlay}
              className="mt-6  px-4 py-2 rounded-full flex items-center space-x-2"
            >
              {isPlaying ? (
                <>
                  {/* <Pause className="w-5 h-5" /> <span>Pause</span> */}

                  <ShimmerButton className="shadow-2xl">
                    <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      <Pause /> < span>Pause</span>
                    </span>
                  </ShimmerButton>
                </>
              ) : (
                <ShimmerButton className="shadow-2xl">
                  <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    <Play /> < span>Play</span>
                  </span>
                </ShimmerButton>
              )}
            </div>
          </div>

        </div>
      </div>
      {/* <Rsvp /> */}
      <div>
        <Rsvp />
        <Reception />
        <Form />
        <Location />
        <div className="my-5 space-y-4 ">
          <h2 className="text-center capitalize font-bold text-4xl text-yellow-800 my-2 italic whitespace-nowrap">epic shots 📸📷</h2>
          <div className="flex justify-center items-center">
            <Gallery />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
