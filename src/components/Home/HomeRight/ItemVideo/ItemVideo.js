import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { PAGE_DETAIL_VIDEO } from '../../../../constants/Config'
import { ModalContext } from '../../../../contexts/ModalContext/ModalContext'
import { UserContext } from '../../../../contexts/UserContext/UserContext'
import ButtonComponent from '../../../ButtonComponent/ButtonComponent'
import VideoShow from './VideoShow'

export default function ItemVideo(props) {
    //
    const { pos } = props;
    const { modalActions, modalDispatch } = useContext(ModalContext);
    const [following, setFollowing] = useState(false);
    const { user } = useContext(UserContext);
    //
    return (
        <div className="w-full box-content flex pb-5 mb-4 border-b border-solid border-gray-200">
            <div className="w-16 mr-3 md:w-20">
                <img src="https://res.cloudinary.com/huongdev2k1/image/upload/v1636725936/255009803_3041975736085606_4431487666238605481_n_nxbzjl.jpg"
                    alt="" className="w-16 h-16 rounded-full " />
            </div>
            <div className="relative block" style={{ width: "calc(100% - 80px)" }}>
                <div className="max-w-3/4">
                    <p className="flex mb-1.5 items-center">
                        <Link to={PAGE_DETAIL_VIDEO} className="font-bold mr-3 hover:underline">thaisalen89</Link>
                        <span className="text-sm text-gray-600">Thai salen</span>
                    </p>
                    <p className="mb-1.5 text-gray-600 text-xm">một nụ hồng dành cho mắt naiii 🥺
                        <span className="font-bold">#crush</span>
                    </p>
                    <p className="flex cursor-pointer items-center">
                        <i className='bx bxs-music text-base text-gray-800 mr-3' ></i>
                        <span className="hover:underline font-bold">Mắt nai - 𝚑𝚘𝚗𝚐𝚑𝚘𝚊𝚗𝚐𝚔𝚑𝚊𝚗𝚐</span>
                    </p>
                    <VideoShow pos={pos} active={props.active} index={props.index} setOnVolume={props.setOnVolume}
                        onVolume={props.onVolume} />
                </div>
                <ButtonComponent handleClick={() => user ? setFollowing(!following) :
                    modalDispatch(modalActions.openModalLogin())} type="button"
                    className={`font-bold px-6 py-1.5 text-sm rounded-lg border border-solid absolute -top-3 md:top-0 right-1 
                    ${following ? ' border-gray-300' : 'text-main hover:bg-pink-50 border-color-main'}  z-10`}>
                    {following ? 'Following' : 'Follow'}
                </ButtonComponent>
            </div>
        </div>
    )
}
