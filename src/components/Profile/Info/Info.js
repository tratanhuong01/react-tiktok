import React from 'react'
import { Link } from 'react-router-dom'

export default function Info() {
    return (
        <div className="w-full mt-5 mb-2">
            <ul className="flex items-center my-3 text-gray-700 opacity-80">
                <li className="mr-6">
                    <span className="font-semibold mr-1">80</span>
                    <span>Following</span>
                </li>
                <li className="mr-6">
                    <span className="font-semibold mr-1">3.9M</span>
                    <span>Followers</span>
                </li>
                <li className="mr-6">
                    <span className="font-semibold mr-1">80</span>
                    <span>Likes</span>
                </li>
            </ul>
            <div className="text-sm leading-6">
                Chính chủ ko acc phụ<br />
                Fb: Song Nhi Hiếu Thảo<br />
                IG:Songnhi.1407<br />
                Link có đủ⬇️<br />
                <p className="flex items-center">
                    <span className="bx bx-link mr-1"></span>
                    <Link className="font-bold hover:underline" to="">istabio.cc/3080501FWqtph</Link>
                </p>
            </div>
        </div>
    )
}
