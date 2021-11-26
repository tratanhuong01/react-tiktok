import * as constants from "./Constant";

export const updateCation = (content) => {
    return {
        type: constants.UPDATE_CAPTON,
        content
    }
}

export const updateAllow = (allows) => {
    return {
        type: constants.UPDATE_ALLOW,
        allows
    }
}

export const updateDataVideo = (video) => {
    return {
        type: constants.UPDATE_DATA_VIDEO,
        video
    }
}