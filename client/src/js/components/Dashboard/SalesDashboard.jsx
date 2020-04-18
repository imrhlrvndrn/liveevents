import React from 'react';
import DashboardNav from './DashboardNav';

const SalesDashboard = () => {
    return (
        <section id='salesDashboard'>
            <DashboardNav />
            <section id='mainDashboard'>
                <h2>overview</h2>
                <div className='overview'></div>
            </section>
        </section>
    );
};

export default SalesDashboard;
