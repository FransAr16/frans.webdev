import React from 'react'
import FooterNav from './FooterNav'
import FooterNavBottom from './FooterNavBottom'

export default function FooterBottom() {
  return (
    <div className='flex flex-col relative w-full main-container'>
      <FooterNav />
      <FooterNavBottom />
    </div>
  )
}
