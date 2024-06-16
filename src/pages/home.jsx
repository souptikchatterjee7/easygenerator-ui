import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import { deleteAuthenticationToken, getAuthenticationToken } from "../util";
import Link from "../components/link";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../store/actions/userThunks";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // get token if already exists
    const token = getAuthenticationToken();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const GetUserProfile = () => {
        dispatch(getUserProfile());
    };

    useEffect(() => {
        if (token && token !== "") {
            // calls get user profile api if token exists
            GetUserProfile();
        } else {
            // navigate to login if token doesnt exist
            navigate("/");
        }
    }, [token, navigate]);

    const user = useSelector((state) => state.user.user);

    const logout = () => {
        deleteAuthenticationToken();
    };

    return (
        <div className="container">
            <h1>Hello! {user?.name}</h1>
            <h2>Welcome to the application.</h2>

            <div className={styles.logout}>
                <Link type="error" label="Logout" href="/" onClick={logout} />
            </div>
        </div>
    );
};

export default Home;
