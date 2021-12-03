import React, { useContext, useEffect, useRef } from 'react'
import { ModalContext } from '../../../contexts/ModalContext/ModalContext';
import VideoShow from '../VideoShow/VideoShow';

export default React.memo(function FileUploaded(props) {
    //
    const { file, setFile, refVideo, setDuration, duration } = props;
    const refInputFile = useRef();
    const refButtonClick = useRef();
    const { modalActions, modalDispatch } = useContext(ModalContext);
    useEffect(() => {
        //
        if (file) {
            if (refButtonClick.current) {
                refButtonClick.current.click();
            }
        }
        //
    }, [file, refVideo, duration]);
    //
    return (
        <div className=""
            style={{ width: "28%", height: 555 }}>
            <div className="w-full -mt-8 border-gray-600 border-4 border-solid rounded-3xl h-full bg-gray-600">
                <div className="w-full border-gray-800 border-8 border-solid rounded-3xl h-full bg-gray-800 relative">
                    <div className="w-full border-black border-solid h-full border-t-4 border-b-4 bg-black rounded-3xl 
                    relative">
                        <VideoShow refVideo={refVideo} setDuration={setDuration} file={file} refButtonClick={refButtonClick} />
                        <ul className="w-20 absolute -right-3 bottom-12">
                            <li className="flex justify-center my-4 w-full opacity-60">
                                <img src={`https://res.cloudinary.com/huongdev2k1/image/upload/v1636725936/255009803_3041975736085606_4431487666238605481_n_nxbzjl.jpg`}
                                    alt=""
                                    className="w-11 h-11 object-cover rounded-full"
                                />
                            </li>
                            <li className="flex justify-center my-4 w-full opacity-80 text-gray-200">
                                <i className="bx bxs-heart text-4xl "></i>
                            </li>
                            <li className="flex justify-center my-4 w-fullopacity-80 text-gray-200">
                                <i className="bx bxs-comment-detail text-2xl "></i>
                            </li>
                            <li className="flex justify-center my-4 w-full opacity-80 text-gray-200">
                                <i className="bx bxs-share text-2xl "></i>
                            </li>
                            <li className="flex justify-center my-4 opacity-60">
                                <div className="w-12 h-12 spin__circle rounded-full flex items-center justify-center bg-black">
                                    <img src={`https://res.cloudinary.com/huongdev2k1/image/upload/v1636725936/255009803_3041975736085606_4431487666238605481_n_nxbzjl.jpg`}
                                        alt=""
                                        className="w-7 h-7 object-cover rounded-full"
                                    />
                                </div>
                            </li>
                        </ul>
                        <ul className="w-full absolute text-gray-100 opacity-60 bottom-0 left-0 flex justify-between items-center my-2s">
                            <li className="py-2 pl-4 text-center">
                                <p className="bx bx-home text-xl"></p>
                                <p className="-mt-1" style={{ fontSize: 8 }}>Home</p>
                            </li>
                            <li className="p-2 text-center">
                                <p className="bx bx-search text-xl"></p>
                                <p className="-mt-1" style={{ fontSize: 8 }}>Discover</p>
                            </li>
                            <li className="flex items-center w-8 text-black justify-center h-5 text-center bg-white">
                                <span className="bx bx-plus text-2xl"></span>
                            </li>
                            <li className="p-2 text-center">
                                <p className="bx bx-comment-detail text-xl"></p>
                                <p className="-mt-1" style={{ fontSize: 8 }}>Inbox</p>
                            </li>
                            <li className="p-2 text-center">
                                <p className="bx bx-user text-xl"></p>
                                <p className="-mt-1" style={{ fontSize: 8 }}>Me</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-5 border-2 flex items-center justify-between border-solid border-gray-300 p-3 text-xs w-full w-1/4 
            rounded-xl">
                <div className="flex items-center">
                    <span className="bx bx-check-circle text-xl mr-2"></span>
                    <span className="text-gray-600">{file.name}</span>
                </div>
                <input ref={refInputFile} type="file"
                    className="hidden"
                />
                <span onClick={() => modalDispatch(modalActions.openModalWarning({
                    title: "Replace this video",
                    description: "Caption and video settings will still be saved.",
                    buttonFirst: "Replace",
                    buttonSecond: "Continue editing",
                    paramButtonFirst: refInputFile.current,
                    functionButtonFirst: (inputFile) => {
                        if (inputFile) {
                            inputFile.addEventListener('change', (event) => {
                                if (event.target.files.length > 0) {
                                    setFile(event.target.files[0])
                                }
                            });
                            inputFile.addEventListener('click', () => {
                                setFile(null);
                            });
                            inputFile.click();
                        }
                    }
                }))} className="cursor-pointer text-xs hover:underline font-semibold">Change video</span>
            </div>
        </div >
    )
});
