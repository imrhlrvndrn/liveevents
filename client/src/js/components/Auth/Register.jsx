import React from "react";
import { Link } from "react-router-dom";

const Register = ({ setisLogin }) => {
    return (
        <div className="auth_register">
            <h3>
                <Link to="/">EventsLive</Link>
            </h3>
            <h3>Welcome Back, Please login to your account</h3>
            <form className="auth_register_form">
                <div className="labelInputWrapper">
                    <label htmlFor="registerUsername">Username</label>
                    <input
                        autoComplete="off"
                        placeholder="Username"
                        type="email"
                        name="registerUsername"
                        id="registerUsername"
                    />
                </div>
                <div className="labelInputWrapper">
                    <label htmlFor="registerEmail">Email</label>
                    <input
                        autoComplete="off"
                        placeholder="Email"
                        type="email"
                        name="registerEmail"
                        id="registerEmail"
                    />
                </div>
                <div className="labelInputWrapper">
                    <label htmlFor="registerPassword">Password</label>
                    <input
                        placeholder="Password"
                        type="password"
                        name="registerPassword"
                        id="registerPassword"
                    />
                </div>
                <div className="labelInputWrapper">
                    <label htmlFor="registerConfirmPassword">Confirm Password</label>
                    <input
                        placeholder="Confirm Password"
                        type="password"
                        name="registerConfirmPassword"
                        id="registerConfirmPassword"
                    />
                </div>
                <div className="auth_register_form_authOptions">
                    <p>Remember me</p>
                </div>
                <div className="auth_register_form_CTA">
                    <button type="submit">Signup</button>
                    <button onClick={() => setisLogin(true)}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
