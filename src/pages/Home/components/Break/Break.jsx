import React from 'react'

export default function Break() {
  return (
    <div className='flex items-center justify-center p-4 md:p-8 lg:px-40 h-[20vh] overflow-hidden'>
      <div className='flex flex-col md:flex-row w-full gap-4 h-full'>
        
        {/* Left Container */}
        <div className='flex flex-col justify-center items-center text-center w-full md:w-1/2 h-full'> 
         <h2 className='text-2xl font-bold'>Welcome to Neonbyte.</h2>
        </div>
        
        {/* Right Container */}
        <div className='flex flex-col justify-center items-center text-center w-full md:w-1/2 h-full'>
         <h2 className='text-md'>Illuminating the arcade of tomorrow with game streams, neon reviews, and pixel-perfect tutorials.</h2>
        </div> 
      </div>
    </div>
  )
}
