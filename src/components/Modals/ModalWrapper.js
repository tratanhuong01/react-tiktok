import React from 'react'
import CloseModal from '../CloseModal/CloseModal';

export default function ModalWrapper(props) {
    //
    const { className, style, children, styleChildren } = props;
    //
    return (
        <div className={`fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ${className}`} style={style}>
            <div className="w-full h-full relative">
                <CloseModal />
                <div className="w-full" style={styleChildren}>
                    {children}
                </div>
            </div>
        </div>
    )
}
