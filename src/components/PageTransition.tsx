"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const transition = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
  },

  exit: {
    clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
  },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showChildren, setShowChildren] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset state on every route change
    setShowChildren(false);

    // Simulate a delay (e.g., for animations)
    const timeout = setTimeout(() => {
      setShowChildren(true);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {!showChildren && (
          <>
            {[...Array(3)].map((_, i, index) => (
              <motion.div
                key={`layer${i}`}
                variants={transition}
                custom={index}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.08 * i,
                }}
                className="fixed top-0 left-0 w-[105%] h-[34dvh] z-[99999999] bg-foreground"
                style={{
                  top: `calc(33dvh * ${i})`,
                }}
                onAnimationComplete={() => setShowChildren(true)}
              />
            ))}
          </>
        )}
      </AnimatePresence>
      {showChildren && <>{children}</>}
    </div>
  );
}
