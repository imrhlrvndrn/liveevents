import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Components
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";

// Css files
import "../css/color.css";
import "../css/home.css";
import "../css/about.css";
import "../css/events.css";
import "../css/nav.css";
import "../css/reset.css";

function App() {
    return (
        <>
            <Router>
                {/* <Redirect to="/auth" from="/" /> */}
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/events" exact component={Events} />
            </Router>
        </>
    );
}

export default App;
