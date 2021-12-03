import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router';
import tiktok_3 from "../../../../assets/videos/tiktok_3.mp4";
import { PAGE_DETAIL_VIDEO } from '../../../../constants/Config';

export default function ItemVideoList(props) {
    //
    const { indexPlay, setIndexPlay, index } = props;
    const ref = useRef();
    const nav = useNavigate();
    useEffect(() => {
        //
        if (ref.current) {
            if (indexPlay === index) {
                ref.current.play();
            }
            else {
                ref.current.pause();
                ref.current.currentTime = 0;
            }
        }
        //
    }, [indexPlay, ref, index])
    //  
    return (
        <div onClick={() => nav(PAGE_DETAIL_VIDEO)} onMouseEnter={() => setIndexPlay(index)} className="item__video__list relative p-0.5 cursor-pointer">
            <video ref={ref} src={tiktok_3} className="w-full object-cover h-72" muted>

            </video>
            <button className="hidden"></button>
            <div className="absolute flex items-center text-white font-semibold bottom-2 left-2 z-20 text-xm">
                <span className="bx bx-play mr-0.5 text-xl"></span>
                <span>505.5K</span>
            </div>
        </div>
    )
}
