import React from 'react';

const DashboardNav = () => {
    return (
        <div id='dashboardNav'>
            <a href='#' className='dashboardLogo'>
                logo
            </a>
            <ul>
                <a href='#'>Overview</a>
                <a href='#'>Analytics</a>
                <a href='#'>Settings</a>
                <a href='#'>Some other feature</a>
            </ul>
        </div>
    );
};

export default DashboardNav;
