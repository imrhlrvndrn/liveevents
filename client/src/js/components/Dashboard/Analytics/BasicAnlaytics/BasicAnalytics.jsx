import React from 'react';

import './basicanalytics.scss';

const BasicAnalytics = (props) => {
    return (
        <div className='basicAnalyticsWrapper'>
            {props.data.map((data) => {
                return (
                    <div className='eventAnalytics'>
                        <p className='subtleTitle'>{data.subtleTitle}</p>
                        <p className='mainTitle'>
                            <span className='annotation'>{data.annotation} </span>
                            {data.mainTitle}
                        </p>
                        <p className='percentageTag'> ▼ {data.percentageTag}%</p>
                    </div>
                );
            })}
        </div>
    );
};

export default BasicAnalytics;
