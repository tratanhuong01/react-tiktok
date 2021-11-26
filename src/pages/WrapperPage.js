import React from 'react'
import HeaderWrapper from '../components/Header/HeaderWrapper'
import Modal from '../components/Modals/Modal'
import { ModalProvider } from '../contexts/ModalContext/ModalContext'

export default function WrapperPage(props) {
    return (
        <ModalProvider>
            <div className="w-full h-full">
                <HeaderWrapper>
                </HeaderWrapper>
                <section className="wrapper flex ">
                    {props.children}
                </section>
            </div>
            <Modal />
        </ModalProvider>
    )
}
