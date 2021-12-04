import React, { useRef, useState } from 'react'

export default function VolumeVideo(props) {
    //
    const { Button, refVideo } = props;
    const [volume, setVolume] = useState(0);
    const refVolume = useRef(50);
    const parent = useRef();
    const getPositionY = (datas, e) => {
        let bounds = parent.current.getBoundingClientRect();
        let y = e.clientY - bounds.top;
        const data = Math.ceil(((datas - y) * 100) / 80);
        refVolume.current = data;
        refVideo.current.muted = false;
        setVolume(data);
    }
    //
    return (
        <div className="absolute bottom-0 right-0 z-50">
            <div className="relative item__hover p-5" >
                <Button handleClick={() => {
                    const data = volume === 0 ? refVolume.current : 0;
                    setVolume(data);
                    if (refVideo.current) {
                        refVideo.current.volume = Math.floor(data) / 100;
                        refVideo.current.muted = false;
                    }
                }} className="w-10 h-10 text-2xl">
                    <i className={`bx bx-volume-${Math.floor(volume) === 0 ? 'mute' : 'full'}`}></i>
                </Button>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full hover__block -mb-2 w-12 
                flex justify-center">
                    <div ref={parent} className="relative flex justify-center">
                        <div onClick={(e) => getPositionY(80, e)} className="h-24 w-1 bg-gray-500 cursor-pointer" style={{ height: 100 }}>
                        </div>
                        <div onClick={(e) => getPositionY(97, e)} className="absolute z-50 bottom-0 transfrom -translate-x-1/2">
                            <div className="relative">
                                <div className="w-1 bg-white" style={{ height: volume }}></div>
                                <span className="w-5 h-5 bg-white absolute left-1/2 transform -translate-x-1/2
                                rounded-full z-50 cursor-pointer" style={{ top: -10 }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
