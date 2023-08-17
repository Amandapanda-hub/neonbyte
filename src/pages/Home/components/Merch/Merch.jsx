import React from 'react'
import merch1 from '../../../../assets/images/merch/black-t-shirt.png'
import merch2 from '../../../../assets/images/merch/jacket.png'

export default function Merch() {
    return (
        <div className="flex flex-col justify-center items-center h-auto bg-[#6C26FF] text-white text-center space-y-10">
            <h1 className="text-6xl font-bold py-20 underline">Shop Merch</h1>

            <div className="flex w-full">
                {/* Left box */}
                <div className="w-1/2 p-4">
                    <div className=" rounded-md p-4 space-y-5">
                        <img src={merch1} alt="Description 1" className="w-full h-[30em] object-contain mb-4"/>
                        <h2 className="text-xl font-bold mb-2">Title 1</h2>
                        <p className="text-md">Description for the first box.</p>
                    </div>
                </div>

                {/* Right box */}
                <div className="w-1/2 p-4 relative mt-40 ">
                    <div className=" rounded-md p-4 space-y-5">
                        <img src={merch2} alt="Description 2" className="w-full h-[30em] object-contain mb-4"/>
                        <h2 className="text-xl font-bold mb-2">Title 2</h2>
                        <p className="text-md">Description for the second box.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
