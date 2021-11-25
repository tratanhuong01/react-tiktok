import LoginWithAccount from "../../components/Modals/ModalAuthenication/LoginWithAccount/LoginWithAccount";
import LoginWithQRCode from "../../components/Modals/ModalAuthenication/LoginWithQRCode/LoginWithQRCode";
import MainLoginAuthenication from "../../components/Modals/ModalAuthenication/MainLoginAuthenication/MainLoginAuthenication";
import MainSigninAuthenication from "../../components/Modals/ModalAuthenication/MainSigninAuthenication/MainSigninAuthenication";
import SigninWithAccount from "../../components/Modals/ModalAuthenication/SigninWithAccount/SigninWithAccount";
import * as constants from "./Constant";

const AppReducer = (state, action) => {
    switch (action.type) {
        case constants.SET_LOADING_MODAL_AUTHENICATION:
            return { ...state, loading: action.loading }
        case constants.OPEN_LOGIN_WITH_QR_CODE:
            return { ...state, data: <LoginWithQRCode /> };
        case constants.BACK_MAIN_AUTHENICATION:
            return { ...state, data: state.isLogin ? <MainLoginAuthenication /> : <MainSigninAuthenication /> };
        case constants.OPEN_LOGIN_WITH_ACCOUNT:
            return { ...state, data: <LoginWithAccount /> };
        case constants.OPEN_MODAL_REGISTER:
            return { ...state, data: <MainSigninAuthenication />, isLogin: false };
        case constants.OPEN_MODAL_LOGIN:
            return { ...state, data: < MainLoginAuthenication />, isLogin: true };
        case constants.OPEN_SIGN_IN_WITH_ACCOUNT:
            return { ...state, data: <SigninWithAccount /> };
        default:
            return { ...state };
    }
}
export default AppReducer;