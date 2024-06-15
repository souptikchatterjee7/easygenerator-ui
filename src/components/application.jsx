import React from "react";
import { useSelector } from "react-redux";

const Application = () => {
    const user = useSelector((state) => state.user.user);
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
