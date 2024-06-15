import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../store/actions/userThunks";

const Application = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    dispatch(getUserProfile());

    return (
        <div>
            {user ? (
                <h1>Welcome to the application, {user.name}!</h1>
            ) : (
                <p>Please sign up or login to access the application.</p>
            )}
        </div>
    );
};

export default Application;
