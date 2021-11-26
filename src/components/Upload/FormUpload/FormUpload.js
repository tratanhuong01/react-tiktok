import React, { useRef, useState } from 'react'
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import CheckboxComponent from '../../CheckboxComponent/CheckboxComponent';
import SelectComponent from '../../SelectComponent/SelectComponent';

export default function FormUpload() {
    //
    const [caption, setCaption] = useState("");
    const [tag, setTag] = useState(false);
    const modes = [
        'Public', 'Friends', 'Private'
    ]
    const checkContain = (value) => {
        if (value.indexOf('@') !== -1)
            return true;
        return false;
    };
    //
    return (
        <form className="w-full -mt-7">
            <div className="w-full relative">
                <p className="w-full flex items-center justify-between">
                    <span className="font-semibold">Caption</span>
                    <span className="text-gray-500 text-xm">0/150</span>
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
                    <div className="bg-gray-100 w-20 h-36 mr-2">
                        <img src="" alt="" className="w-full h-full" />
                    </div>
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
                    <ButtonComponent type="button" className="w-44 py-2.5 border border-solid border-gray-100 hover:bg-gray-200 
                    font-400 hover:border-gray-300 rounded-md mr-5">Discard</ButtonComponent>
                    <ButtonComponent type="button" className="w-44 py-2.5 border-2 border-solid border-gray-100 rounded-md mr-5" disabled={true}>Post</ButtonComponent>
                </div>
            </div>
        </form >
    )
}
