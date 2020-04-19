import React from 'react';

// Components
import CreatedEventList from '../CreatedEvent/CreatedEventList';

// Icons and images
import options from '../../../../icons/keyboard_arrow_down-24px.svg';

const Overview = () => {
    const list = [1, 2, 3, 4];

    return (
        <>
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
                </div>
            </div>

            {/* All the createdEvents Of User/Organization */}
            <div className='allCreatedEvents'>
                <div className='TitleWrapper'><h4>created events</h4></div>
                {list.map((event) => {
                    return <CreatedEventList />;
                })}
            </div>
        </>
    );
};

export default Overview;
