"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { myArchive, projectNav } from "@/data/work";
import { revealsText } from "@/data/animation";
import TextSlideUp from "@/components/ui/TextSlideUp";
import BorderLineTop from "@/components/ui/BorderLineTop";
import ArchiveListTiled from "./ArchiveListTiled";
import CursorModal from "./CursorModal";
import MyArchiveMobile from "./MyArchiveMobile";

export default function ArchiveProject() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="flex flex-col w-full h-full py-[2rem] lg:py-[2rem] 2xl:py-[4rem]">
      <div className="flex flex-col w-full h-full main-container">
        {/* Border Line */}
        <div className="relative w-full flex">
          <div>
            <BorderLineTop />
          </div>
        </div>

        {/* Mobile */}
        <div className="relative w-full h-full items-center justify-center flex flex-col lg:hidden py-[5rem] sm:py-[5rem] md:py-[6rem]">
          <div className="w-full flex items-center pb-9 sm:pb-12">
            {projectNav.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-12 w-full items-center"
              >
                <div className="col-span-6">
                  <TextSlideUp
                    text={project.navCategory}
                    animate={revealsText}
                    className="font-normal text-[#a3a3a3] mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
                <div className="col-span-3">
                  <TextSlideUp
                    text={project.navLocation}
                    animate={revealsText}
                    className="font-normal text-[#a3a3a3] mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
                <div className="col-span-3 text-end">
                  <TextSlideUp
                    text={project.navPublished}
                    animate={revealsText}
                    className="font-normal text-[#a3a3a3] mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.div className="relative w-full grid">
            <BorderLineTop />
            {myArchive
              .slice()
              .reverse()
              .map((project, index) => (
                <motion.div key={project.id}>
                  <MyArchiveMobile
                    index={index}
                    title={project.title}
                    category={project.category}
                    published={project.published}
                    location={project.location}
                    link={project.link}
                  />
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* Desktop */}
        <motion.div className="relative items-center justify-center overflow-hidden hidden lg:flex flex-col lg:pb-[6rem] lg:pt-[4rem] 2xl:pt-[5rem] 2xl:pb-[7rem]">
          <div className="w-full flex items-center work-list-container lg:pb-9 2xl:pb-12">
            {projectNav.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-12 w-full items-center"
              >
                <div className="col-span-5">
                  <TextSlideUp
                    text={project.navClient}
                    animate={revealsText}
                    className="font-normal text-[#a3a3a3] mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
                <div className="col-span-3">
                  <TextSlideUp
                    text={project.navLocation}
                    animate={revealsText}
                    className="font-normal text-[#a3a3a3] mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
                <div className="col-span-2">
                  <TextSlideUp
                    text={project.navCategory}
                    animate={revealsText}
                    className="font-normal text-[#a3a3a3] mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
                <div className="col-span-2 text-end">
                  <TextSlideUp
                    text={project.navPublished}
                    animate={revealsText}
                    className="font-normal text-[#a3a3a3] mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
              </div>
            ))}
          </div>
          <motion.div className="relative w-full flex flex-col items-center justify-center">
            <BorderLineTop />
            {myArchive
              .slice()
              .reverse()
              .map((project, index) => (
                <ArchiveListTiled
                  key={project.id}
                  index={index}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  published={project.published}
                  link={project.link}
                  setModal={setModal}
                />
              ))}
          </motion.div>
          <CursorModal modal={modal} />
        </motion.div>
      </div>
    </div>
  );
}
