"use client";

import React, { useState } from "react";
import MyWork from "../MyWork";
import ModalWork from "../ModalWork";
import MyWorkMobile from "../MyWorkMobile";
import { latestWork } from "@/data/work";
import BorderLineTop from "../ui/BorderLineTop";
import TextTitleSmall from "../ui/TextTitleSmall";

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
          <div className="col-span-12 lg:col-span-10 pb-2 lg:border-none lg:pb-0">
            <TextTitleSmall text="(Recent Work)" />
          </div>
        </div>
        {/* Desktop */}
        <div className="relative items-center justify-center overflow-hidden hidden lg:flex main-container">
          <div className="relative w-full flex flex-col items-center justify-center">
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
          </div>
          <ModalWork modal={modal} projects={latestWork} />
        </div>

        {/* Mobile - Tablet */}
        <div className="relative items-center justify-center flex lg:hidden main-container pt-[3rem] sm:pt-[4rem] pb-[4rem]">
          <BorderLineTop />
          <div className="relative w-full flex flex-col sm:flex-row gap-[6rem] sm:gap-[2.5rem] items-center justify-between">
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
