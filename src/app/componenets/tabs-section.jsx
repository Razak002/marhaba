// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { cn } from "@/lib/utils"
// import { LineChart, PieChart, BarChart3, Wallet, MessageSquare } from "lucide-react"
// import Link from "next/link"
// import { ShimmerButton } from "@/components/magicui/shimmer-button"

// const tabsData = [
//     {
//         id: "market-prediction",
//         label: "Market Prediction",
//         icon: <LineChart className="mr-2 h-5 w-5" />,
//         content: {
//             // title: "Use AI insights for smarter business decisions and stay competitive.",
//             description:
//                 "Use AI insights for smarter business decisions and stay competitive..",
//             imageSrc: "/images/market.png",
//             ctaText: "Learn More",
//             ctaHref: "#",
//         },
//     },
//     {
//         id: "finance",
//         label: "Finance",
//         icon: <Wallet className="mr-2 h-5 w-5" />,
//         content: {
//             // title: "Our AI models analyze financial data for confident investments.",
//             description:
//                 "Our AI models analyze financial data for confident investments.",
//             imageSrc: "/images/finance.png",
//             ctaText: "Learn More",
//             ctaHref: "#",
//         },
//     },
//     {
//         id: "analytics",
//         label: "Data Analytics",
//         icon: <PieChart className="mr-2 h-5 w-5" />,
//         content: {
//             // title: "Transform data into analytics that enhance decisions.",
//             description:
//                 "Transform data into insights with AI analytics that enhance decisions.",
//             imageSrc: "/images/finance.png",
//             ctaText: "Discover Analytics",
//             ctaHref: "#",
//         },
//     },
//     {
//         id: "content",
//         label: "Content Generation",
//         icon: <BarChart3 className="mr-2 h-5 w-5" />,
//         content: {
//             // title: "Create quality content tailored to your brand and audience.",
//             description:
//                 "Create quality content easily with AI that knows your brand and audience.",
//             imageSrc: "/images/contents.png",
//             ctaText: "See Content Solutions",
//             ctaHref: "#",
//         },
//     },
//     {
//         id: "customer",
//         label: "Customer Support",
//         icon: <MessageSquare className="mr-2 h-5 w-5" />,
//         content: {
//             // title: "Use AI chatbots for instant, personalized customer support.",
//             description:
//                 "Use AI chatbots for instant, personalized customer support.",
//             imageSrc: "/images/chat.png",
//             ctaText: "Explore Customer AI",
//             ctaHref: "#",
//         },
//     },
// ]

// export function TabsSection() {
//     const [activeTab, setActiveTab] = useState(tabsData[0].id)
//     const [isAnimating, setIsAnimating] = useState(false)

//     const currentTab = tabsData.find((tab) => tab.id === activeTab) || tabsData[0]

//     const handleTabChange = (tabId) => {
//         if (tabId !== activeTab && !isAnimating) {
//             setActiveTab(tabId)
//             setIsAnimating(true)

//             // Reset animation state after transition completes
//             setTimeout(() => {
//                 setIsAnimating(false)
//             }, 500)
//         }
//     }

//     return (
//         <section className="container mx-auto px-4 py-16 md:py-24 overflow-visible">
//             <div className="text-center mb-12">
//                 <h2 className="text-[hsla(232,30%,19%,1)] text-4xl md:text-5xl font-bold mb-4">AI Models tailored for </h2>
//                 <h2 className="text-[hsla(232,30%,19%,1)] text-4xl md:text-5xl font-bold mb-4">your business needs</h2>
//                 <p className="text-[hsla(0,0%,51%,1)] mx-auto text-sm md:text-base">
//                     Leverage the power of AI to automate, analyze, and optimize your workflows. Our expert team creates tailored
//                     solutions for your business needs.
//                 </p>
//             </div>

//             <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
//                 {tabsData.map((tab) => (
//                     <button
//                         key={tab.id}
//                         onClick={() => handleTabChange(tab.id)}
//                         className={cn(
//                             "flex items-center px-4 py-2 rounded-md text-sm md:text-base transition-all duration-300 border relative",
//                             activeTab === tab.id
//                                 ? "bg-blue-900 text-white border-blue-900 scale-110 z-10 shadow-lg transform -translate-y-1"
//                                 : "bg-transparent text-[hsla(0,0%,51%,1)] border-slate-700 hover:border-slate-500 hover:-translate-y-0.5 hover:scale-105",
//                         )}
//                     >
//                         {tab.icon}
//                         {tab.label}
//                     </button>
//                 ))}
//             </div>

//             <div
//                 className={cn(
//                     "w-full rounded-2xl overflow-visible transition-opacity duration-500",
//                     isAnimating ? "opacity-0" : "opacity-100"
//                 )}
//                 style={{ backgroundColor: "hsla(94, 41%, 97%, 1)" }}
//                 key={activeTab}
//             >
//                 <div className="flex flex-col md:flex-row">
//                     {/* Left content section */}
//                     <div className="py-8 md:p-12 md:w-1/2 flex flex-col justify-center">
//                         <div className="text-sm font-medium text-[hsla(0,0%,51%,1)] mb-2">{currentTab.label}</div>
//                         <h3 className="text-xl md:text-3xl font-bold mb-4 text-slate-900">{currentTab.content.title}</h3>
//                         <p className="text-[hsla(232,30%,19%,1)] font-semibold md:font-bold text-3xl mb-6">{currentTab.content.description}</p>
                       
//                         <ShimmerButton
//                             background="darkBlue"
//                             href={currentTab.content.ctaHref}
//                             className="px-6 py-2  text-white rounded-md font-medium hover:bg-blue-800 transition-colors inline-block w-fit hover:shadow-lg hover:-translate-y-0.5 transform transition-transform"
//                         >
//                             {currentTab.content.ctaText}
//                         </ShimmerButton>
//                     </div>

//                     {/* Right image section */}
//                     <div className="md:w-1/2 relative min-h-[350px] h-auto overflow-visible mt-6 mb-2 flex items-center">
//                         <Image
//                             src={currentTab.content.imageSrc || "/placeholder.svg"}
//                             alt={currentTab.content.title}
//                             className="w-full h-full object-cover rounded-2xl"
//                             fill
//                             priority
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { LineChart, PieChart, BarChart3, Wallet, MessageSquare } from "lucide-react"
import Link from "next/link"
import { ShimmerButton } from "@/components/magicui/shimmer-button"

const tabsData = [
    {
        id: "market-prediction",
        label: "Market Prediction",
        icon: <LineChart className="mr-2 h-5 w-5" />,
        content: {
            // title: "Use AI insights for smarter business decisions and stay competitive.",
            description:
                "Use AI insights for smarter business decisions and stay competitive..",
            imageSrc: "/images/market.png",
            ctaText: "Learn More",
            ctaHref: "#",
        },
    },
    {
        id: "finance",
        label: "Finance",
        icon: <Wallet className="mr-2 h-5 w-5" />,
        content: {
            // title: "Our AI models analyze financial data for confident investments.",
            description:
                "Our AI models analyze financial data for confident investments.",
            imageSrc: "/images/finance.png",
            ctaText: "Learn More",
            ctaHref: "#",
        },
    },
    {
        id: "analytics",
        label: "Data Analytics",
        icon: <PieChart className="mr-2 h-5 w-5" />,
        content: {
            // title: "Transform data into analytics that enhance decisions.",
            description:
                "Transform data into insights with AI analytics that enhance decisions.",
            imageSrc: "/images/finance.png",
            ctaText: "Discover Analytics",
            ctaHref: "#",
        },
    },
    {
        id: "content",
        label: "Content Generation",
        icon: <BarChart3 className="mr-2 h-5 w-5" />,
        content: {
            // title: "Create quality content tailored to your brand and audience.",
            description:
                "Create quality content easily with AI that knows your brand and audience.",
            imageSrc: "/images/contents.png",
            ctaText: "See Content Solutions",
            ctaHref: "#",
        },
    },
    {
        id: "customer",
        label: "Customer Support",
        icon: <MessageSquare className="mr-2 h-5 w-5" />,
        content: {
            // title: "Use AI chatbots for instant, personalized customer support.",
            description:
                "Use AI chatbots for instant, personalized customer support.",
            imageSrc: "/images/chat.png",
            ctaText: "Explore Customer AI",
            ctaHref: "#",
        },
    },
]

export function TabsSection() {
    const [activeTab, setActiveTab] = useState(tabsData[0].id)
    const [isAnimating, setIsAnimating] = useState(false)

    const currentTab = tabsData.find((tab) => tab.id === activeTab) || tabsData[0]

    const handleTabChange = (tabId) => {
        if (tabId !== activeTab && !isAnimating) {
            setIsAnimating(true)
            
            // Short delay before changing tab to allow exit animation
            setTimeout(() => {
                setActiveTab(tabId)
                // Reset animation state after tab changes
                setTimeout(() => {
                    setIsAnimating(false)
                }, 300)
            }, 200)
        }
    }

    return (
        <section className="container mx-auto px-4 py-16 md:py-24 overflow-visible">
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="text-[hsla(232,30%,19%,1)] text-4xl md:text-5xl font-bold mb-4">AI Models tailored for </h2>
                <h2 className="text-[hsla(232,30%,19%,1)] text-4xl md:text-5xl font-bold mb-4">your business needs</h2>
                <p className="text-[hsla(0,0%,51%,1)] mx-auto text-sm md:text-base">
                    Leverage the power of AI to automate, analyze, and optimize your workflows. Our expert team creates tailored
                    solutions for your business needs.
                </p>
            </motion.div>

            <motion.div 
                className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {tabsData.map((tab, index) => (
                    <motion.button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={cn(
                            "flex items-center px-4 py-2 rounded-md text-sm md:text-base transition-all duration-300 border relative",
                            activeTab === tab.id
                                ? "bg-blue-900 text-white border-blue-900 shadow-lg"
                                : "bg-transparent text-[hsla(0,0%,51%,1)] border-slate-700 hover:border-slate-500"
                        )}
                        whileHover={{ 
                            scale: activeTab === tab.id ? 1.1 : 1.05, 
                            y: activeTab === tab.id ? -4 : -2 
                        }}
                        animate={{ 
                            scale: activeTab === tab.id ? 1.1 : 1,
                            y: activeTab === tab.id ? -4 : 0,
                            transition: { duration: 0.3 }
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ 
                            opacity: 1, 
                            y: 0, 
                            transition: { delay: 0.1 * index, duration: 0.5 } 
                        }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            animate={{ rotate: activeTab === tab.id ? [0, 15, 0] : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {/* {tab.icon} */}
                        </motion.span>
                        {tab.label}
                    </motion.button>
                ))}
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full rounded-2xl overflow-visible"
                    style={{ backgroundColor: "hsla(94, 41%, 97%, 1)" }}
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Left content section */}
                        <motion.div 
                            className="py-8 md:p-12 md:w-1/2 flex flex-col justify-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.div 
                                className="text-sm font-medium text-[hsla(0,0%,51%,1)] mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                            >
                                {currentTab.label}
                            </motion.div>
                            
                            <motion.p 
                                className="text-[hsla(232,30%,19%,1)] font-semibold md:font-bold text-3xl mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {currentTab.content.description}
                            </motion.p>
                           
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <ShimmerButton
                                    background="rgba(30, 58, 138, 1)"
                                    href={currentTab.content.ctaHref}
                                    className="px-6 py-2 text-white rounded-md font-medium transition-colors inline-block w-fit hover:shadow-lg hover:-translate-y-0.5 transform transition-transform"
                                >
                                    {currentTab.content.ctaText}
                                </ShimmerButton>
                            </motion.div>
                        </motion.div>

                        {/* Right image section */}
                        <motion.div 
                            className="md:w-1/2 relative min-h-[350px] h-auto overflow-visible mt-6 mb-2 flex items-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 0.7, 
                                delay: 0.3,
                                ease: "easeOut"
                            }}
                        >
                            <Image
                                src={currentTab.content.imageSrc || "/placeholder.svg"}
                                alt={currentTab.label}
                                className="w-full h-full object-cover rounded-2xl"
                                fill
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}