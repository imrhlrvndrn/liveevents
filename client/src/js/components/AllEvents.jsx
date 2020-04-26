import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Nav from './Nav';

const AllEvents = () => {
    return (
        <>
            <Nav />
            <section className='events'>
                <div className='events_heroContent'>
                    <h1>
                        <h1
                            style={{
                                color: 'var(--mediumBlue)',
                                fontSize: '80px',
                                display: 'inline',
                            }}
                        >
                            #
                        </h1>{' '}
                        Find your event
                    </h1>
                </div>
            </section>
            <section className='eventsList'>
                <form>
                    <input
                        placeholder='Location'
                        type='text'
                        name='eventLocation'
                        id='eventLocation'
                    />
                    <label htmlFor='eventCategory'>Category</label>
                    <input
                        placeholder='Category'
                        type='text'
                        name='eventCategory'
                        id='eventCategory'
                    />
                    <label htmlFor='eventDate'>Date</label>
                    <input placeholder='Date' type='date' name='eventDate' id='eventDate' />
                    <button type='submit'>Search</button>
                </form>

                <div className='eventsList_eventsContainer'>
                    <div className='eventsList_eventsContainer_event'>
                        <span className='priceTag'>Free</span>

                        <img
                            className='eventsList_eventsContainer_event_image'
                            src='https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                            alt=''
                        />

                        <div className='eventsList_eventsContainer_event_info'>
                            <p className='eventsList_eventsContainer_event_info_date'>
                                apr <br /> 20
                            </p>
                            <div className='eventsList_eventsContainer_event_info_details'>
                                <h4>
                                    <a href='/event/graphql-asia-2020'>GraphQL Asia 2020</a>
                                </h4>
                                <p>Wakande Stadium and Auditorium, Churchgate, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    style={{ width: '20%' }}
                    src='https://qrtag.net/api/qr_transparent_1.svg?url=https://2020.teamtanay.jobchallenge.dev'
                    alt=''
                />
            </section>
        </>
    );
};

export default AllEvents;
