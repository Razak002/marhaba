"use client";
import React, { useState, useEffect } from "react";

const Timer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [hasMounted, setHasMounted] = useState(false); // To prevent SSR hydration mismatch

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setHasMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted) {
    // Prevent rendering on the server to avoid hydration mismatch
    return null;
  }

  const timerComponents = Object.keys(timeLeft).map((interval, index) => (
    <div
      key={index}
      className="bg-yellow-100 border border-yellow-800 text-yellow-800 p-2 md:p-4 rounded-md shadow-lg text-center flex flex-col items-center"
    >
      <span className="text-2xl md:text-4xl font-semibold md:font-bold">
        {timeLeft[interval]}
      </span>
      <span className="text-xs font-medium uppercase">
        {interval}
      </span>
    </div>
  ));

  return (
    <div className="flex justify-center items-center space-x-4 mt-10">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-center text-yellow-800 text-xl md:text-3xl font-semibold md:font-bold">
          Time&apos;s up!
        </span>
      )}
    </div>
  );
};

export default Timer;
