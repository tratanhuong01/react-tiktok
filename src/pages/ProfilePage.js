import React, { useState } from 'react'
import ButtonComponent from '../components/ButtonComponent/ButtonComponent'
import HomeLeft from '../components/Home/HomeLeft/HomeLeft'
import Info from '../components/Profile/Info/Info';
import Popup from '../components/Profile/Popup/Popup';
import VideoList from '../components/Profile/VideoList/VideoList';
import WrapperPage from './WrapperPage'

export default function ProfilePage() {
    //
    const [follow, setFollow] = useState(false);

    //
    return (
        <WrapperPage>
            <HomeLeft />
            <div className="content__right pt-24 relative">
                <div className="wrapper__profile ml-auto flex relative">
                    <img src="https://res.cloudinary.com/huongdev2k1/image/upload/v1636725936/255009803_3041975736085606_4431487666238605481_n_nxbzjl.jpg" alt=""
                        className="w-28 h-28 -ml-1.5 rounded-full mr-5" />
                    <div className="flex items-center">
                        <div className="">
                            <p className="text-3xl font-semibold mb-1">trahuongdev</p>
                            <p>Cor</p>
                            {follow ?
                                <div className="flex">
                                    <ButtonComponent className="w-40 py-1.5 mt-2 rounded-sm border border-solid border-color-main   
                                    font-semibold text-main hover:bg-pink-100" type="button">
                                        Message
                                    </ButtonComponent>
                                    <ButtonComponent handleClick={() => setFollow(false)} className="w-10 mt-2 rounded-sm 
                                    border border-solid border-gray-300 ml-2 hover:bg-gray-50" type="button">
                                        <span className="bx bx-user-check text-xl"></span>
                                    </ButtonComponent>
                                </div> :
                                <ButtonComponent handleClick={() => setFollow(true)} className="w-48 py-1.5 mt-3 rounded-sm bg-main hover:bg-second text-white 
                                font-semibold" type="button">
                                    Follow
                                </ButtonComponent>}
                        </div>
                    </div>
                    <Popup follow={follow} />
                </div>
                <div className="wrapper__profile ml-auto">
                    <Info />
                    <VideoList />
                </div>
            </div>
        </WrapperPage>
    )
}
