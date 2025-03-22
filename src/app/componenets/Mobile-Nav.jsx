"use client"

import { useState, useEffect, useRef } from "react"
import { X, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function MobileNav({ links }) {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

  // Close the menu when the screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  return (
    <div className="md:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        whileTap={{ scale: 0.9 }}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={navRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1,
            }}
            className="fixed top-0 right-0 bottom-0 w-[75%] max-w-sm hero-gradient z-50 p-6 shadow-xl"
            style={{
              background: "linear-gradient(to bottom, hsla(216, 84%, 9%, 1), hsla(227, 100%, 50%, 1))",
            }}
          >
            <div className="flex justify-end mb-8">
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <nav className="flex flex-col space-y-6">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-white text-lg font-medium hover:text-blue-200 transition-colors py-2 border-b border-blue-800/50"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                  }}
                  whileHover={{ x: 5, color: "rgb(191, 219, 254)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="mt-8 flex flex-col space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.button
                className="w-full py-2 border border-white rounded-md text-white hover:bg-white hover:text-blue-800 transition-colors"
                whileHover={{ backgroundColor: "white", color: "rgb(30, 64, 175)" }}
                whileTap={{ scale: 0.98 }}
              >
                Login
              </motion.button>
              <motion.button
                className="w-full py-2 bg-white text-blue-800 rounded-md hover:bg-blue-100 transition-colors"
                whileHover={{
                  backgroundColor: "rgb(219, 234, 254)",
                  y: -2,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98, y: 0, boxShadow: "none" }}
              >
                Get Started Now
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

