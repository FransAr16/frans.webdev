"use client"

import React from 'react'
import { revealsText } from '@/data/animation'
import TextSlideUp from '../ui/TextSlideUp'
import Button from '../ui/Button'

export default function WorkTogether() {
  return (
    <div className="relative h-full w-full pt-[1rem] pb-[3rem] 2xl:pt-[2rem] 2xl:pb-[10rem] border-t main-container">
      <div className="grid grid-cols-12 w-full justify-between gap-[1rem] lg:gap-[1.5rem]">
        <div className="flex justify-center lg:justify-start col-span-12 lg:col-span-5 3xl:col-span-4">
          <TextSlideUp
            text="Together, we can elevate your brand through cutting-edge and visually stunning interfaces."
            animate={revealsText}
            className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
          />
        </div>

        <div className="col-span-12 lg:col-span-3 3xl:col-span-4"></div>

        <div className="flex flex-col gap-1 col-span-12 lg:col-span-4 pt-[3rem] lg:pt-0">
          <div>
            <TextSlideUp
              text="Ready to Rock?"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
            />
          </div>

          <div className="flex">
            <Button
              href="/contact"
              slideUp={revealsText}
              text="Get in touch"
              underline="h-[2px] xl:h-[4px]"
              className="font-medium tracking-[-0.04em] mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
