import React from 'react'
import WorkTogether from './WorkTogether'
import FooterBottom from './FooterBottom'

export default function Footer() {
  return (
    <div className='relative overflow-hidden bg-background z-[4]'>
      <WorkTogether />
      <FooterBottom />
    </div>
  )
}
