import { createReducer } from "@reduxjs/toolkit";
import { loginUser, registerUser, getUserProfile } from "../actions/userThunks";

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getUserProfile.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getUserProfile.fulfilled, (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        })
        .addCase(getUserProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});

export default userReducer;
