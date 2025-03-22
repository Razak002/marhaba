

// import Image from "next/image"
// import { TabsSection } from "../app/componenets/tabs-section"
// import { HeroSection } from "../app/componenets/hero-section"
// import { PartnersSection } from "../app/componenets/partners-section"

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <div className="hero-gradient text-white">
//         <header className="container mx-auto py-4 px-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <Image src="/images/Content.png" alt="Logo" width={40} height={40} className="mr-2" />
//           </div>
//           <nav className="hidden md:flex space-x-6 text-sm">
//             <a href="#" className="hover:text-blue-400 transition-colors">
//               Models
//             </a>
//             <a href="#" className="hover:text-blue-400 transition-colors">
//               Pricing
//             </a>
//             <a href="#" className="hover:text-blue-400 transition-colors">
//               About Us
//             </a>
//             <a href="#" className="hover:text-blue-400 transition-colors">
//               Contact Us
//             </a>
//             <a href="#" className="hover:text-blue-400 transition-colors">
//               Custom Models
//             </a>
//           </nav>
//           <div className="flex space-x-3">
//             <button className="px-4 py-1 border border-white rounded-md text-sm hover:bg-white hover:text-slate-950 transition-colors">
//               Login
//             </button>
//             <button className="px-4 py-1 bg-white text-blue-800 rounded-md text-sm hover:bg-blue-100 transition-colors">
//               Get Started Now
//             </button>
//           </div>
//         </header>

//         <HeroSection />
//       </div>

//       <div className="bg-white text-slate-900">
//         <PartnersSection />
//         <TabsSection />
//       </div>
//     </main>
//   )
// }
'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { TabsSection } from "../app/componenets/tabs-section"
import { HeroSection } from "../app/componenets/hero-section"
import { PartnersSection } from "../app/componenets/partners-section"
import { MobileNav } from "../app/componenets/Mobile-Nav"

// Custom hook for scroll animations
function useScrollAnimation(threshold = 0.2) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })
  const controls = useAnimation()
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])
  
  return { ref, controls }
}

const navLinks = [
  { href: "#", label: "Models" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Contact Us" },
  { href: "#", label: "Custom Models" },
]

export default function Home() {
  const headerAnimation = useScrollAnimation()
  const contentAnimation = useScrollAnimation(0.1)
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
  
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <main className="min-h-screen">
      <div className="hero-gradient text-white">
        <motion.header 
          ref={headerAnimation.ref}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={headerAnimation.controls}
          className="container mx-auto py-4 px-4 flex justify-between items-center"
        >
          <div className="flex items-center">
            <Image src="/images/Content.png" alt="Logo" width={40} height={40} className="mr-2" />
          </div>
          
          <motion.nav 
            variants={staggerContainerVariants}
            className="hidden md:flex space-x-6 text-sm"
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link.label}
                href={link.href}
                variants={fadeInUpVariants}
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
          
          <motion.div 
            variants={staggerContainerVariants}
            className="hidden md:flex space-x-3"
          >
            <motion.button 
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-1 border border-white rounded-md text-sm hover:bg-white hover:text-slate-950 transition-colors"
            >
              Login
            </motion.button>
            <motion.button 
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-1 bg-white text-[hsla(232,30%,19%,1)] rounded-md text-sm hover:bg-blue-100 transition-colors"
            >
              Get Started Now
            </motion.button>
          </motion.div>
          
          <MobileNav links={navLinks} />
        </motion.header>
        
        <HeroSection />
      </div>
      
      <div className="bg-white text-slate-900">
        <motion.div
          ref={contentAnimation.ref}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={contentAnimation.controls}
        >
          <PartnersSection />
        </motion.div>
        
        <motion.div
          ref={contentAnimation.ref}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={contentAnimation.controls}
        >
          <TabsSection />
        </motion.div>
      </div>
    </main>
  )
}
