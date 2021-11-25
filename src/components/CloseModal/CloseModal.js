import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext/ModalContext';

export default function CloseModal(props) {
    //
    const { modalDispatch, modalActions } = useContext(ModalContext);
    //
    return (
        <span onClick={() => modalDispatch(modalActions.closeModal())} className="w-10 h-10 flex items-center justify-center text-xl font-bold bg-gray-200 
        hover:bg-gray-500 hover:text-white cursor-pointer rounded-full z-50 fixed top-2 right-2">
            &times;
        </span>
    )
}
