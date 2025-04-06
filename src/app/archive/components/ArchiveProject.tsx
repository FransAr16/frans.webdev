"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { myArchive, projectNav } from "@/data/work";
import { animationVariants, revealsText } from "@/data/animation";
import BorderLineTop from "@/components/ui/BorderLineTop";
import ArchiveListTiled from "./ArchiveListTiled";
import CursorModal from "./CursorModal";
import TextTitleSmall from "@/components/ui/TextTitleSmall";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import MyArchiveMobile from "./MyArchiveMobile";

export default function ArchiveProject() {
  const [visible, setVisible] = useState(true);
  const [activeLayout, setActiveLayout] = useState(1);
  const [modal, setModal] = useState({ active: false, index: 0 });
  const Ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(Ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleLayoutChange = (layout: number) => {
    if (layout !== activeLayout && layout >= 1 && layout <= 4) {
      setVisible(false);
      setTimeout(() => {
        setActiveLayout(layout);
        setVisible(true);
      }, 800);
    }
  };

  const renderProjects = (start: number, end: number) => (
    <motion.div>
      <motion.div
        initial={visible ? "hidden" : "exit"}
        animate={visible ? "visible" : "exit"}
        variants={animationVariants}
        className="hidden relative w-full lg:flex flex-col items-center justify-center"
      >
        <BorderLineTop />
        {myArchive
          .filter((project) => project.id >= start && project.id <= end)
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
        <CursorModal modal={modal} />
      </motion.div>
    </motion.div>
  );

  const renderProjectsMobile = (start: number, end: number) => (
    <motion.div>
      <motion.div
        initial={visible ? "hidden" : "exit"}
        animate={visible ? "visible" : "exit"}
        variants={animationVariants}
        className="flex relative w-full lg:hidden flex-col items-center justify-center"
      >
        <BorderLineTop />
        {myArchive
          .filter((project) => project.id >= start && project.id <= end)
          .map((project, index) => (
            <MyArchiveMobile
              key={project.id}
              index={index}
              title={project.title}
              category={project.category}
              published={project.published}
              location={project.location}
              link={project.link}
            />
          ))}
        <CursorModal modal={modal} />
      </motion.div>
    </motion.div>
  );

  return (
    <div className="flex flex-col w-full h-full py-[2rem] lg:py-[2rem] 2xl:py-[4rem]">
      <div className="flex flex-col w-full h-full main-container">
        {/* Desktop */}
        <div className="relative items-center justify-center overflow-hidden hidden lg:flex flex-col lg:py-[2rem] 2xl:py-[4rem]">
          <div className="w-full flex items-center work-list-container">
            {projectNav.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-12 w-full items-center"
              >
                <div className="col-span-5">
                  <TextTitleSmall
                    text={project.navClient}
                    className="opacity-30"
                  />
                </div>
                <div className="col-span-3">
                  <TextTitleSmall
                    text={project.navLocation}
                    className="opacity-30"
                  />
                </div>
                <div className="col-span-2">
                  <TextTitleSmall
                    text={project.navCategory}
                    className="opacity-30"
                  />
                </div>
                <div className="col-span-2 flex items-center justify-end">
                  <TextTitleSmall
                    text={project.navPublished}
                    className="opacity-30"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="relative w-full h-full items-center justify-center flex flex-col lg:hidden">
          <div className="w-full flex items-center pb-9 sm:pb-12">
            {projectNav.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-12 w-full items-center"
              >
                <div className="col-span-6">
                  <TextTitleSmall
                    text={project.navCategory}
                    className="opacity-30"
                  />
                </div>
                <div className="col-span-3">
                  <TextTitleSmall
                    text={project.navLocation}
                    className="opacity-30"
                  />
                </div>
                <div className="col-span-3 flex items-center justify-end">
                  <TextTitleSmall
                    text={project.navPublished}
                    className="opacity-30"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeLayout === 1 && renderProjects(0, 10)}
        {activeLayout === 2 && renderProjects(11, 20)}
        {activeLayout === 3 && renderProjects(21, 30)}
        {activeLayout === 4 && renderProjects(31, 35)}

        {activeLayout === 1 && renderProjectsMobile(0, 10)}
        {activeLayout === 2 && renderProjectsMobile(11, 20)}
        {activeLayout === 3 && renderProjectsMobile(21, 30)}
        {activeLayout === 4 && renderProjectsMobile(31, 35)}

        {/* CategoryNav */}
        <div
          ref={Ref}
          className="relative w-full flex work-list-container py-[4rem] pb-[2rem]"
        >
          <div className="w-full items-center justify-between flex">
            <div
              onClick={() => handleLayoutChange(activeLayout - 1)}
              className={`cursor-pointer ${
                activeLayout === 1 ? "opacity-30 pointer-events-none" : ""
              }`}
            >
              <div className="flex items-center md:gap-2 overflow-hidden">
                <motion.div
                  variants={revealsText}
                  initial="initial"
                  animate={hasAnimated ? "open" : "closed"}
                >
                  <IoIosArrowBack className="text-[4.8vw] sm:text-[2.8vw] md:text-[2.3vw] lg:text-[1.35vw] 2xl:text-[1.2vw]" />
                </motion.div>
                <TextTitleSmall text="Prev" className="ml-[4px] lg:ml-[6px]" />
              </div>
            </div>
            <div
              onClick={() => handleLayoutChange(activeLayout + 1)}
              className={`cursor-pointer ${
                activeLayout === 4 ? "opacity-30 pointer-events-none" : ""
              }`}
            >
              <div className="flex items-center md:gap-2 overflow-hidden">
                <TextTitleSmall text="Next" />
                <motion.div
                  variants={revealsText}
                  initial="initial"
                  animate={hasAnimated ? "open" : "closed"}
                >
                  <IoIosArrowForward className="text-[4.8vw] sm:text-[2.8vw] md:text-[2.3vw] lg:text-[1.35vw] 2xl:text-[1.2vw]" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
