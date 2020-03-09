import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

// Components
import Steps from "./Steps";

// Images
import heroImage from "../../img/homepageHero.jpeg";

const Home = () => {
    return (
        <>
            <Nav />
            <section className="homepage_hero">
                <div className="homepage_hero_heroContent">
                    <h1>light your night</h1>
                    <div className="homepage_hero_heroContent_CTA">
                        <Link className="primaryBtn" to="/events">
                            view all events
                        </Link>
                    </div>
                </div>
            </section>

            <Steps />
        </>
    );
};

export default Home;
