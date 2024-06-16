import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config";
import { getAuthenticationToken, getDeviceId } from "../../util";

// user login api calls
export const loginUser = createAsyncThunk(
    "users/login",
    async (userData, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await axios.post(
                API_URL + "users/login",
                userData
            );
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// user registration api calls
export const registerUser = createAsyncThunk(
    "users/register",
    async (userData, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await axios.post(
                API_URL + "users/register",
                userData
            );
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// user profile fetching api
export const getUserProfile = createAsyncThunk(
    "users/profile",
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL + "users/profile", {
                headers: {
                    Token: getAuthenticationToken(),
                    Device: getDeviceId()
                }
            });
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
