import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as actions from "./Action";

const initialState = null;

export const UserContext = createContext(initialState);

export const UserProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //
    return (
        <UserContext.Provider value={{
            user: state, userActions: actions, userDispatch: (action) => dispatch(action)
        }}>
            {props.children}
        </UserContext.Provider>
    )
}