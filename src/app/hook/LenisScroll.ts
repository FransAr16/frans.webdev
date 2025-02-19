"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

interface LeniScrollProps {
  disableScroll: boolean;
}

export default function LeniScroll({ disableScroll }: LeniScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust the duration as needed
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    const scroll = (time: number) => {
      if (!disableScroll) {
        lenis.raf(time); // Pass time to raf method
      }
      requestAnimationFrame(scroll); // Keep scrolling
    };

    requestAnimationFrame(scroll); // Start the animation loop

    return () => {
      lenis.destroy();
    };
  }, [disableScroll]);

  useEffect(() => {
    if (lenisRef.current) {
      if (disableScroll) {
        lenisRef.current.stop(); // Disable Lenis
      } else {
        lenisRef.current.start(); // Re-enable Lenis
      }
    }
  }, [disableScroll]);

  return null;
}
