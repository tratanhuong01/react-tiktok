import React from 'react'
import { Link } from 'react-router-dom';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import FooterHomeLeft from './FooterHomeLeft/FooterHomeLeft';
import HashTag from './HashTag/HashTag';
import ItemAccountReCommended from './ItemAccountReCommended/ItemAccountReCommended';
import ItemHomeLeftTop from './ItemHomeLeftTop/ItemHomeLeftTop';

export default function HomeLeft() {
    return (
        <div className="content__left h-screen overflow-y-auto my-3 pr-2 fixed bg-white z-30 pt-20">
            <ul className="w-full py-2 border-b-2 border-solid border-gray-100">
                <ItemHomeLeftTop icon="bx bx-home" content="For you" active={true} />
                <ItemHomeLeftTop icon="bx bx-user" content="Following" active={false} />
            </ul>
            <p className="w-full py-2 px-3 my-1 text-gray-500 ">
                Sign in to follow authors, like videos, and view comments.
            </p>
            <div className="w-full px-3 pb-6 border-b-2 border-solid border-gray-100">
                <ButtonComponent type="button" className="py-3 rounded-md w-full border border-solid border-color-main text-main font-bold
                     hover:bg-pink-50">
                    Login
                </ButtonComponent>
            </div>
            <p className="pt-5 pb-2 px-3 text-gray-600 font-semibold">
                Recommended account
            </p>
            <ul className="w-full pt-1 mb-6 border-b-2 border-solid border-gray-100">
                <ItemAccountReCommended
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1637362800&x-signature=%2Bumu76dG4Sgw5YesbxwNCoIAe4U%3D"
                    alt=""
                    name="theanh28entertainment"
                    child="Theanh28entertainment"
                />
                <ItemAccountReCommended
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ace3ef6a9607c43e027a7159dfbfd564.jpeg?x-expires=1637384400&x-signature=%2FK8S4z5jzKxrrF1DHpBJcghervo%3D"
                    alt=""
                    name="yeah1.trending"
                    child="Yeah1 Trending"
                />
                <div className="my-3 pl-3">
                    <Link to="" className="font-semibold text-sm text-main">See all</Link>
                </div>
            </ul>
            <HashTag />
            <FooterHomeLeft />
        </div>
    )
}
