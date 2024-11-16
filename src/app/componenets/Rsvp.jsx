import ShimmerButton from '@/components/ui/shimmer-button';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Rsvp = ({ scrollToForm }) => {
  return (
    <motion.div
      className='bg-[#b4842496] p-5 md:mt-10'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Main Container */}
      <div className='flex flex-col md:flex-row md:justify-between items-center gap-10'>
        {/* Left Section */}
        <div className='w-full md:w-1/2'>
          <div className='flex flex-col text-center md:text-left'>
            <h1 className='text-2xl md:text-3xl text-yellow-800 font-serif font-bold'>
              Abdullahi & Majidat
            </h1>
            <div className='flex flex-col md:flex-row gap-3 md:gap-5 items-center text-[#0B3D0B]'>
              <div>
                <h2 className='text-xs md:text-sm'>Friday to Sunday,</h2>
                <h2 className='text-xs md:text-sm'>Dec. 7-12-2024</h2>
              </div>
              <div className='hidden md:block border-l h-5 md:h-8 border-[#2F2F2F]'></div>
              <div>
                <h2 className='text-xs md:text-sm'>Federal Capital Territory</h2>
                <h2 className='text-xs md:text-sm'>Abuja</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <motion.div
          className='w-full md:w-auto flex justify-center'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src='/images/single.png'
            alt='Couple Image'
            width={200}
            height={200}
            className='rounded-lg mx-auto'
          />
          <h2 className='italic text-center justify-center font-serif text-yellow-800 text-2xl md:ml-10'>
            MARHABA
          </h2>
        </motion.div>
      </div>

      {/* Event Details and Invitation Text */}
      <motion.div
        className='flex justify-center items-center flex-col space-y-4 mt-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className='w-full max-w-md md:max-w-lg'>
          <h1 className='font-bold text-2xl md:text-3xl text-yellow-800 font-serif text-center'>
            Assalamualaikum wr.wb
          </h1>
          <div className='text-center mt-4'>
            <p className='text-sm md:text-lg text-yellow-800 italic font-light'>
              With love and joy in our hearts, we are delighted to invite you to celebrate the union of
            </p>
            <h2 className='font-bold text-3xl md:text-4xl text-yellow-800 italic font-serif mt-2'>
              Majidat & Abdullahi
            </h2>
            <p className='text-sm md:text-lg text-yellow-800 font-light mt-4'>
              On this special day, we seek your prayers and blessings as we embark on a beautiful journey together. Join us as we gather with loved ones to witness and celebrate this momentous occasion.
            </p>
          </div>

          <div className='text-center mt-8'>
            <h3 className='text-2xl md:text-3xl font-bold text-yellow-800 italic font-serif mb-2'>
              Event Details
            </h3>
            <p className='text-sm md:text-lg text-yellow-800 font-light'>
              Date: 07th Dec 2024 <br />
              Time: 10am prompt <br />
              Venue: Scc Road freedom Avenue Bwari
            </p>
          </div>

          <div className='text-center mt-8'>
            <p className='text-sm md:text-lg text-yellow-800 font-light'>
              Your presence is our greatest gift, and we look forward to sharing this joyous occasion with you.
            </p>
          </div>
        </div>

        {/* RSVP Button with Animation */}
        <motion.div
          className='w-full flex justify-center'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <ShimmerButton onClick={scrollToForm} className='shadow-2xl px-8 py-2'>
            <span className='whitespace-pre-wrap text-center text-sm md:text-lg font-medium tracking-tight text-white'>
              RSVP
            </span>
          </ShimmerButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Rsvp;
