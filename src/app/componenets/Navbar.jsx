import ShimmerButton from '@/components/ui/shimmer-button'
import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-gray-300 h-20 px-10">
            <div>
                <h1 className='text-4xl text-yellow-800 font-bold font-serif'>A&M</h1>
            </div>

            <div className='flex justify-center items-center gap-20'>
                <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        RSVP
                    </span>
                </ShimmerButton>
                <div className=''>
                    <Menu className='w-10  h-10 ' />
                </div>
            </div>

        </div>
    )
}

export default Navbar