import React from 'react'

export default function InputComponent(props) {
    //
    const { type, name, className, onChange, placeholder, value, register,
        errors, showError, label, wrap, errorInSide, disabled } = props;
    const Field = typeof register === "function" ? register(name, { required: true }) : {};
    //
    return <>
        {!showError ?
            <input type={type} name={name}
                className={`${className} border-solid `} value={value} onChange={(event) => {
                    if (typeof onChange === "function") onChange(event)
                }} placeholder={placeholder} spellCheck={false} disabled={disabled} />
            :
            <div className={`${wrap}`}>
                <div className={'w-full'}>
                    {label && <label className="w-full font-semibold">
                        {label}
                    </label>}
                    <input type={type} {...Field}
                        className={`${className} border-solid  ${errors[name] && "text-red-600 border-red-600"} `} onChange={(event) => {
                            if (typeof onChange === "function") onChange(event)
                            if (typeof register === "function") Field.onChange(event);
                        }} placeholder={placeholder} spellCheck={false} disabled={disabled} />
                </div>
                {errorInSide && errors[name] &&
                    (
                        <p className="font-semibold text-sm text-red-600 my-1.5 ">
                            {errors[name].message}
                        </p>
                    )
                }
            </div>
        }
    </>
}
