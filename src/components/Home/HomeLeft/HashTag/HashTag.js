import React from 'react'

export default function HashTag() {
    return (
        <>
            <p className="pb-2 px-3 text-gray-600 font-semibold">
                Explore
            </p>
            <ul className="p-3 border-b-2 border-solid border-gray-100 flex flex-wrap">
                <li className="px-2 py-0.5 rounded-full mr-2 mb-2 text-sm font-semibold flex items-center border 
                border-solid border-gray-200 hover:bg-gray-100 cursor-pointer">
                    <i class='bx bx-hash mr-2'></i>
                    <span>thaycongaynay</span>
                </li>
                <li className="px-2 py-0.5 rounded-full mr-2 mb-2 text-sm font-semibold flex items-center border 
                border-solid border-gray-200 hover:bg-gray-100 cursor-pointer">
                    <i class='bx bx-hash mr-2'></i>
                    <span>ancungtikotk</span>
                </li>
                <li className="px-2 py-0.5 rounded-full mr-2 mb-2 text-sm font-semibold flex items-center border 
                border-solid border-gray-200 hover:bg-gray-100 cursor-pointer">
                    <i class='bx bxs-music mr-2'></i>
                    <span>Buồn làm chi em ơi (Remix) - AP</span>
                </li>
            </ul>
        </>
    )
}
