import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTwitch, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="bg-black text-white pt-6 pb-10">
            <div className="hidden md:flex justify-between items-center px-20 py-4">
                <div>
                    <h1 className="text-2xl font-bold font-bricolage">Neonbyte</h1>
                </div>
                
                <div className="flex items-center space-x-20">
                    <div className="flex space-x-10">
                        <Link to="#" className="hover:text-[#6C26FF]">Link 1</Link>
                        <Link to="#" className="hover:text-[#6C26FF]">Link 2</Link>
                        <Link to="#" className="hover:text-[#6C26FF]">Link 3</Link>
                        <Link to="#" className="hover:text-[#6C26FF]">Link 4</Link>
                        <Link to="#" className="hover:text-[#6C26FF]">Link 5</Link>
                    </div>

                    <div className="flex space-x-10">
                        <BsTwitch className="text-white" />
                        <BsYoutube className="text-white" />
                        <BsLinkedin className="text-white" />
                    </div>

                    <div className="flex items-center space-x-4">
                        <FiShoppingCart className="text-white mr-2" />
                        <span className="bg-white text-black rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
                    </div>
                </div>
            </div>

            <div className="md:hidden flex justify-between items-center px-6 py-4 z-10">
                <div onClick={() => setIsMobileMenuOpen(true)} className="cursor-pointer text-xl">☰</div>
                <h1 className="text-xl font-bold">Company Name</h1>
                <div className="relative">
                    <FiShoppingCart className="text-white" />
                    <span className="absolute top-0 right-[-5px] bg-white text-black rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
                </div>
            </div>

            <div id="mobileMenu" className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} fixed top-0 left-0 w-full h-full flex flex-col space-y-4 p-6 z-0 bg-black`}>
                <div className="flex justify-end">
                    <div onClick={() => setIsMobileMenuOpen(false)} className="close-icon cursor-pointer text-xl">✖</div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <Link to="#" className="hover:text-gray-400">Link 1</Link>
                    <Link to="#" className="hover:text-gray-400">Link 2</Link>
                    <Link to="#" className="hover:text-gray-400">Link 3</Link>
                    <Link to="#" className="hover:text-gray-400">Link 4</Link>
                    <Link to="#" className="hover:text-gray-400">Link 5</Link>
                </div>
                <div className="flex justify-center space-x-4">
                    <BsTwitch className="text-white" />
                    <BsYoutube className="text-white" />
                    <BsLinkedin className="text-white" />
                </div>
            </div>
        </div>
    );
}
