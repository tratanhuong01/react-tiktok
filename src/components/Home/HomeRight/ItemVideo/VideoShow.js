import React, { useEffect, useRef, useState } from 'react'
import SharePopup from './SharePopup';
import tiktok_1 from "../../../../assets/videos/tiktok_1.mp4";
import tiktok_2 from "../../../../assets/videos/tiktok_2.mp4";
import tiktok_3 from "../../../../assets/videos/tiktok_3.mp4";
export default function VideoShow(props) {
    //
    const { active, index, setOnVolume, onVolume } = props;
    const [play, setPlay] = useState(false);
    const [volume, setVolume] = useState(0);
    const [love, setLove] = useState(false);
    const refVideo = useRef();
    const refWrap = useRef();
    const refMain = useRef();
    const refButtonClick = useRef();
    useEffect(() => {
        //
        if (refVideo.current && refWrap.current && refMain.current && refButtonClick.current) {
            refWrap.current.style.width = refVideo.current.offsetWidth + "px";
            if (!onVolume) {
                refVideo.current.volume = 0;
            }
            else {
                refVideo.current.volume = 0.7;
            }
        }
        //
    }, [refVideo, refWrap, refMain, onVolume]);
    useEffect(() => {
        //
        let timeOut;
        if (active === index) {
            timeOut = setTimeout(() => {
                refButtonClick.current.click()
            }, 300);
        }
        else {
            clearTimeout(timeOut);
            refVideo.current.pause();
            setPlay(false);
        }
        return () => {
            clearTimeout(timeOut);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active])
    //
    return (
        <div ref={refWrap} className="item__video relative my-2">
            <div ref={refMain} className="w-full h-full relative item__hover -ml-5 md:ml-0">
                <video loop ref={refVideo} src={index % 2 === 0 ? tiktok_2 : index % 3 === 0 ? tiktok_3 : tiktok_1} className="h-full">
                </video>
                <i onClick={() => {
                    if (refVideo.current) {
                        volume === 0 ? refVideo.current.volume = 0.5 : refVideo.current.volume = 0;
                        setVolume(volume === 0 && !onVolume ? 0.7 : 0);
                        setOnVolume(volume === 0 && !onVolume ? true : false);
                    }
                }} className={`bx bxs-volume-${volume === 0 && !onVolume ? 'mute' : 'full'} text-2xl absolute bottom-4 right-4 text-white cursor-pointer`}></i>
                <i ref={refButtonClick} onClick={() => {
                    if (refVideo.current) {
                        setPlay(!play);
                        play ? refVideo.current.pause() : refVideo.current.play();
                    }
                }} className={`bx bx-${play ? 'stop' : 'play'} text-3xl absolute bottom-4 left-4 text-white cursor-pointer hover__block`}></i>
            </div>
            <ul className=" absolute bottom-0 left-full -ml-4 md:ml-1 -mb-1">
                <li className="flex-wrap flex w-14 justify-center">
                    <div onClick={() => setLove(!love)} className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 
                    hover:bg-gray-200 cursor-pointer mb-1">
                        <i className={`bx bxs-heart text-3xl ${love ? 'text-red-600' : ''}`}></i>
                    </div>
                    <p className="text-gray-600 text-center text-sm my-1">1.2M</p>
                </li>
                <li className="flex-wrap flex w-14 justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 
                    hover:bg-gray-200 cursor-pointer mb-1">
                        <i className='bx bx-comment-detail text-3xl' ></i>
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
