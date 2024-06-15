import axios from "axios";
const environment = process.argv[2] || "dev";
import { config } from "../config";
const envConfig = config[environment];

export const signup = (data) => async (dispatch) => {
    try {
        dispatch({ type: "USER_SIGNUP_REQUEST" });

        const response = await axios.post(
            envConfig.API_URL + "/users/register",
            data
        );

        dispatch({ type: "USER_SIGNUP_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "USER_SIGNUP_FAIL", payload: error.message });
    }
};

export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: "USER_LOGIN_REQUEST" });

        const response = await axios.post(
            envConfig.API_URL + "/users/login",
            data
        );

        dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "USER_LOGIN_FAIL", payload: error.message });
    }
};

export const getProfile = () => async (dispatch) => {
    try {
        dispatch({ type: "USER_GET_PROFILE_REQUEST" });

        const response = await axios.get(envConfig.API_URL + "/users/profile");

        dispatch({ type: "USER_GET_PROFILE_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "USER_GET_PROFILE_FAIL", payload: error.message });
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "USER_LOGOUT_REQUEST" });

        const response = await axios.get(envConfig.API_URL + "/users/logout");

        dispatch({ type: "USER_LOGOUT_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "USER_LOGOUT_FAIL", payload: error.message });
    }
};
