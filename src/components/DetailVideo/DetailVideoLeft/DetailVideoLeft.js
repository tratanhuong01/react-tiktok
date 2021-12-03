import React from 'react'
import tiktok_2 from "../../../assets/videos/tiktok_2.mp4"
import thunbnail from "../../../assets/images/thunbnail.png"
import ButtonDetailVideoLeft from './ButtonDetailVideoLeft'
import ControlVideo from './ControlVideo'

export default function DetailVideoLeft() {
    return (
        <div className="w-3/5 relative h-full overflow-hidden">
            <ButtonDetailVideoLeft />
            <div className="w-full h-full relative">
                <div className="w-1/2 mx-auto relative h-full item__hover">
                    <video src={tiktok_2} className="w-full h-full object-cover"></video>
                    <ControlVideo />
                    <span className="bx bx-play text-7xl text-white cursor-pointer z-50 absolute top-1/2 left-1/2 
                    transform -translate-1/2 -mt-10"></span>
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-black" style={{ zIndex: -1 }} >
                    <img src={thunbnail} alt="" className="w-full h-full object-cover opacity-30"
                        style={{ filter: "blur(8px)" }} />
                </div>
            </div>
        </div>
    )
}
