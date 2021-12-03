import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import InputComponent from '../../InputComponent/InputComponent'

export default function DetailVideoRight() {
    //
    const [following, setFollowing] = useState(false);
    //
    return (
        <div className="w-2/5 h-full ">
            <div className="w-11/12 mx-auto h-full overflow-hidden">
                <div className="w-full h-2/6 pt-12">
                    <div className="w-full flex relative">
                        <Link to={""}>
                            <img src="https://res.cloudinary.com/huongdev2k1/image/upload/v1636725936/255009803_3041975736085606_4431487666238605481_n_nxbzjl.jpg"
                                alt="" className="w-12 h-12 rounded-full mr-2" />
                        </Link>
                        <div className="">
                            <p className="font-semibold mb-1">huongdev2k1</p>
                            <p className=" mb-1 text-sm">huongdev . 20-11-2021</p>
                        </div>
                        <ButtonComponent type="button"
                            className={`font-bold px-6 py-1.5 text-sm rounded-lg border border-solid absolute -top-3 md:top-0 right-1 
                            ${following ? ' border-gray-300' : 'text-main hover:bg-pink-50 border-color-main'}  z-10`}>
                            {following ? 'Following' : 'Follow'}
                        </ButtonComponent>
                    </div>
                    <p className="mb-1.5 text-gray-600 text-xm mt-5">một nụ hồng dành cho mắt naiii 🥺
                        <span className="font-bold">#crush</span>
                    </p>
                    <p className="flex cursor-pointer items-center">
                        <i className='bx bxs-music text-base text-gray-800 mr-3' ></i>
                        <span className="hover:underline font-bold">Mắt nai - 𝚑𝚘𝚗𝚐𝚑𝚘𝚊𝚗𝚐𝚔𝚑𝚊𝚗𝚐</span>
                    </p>
                </div>
                <div className="w-full h-3/6">

                </div>
                <div className="flex py-5 w-full h-1/6 items-end">
                    <div className="w-full flex items-center">
                        <div className="w-3/4 flex items-center">
                            <InputComponent type="text" className="w-3/4 p-2.5 rounded-full border-2 border-gray-300 bg-gray-100 
                            rounded-full" placeholder="Add comment" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
