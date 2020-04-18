import React from 'react';
import DashboardNav from './DashboardNav';

const SalesDashboard = () => {
    return (
        <section id='salesDashboard'>
            <DashboardNav />
            <section id='mainDashboard'>
                <h2>overview</h2>
                {/* Global Analytics for all events  */}
                <div className='overviewAnalyticsWrapper'>
                    <div className='globalAnalytics'>
                        <p className='subtleTitle'>total sales</p>
                        <p className='mainTitle'>$2,233</p>
                        <p className='percentageTag'>▲ 35.20%</p>
                    </div>
                    <div className='globalAnalytics'>
                        <p className='subtleTitle'>registrations</p>
                        <p className='mainTitle'>$2,233</p>
                        <p className='percentageTag'>▼ 35.20%</p>
                    </div>
                    <div className='globalAnalytics'>
                        <p className='subtleTitle'>total attendees</p>
                        <p className='mainTitle'>$2,233</p>
                        <p className='percentageTag'>▲ 35.20%</p>
                    </div>
                    <div className='globalAnalytics'>
                        <p className='subtleTitle'>create new event</p>
                        <p className='mainTitle'>+</p>
                        {/* <p className='percentageTag'>▲ 35.20%</p> */}
                    </div>
                </div>

                {/* All the createdEvents Of User/Organization */}
                <div className='allCreatedEvents'>
                    <h4>All created events</h4>
                    <div className='createdEvent'>
                        <p className='bold'>GraphQL Asia 2020</p>
                        <a href='#'>test transparentize</a>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default SalesDashboard;
