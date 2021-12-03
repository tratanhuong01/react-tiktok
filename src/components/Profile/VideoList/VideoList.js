import React, { useRef, useState } from 'react'
import ItemNavbar from './ItemNavbar';
import ItemVideoList from './ItemVideoList/ItemVideoList';

export default function VideoList() {
    //
    const [active, setActive] = useState(0);
    const [indexPlay, setIndexPlay] = useState(-1);
    const ref = useRef(active);
    const onHover = (index, bool) => {
        bool ? setActive(index) : setActive(ref.current);
    }
    //
    return (
        <>
            <ul className="w-full flex items-center font-semibold text-base relative">
                <ItemNavbar index={0} setActive={setActive} onHover={onHover} refCurrent={ref}>
                    Videos
                </ItemNavbar>
                <ItemNavbar index={1} setActive={setActive} onHover={onHover} refCurrent={ref}>
                    <span className="bx bx-lock-alt mr-2 text-xl"></span>Liked
                </ItemNavbar>
                <div className={`absolute -bottom-1 ${active === 0 ? 'left-0' : 'left-1/2'} navbar__move 
                bg-black pt-0.5 w-1/2 z-30`}>
                </div>
            </ul>
            <div className="w-full flex flex-wrap py-2">
                <ItemVideoList indexPlay={indexPlay} setIndexPlay={setIndexPlay} index={0} />
                <ItemVideoList indexPlay={indexPlay} setIndexPlay={setIndexPlay} index={1} />
                <ItemVideoList indexPlay={indexPlay} setIndexPlay={setIndexPlay} index={2} />
                <ItemVideoList indexPlay={indexPlay} setIndexPlay={setIndexPlay} index={3} />
            </div>
        </>
    )
}
