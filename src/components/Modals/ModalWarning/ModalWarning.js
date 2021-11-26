import React, { useContext } from 'react'
import { ModalContext } from '../../../contexts/ModalContext/ModalContext';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';

export default function ModalWarning(props) {
    //
    const { title, description, buttonFirst, buttonSecond } = props.data;
    const { modalActions, modalDispatch } = useContext(ModalContext);
    //
    return (
        <div className="w-80 rounded-xl bg-white pt-4 absolute top-1/2 left-1/2 transform 
        -translate-x-1/2 -translate-y-1/2">
            <p className="text-xl font-semibold text-center pt-7 text-gray-700 w-10/12 mx-auto">{title}</p>
            <p className="text-sm py-5 text-gray-600 text-center w-10/12 mx-auto">{description}</p>
            <ButtonComponent className="text-main text-sm text-center w-full py-3 font-semibold border-t border-b 
            border-solid border-gray-200 hover:bg-gray-100">{buttonFirst}</ButtonComponent>
            <ButtonComponent handleClick={() => modalDispatch(modalActions.closeModal())}
                className="text-center text-sm py-4 text-center w-full hover:bg-gray-100 rounded-b-xl">
                {buttonSecond}</ButtonComponent>
        </div>
    )
}
