"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import TextFadeIn from "@/components/ui/TextFadeIn";
import { fadeIn } from "@/data/animation";
import ChevronDown from "@/components/ui/ChevronDown";
import ArrowRight from "@/components/ui/ArrowRight";

const animationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 1, ease: "easeInOut" },
  },
};

export default function ContactForm() {
  const colOne = useRef<HTMLDivElement | null>(null);
  const colTwo = useRef<HTMLDivElement | null>(null);
  const colThree = useRef<HTMLDivElement | null>(null);
  const colFour = useRef<HTMLDivElement | null>(null);
  const BtnSubmit = useRef<HTMLDivElement | null>(null);

  const isInViewOne = useInView(colOne, { once: true });
  const isInViewTwo = useInView(colTwo, { once: true });
  const isInViewThree = useInView(colThree, { once: true });
  const isInViewFour = useInView(colFour, { once: true });
  const isInViewBtnSubmit = useInView(BtnSubmit, { once: true });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("Select reason");

  const toggleModal = () => setIsOpen(!isOpen);
  const selectReason = (reason: string) => {
    setSelectedReason(reason);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-full py-[2rem] lg:py-[2rem] 2xl:py-[4rem] relative overflow-hidden">
      <div className="grid grid-cols-4 lg:grid-cols-12 w-full h-full main-container pt-[3rem] lg:pt-[2.5rem] border-t gap-[2rem]">
        <div className="pb-[4rem] sm:pb-[3rem] lg:pb-0 col-span-4 lg:col-span-3">
          <TextFadeIn
            slideUp={fadeIn}
            phrase="Contact Form"
            className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
          />
        </div>
        <div className="hidden lg:block lg:col-span-1">{/* blank */}</div>
        <div className="col-span-4 lg:col-span-8">
          <div className="flex flex-col">
            {/* col 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-[1rem] lg:gap-[2rem] pb-[3rem] lg:pb-[1rem]">
              <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem]">
                <TextFadeIn
                  slideUp={fadeIn}
                  phrase="Reason of contact"
                  className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                />
              </div>

              <div ref={colOne} className="w-full relative">
                <motion.div
                  initial="initial"
                  animate={isInViewOne ? "animate" : "initial"}
                  variants={animationVariants}
                  className="border p-6 lg:p-5 xl:p-6 2xl:p-7 cursor-pointer"
                  onClick={toggleModal}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-full overflow-hidden">
                      <span className="font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]">
                        {selectedReason}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <ChevronDown />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  }}
                  animate={{
                    clipPath: isOpen
                      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(0 0, 100% 0, 100% 0, 0 0)",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`absolute -bottom-[196%] w-full flex flex-col bg-foreground text-background ${
                    isOpen ? "block" : ""
                  }`}
                >
                  <div
                    className="border-b p-7 cursor-pointer"
                    onClick={() => selectReason("For business")}
                  >
                    <span className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]">
                      For business
                    </span>
                  </div>
                  <div
                    className="p-7 cursor-pointer"
                    onClick={() => selectReason("Contact for a job")}
                  >
                    <span className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]">
                      Contact for a job
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* col 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-[1rem] lg:gap-[2rem] pb-[3rem] lg:pb-[1rem]">
              <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem]">
                <TextFadeIn
                  slideUp={fadeIn}
                  phrase="Full name"
                  className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                />
              </div>

              <div ref={colTwo} className="w-full">
                <motion.div
                  initial="initial"
                  animate={isInViewTwo ? "animate" : "initial"}
                  variants={animationVariants}
                  className="border"
                >
                  <input
                    type="text"
                    className="w-full font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%] ring-0 outline-0 p-6 lg:p-5 xl:p-6 2xl:p-7"
                    placeholder="Full name here*"
                  />
                </motion.div>
              </div>
            </div>

            {/* col 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-[1rem] lg:gap-[2rem] pb-[3rem] lg:pb-[1rem]">
              <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem]">
                <TextFadeIn
                  slideUp={fadeIn}
                  phrase="Email address"
                  className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                />
              </div>

              <div ref={colThree} className="w-full">
                <motion.div
                  initial="initial"
                  animate={isInViewThree ? "animate" : "initial"}
                  variants={animationVariants}
                  className="border"
                >
                  <input
                    type="text"
                    className="w-full font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%] ring-0 outline-0 p-6 lg:p-5 xl:p-6 2xl:p-7"
                    placeholder="example@provider.com*"
                  />
                </motion.div>
              </div>
            </div>

            {/* col 4 */}
            <div className="flex flex-col lg:flex-row items-center gap-[1rem] lg:gap-[2rem] lg:pb-[1rem]">
              <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem]">
                <TextFadeIn
                  slideUp={fadeIn}
                  phrase="Message"
                  className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                />
              </div>

              <div ref={colFour} className="w-full">
                <motion.div
                  initial="initial"
                  animate={isInViewFour ? "animate" : "initial"}
                  variants={animationVariants}
                  className="border"
                >
                  <textarea
                    className="w-full h-[10rem] 2xl:h-[14rem] resize-none font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%] ring-0 outline-0 p-6 lg:p-5 xl:p-6 2xl:p-7"
                    placeholder="Start typing here ..."
                  ></textarea>
                </motion.div>
              </div>
            </div>

            {/* Btn Submit */}
            <div className="flex flex-col lg:flex-row items-center gap-[1rem] lg:gap-[2rem]">
              <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem]"></div>

              <div ref={BtnSubmit} className="w-full relative">
                <motion.div
                  initial="initial"
                  animate={isInViewBtnSubmit ? "animate" : "initial"}
                  variants={animationVariants}
                  className="border p-6 lg:p-5 xl:p-6 2xl:p-7 cursor-pointer bg-foreground text-background"
                  onClick={toggleModal}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-full overflow-hidden">
                      <span className="font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]">
                        Submit form
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <ArrowRight />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
