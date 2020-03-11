import React from "react";
import { Link } from "react-router-dom";

const Login = ({ setisLogin }) => {
    return (
        <div className="auth_login">
            <h3>
                <Link to="/">EventsLive</Link>
            </h3>
            <h3>Welcome Back, Please login to your account</h3>
            <form className="auth_login_form">
                <div className="labelInputWrapper">
                    <label htmlFor="loginEmail">Email</label>
                    <input
                        autoComplete="off"
                        placeholder="Email"
                        type="email"
                        name="loginEmail"
                        id="loginEmail"
                    />
                </div>
                <div className="labelInputWrapper">
                    <label htmlFor="loginPassword">Password</label>
                    <input
                        placeholder="Password"
                        type="password"
                        name="loginPassword"
                        id="loginPassword"
                    />
                </div>
                <div className="auth_login_form_authOptions">
                    <p>Remember me</p>
                    <p>Forgot Password?</p>
                </div>
                <div className="auth_login_form_CTA">
                    <button type="submit">Login</button>
                    <button onClick={() => setisLogin(true)}>Signup</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
