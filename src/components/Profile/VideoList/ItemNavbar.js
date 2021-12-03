import React from 'react'

export default function ItemNavbar(props) {
    //
    const { refCurrent, setActive, index, onHover } = props;
    //
    return (
        <li onClick={() => {
            setActive(index);
            refCurrent.current = index;
        }} onMouseEnter={() => onHover(index, true)} onMouseLeave={() => onHover(index, false)}
            className={`w-1/2 flex items-center justify-center cursor-pointer h-10`}>
            {props.children}
        </li>
    );
}
