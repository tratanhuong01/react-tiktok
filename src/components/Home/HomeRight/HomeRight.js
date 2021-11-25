import React, { useEffect } from 'react'
import { useState } from 'react';
import ItemVideo from './ItemVideo/ItemVideo'

export default function HomeRight() {
    //
    const [active, setActive] = useState(0);
    const [onVolume, setOnVolume] = useState(false);
    const videos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    useEffect(() => {
        //
        const scrollEvent = () => {
            setActive(Math.floor(window.scrollY / 600))
        }
        window.addEventListener('scroll', scrollEvent)
        return () => {
            window.removeEventListener('scroll', scrollEvent)
        }
        //
    }, [])
    //
    return (
        <div className="content__right pt-24 relative">
            {videos.map((video, index) => {
                return <ItemVideo key={index} index={index} pos={true} active={active} setActive={setActive} setOnVolume={setOnVolume}
                    onVolume={onVolume} />
            })}
        </div>
    )
}
