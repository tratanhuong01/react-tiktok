import React from 'react'
import DetailVideoLeft from '../components/DetailVideo/DetailVideoLeft/DetailVideoLeft'
import DetailVideoRight from '../components/DetailVideo/DetailVideoRight/DetailVideoRight'
import Modal from '../components/Modals/Modal'
import { ModalProvider } from '../contexts/ModalContext/ModalContext'

export default function DetailVideoPage() {
    return (
        <ModalProvider>
            <div className="w-full h-screen overflow-hidden flex flex-col lg:flex-row relative">
                <DetailVideoLeft />
                <DetailVideoRight />
            </div>
            <Modal />
        </ModalProvider>
    )
}
