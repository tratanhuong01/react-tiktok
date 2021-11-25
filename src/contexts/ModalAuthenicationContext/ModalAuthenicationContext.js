import { createContext, useReducer } from "react"
import MainAuthenication from "../../components/Modals/ModalAuthenication/MainLoginAuthenication/MainLoginAuthenication";
import * as actions from "./Action";
import AppReducer from "./AppReducer";

const initialState = {
    data: <MainAuthenication />,
    loading: true,
    isLogin: true
}

export const ModalAuthenicationContext = createContext(initialState);

export const ModalAuthenicationProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //
    return (
        <ModalAuthenicationContext.Provider value={
            {
                state,
                modalAuthenicationDispatch: (action) => dispatch(action),
                modalAuthenicationActions: actions
            }
        }>
            {props.children}
        </ModalAuthenicationContext.Provider>
    );
}