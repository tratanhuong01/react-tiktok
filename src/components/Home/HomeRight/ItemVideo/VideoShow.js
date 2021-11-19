import React, { useEffect, useRef } from 'react'
import tiktok__1 from "../../../../assets/videos/tiktok__1.mp4"
import SharePopup from './SharePopup';

export default function VideoShow() {
    //
    const refVideo = useRef();
    const refWrap = useRef();
    const refMain = useRef();
    useEffect(() => {
        //
        if (refVideo.current && refWrap.current && refMain.current) {
            refWrap.current.style.width = refVideo.current.offsetWidth + "px";
        }
        //
    }, [refVideo, refWrap, refMain]);
    //
    return (
        <div ref={refWrap} className="item__video relative my-2">
            <div ref={refMain} className="w-full h-full relative item__hover">
                <video ref={refVideo} src={tiktok__1} className="h-full">
                </video>
                <i className="bx bxs-volume-mute text-2xl absolute bottom-4 right-4 text-white cursor-pointer"></i>
                <i className="bx bx-play text-3xl absolute bottom-4 left-4 text-white cursor-pointer hover__block"></i>
            </div>
            <ul className=" absolute bottom-0 left-full ml-1 -mb-1">
                <li className="flex-wrap flex w-14 justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 
                    hover:bg-gray-200 cursor-pointer mb-1">
                        <i className='bx bxs-heart text-3xl'></i>
                    </div>
                    <p className="text-gray-600 text-center text-sm my-1">1.2M</p>
                </li>
                <li className="flex-wrap flex w-14 justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 
                    hover:bg-gray-200 cursor-pointer mb-1">
                        <i class='bx bx-comment-detail text-3xl' ></i>
                    </div>
                    <p className="text-gray-600 text-center text-sm my-1">1.2M</p>
                </li>
                <li className="flex-wrap flex w-14 justify-center relative item__hover">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 
                    hover:bg-gray-200 cursor-pointer mb-1">
                        <i className='bx bxs-share text-3xl'></i>
                    </div>
                    <p className="text-gray-600 text-center text-sm my-1 ">1.2M</p>
                    <SharePopup />
                </li>
            </ul>
        </div >
    )
}
