import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../../../../ButtonComponent/ButtonComponent';

export default function ViewProfileMini() {
    //
    const [following, setFollowing] = useState(false);
    //
    return (
        <div className="w-80 shadow-3xl border border-solid border-gray-100 p-3 rounded-sm absolute 
        z-50 top-6 left-0 hover__block bg-white">
            <div className="relative w-full">
                <div className="w-full">
                    <Link to="">
                        <img src="https://res.cloudinary.com/huongdev2k1/image/upload/v1636725936/255009803_3041975736085606_4431487666238605481_n_nxbzjl.jpg"
                            alt="" className="w-12 h-12 object-cover rounded-full " />
                    </Link>
                    <ButtonComponent handleClick={() => setFollowing(!following)} type="button"
                        className={`font-bold px-6 py-1.5 text-sm rounded-lg border border-solid absolute -top-3 md:top-0 right-1 
                            ${following ? ' border-gray-300' : 'text-main hover:bg-pink-50 border-color-main'}  z-10`}>
                        {following ? 'Following' : 'Follow'}
                    </ButtonComponent>
                </div>
                <p className="font-semibold text-xl mb-1">huongdev</p>
                <p className="text-sm mb-2">haha🤣🤣🤣🤣</p>
                <div className="flex my-4 items-center">
                    <span className="font-semibold mr-2">18</span>
                    <span>Followers</span>
                    <span className="font-semibold ml-5 mr-2">1k8</span>
                    <span>Likes</span>
                </div>
                <hr className="border-gray-300 px-4"></hr>
                <p className="py-3">haha</p>
            </div>
        </div>
    )
}
