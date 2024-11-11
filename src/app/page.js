"use client";

import Image from "next/image";
import Navbar from "./componenets/Navbar";
import Rsvp from "./componenets/Rsvp";
import Reception from "./componenets/Reception";
import TypingAnimation from "@/components/ui/typing-animation";
import Location from "./componenets/Location";
import Gallery from "./componenets/Gallery";
import Timer from "./componenets/Timer";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import ShimmerButton from "@/components/ui/shimmer-button";
import Footer from "./componenets/Footer";
import Form from "./componenets/Form";
import { motion } from "framer-motion";

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const formRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full font-custom ">
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <Navbar scrollToForm={scrollToForm} />

      <motion.div
        className="relative w-full h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/bg1.jpg"
          alt="cover"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 z-10">
          <motion.div
            className="flex flex-col justify-center items-center h-screen"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TypingAnimation
              className="font-serif text-6xl font-extrabold text-yellow-800"
              text="Abdullahi & Majidat."
              duration={100}
            />

            <motion.div
              className="py-3 mt-5 px-10 md:px-20 flex justify-center items-center bg-gray-300 border rounded-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div>
                <h2 className="text-xs whitespace-nowrap">Friday to Sunday,</h2>
                <h2 className="text-xs whitespace-nowrap">Dec. 7th-Dec-2024</h2>
              </div>

              <div className="border-l h-[50px] my-0 mx-[10px] border-black"></div>

              <div>
                <h2 className="text-xs whitespace-nowrap">Federal Capital Territory</h2>
                <h2 className="text-xs whitespace-nowrap">Abuja</h2>
              </div>
            </motion.div>

            <Timer targetDate="2024-12-07T00:00:00" />

            <motion.div
              onClick={togglePlay}
              className="mt-6 px-4 py-2 rounded-full flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
            >
              {isPlaying ? (
                <ShimmerButton className="shadow-2xl">
                  <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                    <Pause /> <span>Pause</span>
                  </span>
                </ShimmerButton>
              ) : (
                <ShimmerButton className="shadow-2xl">
                  <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                    <Play /> <span>Play</span>
                  </span>
                </ShimmerButton>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Rsvp />
      </motion.div>

      <Reception />

      <motion.div ref={formRef} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <Form />
      </motion.div>

      <Location />

      <motion.div className="my-5 space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-center font-serif capitalize font-bold text-4xl text-yellow-800 my-2 italic whitespace-nowrap">
          epic shots 📸📷
        </h2>
        <div className="flex justify-center items-center">
          <Gallery />
        </div>
      </motion.div>

      <Footer />
    </main>
  );
}
