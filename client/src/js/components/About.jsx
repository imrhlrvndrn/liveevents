import React from "react";

// Components
import Nav from "./Nav";
import Steps from "./Steps";

const About = () => {
    return (
        <>
            <Nav />
            <section className="about">
                <div className="about_heroContent w80">
                    <h2>
                        EventsLive is what makes your revel unforgettable and charming. Our job is
                        to help you make it right.
                    </h2>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et tempore
                            quam sunt ullam sed vero dolorum quidem nobis repellendus eaque. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p>
                            Quisquam repellat deleniti inventore harum accusantium blanditiis libero
                            voluptatibus temporibus aliquam consequuntur. Tempore explicabo, ipsa
                            quae dolore ab quaerat sed velit quidem.
                        </p>
                    </div>
                </div>
            </section>
            <Steps />
        </>
    );
};

export default About;
