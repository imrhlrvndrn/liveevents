import React from 'react';

// SCSS
import './herosection.scss';

const HeroSection = (props) => {
    return (
        <div className='eventPageHeroSection'>
            {/* Display a hero image or video */}
            <h1>{props.title || 'GraphQL Asia 2020'}</h1>

            <div className='heroSectionContent'>
                <p>
                    {props.state || 'Mumbai'}, {props.country || 'India'} <br />
                    {props.date || 'April 24, 2020'}
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
