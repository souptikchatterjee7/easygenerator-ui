import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config";

export const loginUser = createAsyncThunk(
    "users/login",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                API_URL + "users/login",
                userData
            );
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerUser = createAsyncThunk(
    "users/register",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                API_URL + "users/register",
                userData
            );
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);

export const getUserProfile = createAsyncThunk(
    "users/profile",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL + "users/profile");
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);
