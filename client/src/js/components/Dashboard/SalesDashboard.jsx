import React, { useState } from 'react';

// Components
import DashboardNav from './DashboardNav';
import Overview from './Overview/Overview';
import BookedEvents from './BookedEvents/BookedEvents';

const SalesDashboard = () => {
    const [dashboardNav, setDashboardNav] = useState('overview');

    return (
        <section id='salesDashboard'>
            <DashboardNav setDashboardNav={setDashboardNav} />
            <section id='mainDashboard'>
                {dashboardNav === 'overview' ? (
                    <Overview />
                ) : dashboardNav === 'booked events' ? (
                    <BookedEvents />
                ) : null}
            </section>
        </section>
    );
};

export default SalesDashboard;
