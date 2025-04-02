"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { myWork, projectNav } from "@/data/work";
import MyWorkMobile from "@/components/MyWorkMobile";
import { animationVariants, revealsText } from "@/data/animation";
import TextSlideUp from "@/components/ui/TextSlideUp";
import WorkModalWork from "./WorkModalWork";
import WorkLabelModal from "./WorkLabelModal";
import WorkCategoryBtn from "./WorkCategoryBtn";
import WorkListTiled from "./WorkListTiled";
import WorkListGrid from "./WorkListGrid";
import Button from "@/components/ui/Button";
import BorderLineTop from "@/components/ui/BorderLineTop";

export default function WorkProject() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(true);
  const [activeLayout, setActiveLayout] = useState("Tiled");
  const [modal, setModal] = useState({ active: false, index: 0 });

  const filteredProjects = myWork.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  const handleCategoryChange = (category: string) => {
    if (category !== activeCategory) {
      setVisible(false);
      setTimeout(() => {
        setActiveCategory(category);
        setVisible(true);
      }, 800);
    }
  };

  const handleLayoutChange = (layout: string) => {
    if (layout !== activeLayout) {
      setVisible(false);
      setTimeout(() => {
        setActiveLayout(layout);
        setVisible(true);
      }, 800);
    }
  };

  return (
    <div className="flex flex-col w-full h-full py-[2rem] lg:py-[2rem] 2xl:py-[4rem]">
      <div className="flex flex-col w-full h-full main-container">
        {/* CategoryNav */}
        <div className="relative w-full flex flex-col">
          <div>
            <BorderLineTop />
          </div>
          <div className="w-full flex items-center justify-start lg:justify-between pt-[2rem] lg:pt-[2rem] 2xl:pt-[4rem]">
            <div className="flex flex-wrap gap-4 lg:gap-10 2xl:gap-12 items-center">
              <div onClick={() => handleCategoryChange("All")}>
                <WorkCategoryBtn
                  animate={revealsText}
                  text="All"
                  isActive={activeCategory === "All"}
                  className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                />
              </div>
              <div onClick={() => handleCategoryChange("Design")}>
                <WorkCategoryBtn
                  animate={revealsText}
                  text="Design"
                  isActive={activeCategory === "Design"}
                  className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                />
              </div>
              <div onClick={() => handleCategoryChange("Development")}>
                <WorkCategoryBtn
                  animate={revealsText}
                  text="Development"
                  isActive={activeCategory === "Development"}
                  className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                />
              </div>
            </div>
            <div className="items-center hidden lg:flex gap-4 lg:gap-10 2xl:gap-12">
              <div onClick={() => handleLayoutChange("Tiled")}>
                <WorkCategoryBtn
                  animate={revealsText}
                  text="Tiled"
                  isActive={activeLayout === "Tiled"}
                  className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                />
              </div>
              <div onClick={() => handleLayoutChange("Grid")}>
                <WorkCategoryBtn
                  animate={revealsText}
                  text="Grid"
                  isActive={activeLayout === "Grid"}
                  className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className=" relative w-full h-full items-center justify-center flex lg:hidden py-[5rem] sm:py-[5rem] md:py-[6rem]">
          <motion.div
            className="w-full grid sm:grid-cols-2 gap-y-[6rem] sm:gap-x-[1.4rem] items-center justify-center"
            initial={visible ? "hidden" : "exit"}
            animate={visible ? "visible" : "exit"}
            variants={animationVariants}
          >
            {filteredProjects
              .filter((project) => project.id >= 0 && project.id <= 10)
              .reverse()
              .map((project, index) => (
                <motion.div key={project.id}>
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
                </motion.div>
              ))}
          </motion.div>
        </div>
        {/* Desktop */}
        {/* List Tiled */}
        {activeLayout === "Tiled" && (
          <motion.div
            initial={visible ? "hidden" : "exit"}
            animate={visible ? "visible" : "exit"}
            variants={animationVariants}
            className="relative items-center justify-center overflow-hidden hidden lg:flex flex-col lg:pb-[6rem] lg:pt-[4rem] 2xl:pt-[5rem] 2xl:pb-[7rem]"
          >
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
            <motion.div
              initial={visible ? "hidden" : "exit"}
              animate={visible ? "visible" : "exit"}
              variants={animationVariants}
              className="relative w-full flex flex-col items-center justify-center"
            >
              <BorderLineTop />
              {filteredProjects
                .filter((project) => project.id >= 0 && project.id <= 10)
                .reverse()
                .map((project, index) => (
                  <WorkListTiled
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
            <WorkModalWork
              activeCategory={activeCategory}
              modal={modal}
              projects={myWork}
            />
          </motion.div>
        )}
        {/* Desktop */}
        {/* List Grid */}
        {activeLayout === "Grid" && (
          <motion.div
            initial={visible ? "hidden" : "exit"}
            animate={visible ? "visible" : "exit"}
            variants={animationVariants}
            className="relative hidden lg:flex w-full h-full items-center justify-center lg:py-[6rem] 2xl:py-[7rem]"
          >
            <div className="w-full grid lg:grid-cols-2 lg:gap-y-[9rem] xl:gap-y-[10rem] 2xl:gap-y-[11rem] lg:gap-x-[4rem] xl:gap-x-[5rem] 2xl:gap-x-[6rem] items-center justify-center">
              {filteredProjects
                .filter((project) => project.id >= 0 && project.id <= 10)
                .reverse()
                .map((project) => (
                  <WorkListGrid
                    key={project.id}
                    index={project.id}
                    title={project.title}
                    category={project.category}
                    published={project.published}
                    images={project.images}
                    link={project.link}
                    imgClassName=""
                    bgColor={project.bgColor}
                    setModal={setModal}
                    activeCategory={activeCategory}
                    projects={myWork}
                  />
                ))}
            </div>
            <WorkLabelModal modal={modal} projects={myWork} />
          </motion.div>
        )}

        {/* Link to Archive */}
        <div>
          <div>
            <TextSlideUp
              text="See more work?"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
            />
          </div>

          <div className="flex">
            <Button
              href="/archive"
              slideUp={revealsText}
              text="Archive"
              underline="h-[2px] xl:h-[3.5px]"
              className="font-medium tracking-[-0.04em] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
