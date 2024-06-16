import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import { deleteAuthenticationToken } from "../util";
import Link from "../components/link";
// import { useDispatch } from "react-redux";
// import { getUserProfile } from "../store/actions/userThunks";

const Home = () => {
    const user = useSelector((state) => state.user.user);
    // const dispatch = useDispatch();
    // dispatch(getUserProfile());

    const logout = () => {
        deleteAuthenticationToken();
    };

    return (
        <div className="container">
            <h1>Hello! {user?.name}</h1>
            <h2>Welcome to the application.</h2>

            <p className={styles.logout}>
                <Link type="error" label="Logout" href="/" onClick={logout} />
            </p>
        </div>
    );
};

export default Home;
