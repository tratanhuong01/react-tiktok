import React, { useEffect, useRef, useState } from 'react'
import tiktok_2 from "../../../assets/videos/tiktok_2.mp4"
import thunbnail from "../../../assets/images/thunbnail.png"
import ButtonDetailVideoLeft from './ButtonDetailVideoLeft'
import ControlVideo from './ControlVideo'

export default function DetailVideoLeft() {
    //
    const refVideo = useRef();
    const [timeVideo, setTimeVideo] = useState(0);
    const refButtonClick = useRef();
    const [time, setTime] = useState(0);
    const [play, setPlay] = useState(true);
    useEffect(() => {
        //
        setTimeout(() => {
            if (refButtonClick.current) {
                refButtonClick.current.click();
            }
        }, 1000);
        //
    }, [refButtonClick]);
    useEffect(() => {
        //
        const timeOut = setTimeout(() => {
            if (!play) {
                clearTimeout(timeOut);
                return;
            }
            if (time >= Math.floor(timeVideo) - 1) {
                setTime(0);
            }
            else {
                setTime(time + 1);
            }
        }, 1000);
        return () => {
            clearTimeout(timeOut);
        }
        //
    }, [time, timeVideo, play]);
    //
    return (
        <div className="w-3/5 relative h-full overflow-hidden">
            <ButtonDetailVideoLeft refVideo={refVideo} />
            <button onClick={() => {
                refVideo.current && refVideo.current.play()
            }} className="hidden" ref={refButtonClick}></button>
            <div className="w-full h-full relative">
                <div className="w-1/2 mx-auto relative h-full item__hover">
                    <video onClick={() => {
                        setPlay(!play);
                        if (refVideo.current) {
                            play ? refVideo.current.pause() : refVideo.current.play();
                        }
                    }} ref={refVideo} src={tiktok_2} className="w-full h-full object-cover"
                        onLoadedMetadata={() => {
                            setTimeVideo(refVideo.current.duration)
                        }} autoPlay loop muted></video>
                    <ControlVideo refVideo={refVideo} timeVideo={timeVideo} time={time} setTime={setTime} />
                    {!play && <span className={`bx bx-play text-7xl text-white cursor-pointer z-50 absolute top-1/2 left-1/2 
                    transform -translate-1/2 -mt-10`}></span>}
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-black" style={{ zIndex: -1 }} >
                    <img src={thunbnail} alt="" className="w-full h-full object-cover opacity-30"
                        style={{ filter: "blur(8px)" }} />
                </div>
            </div>
        </div>
    )
}
