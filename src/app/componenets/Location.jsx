"use client"

import React, { useEffect, useState } from 'react';

const Location = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true when the component mounts on the client side
    setIsMounted(true);
  }, []);

  return (
    <div className='my-10'>
      <h2 className='flex justify-center text-center my-2 text-yellow-800 capitalize font-serif text-2xl italic font-semibold whitespace-nowrap'>
        How do I get there 🤔🤔??
      </h2>
      <div style={{ width: '100%' }}>
        {isMounted && (
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=friendship%20bwari+(mash%20wedding)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        )}
      </div>
    </div>
  );
};

export default Location;
