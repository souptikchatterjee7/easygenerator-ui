import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/userThunks";
import Input from "../components/input";
import Button from "../components/button";
import {
    checkProfileValidations,
    getDeviceId,
    getAuthenticationToken,
    setAuthenticationToken
} from "../util";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const device = getDeviceId();
    const token = getAuthenticationToken();
    if (token && token !== "") {
        navigate("/home");
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        const validationObj = checkProfileValidations(
            "",
            false,
            email,
            password
        );
        if (!validationObj.success) {
            setError(validationObj.error);
            return;
        }
        setError("");
        dispatch(loginUser({ email, password, device }));
    };

    const ClearState = () => {
        setEmail("");
        setPassword("");
    };

    const user = useSelector((state) => state.user.user);
    const apiError = useSelector((state) => state.user.error);
    const apiToken = useSelector((state) => state.user.authenticationToken);

    useEffect(() => {
        if (user && apiToken) {
            setAuthenticationToken(apiToken);
            navigate("/home");
            ClearState();
        }
    }, [user, apiToken, navigate]);

    return (
        <form>
            <Input
                id="email"
                type="email"
                placeholder="eg. johndoe@abc.xyz"
                label="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                id="password"
                type="password"
                placeholder="eg. ********"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p>{error || apiError}</p>
            <Button type="submit" label="Login now" onClick={HandleSubmit} />
        </form>
    );
};

export default Login;
