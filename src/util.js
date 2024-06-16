import { v4 as uuidv4 } from "uuid";

// validation for login and register api post body
export function checkProfileValidations(name, isNameNeeded, email, password) {
    if (isNameNeeded) {
        if (name && name !== "") {
            if (!validateName(name)) {
                return { success: false, error: "Please provide valid name." };
            }
        } else {
            return { success: false, error: "Please provide your name." };
        }
    }
    if (email && email !== "") {
        if (!validateEmailId(email)) {
            return { success: false, error: "Please provide valid email id." };
        }
    } else {
        return { success: false, error: "Please provide your email id." };
    }
    if (password && password !== "") {
        if (!validatePassword(password)) {
            return {
                success: false,
                error: "Please provide valid password."
            };
        }
    } else {
        return { success: false, error: "Please provide your password." };
    }
    return { success: true, error: "" };
}

// validate email using regex
function validateEmailId(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
    return regex.test(email);
}

// validate name using regex
function validateName(name) {
    const regex = /^[a-zA-Z .]*$/;
    return regex.test(name);
}

// validate password using regex
function validatePassword(password) {
    const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
}

export function getDeviceId() {
    let deviceId = localStorage.getItem("easygenerator|deviceId");
    if (!deviceId) {
        deviceId = uuidv4();
        localStorage.setItem("easygenerator|deviceId", deviceId);
    }
    return deviceId;
}

// get token if exists
export function getAuthenticationToken() {
    let token = localStorage.getItem("easygenerator|authToken");
    return token;
}

// set token on register or login
export function setAuthenticationToken(value) {
    localStorage.setItem("easygenerator|authToken", value);
}

// delete token on logout or unauthorized api call
export function deleteAuthenticationToken() {
    localStorage.removeItem("easygenerator|authToken");
}
