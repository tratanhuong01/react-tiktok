import React from 'react'

const ItemSharePopup = (props) => {
    //
    const { icon, name, bgColor } = props;
    //
    return (
        <li className="flex items-center p-2.5 cursor-pointer hover:bg-gray-50">
            <div className={`w-7 h-7 rounded-full ${bgColor} text-white mr-3 flex items-center justify-center`}>
                <i className={`${icon} text-sm`} ></i>
            </div>
            <div className="font-semibold">
                {name}
            </div>
        </li>
    )
}

export default function SharePopup(props) {
    //
    const dataShares = [
        {
            id: 0,
            name: "Embed",
            icon: "bx bx-code-alt",
            bgColor: "bg-gray-500"
        },
        {
            id: 1,
            name: "Share to twitter",
            icon: "bx bxl-twitter",
            bgColor: "bg-blue-400"
        },
        {
            id: 2,
            name: "Share to facebook",
            icon: "bx bxl-facebook-circle",
            bgColor: "bg-blue-600"
        },
        {
            id: 3,
            name: "Share to whatsApp",
            icon: "bx bxl-whatsapp",
            bgColor: "bg-green-500"
        },
        {
            id: 4,
            name: "Copy link",
            icon: "bx bxs-copy-alt",
            bgColor: "bg-pink-500"
        }
    ]
    //
    return (
        <div className="w-80 absolute bottom-full rounded-md left-0 hover__block hidden py-4">
            <ul className="w-full py-1 hover__block border-2 bg-white border-solid border-gray-200 shadow-lg rounded-md">
                {dataShares.map((data) =>
                    <ItemSharePopup icon={data.icon} name={data.name} bgColor={data.bgColor} key={data.id} />
                )}
            </ul>
        </div>
    )
}
