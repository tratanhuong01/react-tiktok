import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

export default function HeaderRight() {
    //
    const dataPopups = [{
        id: 0,
        icon: "bx bx-user",
        content: "Language",
    }, {
        id: 1,
        icon: "bx bx-help-circle",
        content: "Feedback and help",
    }, {
        id: 2,
        icon: "bx bxs-keyboard",
        content: "Keyword on keyboard",
    }]
    //
    return (
        <div className="w-1/4 flex items-center justify-end">
            <ul className="flex items-center">
                <li className="px-3 py-2.5 font-bold hover:underline cursor-pointer">Upload</li>
                <li className="px-3 py-2.5 font-bold">
                    <ButtonComponent type="button" className="px-10 py-2.5 bg-main text-white rounded-md font-bold 
                    hover:bg-second">
                        Login
                    </ButtonComponent>
                </li>
                <li className="px-3 py-2.5 font-bold cursor-pointer relative item__hover">
                    <i className='bx bx-dots-vertical-rounded text-2xl'></i>
                    <ul className="w-60 py-2 arrow__popup absolute top-full -mt-1 right-4 bg-white border border-solid 
                    border-gray-100 shadow-lg rounded-md hover__block z-50">
                        {dataPopups.map((data) =>
                            <li className="w-full p-2 flex items-center hover:bg-gray-100" key={data.id}>
                                <span className={`${data.icon} text-2xl mr-2`}></span>
                                <span className="font-bold">{data.content}</span>
                            </li>
                        )}
                    </ul>
                </li>
            </ul>
        </div>
    )
}