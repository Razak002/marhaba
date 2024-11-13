"use client";

import ShimmerButton from '@/components/ui/shimmer-button';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const Form = () => {
    const formRef = useRef();
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_893eb5h', // Your EmailJS service ID
                'template_ig5jlfg', // Your EmailJS template ID
                formRef.current,
                'AgQkdmtxtoHoKRahc' // Your EmailJS public key
            )
            .then(
                () => {
                    toast.success('We Cant Wait To Have you!');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    toast.error('Failed to send message. Please try again.');
                    console.error('Failed to send message:', error.text);
                }
            );
    };

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
                We would greatly appreciate if you could RSVP before 1st of December.
            </motion.p>

            <motion.div
                className='mt-5'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
            >
                <form ref={formRef} onSubmit={sendEmail} className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2'>
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
                        <ShimmerButton type='submit' className='shadow-2xl h-12 w-full sm:w-48'>
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
