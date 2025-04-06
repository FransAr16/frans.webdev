import React from 'react'
import FooterNav from './FooterNav'
import FooterNavBottom from './FooterNavBottom'
import BorderLineTop from '../ui/BorderLineTop'

export default function FooterBottom() {
  return (
    <div className='flex flex-col relative w-full main-container'>
      <BorderLineTop />
      <FooterNav />
      <FooterNavBottom />
    </div>
  )
}
