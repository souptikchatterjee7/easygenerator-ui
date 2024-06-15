import axios from "axios";

export const signup = (data) => async (dispatch) => {
    try {
        dispatch({ type: "USER_SIGNUP_REQUEST" });

        const response = await axios.post(
            process.env.API_URL + "/users/register",
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
            process.env.API_URL + "/users/login",
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

        const response = await axios.get(
            process.env.API_URL + "/users/profile"
        );

        dispatch({ type: "USER_GET_PROFILE_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "USER_GET_PROFILE_FAIL", payload: error.message });
    }
};
