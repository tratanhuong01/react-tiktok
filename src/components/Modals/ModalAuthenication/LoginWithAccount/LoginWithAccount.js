import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import WrapperModalAuthenication from '../WrapperModalAuthenication'
import FormLoginWithAccount from './FormLoginWithAccount/FormLoginWithAccount';
import * as validations from "../Validation";
import ButtonComponent from '../../../ButtonComponent/ButtonComponent';
import { UserContext } from '../../../../contexts/UserContext/UserContext';
import { ModalContext } from '../../../../contexts/ModalContext/ModalContext';

export default function LoginWithAccount() {
    //
    const { userActions, userDispatch } = useContext(UserContext);
    const { modalActions, modalDispatch } = useContext(ModalContext);
    const [mode, setMode] = useState(true);
    const [forget, setForget] = useState(false);
    const [login, setLogin] = useState(true);
    const schema = mode ? forget ? validations.schemaLoginPhoneResetPassword :
        login ? validations.schemaLoginPhoneCode : validations.schemaLoginPhonePassword :
        forget ? validations.schemaLoginEmailResetPassword : validations.schemaLoginEmail;
    const { register, handleSubmit, reset, formState: { isDirty, isValid, errors } } = useForm({
        resolver: yupResolver(
            schema
        ),
        mode: "onChange",
    });
    useEffect(() => {
        //
        reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode, login]);
    //
    return (
        <WrapperModalAuthenication title={forget ? 'Reset password' : 'Log in'} backToMain={true}>
            <form onSubmit={handleSubmit(() => {
                userDispatch(userActions.loginUser({ name: "Huong Dev" }));
                modalDispatch(modalActions.closeModal());
            })} className="w-4/5 mx-auto">
                <div className="w-full my-2 flex justify-between items-center">
                    <span className="font-semibold">{
                        mode ? forget ? 'Enter number phone' : 'Phone' : forget ? 'Enter email address' : 'Email Or Username'
                    }</span>
                    <span onClick={() => setMode(!mode)} className="text-sm cursor-pointer">
                        {mode ? forget ? 'Reset with email' : 'Log in with email or username' :
                            forget ? 'Reset with phone number' : 'Log in with phone'}
                    </span>
                </div>
                <FormLoginWithAccount forget={forget} setForget={setForget} mode={mode}
                    register={register}
                    errors={errors}
                    login={login}
                    setLogin={setLogin}
                />
                <ButtonComponent type="submit" className={`w-full p-2.5 rounded-sm mt-2 ${!isDirty || !isValid ?
                    'cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-main text-white'} `}
                    disabled={!isDirty || !isValid}
                >
                    Login
                </ButtonComponent>
            </form>
        </WrapperModalAuthenication>
    )
}
