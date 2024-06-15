import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./components/Application";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Application />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
