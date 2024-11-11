import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Reception = () => {
  return (
    <>
      <motion.div
        className='flex flex-col justify-center items-center space-y-5 mt-10'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='font-bold text-4xl justify-center text-center italic'>Venues</h1>

        <div className='mx-20 flex flex-col md:flex-row justify-between gap-10 items-center p-2 md:p-10'>
          {/* First Venue */}
          <motion.div
            className='hover:scale-105 transition-transform duration-300'
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src='/images/waza.jpg'
              alt='Walimat Venue'
              width={300}
              height={300}
              className='object-cover rounded-lg md:h-[360px]'
            />
            <h1 className='flex font-light text-2xl justify-center items-center'>Walimat</h1>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-xs'>Dec 7-12-2024</p>
              <p className='text-xs text-center'>Federal Capital Territory</p>
            </div>
          </motion.div>

          {/* Second Venue */}
          <motion.div
            className='hover:scale-105 transition-transform duration-300'
            whileHover={{ scale: 1.1 }}
          >
            <Link href='https://www.google.com/maps/dir//Maje-Dikko+By-Pass,+Diko+910102,+Niger'>
              <Image
                src='/images/waza.jpg'
                alt='Reception Venue'
                width={300}
                height={300}
                className='object-cover rounded-lg md:h-[360px]'
              />
            </Link>
            <h1 className='flex font-light text-2xl justify-center items-center'>Reception</h1>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-xs'>Dec 8-12-2024</p>
              <p className='text-xs whitespace-nowrap'>Mwaza Guest Inn Dikko</p>
              <Link href='https://www.google.com/maps/dir//Maje-Dikko+By-Pass,+Diko+910102,+Niger'>
                <span className='text-sm text-yellow-800 hover:underline'>Directions 🛣️🛣️</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Reception;
