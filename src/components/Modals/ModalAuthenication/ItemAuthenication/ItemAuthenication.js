import React from 'react'

export default function ItemAuthenication(props) {
    //
    const { icon, name, handleClick, color } = props;
    //
    return (
        <li onClick={handleClick} className={`w-full hover:bg-gray-50 mb-3 border-2 border-solid border-gray-200 
        cursor-pointer flex`}>
            <div className={`${icon} ${color} flex items-center justify-center w-11 h-11 
            border-r-2 border-solid border-gray-200`}>

            </div>
            <div className="text-sm font-semibold flex items-center w-10/12 p-0.5 justify-center">
                {name}
            </div>
        </li>
    )
}
