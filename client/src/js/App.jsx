import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Components
import Home from "./components/Home";
import About from "./components/About";

// Css files
import "../css/color.css";
import "../css/home.css";
import "../css/about.css";
import "../css/nav.css";
import "../css/reset.css";

function App() {
    return (
        <>
            <Router>
                {/* <Redirect to="/auth" from="/" /> */}
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </Router>
        </>
    );
}

export default App;
