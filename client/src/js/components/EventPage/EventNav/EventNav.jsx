import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const EventNav = (props) => {
    return (
        <nav
            style={{
                backgroundColor: props.backgroundColor || 'black',
                boxShadow: props.backgroundColor && 'none',
            }}
        >
            <div className='nav'>
                <Link to='/'>
                    <h4 style={{ color: props.primaryColor || 'white' }}>EventsLive</h4>
                </Link>
                <div className='nav_links'>
                    <NavLink
                        to='/event/:slug/about'
                        style={{
                            color: props.primaryColor || 'white',
                        }}
                    >
                        about
                    </NavLink>
                    <NavLink
                        to='/event/:slug/schedule'
                        style={{
                            color: props.primaryColor || 'white',
                        }}
                    >
                        schedule
                    </NavLink>
                    <NavLink
                        to='/event/:slug/venue'
                        style={{
                            color: props.primaryColor || 'white',
                        }}
                    >
                        venue
                    </NavLink>
                </div>
                <div className='nav_auth'>
                    <Link
                        to='/auth'
                        style={{
                            border: `1px solid ${props.primaryColor}` || '1px solid white',
                            background: 'transparent',
                            color: props.primaryColor || 'white',
                        }}
                    >
                        Get Tickets
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default EventNav;
