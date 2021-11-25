import * as constants from "./Constant";

const AppReducer = (state, action) => {
    switch (action.type) {
        case constants.LOGIN_USER:
            return action.user;
        case constants.LOGOUT_USER:
            return null;
        default:
            return { ...state };
    }
}
export default AppReducer;