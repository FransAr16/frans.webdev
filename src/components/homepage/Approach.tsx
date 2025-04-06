"use client"

import React from "react";
import TextDesc from "../ui/TextDesc";

export default function Approach() {
  return (
    <div className="relative h-full w-full">
      <div className="main-container w-full h-full pb-[8rem] lg:pb-[12rem] xl:pb-[18rem] m-auto">
        <div className="relative w-full grid grid-cols-12 lg:gap-8">
          <div className="col-span-12 lg:col-span-3 pb-[2rem] lg:pb-0">
            <div className="flex flex-col">
              <TextDesc text="Breaking boundries" />
              <TextDesc text="in web developer" />
            </div>
          </div>

          <div className="hidden lg:block col-span-1"></div>

          <div className="col-span-12 lg:col-span-5 2xl:col-span-4 grid gap-[2rem] lg:gap-[4rem]">
            <div>
              <div className="pb-[2rem] lg:pb-[2rem] ">
                <TextDesc text="Designing visually appealing and efficient websites has always been a fulfilling challenge for me. While I've completed many projects independently, I enjoy the synergy that comes with collaborating with others. Team efforts often bring out unique strengths and creative solutions that push the project to new heights." />
              </div>

              <div>
                <TextDesc text="Being part of a team excites me because it allows me to grow and contribute in meaningful ways. I embrace collaboration as a way to share knowledge, exchange ideas, and create something truly impactful. Every partnership is an opportunity to learn and achieve something extraordinary." />
              </div>
            </div>
          </div>

          <div className="hidden col-span-3 2xl:col-span-4 lg:flex justify-end">
            <div>
              <TextDesc text="(02)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
