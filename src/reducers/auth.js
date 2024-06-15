const initialState = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    isLoading: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_SIGNUP_REQUEST":
            return {
                ...state,
                isLoading: true
            };
        case "USER_SIGNUP_SUCCESS":
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: null
            };
        case "USER_SIGNUP_FAIL":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case "USER_LOGIN_REQUEST":
            return {
                ...state,
                isLoading: true
            };
        case "USER_LOGIN_SUCCESS":
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: null
            };
        case "USER_LOGIN_FAIL":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case "USER_LOGOUT":
            localStorage.removeItem("user");
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};

export default authReducer;
