import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

export default function ButtonComponent(props) {
    //
    const { link, className, type, disabled } = props;
    const ref = useRef();
    useEffect(() => {
        //
        if (disabled) {
            ref.current.removeAttribute('href');
        }
        //
    }, [ref, disabled]);
    //
    return (
        link
            ?
            (<Link ref={ref} to={link} className={`${className} border-solid`}>
                {props.children}
            </Link>)
            :
            (<button type={type} className={`${className} border-solid`} disabled={disabled}>
                {props.children}
            </button>)
    )
}