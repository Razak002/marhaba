"use client"

import ShimmerButton from '@/components/ui/shimmer-button'
import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console, log(formData)
    }
    return (
        <div className='flex flex-col justify-center items-center mt-10 p-5'>
            <h2 className='text-2xl italic font-serif font-semibold'>What are you waiting for?</h2>
            <p className='text-sm font-light whitespace-nowrap'>We would greatly appreciate if you could RSVP before 1st of December</p>

            <div className='mt-5'>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 md|:gap-4">
                    <div>
                        <label htmlFor='name' className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-yellow-800 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-yellow-800 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-yellow-800 rounded-md"
                        />
                    </div>
                    <ShimmerButton className="shadow-2xl  h-10">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            RSVP
                        </span>
                    </ShimmerButton>
                </form>
            </div>
        </div>
    )

}
export default Form