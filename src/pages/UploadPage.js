import React, { useState, useEffect, useRef } from 'react'
import FileUploading from '../components/Upload/FileUploading/FileUploading'
import FormUpload from '../components/Upload/FormUpload/FormUpload'
import UploadController from '../components/Upload/UploadController/UploadController'
import WrapperPage from './WrapperPage'

export default function UploadPage() {
    //
    const [file, setFile] = useState();
    const refVideo = useRef();
    const [success, setSuccess] = useState(false);
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        document.title = "Tiktok Upload";
        if (file) {
            setSuccess(false);
        }
        return () => {
        }
    }, [file])
    //
    return (
        <WrapperPage>
            <div className={`w-full pt-8 pb-16 ${success ? 'px-10' : 'px-16'} border-2 border-solid border-gray-100 shadow-lg mt-24`}>
                <p className="text-2xl font-bold mb-1">
                    Upload video
                </p>
                <p className="text-gray-500 text-xl pb-10">Post a video to your account</p>
                <div className="w-full flex">
                    {file ? <FileUploading refVideo={refVideo} file={file} success={success}
                        setSuccess={setSuccess} setFile={setFile} setDuration={setDuration} duration={duration} />
                        : <UploadController setFile={setFile} />}
                    <div className="w-3/4 ml-5">
                        <FormUpload file={file} setFile={setFile} refVideo={refVideo} success={success} duration={duration} />
                    </div>
                </div>
            </div>
        </WrapperPage>
    )
}
