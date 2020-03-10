import React from "react";
import { Link } from "react-router-dom";

// Components
import Nav from "./Nav";

const Events = () => {
    return (
        <>
            <Nav />
            <section className="events">
                <div className="events_heroContent">
                    <h1>
                        <h6 style={{ display: "inline", color: "var(--mediumBlue)" }}>#</h6> Find
                        your event
                    </h1>
                    <p className="d">Find all the events near you</p>
                </div>
            </section>
            <section className="eventsList">
                <h2>Feeling adventurous ?</h2>

                <form>
                    <input
                        placeholder="Location"
                        type="text"
                        name="eventLocation"
                        id="eventLocation"
                    />
                    <label htmlFor="eventCategory">Category</label>
                    <input
                        placeholder="Category"
                        type="text"
                        name="eventCategory"
                        id="eventCategory"
                    />
                    <label htmlFor="eventDate">Date</label>
                    <input placeholder="Date" type="date" name="eventDate" id="eventDate" />
                    <button type="submit">Search</button>
                </form>

                <div className="eventsList_eventsContainer">
                    <div className="eventsList_eventsContainer_event">
                        <h5 className="eventsList_eventsContainer_event_date">27 apr - 01 may</h5>
                        <img
                            className="eventsList_eventsContainer_event_image"
                            src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <div className="eventsList_eventsContainer_event_details">
                            <h4>Event title</h4>
                            <span>
                                Category: <strong>category</strong>
                                <span className="country">country</span>
                            </span>
                            <p>address</p>
                        </div>
                        <div className="eventsList_eventsContainer_event_CTA">
                            <Link to={`/events/dskjf`}>event details</Link>
                            <Link to={`/events/dskjf`}>remind me</Link>
                        </div>
                    </div>
                    <div className="eventsList_eventsContainer_event">
                        <h5 className="eventsList_eventsContainer_event_date">27 apr - 01 may</h5>
                        <img
                            className="eventsList_eventsContainer_event_image"
                            src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <div className="eventsList_eventsContainer_event_details">
                            <h4>Event title</h4>
                            <span>
                                Category: <strong>category</strong>
                                <span className="country">country</span>
                            </span>
                            <p>address</p>
                        </div>
                        <div className="eventsList_eventsContainer_event_CTA">
                            <Link to={`/events/dskjf`}>event details</Link>
                            <Link to={`/events/dskjf`}>remind me</Link>
                        </div>
                    </div>
                    <div className="eventsList_eventsContainer_event">
                        <h5 className="eventsList_eventsContainer_event_date">27 apr - 01 may</h5>
                        <img
                            className="eventsList_eventsContainer_event_image"
                            src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <div className="eventsList_eventsContainer_event_details">
                            <h4>Event title</h4>
                            <span>
                                Category: <strong>category</strong>
                                <span className="country">country</span>
                            </span>
                            <p>address</p>
                        </div>
                        <div className="eventsList_eventsContainer_event_CTA">
                            <Link to={`/events/dskjf`}>event details</Link>
                            <Link to={`/events/dskjf`}>remind me</Link>
                        </div>
                    </div>
                    <div className="eventsList_eventsContainer_event">
                        <h5 className="eventsList_eventsContainer_event_date">27 apr - 01 may</h5>
                        <img
                            className="eventsList_eventsContainer_event_image"
                            src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <div className="eventsList_eventsContainer_event_details">
                            <h4>Event title</h4>
                            <span>
                                Category: <strong>category</strong>
                                <span className="country">country</span>
                            </span>
                            <p>address</p>
                        </div>
                        <div className="eventsList_eventsContainer_event_CTA">
                            <Link to={`/events/dskjf`}>event details</Link>
                            <Link to={`/events/dskjf`}>remind me</Link>
                        </div>
                    </div>
                    <div className="eventsList_eventsContainer_event">
                        <h5 className="eventsList_eventsContainer_event_date">27 apr - 01 may</h5>
                        <img
                            className="eventsList_eventsContainer_event_image"
                            src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <div className="eventsList_eventsContainer_event_details">
                            <h4>Event title</h4>
                            <span>
                                Category: <strong>category</strong>
                                <span className="country">country</span>
                            </span>
                            <p>address</p>
                        </div>
                        <div className="eventsList_eventsContainer_event_CTA">
                            <Link to={`/events/dskjf`}>event details</Link>
                            <Link to={`/events/dskjf`}>remind me</Link>
                        </div>
                    </div>
                    <div className="eventsList_eventsContainer_event">
                        <h5 className="eventsList_eventsContainer_event_date">27 apr - 01 may</h5>
                        <img
                            className="eventsList_eventsContainer_event_image"
                            src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <div className="eventsList_eventsContainer_event_details">
                            <h4>Event title</h4>
                            <span>
                                Category: <strong>category</strong>
                                <span className="country">country</span>
                            </span>
                            <p>address</p>
                        </div>
                        <div className="eventsList_eventsContainer_event_CTA">
                            <Link to={`/events/dskjf`}>event details</Link>
                            <Link to={`/events/dskjf`}>remind me</Link>
                        </div>
                    </div>
                    <div className="eventsList_eventsContainer_event">
                        <h5 className="eventsList_eventsContainer_event_date">27 apr - 01 may</h5>
                        <img
                            className="eventsList_eventsContainer_event_image"
                            src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <div className="eventsList_eventsContainer_event_details">
                            <h4>Event title</h4>
                            <span>
                                Category: <strong>category</strong>
                                <span className="country">country</span>
                            </span>
                            <p>address</p>
                        </div>
                        <div className="eventsList_eventsContainer_event_CTA">
                            <Link to={`/events/dskjf`}>event details</Link>
                            <Link to={`/events/dskjf`}>remind me</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Events;
