import React from 'react'
import PlaygroundContentDesktop from './PlaygroundContentDesktop'
import PlaygroundContentMobile from './PlaygroundContentMobile'

export default function PlaygroundContent() {
  return (
    <>
      {/* Desktop */}
      <div className='hidden lg:block'>
        <PlaygroundContentDesktop />
      </div>
      {/* Mobile */}
      <div className='block lg:hidden'>
        <PlaygroundContentMobile />
      </div>
    </>
  )
}
