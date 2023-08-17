import React from 'react'
import Hero from './components/Hero/Hero'
import Break from './components/Break/Break'
import Schedule from './components/Schedule/Schedule'
import FeaturedVideos from './components/FeaturedVideos/FeaturedVideos'
import Merch from './components/Merch/Merch'
import SignUp from './components/SignUp/SignUp'

export default function Home() {
  return (
    <div className=''>
        <Hero/>
        <Break/>
        <Schedule/>
        <FeaturedVideos/>
        <Merch/>
        <SignUp/>
    </div>

  )
}
