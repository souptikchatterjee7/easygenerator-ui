import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./pages/application";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Loader from "./components/loader";
import "./styles.css";
import { useSelector } from "react-redux";

const App = () => {
    const isLoading = useSelector((state) => state.user.isLoading);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Application />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
            {isLoading && <Loader />}
        </div>
    );
};

export default App;
