"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TypingAnimation } from "@/components/magicui/typing-animation"
import { PulsatingButton } from "@/components/magicui/pulsating-button"

export function HeroSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <section 
            ref={ref}
            className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center"
        >
            <motion.div
                className="relative w-full max-w-3xl"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.p
                    className="text-blue-500 font-medium text-sm md:text-base mb-2"
                    variants={itemVariants}
                >
                    Leverage on Automation
                </motion.p>
                
                <motion.h1
                    className="text-3xl md:text-5xl font-bold mb-6 p-6 md:p-8"
                    variants={itemVariants}
                >
                    AI Models for
                    <br />
                    <TypingAnimation>
                        Business Solutions
                    </TypingAnimation>
                </motion.h1>
            </motion.div>
            
            <motion.p
                className="text-slate-300 max-w-2xl mb-8 text-sm md:text-base"
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
                Leverage the power of AI to automate, analyze, and optimize your workflows. Our
                specialized models are designed to fit different business needs
            </motion.p>
            
            <motion.div
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
                <Link
                    href="#"
                    className="px-6 py-3 rounded-md font-medium transform hover:scale-105"
                >
                    <PulsatingButton className='text-blue-800 font-semibold'>
                        Get Started Now
                    </PulsatingButton>
                </Link>
            </motion.div>
        </section>
    )
}