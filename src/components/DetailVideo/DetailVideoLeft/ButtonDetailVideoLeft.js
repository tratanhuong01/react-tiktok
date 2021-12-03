import React from 'react'
import Logo from './Logo'
import VolumeVideo from './VolumeVideo';

const Button = (props) => {
    //

    //
    return (
        <span onClick={() => {
            if (typeof props.handleClick === "function")
                props.handleClick();
        }} className={`${props.className} flex items-center justify-center rounded-full bg-white bg-opacity-20 
        text-white font-semibold hover:text-gray-200 hover:bg-opacity-40 z-50 cursor-pointer`}>
            {props.children}
        </span>
    );
}

export default function ButtonDetailVideoLeft() {
    return (
        <>
            <Button className="w-10 h-10 text-2xl absolute top-5 left-5 ">
                &times;
            </Button>
            <div className="fixed top-5 left-20 w-12 h-12 rounded-full z-50">
                <Logo />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-3 z-50">
                <Button className="w-10 h-10 text-2xl">
                    <i className='bx bx-chevron-left transform rotate-90'></i>
                </Button>
                <Button className="w-10 h-10 text-2xl mt-3">
                    <i className='bx bx-chevron-right transform rotate-90'></i>
                </Button>
            </div>
            <Button className="px-4 py-1.5 text-sm absolute top-5 right-5 ">
                <i className="bx bx-flag text-2xl mr-3"></i>
                Report
            </Button>
            <VolumeVideo Button={Button} />
        </>
    )
}
