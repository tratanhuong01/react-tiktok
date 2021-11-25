import * as constants from "./Constant";

export const openModalLogin = () => {
    return {
        type: constants.OPEN_MODAL_LOGIN
    }
}

export const closeModal = () => {
    return {
        type: constants.CLOSE_MODAL
    }
}

export const setLoadingModal = (loading) => {
    return {
        type: constants.SET_LOADING_MODAL,
        loading
    }
}