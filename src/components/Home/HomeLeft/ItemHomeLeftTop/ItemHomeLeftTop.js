import React from 'react'

export default function ItemHomeLeftTop(props) {
    //
    const { icon, content, active } = props;
    //
    return (
        <li
            className={`p-3 box-content mb-1 hover:bg-gray-100 rounded-lg cursor-pointer flex 
            items-center ${active ? 'text-main' : ''} flex text-base`}>
            <i className={`${icon} text-xl mr-2`}></i> <span className="font-bold">{content}</span>
        </li>
    )
}
