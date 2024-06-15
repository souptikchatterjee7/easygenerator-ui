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
import styles from "../styles/Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const device = getDeviceId();
    const token = getAuthenticationToken();
    if (token && token !== "") {
        GoToHome();
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

    const GoToHome = () => {
        navigate("/home");
    };

    const GoToRegister = () => {
        navigate("/register");
    };

    const user = useSelector((state) => state.user.user);
    const apiError = useSelector((state) => state.user.error);
    const apiToken = useSelector((state) => state.user.authenticationToken);

    useEffect(() => {
        if (user && apiToken) {
            setAuthenticationToken(apiToken);
            GoToHome();
            ClearState();
        }
    }, [user, apiToken, navigate]);

    return (
        <div className="container">
            <h1>Log in to your account</h1>
            <h2>Please provide your account credentials.</h2>
            <form className={styles.form}>
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
                <p className={styles.error}>* {error || apiError}</p>
                <Button
                    type="submit"
                    label="Login now"
                    onClick={HandleSubmit}
                />
                <p className={styles.registerLink}>
                    Don’t have an account?
                    <a onClick={GoToRegister}>Register now</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
