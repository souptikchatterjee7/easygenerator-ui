import { createReducer } from "@reduxjs/toolkit";
import { loginUser, registerUser, getUserProfile } from "../actions/userThunks";

// user reducre to maintain all user related states
const initialState = {
    // checks if user is authenticated
    isAuthenticated: false,
    // checks if user is defined
    user: null,
    // checks if api is still loading
    isLoading: false,
    // check for api errors
    error: null,
    // check for auth token from apis
    authenticationToken: null
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addMatcher(
            (action) =>
                [
                    loginUser.pending.type,
                    registerUser.pending.type,
                    getUserProfile.pending.type
                ].includes(action.type),
            (state) => {
                state.isLoading = true;
                state.error = null;
            }
        )
        .addMatcher(
            (action) =>
                [
                    loginUser.fulfilled.type,
                    registerUser.fulfilled.type
                ].includes(action.type),
            (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.authenticationToken = action.payload?.token;
            }
        )
        .addMatcher(
            (action) =>
                [
                    loginUser.rejected.type,
                    registerUser.rejected.type,
                    getUserProfile.rejected.type
                ].includes(action.type),
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message;
            }
        )
        .addMatcher(
            (action) => [getUserProfile.fulfilled.type].includes(action.type),
            (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            }
        );
});

export default userReducer;
