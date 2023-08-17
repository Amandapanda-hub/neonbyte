import React from 'react';
import gameCover2 from '../../../../assets/images/spacewargameplay2.png';

export default function Schedule() {
    return (
        <div className='bg-black p-20 flex flex-col md:grid md:grid-cols-3 text-white h-[80vh]'>

            {/* Image Container */}
            <div className='mb-4 md:mb-0 md:col-span-2 flex items-center justify-center overflow-hidden'>
                <img
                    src={gameCover2}
                    alt='Retro Space Ship'
                    className='w-full h-full object-cover'
                    style={{ objectFit: 'cover', objectPosition: 'bottom center' }}
                />
            </div>

            {/* Text Container */}
            <div className='md:col-span-1 flex flex-col justify-center items-center text-center h-full space-y-20'>
            <h1 className='text-white text-5xl font-bold mb-4 flex flex-col items-center space-y-4'>
                <span>Upcoming</span>
                <span>Streams</span>
            </h1>
                <div className='flex justify-center items-start space-x-10 md:ml-10 lg:ml-0'>
                    <div className='flex flex-col items-center space-y-10'>
                        <p className='font-bold uppercase'>Wednesday, Nov 8th</p>
                        <a href='!#' className='hover:text-[#6C26FF]'>Stream Link</a>
                    </div>

                    <div className='flex flex-col items-center space-y-10'>
                        <p className='font-bold uppercase'>Sunday, December 24th</p>
                        <a href='!#' className='hover:text-[#6C26FF]'>Stream Link</a>
                    </div>
                </div>


                <button className='px-20 py-5 bg-[#6C26FF] hover:bg-[#6225E3] text-white rounded-full'>Read More</button>
            </div>
        </div>
    )
}
