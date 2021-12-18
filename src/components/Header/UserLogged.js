import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { PAGE_PROFILE, PAGE_UPLOAD } from '../../constants/Config';
import { UserContext } from '../../contexts/UserContext/UserContext';

const ItemPopupUserChoose = (props) => {
    //
    const history = useNavigate();
    const { name, icon, handleClick } = props;
    //
    return (
        <li onClick={() => typeof handleClick === "function" && handleClick(history)}
            className=" p-2 cursor-pointer hover:bg-gray-50 flex items-center">
            <span className={`${icon} text-gray-800 text-xl mr-3 `}>
            </span>
            <div className="font-semibold">
                {name}
            </div>
        </li>
    );
}

export default function UserLogged() {
    //
    const history = useNavigate();
    const { userDispatch, userActions } = useContext(UserContext);
    const datas = [
        {
            id: 0,
            icon: "bx bx-user",
            name: "View Profile",
            handleClick: (history) => history(PAGE_PROFILE)
        },
        {
            id: 1,
            icon: "bx bx-dollar-circle",
            name: "Get coin"
        },
        {
            id: 2,
            icon: "bx bx-line-chart",
            name: "View analytics"
        },
        {
            id: 3,
            icon: "bx bx-shape-circle",
            name: "Settings"
        },
        {
            id: 4,
            icon: "bx bx-help-circle",
            name: "Feedback and help"
        },
        {
            id: 5,
            icon: "bx bxs-keyboard",
            name: "Keyboard shortcuts"
        }
    ];
    //
    return (
        <ul className="flex items-center">
            <li onClick={() => history(PAGE_UPLOAD)} className="px-3 py-2.5 font-bold cursor-pointer">
                <i className='bx bx-cloud-upload text-3xl'></i>
            </li>
            <li className="px-3 py-2.5 font-bold cursor-pointer">
                <i className='bx bx-send transform -rotate-45 text-3xl scale-90 -translate-y-0.5'></i>
            </li>
            <li className="px-3 py-2.5 font-bold cursor-pointer">
                <i className='bx bx-message-dots text-2xl transform translate-y-0.5'></i>
            </li>
            <li className="px-3 py-2.5 font-bold cursor-pointer relative item__hover">
                <img src="https://res.cloudinary.com/huongdev2k1/image/upload/v1639533621/E-Commerce/AvatarUser/1000000024.jpg"
                    alt="" className="w-9 h-9 rounded-full object-cover" />
                <div className="w-60 absolute top-full -mt-4 rounded-md right-2 hover__block hidden py-4">
                    <ul className="w-full mb-3 py-1 hover__block border-2 bg-white border-solid border-gray-200 shadow-lg 
                    rounded-md">
                        {datas.map(data => <ItemPopupUserChoose name={data.name}
                            handleClick={() => typeof data.handleClick === "function" ? data.handleClick(history) : ""}
                            icon={data.icon} key={data.id} />)}
                        <hr className="mt-3" />
                        <li onClick={() => userDispatch(userActions.logoutUser())} className=" p-2 bg-white mt-3 cursor-pointer hover:bg-gray-50 flex items-center">
                            <span className={`bx bx-log-out text-gray-800 text-xl mr-3 `}>
                            </span>
                            <div className="font-semibold">
                                Logout
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}
