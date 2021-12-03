import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import InputComponent from '../InputComponent/InputComponent'

export default function HeaderCenter() {
    return (
        <div className="w-2/4 flex items-center justify-center  invisible md:visible mr-8 lg:mr-0">
            <div className="w-8/12 flex items-center">
                <InputComponent type="text" className="w-10/12 p-2 bg-gray-50 border-gray-100 border-2 rounded-l-full "
                    placeholder="Search..." />
                <ButtonComponent
                    type="button"
                    className="p-1.5 -ml-0.5 border-l-2 border-solid border-gray-100 w-2/12 flex items-center justify-center rounded-r-full bg-gray-200">
                    <i className="bx bx-search text-2xl text-gray-600"></i>
                </ButtonComponent>
            </div>
        </div>
    )
}
