import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "users/login",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post("/users/login", userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerUser = createAsyncThunk(
    "users/register",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post("/users/register", userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getUserProfile = createAsyncThunk(
    "users/profile",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("/users/profile");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
