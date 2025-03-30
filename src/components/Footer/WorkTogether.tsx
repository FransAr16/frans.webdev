"use client"

import React from 'react'
import { revealsText } from '@/data/animation'
import TextSlideUp from '../ui/TextSlideUp'
import Button from '../ui/Button'
import BorderLineTop from '../ui/BorderLineTop'

export default function WorkTogether() {
  return (
    <div className="h-full w-full main-container">
      <div className='relative pt-[1rem] pb-[3rem] lg:pt-[1.5rem] lg:pb-[5rem] 2xl:pt-[2rem] 2xl:pb-[10rem]'>
        <BorderLineTop />
        <div className="grid grid-cols-12 w-full justify-between gap-[1rem] lg:gap-[1.5rem]">
          <div className="flex justify-center lg:justify-start col-span-12 lg:col-span-5 3xl:col-span-4">
            <TextSlideUp
              text="Create something bold, immersive, and impactful for your brands."
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
            />
          </div>
          <div className="col-span-12 lg:col-span-3 3xl:col-span-4"></div>
          <div className="flex flex-col gap-1 col-span-12 lg:col-span-4 pt-[3rem] lg:pt-0">
            <div>
              <TextSlideUp
                text="Ready to Rock?"
                animate={revealsText}
                className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
              />
            </div>
            <div className="flex">
              <Button
                href="/contact"
                slideUp={revealsText}
                text="Get in touch"
                underline="h-[2px] xl:h-[3.5px]"
                className="font-medium tracking-[-0.04em] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
