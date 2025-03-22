"use client";
import { useEffect } from "react";

export function useInitAnimations() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll("[data-aos]");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight * 0.9) {
          element.classList.add("aos-animate");
        }
      });
    };

    // Initial check on load
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener("scroll", animateOnScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);
}
