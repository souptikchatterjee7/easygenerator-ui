import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Loader from "./components/loader";
import "./styles.css";
import { useSelector } from "react-redux";

const App = () => {
    const isLoading = useSelector((state) => state.user.isLoading);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
            {isLoading && <Loader />}
        </div>
    );
};

export default App;
