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
import Link from "../components/link";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const device = getDeviceId();
    const token = getAuthenticationToken();

    // set all input to empty on successful login
    const ClearState = () => {
        setEmail("");
        setPassword("");
    };

    // validate and call login api
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

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const apiError = useSelector((state) => state.user.error);
    const apiToken = useSelector((state) => state.user.authenticationToken);

    // if login successful, redirect to application
    useEffect(() => {
        if (apiToken) {
            setAuthenticationToken(apiToken);
            navigate("/home");
            ClearState();
        }
    }, [apiToken, isAuthenticated]);

    // if token exists, re-direct to application
    useEffect(() => {
        if (token && token !== "") {
            navigate("/home");
        }
    }, [token]);

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
                {error || apiError ? (
                    <p className={styles.error}>* {error || apiError}</p>
                ) : (
                    <></>
                )}
                <Button
                    type="submit"
                    label="Login now"
                    onClick={HandleSubmit}
                />
                <Link
                    text="Don’t have an account?"
                    href="/register"
                    type="success"
                    label="Register now"
                />
            </form>
        </div>
    );
};

export default Login;
