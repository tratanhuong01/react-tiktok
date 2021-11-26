import React, { useState } from 'react'

export default function CheckboxComponent(props) {
    //
    const { width, height, content, checked, id } = props;
    const [check, setCheck] = useState(checked);
    //
    return (
        <div className="flex items-center mx-2">
            <input type="checkbox" className="hidden" onChange={(event) => setCheck(event.target.checked)}
                checked={check} id={`check__box__${id}`} />
            <label htmlFor={`check__box__${id}`} >
                <div className={`${check ? 'bg-main text-white' : 'border border-solid border-gray-300'} flex items-center 
                justify-center mr-2`} style={{ width, height }}>
                    {check && <i className="bx bx-check text-xl"></i>}
                </div >
            </label>
            <span className="text-xm">{content}</span>
        </div >
    )
}
