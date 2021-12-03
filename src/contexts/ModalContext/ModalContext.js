import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";
import * as actions from "./Action";

const initialState = {
    data: null,
    loading: false
}

export const ModalContext = createContext(initialState);

export const ModalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return <ModalContext.Provider value={
        {
            state,
            modalActions: actions,
            modalDispatch: (action) => dispatch(action)
        }
    }>
        {props.children}
    </ModalContext.Provider>
}