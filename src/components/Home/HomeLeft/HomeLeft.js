import React, { useContext, useState } from 'react'
import { ModalContext } from '../../../contexts/ModalContext/ModalContext';
import { UserContext } from '../../../contexts/UserContext/UserContext';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import FooterHomeLeft from './FooterHomeLeft/FooterHomeLeft';
import HashTag from './HashTag/HashTag';
import ItemAccountReCommended from './ItemAccountReCommended/ItemAccountReCommended';
import ItemHomeLeftTop from './ItemHomeLeftTop/ItemHomeLeftTop';

const ItemList = (props) => {
    //
    const { title, generalAccountRecommend, number, name, child } = props;
    const [limit, setLimit] = useState(number);
    //
    return (
        <>
            <p className="pt-5 pb-2 px-3 text-gray-600 font-semibold hidden md:block">
                {title}
            </p>
            <ul className="w-full pt-1 mb-6 border-b-2 border-solid border-gray-100">
                {generalAccountRecommend(name, child, limit)}
                <div className="my-3 md:pl-3 text-center md:text-left">
                    <span onClick={() => setLimit(limit === number ? 12 : number)} className="font-semibold text-sm text-main cursor-pointer">
                        {limit <= number ? 'See all' : 'See less'}
                    </span>
                </div>
            </ul>
        </>
    );
}

export default function HomeLeft() {
    //
    const { modalDispatch, modalActions } = useContext(ModalContext);
    const { user } = useContext(UserContext);
    const generalAccountRecommend = (name, child, limit) => {
        let arr = [];
        for (let index = 0; index < limit; index++) {
            arr.push(index)
        }
        return arr.map((item, index) => {
            return <ItemAccountReCommended
                key={index}
                src="https://res.cloudinary.com/huongdev2k1/image/upload/v1636725936/255009803_3041975736085606_4431487666238605481_n_nxbzjl.jpg"
                alt=""
                name={name}
                child={child}
            />
        })
    }
    //
    return (
        <div className="content__left h-screen overflow-y-auto my-3 pr-2 fixed bg-white z-30 pt-20">
            <ul className="w-full py-2 border-b-2 border-solid border-gray-100">
                <ItemHomeLeftTop icon="bx bx-home" content="For you" active={true} />
                <ItemHomeLeftTop icon="bx bx-user" content="Following" active={false} />
                {user &&
                    <ItemHomeLeftTop icon="bx bx-video-recording" content="LIVE" active={false} />
                }
            </ul>
            {!user &&
                <>
                    <p className="w-full py-2 px-3 my-1 text-gray-500 hidden md:flex">
                        Sign in to follow authors, like videos, and view comments.
                    </p>
                    <div className="w-full px-3 pb-6 border-b-2 border-solid border-gray-100 hidden md:block">
                        <ButtonComponent handleClick={() => modalDispatch(modalActions.openModalLogin())} type="button"
                            className="py-3 rounded-md w-full border border-solid border-color-main text-main font-bold
                            hover:bg-pink-50">
                            Login
                        </ButtonComponent>
                    </div>
                </>
            }
            <ItemList number={4} title={"Recommended accounts"} generalAccountRecommend={generalAccountRecommend}
                name={"yeah1.trending"} child={"Yeah1 Trending"} />
            {user &&
                <ItemList number={6} title={"Following accounts"} generalAccountRecommend={generalAccountRecommend}
                    name={"huong.dev"} child={"Huong Dev"} />
            }
            <HashTag />
            <FooterHomeLeft />
        </div>
    )
}
