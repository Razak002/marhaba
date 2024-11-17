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

        const templateParams = {
            to_name: formData.name,
            from_name: 'maSH',
            message: formData.message,
        };

        emailjs
            .send(
                'service_893eb5h',
                'template_ig5jlfg',
                templateParams,
                'AgQkdmtxtoHoKRahc'
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
            className='flex flex-col justify-center items-center mt-6 p-4 sm:p-6 md:p-10 lg:p-16'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.h2
                className='text-xl sm:text-2xl md:text-3xl italic font-serif font-semibold text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                What are you waiting for?
            </motion.h2>

            <motion.p
                className='text-xs sm:text-sm md:text-lg font-light text-wrap mt-2 text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Don&apos;t forget to RSVP by December 7th. We&apos;d love to have you there!
            </motion.p>

            <motion.div
                className='mt-5 w-full max-w-md'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
            >
                <form ref={formRef} onSubmit={sendEmail} className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
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
                        className='col-span-1 sm:col-span-2'
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
                        className='mt-4 col-span-1 sm:col-span-2 flex justify-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                    >
                        <ShimmerButton type='submit' className='shadow-2xl w-full sm:w-auto'>
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
