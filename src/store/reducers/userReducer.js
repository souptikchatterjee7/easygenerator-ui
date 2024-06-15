import { createReducer } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../actions/userThunks";

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
        .addCase(logoutUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});

export default userReducer;
