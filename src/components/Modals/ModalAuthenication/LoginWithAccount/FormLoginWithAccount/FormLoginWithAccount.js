import React, { useContext, useState } from 'react'
import { ModalAuthenicationContext } from '../../../../../contexts/ModalAuthenicationContext/ModalAuthenicationContext';
import ErrorMessage from '../../../../ErrorMessage/ErrorMessage';
import InputComponent from '../../../../InputComponent/InputComponent';

export const InputPasswordComponent = (props) => {
    //
    const { register, errors, placeholder, name } = props;
    const [show, setShow] = useState(false);
    //
    return (
        <>
            <div className="w-full my-1.5 relative">
                <InputComponent type={show ? 'text' : 'password'} placeholder={placeholder} className="w-full p-3 bg-transparent border 
                rounded-md border-gray-300  focus:bg-gray-100 bg-gray-50" register={register} errors={errors}
                    showError={true} label={null} name={name} wrap={'w-full'} />
                <span onClick={() => setShow(!show)} className={`bx bxs-${show ? 'show' : 'hide'} absolute top-1/2 right-3 transform -translate-y-1/2 
                cursor-pointer`}></span>
            </div>
            <ErrorMessage errors={errors} name={name} />
        </>
    )
}

export default function FormLoginWithAccount(props) {
    //
    const { forget, setForget, mode, login, setLogin, register, errors } = props;
    const { state } = useContext(ModalAuthenicationContext);
    //
    return (
        <div className="w-full">
            <div className={`w-full bg-gray-50 hover:bg-gray-100 flex items-center ${errors[mode ? 'phone' : 'email'] &&
                'border border-red-600 border-solid rounded-md'}`}>
                {mode &&
                    <div className={`p-3 w-1/4 relative flex items-center ${errors[mode ? 'phone' : 'email'] ||
                        'border-l border-solid border-gray-300 border-t border-b rounded-l-md'}`}>
                        +84
                        <span className="bx bx-caret-down ml-6"></span>
                        <div className="bg-gray-300 absolute top-1/2 h-8 right-2 transform -translate-y-1/2" style={{ width: 0.5 }}></div>
                    </div>}
                <InputComponent type="text" placeholder={mode ? 'Number phone...' : forget ? 'Email Address...' : 'Email Or Username...'}
                    className={`w-full ${mode ? '' : errors['email'] ? '' : 'border-l rounded-l-md'} ${errors[mode ? 'phone' : 'email'] ||
                        'border-t border-r border-b border-solid border-gray-300 rounded-r-md'} p-3 bg-transparent`}
                    register={register} errors={errors} showError={true} name={mode ? 'phone' : 'email'}
                    wrap={mode ? 'w-3/4' : 'w-full'} />
            </div>
            <ErrorMessage errors={errors} name={mode ? 'phone' : 'email'} />
            {((login || forget) && mode) || (forget && !mode) ?
                <>
                    <div className={`w-full my-1.5 flex bg-gray-50 hover:bg-gray-100 flex items-center 
                    ${errors['code'] && 'border border-solid border-red-600 rounded-md '}`}>
                        <InputComponent type="text" placeholder={`Enter ${(forget && !mode) ? '6' : '4'}-digit code`}
                            className={`w-full p-3 bg-transparent ${errors['code'] || 'border-gray-300 border rounded-l-md'}`}
                            register={register} errors={errors} showError={true} name={'code'} wrap={'w-2/3'} />
                        <button className={`text-center py-3.5 w-1/3 text-sm text-gray-500 rounded-r-md bg-white   
                            ${errors['code'] || 'border-t border-r border-b border-gray-300'}`}>
                            Send code
                        </button>
                    </div>
                    <ErrorMessage errors={errors} name={'code'} />
                </> : ""
            }
            {(!login && !forget) || (!mode && !forget) || (!mode && !state.isLogin) ?
                <InputPasswordComponent register={register} errors={errors} placeholder="Password" name="password" /> : ""
            }
            {
                (forget && state.isLogin) &&
                <InputPasswordComponent register={register} errors={errors} placeholder="Enter New Password..."
                    name="newPassword" />
            }
            {
                state.isLogin && mode ?
                    (
                        login ? <span onClick={() => setLogin(!login)} className="text-xs my-2 pl-1 cursor-pointer">
                            Login with password </span> :
                            <div>
                                <span onClick={() => setForget(true)} className="text-xs mr-4 cursor-pointer">Forget password?</span> |
                                <span onClick={() => { setLogin(true); setForget(false); }} className="text-xs ml-4 cursor-pointer">Log in with code</span>
                            </div>
                    ) :
                    (
                        !forget &&
                        <span onClick={() => setForget(true)} className="text-xs mr-4 cursor-pointer">Forget password?</span>
                    )
            }

        </div >
    );
}
