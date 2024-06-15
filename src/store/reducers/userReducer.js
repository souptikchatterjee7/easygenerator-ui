import { createReducer } from "@reduxjs/toolkit";
import { loginUser, registerUser, getUserProfile } from "../actions/userThunks";

const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    error: null,
    authenticationToken: null
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addMatcher(
            (action) =>
                [
                    loginUser.pending,
                    registerUser.pending,
                    getUserProfile.pending
                ].includes(action.type),
            (state) => {
                state.isLoading = true;
                state.error = null;
            }
        )
        .addMatcher(
            (action) =>
                [loginUser.fulfilled, registerUser.fulfilled].includes(
                    action.type
                ),
            (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isAuthenticated = true;
                state.authenticationToken = action.payload.token;
                state.user = action.payload.user;
            }
        )
        .addMatcher(
            (action) =>
                [
                    loginUser.rejected,
                    registerUser.rejected,
                    getUserProfile.rejected
                ].includes(action.type),
            (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.error = action.payload.message;
            }
        )
        .addMatcher(
            (action) => getUserProfile.fulfilled(action),
            (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            }
        );
});

export default userReducer;
