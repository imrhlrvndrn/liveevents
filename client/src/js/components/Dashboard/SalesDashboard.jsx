import React, { useState } from 'react';

// Components
import DashboardNav from './DashboardNav';
import Overview from './Overview/Overview';
import Analytics from './Analytics/Analytics';
import BookedEvents from './BookedEvents/BookedEvents';

const SalesDashboard = () => {
    const [dashboardNav, setDashboardNav] = useState('analytics');

    return (
        <section id='salesDashboard'>
            <DashboardNav setDashboardNav={setDashboardNav} />
            <section id='mainDashboard'>
                {dashboardNav === 'overview' ? (
                    <Overview />
                ) : dashboardNav === 'booked events' ? (
                    <BookedEvents />
                ) : dashboardNav === 'analytics' ? (
                    <Analytics />
                ) : null}
            </section>
        </section>
    );
};

export default SalesDashboard;
