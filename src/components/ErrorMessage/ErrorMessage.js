import React from 'react'

export default function ErrorMessage(props) {
    //
    const { errors, name } = props;
    //
    return (
        errors ?
            errors[name] ?
                <p className="pl-1 font-semibold text-sm text-red-600 my-1.5 ">
                    {errors[name].message}
                </p>
                : ""
            :
            ""
    )
}
