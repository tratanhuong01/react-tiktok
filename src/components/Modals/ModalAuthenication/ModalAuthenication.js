import React, { useContext, useEffect } from 'react'
import { ModalAuthenicationContext, ModalAuthenicationProvider } from '../../../contexts/ModalAuthenicationContext/ModalAuthenicationContext';
import ModalWrapper from '../ModalWrapper'

export const Wrapper = () => {
    //
    const { state, modalAuthenicationDispatch, modalAuthenicationActions } = useContext(ModalAuthenicationContext);
    useEffect(() => {
        //
        let timeOut;
        if (state.loading) {
            timeOut = setTimeout(() => {
                modalAuthenicationDispatch(modalAuthenicationActions.setLoadingModalAuthenicaton(false));
            }, 500);
        }
        return () => {
            clearTimeout(timeOut)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    return (
        state.loading ?
            <div className="w-full flex justify-center items-center relative" style={{ height: "85vh" }}>
                <div className="loader"></div>
            </div>
            :
            state.data
    );
}

export default function ModalAuthenication(props) {
    //

    //
    return (
        <ModalWrapper className={`w-11/12 xl:w-1/3 md:w-1/2 sm:w-3/5 lg:w-2/5 bg-white rounded-md relative`}>
            <ModalAuthenicationProvider>
                <Wrapper />
            </ModalAuthenicationProvider>
        </ModalWrapper >
    )
}
