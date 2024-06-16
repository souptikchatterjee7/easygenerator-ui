import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

// add root reducre to store
const store = configureStore({
    reducer: rootReducer
});

export default store;
