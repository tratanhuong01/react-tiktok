import { createContext } from "react"
import MyReducer from "./AppReducer";
import * as actions from "./Action";

const initialState = {
    caption: "",
    tagList: [],
    hashtagList: [],
    length: 0,
    name: "",
    mode: "",
    cover: "",
    allows: ["Comment", "Duet", "Stitch"],
    video: null
}

export const UploadContext = createContext(initialState);

export const UploadProvider = (props) => {
    //
    const [state, dispatch] = useReducer(MyReducer, initialState);
    //
    return (
        <UploadContext.Provider value={
            {
                state,
                uploadActions: actions,
                uploadDispatch: (action) => dispatch(action)
            }
        }>
            {props.children}
        </UploadContext.Provider>
    );
}