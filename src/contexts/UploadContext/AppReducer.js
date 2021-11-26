import * as constants from "./Constant";

const MyReducer = (state, action) => {
    switch (action.type) {
        case constants.UPDATE_CAPTON:
            return { ...state, caption: action.caption };
        case constants.UPDATE_ALLOW:
            return { ...state, allows: action.allows };
        case constants.UPDATE_DATA_VIDEO:
            return { ...state };
        default:
            return { ...state };
    }
}

export default MyReducer;