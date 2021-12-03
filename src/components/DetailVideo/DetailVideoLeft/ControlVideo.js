import React from 'react'

export default function ControlVideo() {
    return (
        <div className="w-full flex absolute items-center bottom-6 left-0 z-50 text-white text-sm hover__flex">
            <div className="w-3/4 flex items-center pl-5">
                <div className="relative flex justify-center w-full pr-3">
                    <div className="h-1.5 bg-gray-500" style={{ width: `${100}%` }}>

                    </div>
                    <div className="absolute z-50 left-0" style={{ width: `${40}%` }}>
                        <div className="relative w-full">
                            <div className="h-1.5 bg-white w-full">

                            </div>
                            <span className="w-5 h-5 bg-white absolute rounded-full z-50 cursor-pointer "
                                style={{ right: -10, top: -8 }}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center w-1/4">
                00:40 / 01:20
            </div>
        </div>
    )
}
