"use client";

import React, { useState } from "react";
import TextFadeIn from "@/components/ui/TextFadeIn";
import { fadeIn } from "@/data/animation";
import { motion } from "framer-motion";
import ChevronDown from "@/components/ui/ChevronDown";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("Select reason");

  const toggleModal = () => setIsOpen(!isOpen);
  const selectReason = (reason: string) => {
    setSelectedReason(reason);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-[150vh] py-[2rem] lg:py-[2rem] 2xl:py-[4rem]">
      <div className="grid grid-cols-12 w-full h-full main-container pt-[3rem] lg:pt-[2.5rem] border-t gap-[2rem]">
        <div className="col-span-3">
          <TextFadeIn
            slideUp={fadeIn}
            phrase="Contact Form"
            className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem] leading-[120%]"
          />
        </div>
        <div className="col-span-1">{/* blank */}</div>
        <div className="col-span-8">
          <div className="flex flex-col gap-[1rem]">
            <div className="flex items-center gap-[2rem]">
              <div className="w-[24rem]">
                <TextFadeIn
                  slideUp={fadeIn}
                  phrase="Reason of contact"
                  className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem] leading-[120%]"
                />
              </div>

              <div className="w-full relative">
                <div
                  className="border p-7 cursor-pointer"
                  onClick={toggleModal}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-full overflow-hidden">
                      <span className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem] leading-[120%]">
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
                </div>

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
                    <span className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem] leading-[120%]">
                      For business
                    </span>
                  </div>
                  <div
                    className="p-7 cursor-pointer"
                    onClick={() => selectReason("Contact for a job")}
                  >
                    <span className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem] leading-[120%]">
                      Contact for a job
                    </span>
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
