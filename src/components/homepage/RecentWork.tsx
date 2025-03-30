"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import MyWork from "../MyWork";
import ModalWork from "../ModalWork";
import MyWorkMobile from "../MyWorkMobile";
import { latestWork } from "@/data/work";
import { revealsText } from "@/data/animation";
import TextSlideUp from "../ui/TextSlideUp";
import BorderLineTop from "../ui/BorderLineTop";

export default function RecentWork() {
  const [modal, setModal] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  }); // Mengelola status modal

  return (
    <div className="h-full lg:min-h-screen w-full">
      <div className="flex flex-col relative">
        <div className="w-full grid grid-cols-12 pt-5 lg:pb-[2.5rem] 2xl:pb-[3rem] main-container">
          <div className="hidden lg:block lg:col-span-2">{/* blank */}</div>
          <div className="col-span-12 lg:col-span-10     pb-2 lg:border-none lg:pb-0">
            <TextSlideUp
              text="(Recent Work)"
              animate={revealsText}
              className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.3rem]"
            />
          </div>
        </div>
        {/* Desktop */}
        <div className="relative items-center justify-center overflow-hidden hidden lg:flex main-container">
          <motion.div className="relative w-full flex flex-col items-center justify-center      ">
            <BorderLineTop />
            {latestWork
              .slice(0, 4)
              .reverse()
              .map((project, index) => {
                return (
                  <MyWork
                    key={index}
                    index={index}
                    title={project.title}
                    category={project.category}
                    setModal={setModal}
                  />
                );
              })}
          </motion.div>
          <ModalWork modal={modal} projects={latestWork} />
        </div>

        {/* Mobile */}
        <div className="relative items-center justify-center flex lg:hidden main-container py-[4rem]">
          <div className="w-full flex flex-col sm:flex-row gap-[6rem] gap-x-[1.2rem] items-center justify-center ">
            {latestWork
              .slice(2, 4)
              .reverse()
              .map((project, index) => (
                <MyWorkMobile
                  key={project.id}
                  index={index}
                  title={project.title}
                  category={project.category}
                  published={project.published}
                  images={project.images}
                  imgClassName=""
                  bgColor={project.bgColor}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
