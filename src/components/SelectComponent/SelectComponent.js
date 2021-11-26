import React, { useState } from 'react'

export default function SelectComponent(props) {
    //
    const { data, list, handleChange, width, className } = props;
    const [content, setContent] = useState(data ? data : "");
    const [show, setShow] = useState(false);
    //
    return (
        <div className={`${className} bg-gray-100 hover:bg-gray-200 cursor-pointer text-base relative rounded-sm 
        ${!data ? 'text-gray-500' : 'text-gray-800'} `} style={width ? width : {}}>
            <div onClick={() => setShow(!show)} className="w-full p-2">
                {content ? content : data ? data : "Select"}
                <span className={`absolute top-1/2 transform -translate-y-1/2 right-2 bx bxs-chevron-${show ? 'up' : 'down'}  
                cursor-pointer`}></span>
            </div>
            {
                show &&
                <ul className="absolute bg-white z-20 w-full text-sm top-full mt-0.5 left-0 py-1.5 overflow-x-hidden 
                overflow-y-auto max-h-60 border border-solid border-gray-300 shadow-md">
                    {list.map((item, index) =>
                        <li key={index} onClick={() => {
                            setContent(item);
                            typeof handleChange === "function" && handleChange(item);
                            setShow(false);
                        }
                        } className={` p-2
                        ${item === content ? 'bg-gray-200' : ' hover:bg-gray-200'} border-b border-gray-100 border-solid 
                    `}>{item}</li>
                    )}
                </ul>
            }
        </div >
    )
}
