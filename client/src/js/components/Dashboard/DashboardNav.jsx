import React from 'react';

import man from '../../../icons/man.svg';

const DashboardNav = (props) => {
    let { setDashboardNav } = props;

    return (
        <div id='dashboardNav'>
            <a href='/' className='dashboardLogo'>
                EventsLive
            </a>
            <ul>
                <div className='navItemsWrapper'>
                    <a className='navItems' href='#' onClick={() => setDashboardNav('overview')}>
                        Overview
                    </a>
                    <a className='navItems' href='#' onClick={() => setDashboardNav('analytics')}>
                        Analytics
                    </a>
                    <a className='navItems' href='#' onClick={() => setDashboardNav('settings')}>
                        Settings
                    </a>
                    <a
                        className='navItems'
                        href='#'
                        onClick={() => setDashboardNav('booked events')}
                    >
                        Booked Events
                    </a>
                    <a className='navItems' href='#' onClick={() => setDashboardNav('random')}>
                        Some other feature
                    </a>
                </div>
                <div className='userProfile'>
                    <img src={man} alt='user profile image' />
                    <p className='username'>Rahul Ravindran</p>
                </div>
            </ul>
        </div>
    );
};

export default DashboardNav;
