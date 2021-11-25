import React from 'react'
import HeaderWrapper from '../components/Header/HeaderWrapper'
import HomeLeft from '../components/Home/HomeLeft/HomeLeft'
import HomeRight from '../components/Home/HomeRight/HomeRight'
import Modal from '../components/Modals/Modal'
import { ModalProvider } from '../contexts/ModalContext/ModalContext'

export default function HomePage() {
    //
    //
    return (
        <ModalProvider>
            <div className="w-full h-full">
                <HeaderWrapper>
                </HeaderWrapper>
                <section className="wrapper flex ">
                    <HomeLeft />
                    <HomeRight />
                </section>
            </div>
            <Modal />
        </ModalProvider>

    )
}
