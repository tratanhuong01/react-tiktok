import React from 'react'

export default function IconShareVideo(props) {
    //
    const { description, icon, color } = props;
    //
    return (
        <li className="mr-0.5 relative item__hover">
            <div className="absolute bottom-full left-1/2 z-50 transform -translate-x-1/2 -ml-3.5 mb-2 hover__block">
                <div className="py-1.5 px-1.5 text-white rounded-sm text-sm relative arrow__center__bottom">
                    {description}
                </div>
            </div>
            <span className={`${icon} text-2xl ${color}`}>

            </span>
        </li>
    )
}
