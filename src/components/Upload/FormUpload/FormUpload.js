import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../../contexts/ModalContext/ModalContext';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import CheckboxComponent from '../../CheckboxComponent/CheckboxComponent';
import SelectComponent from '../../SelectComponent/SelectComponent';

export default function FormUpload(props) {
    //
    const { file, setFile, success, refVideo, duration } = props;
    const [caption, setCaption] = useState(file ? file.name : "");
    const [tag, setTag] = useState(false);
    const { modalActions, modalDispatch } = useContext(ModalContext);
    const [covers, setCovers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [coverActive, setCoverActive] = useState(0);
    const modes = [
        'Public', 'Friends', 'Private'
    ];
    const checkContain = (value) => {
        if (value.indexOf('@') !== -1)
            return true;
        return false;
    };
    const generateVideoThumbnail = (currentTime) => {
        return new Promise((resolve) => {
            if (refVideo.current) {
                const canvas = document.createElement("canvas");
                const video = document.createElement("video");

                // this is important
                video.autoplay = true;
                video.muted = true;
                video.src = refVideo.current.src
                video.currentTime = currentTime;
                video.onloadeddata = () => {
                    let ctx = canvas.getContext("2d");

                    canvas.width = 80;
                    canvas.height = 144;

                    ctx.drawImage(video, 0, 0, 80, 144);
                    video.pause();
                    return resolve(canvas.toDataURL("image/png"));
                };
            }
        });
    };
    useEffect(() => {
        //
        if (file) {
            setCaption(file.name);
            if (success) {
                if (refVideo.current) {

                    const load = async () => {
                        setLoading(true)
                        let images = [];
                        if (duration <= 8) {
                            for (let index = 0; index < duration; index++) {
                                images.push(await generateVideoThumbnail(index))
                            }
                        }
                        else {
                            const time = Math.ceil(duration / 8);
                            for (let index = 0; index < 8; index++) {
                                images.push(await generateVideoThumbnail(time * index))
                            }
                        }

                        setCovers(images);
                        setLoading(false);
                    }
                    load();

                }
            }
        }
        setCoverActive(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file, refVideo, duration]);
    //
    return (
        <form className="w-full -mt-7">
            <div className="w-full relative">
                <p className="w-full flex items-center justify-between">
                    <span className="font-semibold">Caption</span>
                    <span className="text-gray-500 text-xm">{caption.length}/150</span>
                </p>
                <div
                    onInput={(event) => {
                        if (checkContain(event.currentTarget.textContent)) {
                            setTag(true);
                        }
                        setCaption(event.currentTarget.textContent);
                    }}
                    html={caption}
                    className={`w-full border mt-1 border-solid border-gray-200 p-2.5 ${tag ? 'pl-10' : ""}`}
                    contentEditable={true}
                    suppressContentEditableWarning={true}>
                    {caption}
                </div>
                {!tag &&
                    <>
                        <span className="cursor-pointer text-xl absolute top-9 right-10">@</span>
                        <span className="cursor-pointer text-xl absolute top-9 right-4">#</span>
                    </>}
                {tag && <span className="cursor-pointer absolute text-2xl top-9 left-2 bx bx-search"></span>}
                {tag && <span onClick={() => setTag(false)} className="cursor-pointer absolute text-2xl top-9 right-4 bx bx-x"></span>}
                {tag &&
                    <div className="w-full absolute top-full mt-0.5 left-0 border-2 border-solid border-gray-200 z-30 
                    bg-white">
                        <p className="my-3 text-gray-500 pl-4 ">Following</p>
                        <ul className="w-full mt-2 h-52 max-h-52 overflow-y-auto">
                            <li className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
                                <img src="https://res.cloudinary.com/huongdev2k1/image/upload/v1636725936/255009803_3041975736085606_4431487666238605481_n_nxbzjl.jpg"
                                    alt="" className="w-14 p-0.5 h-14 rounded-full object-cover" />
                                <div className="flex items-center font-semibold pl-3">
                                    <div>
                                        <span className="font-semibold">Nhi Nhi</span><br></br>
                                        <span className="text-sm text-gray-500 -mt-2">@nhinhi_248</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>}

            </div>
            <div className="w-full relative mt-6">
                <p className="w-full flex items-center justify-between">
                    <span className="font-semibold">Cover</span>
                </p>
                <div className="w-full flex max-w-full overflow-y-hidden border border-solid border-gray-200 
                overflow-x-auto p-1.5 rounded-md">
                    {loading ? "loading...." : covers.length === 0 ?
                        <div className="bg-gray-100 w-20 h-36 mr-2 flex-shrink-1">
                        </div>
                        : covers.map((cover, index) =>
                            <div onClick={() => setCoverActive(index)} key={index} className={`bg-gray-100 
                            ${index === coverActive ? `transform scale-110 ${index === 0 ? 'ml-3' : 'ml-1'}  mr-3` :
                                    'opacity-40 mr-2 '} cursor-pointer  h-36 flex-shrink-1`} style={{ width: index === coverActive ? 90 : 80 }}>
                                <img src={cover} alt="" className="w-full h-full object-contain" />
                            </div>
                        )}
                </div>
                <p className="w-full flex items-center mt-6 justify-between">
                    <span className="font-semibold mb-2">Who can view this video</span>
                </p>
                <SelectComponent list={modes} data={modes[0]} className="w-80" />
                <p className="w-full flex items-center mt-6 justify-between">
                    <span className="font-semibold mb-2">Allow users to</span>
                </p>
                <div className="w-full flex mb-2">
                    <CheckboxComponent width={22} height={22} content={"Comment"} id="user__allow__1" checked={true} />
                    <CheckboxComponent width={22} height={22} content={"Duet"} id="user__allow__2" checked={true} />
                    <CheckboxComponent width={22} height={22} content={"Stitch"} id="user__allow__3" checked={true} />
                </div>
                <div className="w-full flex items-center mt-6">
                    <ButtonComponent handleClick={() => modalDispatch(modalActions.openModalWarning({
                        title: "Discard this post",
                        description: "The video and all edits will be discarded.",
                        buttonFirst: "Discard",
                        buttonSecond: "Continue Editing",
                        functionButtonFirst: () => {
                            setFile(null);
                        }
                    }))} type="button" className="w-44 py-2.5 border border-solid border-gray-100 hover:bg-gray-200 
                    font-400 hover:border-gray-300 rounded-md mr-5">Discard</ButtonComponent>
                    <ButtonComponent type="button" className={`w-44 py-2.5 border-2 border-solid border-gray-100  
                    rounded-md mr-5 ${file && success && 'bg-main text-white'} `} disabled={file ? false : true}>Post</ButtonComponent>
                </div>
            </div>
        </form >
    )
}
