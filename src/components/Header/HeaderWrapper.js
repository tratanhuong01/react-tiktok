import React from 'react'
import HeaderCenter from './HeaderCenter'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

export default function HeaderWrapper(props) {
    return (
        <header className="w-full fixed top-0 bg-white py-1 border-b-2 border-solid border-gray-100 z-50 ">
            <div className="wrapper flex">
                <HeaderLeft />
                <HeaderCenter />
                <HeaderRight />
            </div>
        </header>
    )
}
