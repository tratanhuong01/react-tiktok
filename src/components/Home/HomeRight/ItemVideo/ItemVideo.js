import React from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../../../ButtonComponent/ButtonComponent'
import VideoShow from './VideoShow'

export default function ItemVideo() {
    //
    //
    return (
        <div className="w-full box-content flex pb-4 mb-4 border-b border-solid border-gray-200">
            <div className="w-20">
                <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/dc6373c9f27bf0d04801297c1aa83193~c5_100x100.jpeg?x-expires=1637384400&x-signature=jMviPA52u4gdwwKuj9df1QcbhUA%3D"
                    alt="" className="w-16 h-16 rounded-full " />
            </div>
            <div className="relative block" style={{ width: "calc(100% - 80px)" }}>
                <div className="max-w-3/4">
                    <p className="flex mb-1.5 items-center">
                        <Link to="" className="font-bold mr-3 hover:underline">thaisalen89</Link>
                        <span className="text-sm text-gray-600">Thai salen</span>
                    </p>
                    <p className="mb-1.5 text-gray-600 text-xm">một nụ hồng dành cho mắt naiii 🥺
                        <span className="font-bold">#crush</span>
                    </p>
                    <p className="flex cursor-pointer items-center">
                        <i className='bx bxs-music text-base text-gray-800 mr-3' ></i>
                        <span className="hover:underline font-bold">Mắt nai - 𝚑𝚘𝚗𝚐𝚑𝚘𝚊𝚗𝚐𝚔𝚑𝚊𝚗𝚐</span>
                    </p>
                    <VideoShow />
                </div>
                <ButtonComponent type="button" className="font-bold px-6 py-1.5 text-sm rounded-lg border border-solid border-color-main 
                absolute top-3 right-3 text-main hover:bg-pink-50 z-10">
                    Follow
                </ButtonComponent>
            </div>
        </div>
    )
}
