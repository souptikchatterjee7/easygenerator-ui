import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/userThunks";
import Input from "../components/input";
import Button from "../components/button";
// import { useSelector } from "react-redux";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    };

    // const user = useSelector((state) => state.user.user);

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id="email"
                type="email"
                placeholder="eg. johndoe@abc.xyz"
                label="Email ID"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                id="password"
                type="password"
                placeholder="eg. ********"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" label="Login now" onClick={handleSubmit} />
        </form>
    );
};

export default Login;
