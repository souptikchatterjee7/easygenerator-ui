import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions/userThunks";
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
import styles from "../styles/Register.module.css";
import Link from "../components/link";

const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const device = getDeviceId();
    const token = getAuthenticationToken();

    const ClearState = () => {
        setEmail("");
        setPassword("");
    };

    if (token && token !== "") {
        navigate("/home");
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        const validationObj = checkProfileValidations(
            name,
            true,
            email,
            password
        );
        if (!validationObj.success) {
            setError(validationObj.error);
            return;
        }
        setError("");
        dispatch(registerUser({ name, email, password, device }));
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
        <div className="container">
            <h1>Create your account</h1>
            <h2>Please provide your basic info to get started.</h2>
            <form className={styles.form}>
                <Input
                    id="name"
                    type="text"
                    placeholder="eg. John Doe"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <ul className={styles.list}>
                    <li>Contains only letters</li>
                    <li>Maximum of 64 characters allowed.</li>
                </ul>
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
                <ul className={styles.list}>
                    <li>Minimum length of 8 characters</li>
                    <li>Contains at least 1 letter.</li>
                    <li>Contains at least 1 number.</li>
                    <li>Contains at least 1 special character.</li>
                    <li>Maximum of 64 characters allowed.</li>
                </ul>
                {error || apiError ? (
                    <p className={styles.error}>* {error || apiError}</p>
                ) : (
                    <p className={styles.error}>* {error || apiError}</p>
                )}
                <Button
                    type="submit"
                    label="Register now"
                    onClick={HandleSubmit}
                />
                <Link
                    text="Already have an account?"
                    href="/"
                    type="success"
                    label="Login now"
                />
            </form>
        </div>
    );
};

export default Register;
