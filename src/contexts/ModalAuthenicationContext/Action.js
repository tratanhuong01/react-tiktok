import * as constants from "./Constant";

export const openLoginWithAccount = () => {
    return {
        type: constants.OPEN_LOGIN_WITH_ACCOUNT,
    }
}

export const openLoginWithQRCode = () => {
    return {
        type: constants.OPEN_LOGIN_WITH_QR_CODE
    }
}

export const setLoadingModalAuthenicaton = (loading) => {
    return {
        type: constants.SET_LOADING_MODAL_AUTHENICATION,
        loading
    }
}

export const backMainAuthenication = () => {
    return {
        type: constants.BACK_MAIN_AUTHENICATION
    }
}

export const openModalRegister = () => {
    return {
        type: constants.OPEN_MODAL_REGISTER
    }
}

export const openModalLogin = () => {
    return {
        type: constants.OPEN_MODAL_LOGIN
    }
}

export const openSignInWithAccount = () => {
    return {
        type: constants.OPEN_SIGN_IN_WITH_ACCOUNT
    }
}