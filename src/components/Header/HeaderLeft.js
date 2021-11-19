import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLeft() {
    return (
        <div className="w-1/4">
            <Link to=""><img src="/images/logo.png" className="w-40 object-cover" alt="" srcSet="" /></Link>
        </div>
    )
}
