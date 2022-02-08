import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import InputComponent from '../../InputComponent/InputComponent'
import IconShareVideo from './IconShareVideo';
import ItemComment from './ItemComment/ItemComment';

export default function DetailVideoRight() {
    //
    const [following, setFollowing] = useState(false);
    //
    return (
        <div className="lg:w-2/5 w-full h-full ">
            <div className="w-full mx-auto h-full flex flex-col overflow-hidden">
                <div className="w-11/12 mx-auto pt-10 items-start flex flex-col">
                    <div className="w-full flex relative">
                        <Link to={""}>
                            <img src="https://res.cloudinary.com/huongdev2k1/image/upload/v1639533621/E-Commerce/AvatarUser/1000000024.jpg"
                                alt="" className="w-12 h-12 object-cover rounded-full mr-2" />
                        </Link>
                        <div className="">
                            <p className="font-semibold mb-1">huongdev2k1</p>
                            <p className=" mb-1 text-sm">huongdev . 20-11-2021</p>
                        </div>
                        <ButtonComponent handleClick={() => setFollowing(!following)} type="button"
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
                    <div className="flex mt-6 items-center justify-between w-full">
                        <ul className="flex">
                            <li className="flex items-center pr-8">
                                <div className="w-9 h-9 flex justify-center mr-2 items-center rounded-full bg-gray-200
                                 cursor-pointer hover:bg-gray-300">
                                    <span className="bx bxs-heart text-2xl"></span>
                                </div>
                                <span className="text-sm font-semibold">55.5K</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-9 h-9 flex justify-center mr-2 items-center rounded-full bg-gray-200
                                 cursor-pointer hover:bg-gray-300">
                                    <span className="bx bx-comment-detail text-2xl"></span>
                                </div>
                                <span className="text-sm font-semibold">545</span>
                            </li>
                        </ul>
                        <ul className="flex items-center">
                            <li className="mr-3">Share to</li>
                            <IconShareVideo color="text-green-600" description="Share to WhatsApp"
                                icon={"bx bxl-whatsapp-square rounded-full"} />
                            <IconShareVideo color="text-blue-600" description="Share to Facebook"
                                icon={"bx bxl-facebook-circle rounded-full"} />
                            <IconShareVideo color="text-blue-400" description="Share to Twiiter"
                                icon={"bx bxl-twitter rounded-full"} />
                            <IconShareVideo color="text-gray-600" description="Embed"
                                icon={"bx bx-code rounded-full"} />
                        </ul>
                    </div>
                    <div className="w-full flex my-5">
                        <InputComponent type="text" className="w-4/5 p-2 bg-gray-100 border-t border-l border-b border-solid border-gray-300"
                            value="https://www.tiktok.com/@songnhi_1407/video/7036704004268657921?is_from_webapp=1&sender_device=pc&
                            web_id7036906965452375554" disabled={true} />
                        <ButtonComponent type="button" className="border border-solid border-gray-300 py-2 w-1/5">Copy Link</ButtonComponent>
                    </div>
                </div>
                <div className="w-full bg-gray-100 flex flex-col flex-1 " >
                    <div className="w-11/12 overflow-y-auto overflow-x-hidden h-full max-h-full mx-auto">
                        <ItemComment />
                        <div className="ml-auto pt-2" style={{ width: "calc(100% - 56px)" }}>
                            <ItemComment creator={true} />
                            <ItemComment />
                        </div>
                    </div>
                </div>
                <hr className="border-gray-200" />
                <div className="flex py-5 w-11/12 mx-auto flex items-end">
                    <div className="w-full flex items-center">
                        <div className="w-11/12 flex items-center relative">
                            <InputComponent type="text" className="w-full py-2.5 pl-2.5 pr-16 rounded-xl bg-gray-200"
                                placeholder="Add comment" />
                            <div className="flex absolute right-2 items-center top-1/2 transform -translate-y-1/2">
                                <ButtonComponent type="button" className="w-8 p-1 h-8 flex text-2xl items-center justify-center m-0.5 
                                hover:bg-gray-300 rounded-xm">
                                    @
                                </ButtonComponent>
                                <ButtonComponent type="button" className="mt-1.5 w-8 p-1 h-8 flex items-center justify-center m-0.5 
                                hover:bg-gray-300 rounded-xm">
                                    <span className="bx bx-smile text-2xl"></span>
                                </ButtonComponent>
                            </div>
                        </div>
                        <ButtonComponent type="button" className="px-5 py-2.5 font-semibold text-gray-400">
                            Post
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}
