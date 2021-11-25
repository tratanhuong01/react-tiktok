import React, { useContext, useEffect } from 'react'
import { ModalContext } from '../../contexts/ModalContext/ModalContext'

export default function Modal(props) {
    //
    const { state } = useContext(ModalContext)
    useEffect(() => {
        //
        if (state.data) {
            document.getElementById('root').classList.add('overflow-hidden');
        }
        else {
            document.getElementById('root').classList.remove('overflow-hidden');
        }
        //
    }, [state.data]);
    //
    return (
        <div className={`w-full h-screen overflow-hidden fixed top-0 left-0 z-50 bg-black bg-opacity-50 
        ${state.data ? '' : 'hidden'}`}>
            {state.data}
        </div>
    )
}
