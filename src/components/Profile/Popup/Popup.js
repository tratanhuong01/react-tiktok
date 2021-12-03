import React from 'react'

export default function Popup(props) {
    //
    const { follow } = props;
    const dataPopups = [
        {
            id: 1,
            icon: "bx bx-send",
            content: "Send message",
            show: !follow,
        },
        {
            id: 0,
            icon: "bx bx-flag",
            content: "Report",
            show: true
        }];
    //
    return (
        <div className="absolute top-0 right-0">
            <div className="relative m-4 item__hover">
                <span className="bx bx-dots-horizontal-rounded text-3xl cursor-pointer">

                </span>
                <ul className="w-52 py-2 arrow__popup absolute top-full -mt-1 right-0 bg-white border border-solid 
                            border-gray-100 shadow-lg rounded-md hover__block z-50">
                    {dataPopups.map((data) =>
                        <li className={`w-full p-2 flex items-center hover:bg-gray-100 ${data.show || "hidden"}`} key={data.id}>
                            <span className={`${data.icon} text-2xl mr-2`}></span>
                            <span className="font-bold">{data.content}</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
