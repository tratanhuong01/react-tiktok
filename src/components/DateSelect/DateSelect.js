import React, { useState } from 'react'

const monthList = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const monthNumberList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];

const dayList = Array.from({ length: 31 }, (_, i) => i + 1);

const yearList = Array.from({ length: 100 }, (_, i) => 2021 - i);

const ItemMain = (propsChild) => {
    //
    const { name, item, content, value, setContent, setValue, setIndex, setBirthday, birthday } = propsChild;
    //
    return (
        <li onClick={() => {
            setContent(content);
            setIndex(-1);
            setValue(name, item);
            setBirthday({ ...birthday, [name]: item })
        }} className={` p-2 
            ${value === content ? 'bg-gray-200' : ' hover:bg-gray-200'} border-b border-gray-100 border-solid 
        `}>{content}</li>
    )
}

const ItemDateSelect = (props) => {
    //
    const [data, setData] = useState();
    const { name, index, setIndex, position, setValue, errors, register, setBirthday, birthday } = props;
    const dataRender = () => {
        switch (position) {
            case 0:
                return monthList.map((item, index) => <ItemMain key={index} setContent={setData} setValue={setValue}
                    content={item} item={monthNumberList[index]} name="month" value={data} setIndex={setIndex}
                    birthday={birthday} setBirthday={setBirthday} />)
            case 1:
                return dayList.map((item, index) => <ItemMain key={index} setContent={setData} setValue={setValue}
                    content={item} item={item} name="day" value={data} setIndex={setIndex}
                    birthday={birthday} setBirthday={setBirthday} />)
            case 2:
                return yearList.map((item, index) => <ItemMain key={index} setContent={setData} setValue={setValue}
                    content={item} item={item} name="year" value={data} setIndex={setIndex}
                    birthday={birthday} setBirthday={setBirthday} />)
            default:
                return "";
        }
    }
    //
    return (
        <div className={` bg-gray-100 hover:bg-gray-200 ${errors[name.toLowerCase()] && 'border border-solid border-red-600'} 
        cursor-pointer text-base relative rounded-sm ${!data ? 'text-gray-500' : 'text-gray-800'} `} style={{ width: "32%" }}>
            <input {...register(name.toLowerCase(), { required: true })} name={name.toLowerCase()} className="hidden" />
            <div onClick={() => setIndex(position === index ? -1 : position)} className="w-full p-3">
                {data ? data : name}
                <span className="absolute top-1/2 transform -translate-y-1/2 right-2 bx bxs-chevron-down 
                cursor-pointer"></span>
            </div>
            {index === position &&
                <ul className="absolute bg-white z-20 w-full text-sm top-full mt-0.5 left-0 py-1.5 overflow-x-hidden 
                overflow-y-auto max-h-60 border border-solid border-gray-300 shadow-md">
                    {dataRender()}
                </ul>}
        </div>
    )
}

export default function DateSelect(props) {
    //
    const { setValue, errors, register, birthday, setBirthday } = props;
    const [index, setIndex] = useState(-1);
    //
    return (
        <>
            <p onClick={() => setIndex(-1)} className="my-1.5 font-semibold w-full">When’s your birthday?</p>
            <div className="w-full flex items-center justify-between">
                <ItemDateSelect name="Month" setValue={setValue} index={index} setIndex={setIndex} position={0}
                    register={register} errors={errors} birthday={birthday} setBirthday={setBirthday} />
                <ItemDateSelect name="Day" setValue={setValue} index={index} setIndex={setIndex} position={1}
                    register={register} errors={errors} birthday={birthday} setBirthday={setBirthday} />
                <ItemDateSelect name="Year" setValue={setValue} index={index} setIndex={setIndex} position={2}
                    register={register} errors={errors} birthday={birthday} setBirthday={setBirthday} />
            </div>
            <p className="text-xs text-gray-600 my-1.5">Your birthday won't be shown publicly.</p>
        </>
    )
}
