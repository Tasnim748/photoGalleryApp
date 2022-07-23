import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { UserAuth } from "../../context/authContext";

function Signup() {
    const email = useRef();
    const password = useRef();
    const {createUser} = UserAuth();

    const handleSubmit = async e => {
        e.preventDefault();
        await createUser(email.current.value, password.current.value);
    }

    return (
        <div style={{margin: '40px'}}>
            <div>
                <h1>Sign up for a free account</h1>
                <h4>Already have an account? <Link to='/signin'>Sign in</Link></h4>
            </div>
            <form className="row g-3" onSubmit={handleSubmit} style={{marginTop:'40px'}}>
                <div className="form-floating mb-3">
                    <input ref={email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input ref={password} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>
        </div>
    );
    
};

export default Signup;