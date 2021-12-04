import React, { useRef } from 'react'

export default function ControlVideo(props) {
    //
    const { refVideo, timeVideo, time, setTime } = props;
    const white = (time / Math.floor(timeVideo)) * 100 > 100 ? 100 :
        (time / Math.floor(timeVideo)) * 100;
    const parent = useRef();
    const getPositionX = (e) => {
        let bounds = parent.current.getBoundingClientRect();
        let x = e.clientX - bounds.left;
        const timeData = Math.floor((x / parent.current.offsetWidth) * timeVideo);
        setTime(timeData);
        refVideo.current.currentTime = timeData;
    }
    //
    return (
        <div className="w-full flex absolute items-center bottom-6 left-0 z-50 text-white text-sm hover__flex">
            <div className="w-3/4 flex items-center pl-5">
                <div ref={parent} className="relative flex justify-center w-full pr-3">
                    <div onClick={getPositionX} className="h-1.5 bg-gray-500" style={{ width: `${100}%` }}>
                    </div>
                    <div onClick={getPositionX} className="absolute z-50 left-0"
                        style={{ width: `${white}%` }}>
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
                {`${Math.floor((time % 3600) / 60) < 10
                    ? `0${Math.floor((time % 3600) / 60)}`
                    : Math.floor((time % 3600) / 60)
                    }:${Math.floor((time % 3600) % 60) < 10
                        ? `0${Math.floor((time % 3600) % 60)}`
                        : Math.floor((time % 3600) % 60)
                    }`}{" "}
                /{" "}
                {`${Math.floor((timeVideo % 3600) / 60) < 10
                    ? `0${Math.floor((timeVideo % 3600) / 60)}`
                    : Math.floor((timeVideo % 3600) / 60)
                    }:${Math.floor((timeVideo % 3600) % 60) < 10
                        ? `0${Math.floor((timeVideo % 3600) % 60)}`
                        : Math.floor((timeVideo % 3600) % 60)
                    }`}
            </div>
        </div>
    )
}
