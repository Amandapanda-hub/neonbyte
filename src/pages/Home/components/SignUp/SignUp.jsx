import React from 'react'
import gamePlayers from '../../../../assets/images/bwvgameplay.png'

export default function SignUp() {
  return (
    <div className='bg-black p-20 flex flex-col md:grid md:grid-cols-3 text-white h-[80vh]'>

      {/* Text Container */}
      <div className='md:col-span-1 flex flex-col justify-center items-start text-start h-full space-y-10'>
          <h1 className='text-white text-5xl font-bold mb-4 flex flex-col items-start space-y-4'>
              <span>Upcoming</span>
              <span>Streams</span>
          </h1>
          <div className='flex justify-center items-start space-x-10 md:ml-10 lg:ml-0 w-3/4'>
              <p>Unlock a neon-lit vault of early releases, arcade-inspired streams, and a pixelated peek behind the curtain when you light up our world with support.</p>
          </div>
          <button className='px-20 py-5 bg-[#6C26FF] hover:bg-[#6225E3] text-white rounded-full'>Get Access</button>
      </div>

      {/* Image Container */}
      <div className='mb-4 md:mb-0 md:col-span-2 flex items-center justify-center overflow-hidden'>
          <img
              src={gamePlayers}
              alt='Retro Space Ship'
              className='w-full h-full object-cover'
              style={{ objectFit: 'cover', objectPosition: 'bottom center' }}
          />
      </div>
    </div>
  )
}
