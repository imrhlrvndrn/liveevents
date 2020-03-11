import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const Auth = () => {
    const [isLogin, setisLogin] = useState(false);

    return (
        <>
            <section className="auth">
                {isLogin ? <Login setisLogin={setisLogin} /> : <Register setisLogin={setisLogin} />}
                <div className="img"></div>
            </section>
        </>
    );
};

export default Auth;
