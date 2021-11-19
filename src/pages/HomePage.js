import React from 'react'
import HeaderWrapper from '../components/Header/HeaderWrapper'
import HomeLeft from '../components/Home/HomeLeft/HomeLeft'
import HomeRight from '../components/Home/HomeRight/HomeRight'

export default function HomePage() {
    return (
        <div className="w-full">
            <HeaderWrapper>
            </HeaderWrapper>
            <section className="wrapper flex ">
                <HomeLeft />
                <HomeRight />
            </section>
        </div>
    )
}
