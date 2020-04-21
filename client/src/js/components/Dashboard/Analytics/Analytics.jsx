import React from 'react';

// Components
import BasicAnalytics from './BasicAnlaytics/BasicAnalytics';

// Scss
import './analytics.scss';

const Analytics = () => {
    const array = [
        {
            subtleTitle: 'attendees',
            mainTitle: 55,
            annotation: '',
            percentageTag: 35,
        },
        {
            subtleTitle: 'attendees',
            mainTitle: 55,
            annotation: '',
            percentageTag: 35,
        },
        {
            subtleTitle: 'total revenue',
            mainTitle: 55,
            annotation: '$',
            percentageTag: 35,
        },
    ];

    return (
        <div className='analytics'>
            <h2>Analytics</h2>
            <BasicAnalytics data={array} />
        </div>
    );
};

export default Analytics;
