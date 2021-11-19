import React from 'react'

export default function ItemAccountReCommended(props) {
    //
    const { src, alt, name, child } = props;
    //
    return (
        <li className="flex px-3 py-1.5 hover:bg-gray-100 cursor-pointer">
            <img
                src={src}
                alt={alt} className="w-10 h-10 mr-4 rounded-full object-cover" />
            <div className="flex items-center flex-wrap justify-start">
                <p className="font-bold w-full flex items-center">
                    <span className="mr-2">{name}</span>
                    <i className="bx bxs-check-circle text-base text-green-500"></i>
                </p>
                <p className="text-gray-500 text-sm">{child}</p>
            </div>
        </li>
    )
}
