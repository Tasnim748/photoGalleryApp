import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/authContext";
import { useRef } from "react";

function Signin() {
    const {signin} = UserAuth();
    const email = useRef();
    const password = useRef();

    const handleSignin = async e => {
        e.preventDefault();
        await signin(email.current.value, password.current.value);
    };
        
    return (
        <div style={{margin: '40px'}}>
            <div>
                <h1>Sign in to your account</h1>
                <h4>Don't have an account yet? <Link to='/signup'>Sign up</Link></h4>
            </div>
            <form className="row g-3" onSubmit={handleSignin} style={{marginTop:'40px'}}>
                <div className="form-floating mb-3">
                    <input type="email" ref={email} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" ref={password} className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
};

export default Signin;