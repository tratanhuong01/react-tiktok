import React from 'react'

export default function InputComponent(props) {
    //
    const { type, name, className, onChange, placeholder } = props;
    //
    return (
        <input type={type} name={name} className={`${className} border-solid `} onChange={(event) => {
            if (typeof onChange === "function") onChange(event)
        }} placeholder={placeholder} />
    )
}
