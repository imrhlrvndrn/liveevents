import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className='nav'>
                <Link to='/'>
                    <h4>EventsLive</h4>
                </Link>
                <div className='nav_links'>
                    <NavLink to='/about'>about</NavLink>
                    <NavLink to='/events'>events</NavLink>
                    <NavLink to='/contact'>contact us</NavLink>
                    <NavLink to='/dashboard'>dashboard</NavLink>
                </div>
                <div className='nav_auth'>
                    <Link to='/auth'>signup</Link>
                    <Link to='/auth'>login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
