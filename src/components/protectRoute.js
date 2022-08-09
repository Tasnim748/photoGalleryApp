import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const ProtectRoute = props => {
    const {user} = UserAuth();

    if (!user) {
        return <Navigate to={props.rote} />
    } else {
        return props.children;
    }
};

export default ProtectRoute;    