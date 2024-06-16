import { combineReducers } from "redux";
import userReducer from "./userReducer";

// combine all reducers under one roof
const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;
