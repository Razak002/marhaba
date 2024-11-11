

"use client";

import ShimmerButton from '@/components/ui/shimmer-button';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import emailjs

const sendEmail = (values, { resetForm }) => {
    emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID // Add the user ID here
    )
        .then((result) => {
            console.log("Message sent successfully:", result.text);
            resetForm();  // Reset form after successful submission
        })
        .catch((error) => {
            console.error("Error sending message:", error);
        });
};
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call the sendEmail function with formData and resetForm
        sendEmail(formData, {
            resetForm: () => setFormData({ name: '', email: '', message: '' }) // Reset form
        });
    };
    console.log('Service ID:', process.env.NEXT_PUBLIC_EMAIL_SERVICE)

    return (
        <motion.div
            className='flex flex-col justify-center items-center mt-10 p-5'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.h2
                className='text-2xl italic font-serif font-semibold'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                What are you waiting for?
            </motion.h2>

            <motion.p
                className='text-sm font-light text-wrap mt-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                We would greatly appreciate if you could RSVP before 1st of December
            </motion.p>

            <motion.div
                className='mt-5'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
            >
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                            Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='mt-1 p-2 block w-full shadow-sm sm:text-sm border border-yellow-800 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500'
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                            Email
                        </label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='mt-1 p-2 block w-full shadow-sm sm:text-sm border border-yellow-800 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500'
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                            Message
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            rows='4'
                            value={formData.message}
                            onChange={handleChange}
                            className='mt-1 p-2 block w-full shadow-sm sm:text-sm border border-yellow-800 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500'
                        />
                    </motion.div>

                    <motion.div
                        className='mt-4 col-span-2'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                    >
                        <ShimmerButton className='shadow-2xl h-12 w-full sm:w-48'>
                            <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
                                RSVP
                            </span>
                        </ShimmerButton>
                    </motion.div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default Form;
