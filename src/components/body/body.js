import React from "react";
import Gallery from "./gallery";
import Signin from "../auths/signin";
import Signup from "../auths/signup";
import Account from "../auths/account";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "../../context/authContext";
import ProtectRoute from "../protectRoute";

const Body = () => {
    return (
        <div className="container" style={{textAlign: 'center'}}>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<ProtectRoute rote='/signup'><Gallery /></ProtectRoute>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/gallery" element={<ProtectRoute rote='/'><Gallery /></ProtectRoute>} />
                    <Route path="/account" element={<ProtectRoute rote='/'><Account /></ProtectRoute>} />
                </Routes>
            </AuthContextProvider>
        </div>
    );
};

export default Body;