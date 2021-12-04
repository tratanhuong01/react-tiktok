import React from 'react'
import { Link } from 'react-router-dom'
import ViewProfileMini from './ViewProfileMini/ViewProfileMini';

export default function ItemComment(props) {
    //
    const { creator } = props;
    const dataPopups = [
        {
            id: 1,
            icon: "bx bx-send",
            content: "Send message",
            show: false,
        },
        {
            id: 0,
            icon: "bx bx-flag",
            content: "Report",
            show: true
        }];
    //
    return (
        <div className="w-full flex mb-1 mt-2 relative">
            <Link to="">
                <img src="https://res.cloudinary.com/huongdev2k1/image/upload/v1636725936/255009803_3041975736085606_4431487666238605481_n_nxbzjl.jpg"
                    alt="" className="w-12 h-12 object-cover rounded-full " />
            </Link>
            <div className="ml-3">
                <div className="mb-1 relative item__hover flex items-center"><Link to="" className="mr-1 font-semibold">huongdev</Link>
                    {creator && <>.<span className="text-main font-semibold ml-1 text-sm cursor-pointer">Creator</span></>}
                    <ViewProfileMini />
                </div>
                <p>haha🤣🤣🤣🤣</p>
                <ul className="flex items-center text-xs mt-2 text-gray-500">
                    <li className="pr-8 cursor-pointer">1d ago</li>
                    <li className="pr-8 cursor-pointer">Reply</li>
                </ul>
            </div>
            <div className="absolute -top-6 -right-3">
                <div className="relative cursor-pointer item__hover m-5 " >
                    <i className='bx bx-dots-horizontal-rounded text-gray-500 text-3xl'></i>
                    <div className="w-52 m-5 -mt-2 absolute top-full -right-5 hover__block z-50">
                        <ul className="w-full py-2 arrow__popup bg-white border border-solid 
                            border-gray-100 shadow-lg rounded-md hover__block z-50">
                            {dataPopups.map((data) =>
                                <li className={`w-full p-2 flex hover:text-main items-center hover:bg-gray-100 ${data.show || "hidden"}`} key={data.id}>
                                    <span className={`${data.icon} text-2xl mr-2`}></span>
                                    <span className="font-bold">{data.content}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 flex mt-3 flex-col transform -translate-y-1/2 text-center right-3 text-gray-500">
                <span className="bx bx-heart text-xl cursor-pointer"></span>
                <span className="text-sm -mt-1.5 font-semibold">12</span>
            </div>

        </div >
    )
}
