import ShimmerButton from '@/components/ui/shimmer-button';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Rsvp = () => {
  return (
    <motion.div
      className='bg-[#b4842496] p-5 md:mt-10'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='flex justify-between items-center gap-10'>
        {/* Left Section */}
        <div className='w-1/2'>
          <div className='flex flex-col'>
            <h1 className='text-2xl text-yellow-800 font-serif whitespace-nowrap font-bold'>Abdullahi & Majidat</h1>
            <div className='flex gap-5 items-center text-[#0B3D0B]'>
              <div>
                <h2 className='text-xs whitespace-nowrap'>Friday to Sunday,</h2>
                <h2 className='text-xs whitespace-nowrap'>Dec. 7-12-2024</h2>
              </div>
              <div className='border-l h-[20px] my-0 mx-[5px] border-[#2F2F2F]'></div>
              <div>
                <h2 className='text-xs whitespace-nowrap'>Federal Capital Territory</h2>
                <h2 className='text-xs whitespace-nowrap'>Abuja</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src='/images/single.png'
            alt=''
            width={200}
            height={200}
            className='rounded-lg shadow-lg'
          />
          <h2 className='italic flex justify-center items-center font-serif text-yellow-800 text-2xl ml-10'>MARHABA</h2>
        </motion.div>
      </div>

      {/* Event Details and Invitation Text */}
      <motion.div
        className='flex justify-center items-center flex-col space-y-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div>
          <h1 className='font-bold text-2xl text-yellow-800 font-serif flex justify-center text-center'>Assalamualaikum wr.wb</h1>
          <div className='text-center mt-4'>
            <p className='text-sm md:text-lg text-yellow-800 italic font-light'>
              With love and joy in our hearts, we are delighted to invite you to celebrate the union of
            </p>
            <h2 className='font-bold text-3xl text-yellow-800 italic font-serif mt-2'>Majidat & Abdullahi</h2>
            <p className='text-sm md:text-lg text-yellow-800 font-light mt-4'>
              On this special day, we seek your prayers and blessings as we embark on a beautiful journey together. Join us as we gather with loved ones to witness and celebrate this momentous occasion.
            </p>
          </div>

          <div className='text-center mt-8'>
            <h3 className='text-2xl font-bold text-yellow-800 italic font-serif mb-2'>Event Details</h3>
            <p className='text-sm md:text-lg text-yellow-800 font-light'>
              Date: 07th Dec 2024 <br />
              Time: 10am prompt <br />
              Venue: Scc Road freedom Avenue Bwari <br />
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <ShimmerButton className='shadow-2xl'>
            <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
              RSVP
            </span>
          </ShimmerButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Rsvp;
