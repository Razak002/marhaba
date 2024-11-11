// Navbar.jsx

"use client";  // Ensures this component is rendered on the client side

import ShimmerButton from '@/components/ui/shimmer-button';
import { Menu } from 'lucide-react';
import React from 'react';

const Navbar = ({ scrollToForm }) => {
    return (
        <div className="flex justify-between items-center bg-gray-300 h-20 px-10">
            <div>
                <h1 className="text-4xl text-yellow-800 font-bold font-serif">A&M</h1>
            </div>
            <div className="flex justify-center items-center">
                <ShimmerButton onClick={scrollToForm}className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        RSVP
                    </span>
                </ShimmerButton>
            </div>
        </div>
    );
};

export default Navbar;

