import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import DateSelect from '../../../DateSelect/DateSelect'
import WrapperModalAuthenication from '../WrapperModalAuthenication'
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonComponent from '../../../ButtonComponent/ButtonComponent';
import FormLoginWithAccount from '../LoginWithAccount/FormLoginWithAccount/FormLoginWithAccount';
import * as validations from "../Validation";

export default function SigninWithAccount() {
    //
    const [mode, setMode] = useState(true);
    const [birthday, setBirthday] = useState({
        day: null, month: null, year: null
    });
    const { register, handleSubmit, reset, formState: { isDirty, isValid, errors }, setValue } = useForm({
        resolver: yupResolver(
            mode ? validations.schemaSignInPhone : validations.schemaSignInEmail
        ),
        mode: "onChange",
    });
    useEffect(() => {
        //
        reset();
        setValue('day', birthday.day);
        setValue('month', birthday.month);
        setValue('year', birthday.year);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode]);
    //
    return (
        <WrapperModalAuthenication title="Sign up" backToMain={true}>
            <form onSubmit={handleSubmit(() => alert("oke"))} className="w-4/5 mx-auto">
                <DateSelect setValue={setValue} register={register} errors={errors}
                    birthday={birthday} setBirthday={setBirthday} />
                <div className="w-full mb-2 mt-4 flex justify-between items-center">
                    <span className="font-semibold">{
                        mode ? 'Phone' : 'Email'
                    }</span>
                    <span onClick={() => setMode(!mode)} className="text-sm cursor-pointer">
                        {mode ? 'Log in with email' :
                            'Log in with phone'}
                    </span>
                </div>
                <FormLoginWithAccount forget={true} setForget={() => ""} setMode={setMode} mode={mode}
                    login={true} setLogin={() => ""} register={register} errors={errors} />
                <ButtonComponent type="submit" className={`w-full p-2.5 rounded-sm mt-2 ${!isDirty || !isValid ?
                    'cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-main text-white'} `}
                    disabled={!isDirty || !isValid}
                >
                    Next
                </ButtonComponent>
            </form>
        </WrapperModalAuthenication>
    )
}
