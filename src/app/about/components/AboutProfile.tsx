"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { CldImage } from "next-cloudinary";

const images = [
  "https://res.cloudinary.com/dzv6ccnjm/image/upload/v1739815531/imagesshowcase2_yw1hgq.jpg",
  "https://res.cloudinary.com/dzv6ccnjm/image/upload/v1739815551/imagesshowcase3_tdwgdp.jpg",
  "https://res.cloudinary.com/dzv6ccnjm/image/upload/v1739815748/imagesshowcase1_j2wkhk.jpg",
];

export default function AboutProfile() {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef(null);
  const isInViewImg = useInView(ref, { once: true });

  // Ganti gambar setiap 3 detik (statis)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-full lg:h-screen 3xl:h-[130vh] overflow-hidden relative">
      <div className="main-container py-[2rem] lg:py-[2.5rem]">
        <div ref={ref}>
          <motion.div
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            }}
            animate={{
              clipPath: isInViewImg
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            }}
            transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
            className="w-full h-[18rem] lg:h-full relative bg-primary"
          >
            <motion.div
              initial={{ scale: 1.5 }}
              animate={isInViewImg ? { scale: 1 } : { scale: 1.5 }}
              transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <CldImage
                src={images[currentImage]} // Menampilkan hanya satu gambar
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                alt={`image-work-${currentImage}`}
                crop={{
                  type: "auto",
                  source: true,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
