import React from 'react'

export default function ItemHomeLeftTop(props) {
    //
    const { icon, content, active } = props;
    //
    return (
        <li
            className={`p-3 box-content mb-1 hover:bg-gray-100 rounded-lg cursor-pointer flex 
            items-center ${active ? 'text-main' : ''} flex text-base justify-center md:justify-start`}>
            <i className={`${icon} text-2xl md:text-xl xl:text-2xl md:mr-2`}></i> <span className="font-bold hidden md:flex">{content}</span>
        </li>
    )
}
