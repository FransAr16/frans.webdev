"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Link from "next/link";

const CookiesModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consent: string) => {
    if (consent === "no") {
      const expires = new Date(new Date().getTime() + 24000 * 1000); // 5 minute
      Cookies.set("cookieConsent", consent, { expires });
    } else {
      Cookies.set("cookieConsent", consent, { expires: 30 }); // 30 days
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  const userCookies = Cookies.get();
  console.log(userCookies); // Akan menampilkan semua cookies yang tersimpan di browser

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed h-screen w-full z-[9999] flex justify-center items-end lg:justify-end bg-border/40 p-[1rem] sm:p-[1.5rem] lg:p-[1.5rem]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 10, duration: 1, ease: "easeInOut" },
          }}
          exit={{ opacity: 0, transition: { delay: 0.1, duration: 1, ease: "easeInOut" } }}
        >
          <motion.div
            className="bg-[#FCFCFC] p-[1rem] sm:p-[1rem] lg:p-[1.5rem] shadow-lg max-w-sm relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: {duration: .75, ease: easeInOut} }}
            // exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={() => handleConsent("no")}
              className="absolute top-0 right-0 "
            >
              <p className="relative w-[40px] h-[40px] flex items-center justify-center">
                <span className="absolute bottom-1/2 rotate-45 h-[2px] w-[18px] bg-foreground"></span>
                <span className="absolute bottom-1/2 -rotate-45 h-[2px] w-[18px] bg-foreground"></span>
              </p>
            </button>
            <h2 className="text-lg font-semibold text-foreground">
              Have a cookies!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              This website utilizes cookies to improve your browsing experience
              by remembering your preferences, optimizing performance, and
              providing personalized content.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => handleConsent("yes")}
                className="w-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Accept
              </button>
              <button className="w-full px-4 py-2 bg-gray-400 text-white hover:bg-gray-500 transition">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiesModal;
