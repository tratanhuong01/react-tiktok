import React, { useContext } from 'react'
import { ModalAuthenicationContext } from '../../../../contexts/ModalAuthenicationContext/ModalAuthenicationContext';
import ItemAuthenication from '../ItemAuthenication/ItemAuthenication';
import itemLoginStatics from '../itemLoginStatics'
import WrapperModalAuthenication from '../WrapperModalAuthenication';

export default function MainLoginAuthenication(props) {
    //
    const { modalAuthenicationActions, modalAuthenicationDispatch } = useContext(ModalAuthenicationContext);
    //
    return (
        <WrapperModalAuthenication title="Log in to tiktok">
            <ul className="w-2/3 mx-auto overflow-y-auto overflow-x-hidden" style={{ maxHeight: 467 }}>
                {itemLoginStatics.map((item) =>
                    <ItemAuthenication name={item.name} icon={item.icon} handleClick={() =>
                        typeof item.handleClick === "function" && item.handleClick(modalAuthenicationActions, modalAuthenicationDispatch)}
                        key={item.id} color={item.color} />)
                }
            </ul>

        </WrapperModalAuthenication>
    )
}
