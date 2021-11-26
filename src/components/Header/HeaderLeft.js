import React from 'react'
import { Link } from 'react-router-dom'
import { PAGE_HOME } from '../../constants/Config'

export default function HeaderLeft() {
    return (
        <div className="w-2/5 md:w-1/4">
            <Link to={PAGE_HOME}>
                <img src="/images/logo.png" className="w-52 md:w-40 md:object-cover" alt="" srcSet="" />
            </Link>
        </div>
    )
}
