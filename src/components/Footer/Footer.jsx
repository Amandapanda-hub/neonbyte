import React from 'react';
import { BsTwitch, BsYoutube, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className="grid md:grid-cols-3 gap-4 py-20">
      {/* box 1 */}
      <div className="flex justify-center items-center p-4 space-x-12">
        <div className='flex flex-col items-center space-y-5'>
            <h2 className='text-2xl font-extrabold'>Explore</h2>
            <ul className="mt-2 space-y-2 ">
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="border-b-2 border-black hover:text-[#6225E3]">Stream</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="border-b-2 border-black hover:text-[#6225E3]">Videos</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="border-b-2 border-black hover:text-[#6225E3]">Blog</a></li>
            </ul>
        </div>
        <div className='flex flex-col items-center space-y-5'>
            <h2 className='text-2xl font-extrabold'>Support</h2>
            <ul className="mt-2 space-y-2">
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="border-b-2 border-black hover:text-[#6225E3]">Merch</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="border-b-2 border-black hover:text-[#6225E3]">Support</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="border-b-2 border-black hover:text-[#6225E3]">About</a></li>
            </ul>
        </div>
    </div>
     {/* box 2 */}
<div className="flex flex-col justify-center items-center p-4 space-y-4 lg:space-y-16">
    <h2 className='text-2xl font-extrabold'>STAY IN THE LOOP</h2>
    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0">
        <input type="email" placeholder="Enter your email" className="px-4 py-6 w-80 border rounded-lg text-left focus:outline-none focus:border-indigo-500" />
        <button className="px-20 py-5 bg-gray-800 text-white rounded-full hover:bg-indigo-700">Submit</button>
    </div>
</div>

      {/* box 3 */}
      <div className="flex flex-col justify-center items-center p-4 space-y-10">
        <h2 className='text-2xl font-extrabold'>Connect</h2>
            <div className="flex space-x-4">
                <BsTwitch size={24} /> {/* Adjust size as required */}
                <BsYoutube size={24} />
                <BsLinkedin size={24} />
            </div>
        <p>
            Made by <a href="https://pandatheprogrammer.com/" target="_blank" rel="noopener noreferrer" className="border-b-2 border-black hover:text-[#6225E3]">pandatheprogrammer</a>
        </p>
    </div>
</div>
  )
}
