import React, { useContext } from 'react'
import { ModalAuthenicationContext } from '../../../contexts/ModalAuthenicationContext/ModalAuthenicationContext'

export default function WrapperModalAuthenication(props) {
    //
    const { state, modalAuthenicationDispatch, modalAuthenicationActions } = useContext(ModalAuthenicationContext);
    //
    return (
        <>
            {props.backToMain &&
                <span onClick={() => modalAuthenicationDispatch(modalAuthenicationActions.backMainAuthenication())} className="bx bx-chevron-left text-3xl transform scale-125 cursor-pointer top-2 left-2 absolute">
                </span>}
            <p className="text-2xl text-center font-bold pt-12 mb-7">
                {props.title}
            </p>
            <div className="w-full" style={{ maxHeight: 467, height: 467 }}>
                {props.children}
            </div>
            <br />
            <hr />
            <br />
            <p className="flex items-center pb-6 pl-5">
                {`${state.isLogin ? 'Don’t have an account?' : 'Already have an account?'}`}
                {state.isLogin ?
                    <span onClick={() => modalAuthenicationDispatch(modalAuthenicationActions.openModalRegister())}
                        className="ml-1 text-main font-semibold cursor-pointer">
                        Sign up
                    </span> :
                    <span onClick={() => modalAuthenicationDispatch(modalAuthenicationActions.openModalLogin())}
                        className="ml-1 text-main font-semibold cursor-pointer">
                        Log in
                    </span>
                }
            </p>
        </>
    )
}
