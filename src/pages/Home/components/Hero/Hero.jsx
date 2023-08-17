import React from 'react';
import gameCover from '../../../../assets/images/gamecover2.png';

export default function Hero() {
    return (
        <div className='bg-black p-4 md:p-16 flex flex-col-reverse md:grid md:grid-cols-5 text-white h-full gap-4 md:gap-8'>

            {/* Left Container - Text */}
            <div className='md:col-span-2 flex flex-col justify-center items-start p-4 m-2 md:m-4 min-h-0 space-y-10'>
                <div className="flex items-center space-x-2">
                    <p className='text-lg font-bold'>3/11/19</p>
                    <p className='font-thin uppercase'>RELEASE REVIEW</p>
                </div>
                <h1 className='text-white text-3xl md:text-5xl lg:text-6xl mb-2 md:mb-4 tracking-wider'>Gaming Reimagined: NeonQuest's Luminous Lore</h1>
                <button className='px-10 py-3 md:px-20 md:py-5 bg-[#6C26FF] hover:bg-[#6225E3] text-white rounded-full'>Read More</button>
            </div>

            {/* Right Container - Image */}
            <div className='md:col-span-3 flex items-center justify-center p-4 m-2 md:m-4 min-h-0 overflow-hidden'>
                <img
                    src={gameCover}
                    alt='Retro Space Ship'
                    className='w-11/12 md:w-10/12 h-11/12 md:h-10/12 object-cover'
                    style={{ objectFit: 'cover', objectPosition: 'bottom center' }}
                />
            </div>

        </div>
    );
}
