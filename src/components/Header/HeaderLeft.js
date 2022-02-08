import React from 'react'
import { Link } from 'react-router-dom'
import { PAGE_HOME } from '../../constants/Config'
import logo from "../../assets/images/logo.png";

export default function HeaderLeft() {
    return (
        <div className="w-2/5 md:w-1/5 md:w-1/4 flex items-center">
            <Link to={PAGE_HOME}>
                <img src={logo} className="w-36 xl:w-32 lg:object-contain md:object-cover"
                    alt="" />
            </Link>
        </div>
    )
}
