import React from 'react';

// SCSS
import './venue.scss';

// Components
import EventNav from '../EventNav/EventNav';

const Venue = (props) => {
    return (
        <>
            <EventNav />
            <section id='eventVenuePage'>
                <div className='eventVenueWrapper'>
                    <img
                        src={
                            'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'
                        }
                        alt='Venue image'
                    />
                    <div className='eventVenueDetails'>
                        <p className='venueAddress'>
                            4B-201, Ramchandra Complex,
                            <wbr /> Subhash Cross Road, Ganeshnagar,
                            <wbr /> Dombivli (West)
                        </p>
                        <button className='getDirectionsBtn'>Get Directions</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Venue;
