import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

export default function ButtonComponent(props) {
    //
    const { link, className, type, disabled, handleClick } = props;
    const ref = useRef();
    useEffect(() => {
        //
        if (link) {
            if (disabled) {
                ref.current.removeAttribute('href');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, disabled]);
    //
    return (
        link
            ?
            (<Link ref={ref} to={link} className={`${className} border-solid`}>
                {props.children}
            </Link>)
            :
            (<button type={type} onClick={handleClick} className={`${className} border-solid 
            ${disabled ? 'cursor-not-allowed bg-gray-200 text-gray-500' : ''}`} disabled={disabled}>
                {props.children}
            </button>)
    )
}
