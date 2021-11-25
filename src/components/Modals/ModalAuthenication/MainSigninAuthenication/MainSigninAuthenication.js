import React, { useContext, useState } from 'react'
import WrapperModalAuthenication from '../WrapperModalAuthenication'
import itemSigninStatics from "../itemSigninStatics";
import ItemAuthenication from '../ItemAuthenication/ItemAuthenication';
import { ModalAuthenicationContext } from '../../../../contexts/ModalAuthenicationContext/ModalAuthenicationContext';

export default function MainSigninAuthenication(props) {
    //
    const { modalAuthenicationActions, modalAuthenicationDispatch } = useContext(ModalAuthenicationContext);
    const [limit, setLimit] = useState(3);
    //
    return (
        <WrapperModalAuthenication title="Sign in to tiktok">
            <ul className="w-2/3 mx-auto overflow-y-auto overflow-x-hidden" style={{ maxHeight: 467 }}>
                {itemSigninStatics.map((item, index) =>
                    index < limit && <ItemAuthenication name={item.name} icon={item.icon} handleClick={() =>
                        typeof item.handleClick === "function" && item.handleClick(modalAuthenicationActions, modalAuthenicationDispatch)}
                        key={item.id} color={item.color} />)
                }
            </ul>
            <div className="my-2 text-center w-2/3 mx-auto">
                <span onClick={() => setLimit(limit > 3 ? 3 : itemSigninStatics.length)}
                    className={`bx bxs-chevron-${limit <= 3 ? 'down' : 'up'} text-xl cursor-pointer`}></span>
            </div>
        </WrapperModalAuthenication>
    )
}
