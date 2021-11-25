import * as constants from "./Constant";

export const loginUser = (user) => {
    return {
        type: constants.LOGIN_USER,
        user
    }
}

export const logoutUser = () => {
    return {
        type: constants.LOGOUT_USER
    }
}