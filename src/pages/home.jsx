import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import { deleteAuthenticationToken } from "../util";
// import { useDispatch } from "react-redux";
// import { getUserProfile } from "../store/actions/userThunks";

const Home = () => {
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // dispatch(getUserProfile());

    const logout = () => {
        deleteAuthenticationToken();
        navigate("/");
    };

    return (
        <div className="container">
            <h1>Hello! {user?.name}</h1>
            <h2>Welcome to the application.</h2>

            <p className={styles.logout}>
                <a onClick={logout}>Logout</a>
            </p>
        </div>
    );
};

export default Home;
