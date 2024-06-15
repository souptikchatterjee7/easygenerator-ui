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
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.isAuthenticated = true;
            state.authenticationToken = action.payload.token;
            state.user = action.payload.user;
        })
        .addCase(loginUser.rejected, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.error = action.payload.message;
        })
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.isAuthenticated = true;
            state.authenticationToken = action.payload.token;
            state.user = action.payload.user;
        })
        .addCase(registerUser.rejected, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.error = action.payload.message;
        })
        .addCase(getUserProfile.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserProfile.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        })
        .addCase(getUserProfile.rejected, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.error = action.payload.message;
        });
});

export default userReducer;
