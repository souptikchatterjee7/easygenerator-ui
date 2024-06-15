import axios from "axios";
import { API_URL } from "../config";

export const signup = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "USER_SIGNUP_REQUEST" });

        const response = await axios.post(
            API_URL + "/users/register",
            userData
        );

        dispatch({ type: "USER_SIGNUP_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "USER_SIGNUP_FAIL", payload: error.message });
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "USER_LOGIN_REQUEST" });

        const response = await axios.post(API_URL + "/users/login", {
            email,
            password
        });

        dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "USER_LOGIN_FAIL", payload: error.message });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: "USER_LOGOUT" });
};
