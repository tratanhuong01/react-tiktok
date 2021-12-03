import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../../contexts/ModalContext/ModalContext';
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import FileUploaded from '../FileUploaded/FileUploaded';

export default function FileUploading(props) {
    //
    const { modalActions, modalDispatch } = useContext(ModalContext);
    const { file, success, setSuccess, setFile, refInputFile, refVideo, setDuration, duration } = props;
    const add = 20;
    const [left, setLeft] = useState(225);
    const [right, setRight] = useState(45);
    const [percent, setPercent] = useState(0);
    const [pause, setPause] = useState(false);
    useEffect(() => {
        //
        let timeOut;
        if (!pause) {
            timeOut = setTimeout(() => {
                let percentMain = 0;
                if (left + add > 405) {
                    setRight(right + add);
                    percentMain = ((100 / (360 / add)) * ((360 / add) - ((630 - ((left + add) + right)) / add)));
                }
                else {
                    setLeft(left + add);
                    percentMain = ((100 / (360 / add)) * ((360 / add) - ((630 - (left + (right + add))) / add)));
                }
                setPercent(percentMain);
            }, 50);
            if (right + add > 225) {
                clearTimeout(timeOut);
                setSuccess(true);
            }
        }
        return () => {
            clearTimeout(timeOut)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [left, right, pause])
    //
    return success ? <FileUploaded duration={duration} refVideo={refVideo} setDuration={setDuration} file={file} refInputFile={refInputFile} setFile={setFile} /> : (
        <div className="w-1/4 flex items-center border-2 border-solid border-gray-200 rounded-md border-opacity-70"
            style={{ height: 450 }}>
            <div className="w-full text-center">
                <div className="mx-auto mb-5 circle transform rotate-90">
                    <div className="circle__number">
                        {`${Math.ceil(percent)}%`}
                    </div>
                    <div className="circle__left">
                        <span style={{ transform: `rotate(${left}deg)` }}></span>
                    </div>
                    <div className="circle__right">
                        <span style={{ transform: `rotate(${right}deg)` }}></span>
                    </div>
                </div>
                <p className="text-gray-500 text-sm mb-5">Uploading tiktok_2.mp4</p>
                <ButtonComponent handleClick={() => {
                    setPause(true);
                    modalDispatch(modalActions.openModalWarning({
                        title: "Are you sure ?",
                        buttonFirst: "Yes , start over",
                        buttonSecond: "Continue Editing",
                        functionButtonFirst: () => {
                            setFile(null);
                        },
                        paramButtonSecond: false,
                        functionButtonSecond: (param) => {
                            setPause(param);
                        },
                    }))
                }} type="button" className="px-10 py-2 hover:bg-gray-100 text-sm font-semibold rounded-md border border-solid 
                border-gray-200">Cancel</ButtonComponent>
            </div>
        </div >
    )
}
