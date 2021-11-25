import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLeft() {
    return (
        <div className="w-2/5 md:w-1/4">
            <Link to=""><img src="/images/logo.png" className="w-52 md:w-40 md:object-cover" alt="" srcSet="" /></Link>
        </div>
    )
}
