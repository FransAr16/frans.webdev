"use client";

import React from "react";
import { motion } from "motion/react";
import { dataProjects } from "@/data/playground";
import PlaygroundMobile from "./PlaygroundMobile";

export default function PlaygroundContentMobile() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <ParallaxProjectMobile />
    </div>
  );
}

function ParallaxProjectMobile() {
  return (
    <div className="relative main-container py-[2rem] lg:py-[2rem] 2xl:py-[4rem] z-[4] overflow-hidden">
      <div className="absolute top-0 left-0 bg-background w-full h-[10vh]"></div>

      <div className=" relative w-full h-full items-center justify-center flex lg:hidden pb-[6rem]">
        <div className="w-full grid sm:grid-cols-2 gap-y-[6rem] sm:gap-x-[1.4rem] items-center justify-center">
          {dataProjects
            .filter((project) => project.id >= 0 && project.id <= 10)
            .map((project, index) => (
              <motion.div key={project.id}>
                <PlaygroundMobile
                  key={project.id}
                  index={index}
                  title={project.title}
                  description={project.description}
                  number={project.number}
                  images={project.images}
                  bgColor={project.bgColor}
                />
              </motion.div>
            ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 bg-background w-full h-[10vh]"></div>
    </div>
  );
}
