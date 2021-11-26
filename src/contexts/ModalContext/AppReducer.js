import ModalAuthenication from '../../components/Modals/ModalAuthenication/ModalAuthenication';
import ModalWarning from '../../components/Modals/ModalWarning/ModalWarning';
import * as constants from './Constant';

const AppReducer = (state, action) => {
    switch (action.type) {
        case constants.OPEN_MODAL_LOGIN:
            return { ...state, data: <ModalAuthenication /> };
        case constants.SET_LOADING_MODAL:
            return { ...state, loading: action.loading };
        case constants.CLOSE_MODAL:
            return { ...state, data: null, loading: false };
        case constants.OPEN_MODAL_WARNING:
            return { ...state, data: <ModalWarning data={action.data} /> }
        default:
            return { ...state };
    }
}
export default AppReducer;