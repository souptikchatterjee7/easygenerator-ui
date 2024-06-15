import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config";

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

export const getUserProfile = createAsyncThunk(
    "users/profile",
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL + "users/profile");
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
