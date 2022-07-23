import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authContext";

const Account = () => {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            navigate('/');
            await logout();
        } catch (e) {
            console.log(e.message);
        }
    };
    // if (!user) {
    //     return (
    //         <Navigate to='/' />
    //     )
    // }

    return (
        <div style={{margin: '40px'}}>
            <h1>Account</h1>
            <p>User Email: {user && user.email}</p>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Account;