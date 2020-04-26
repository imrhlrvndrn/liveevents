import React from 'react';
import GlitchClip from 'react-glitch-effect/core/Clip';

// SCSS
import './herosection.scss';

const HeroSection = (props) => {
    return (
        <section className='eventPageHeroSection'>
            {/* Display a hero image or video */}
            <GlitchClip>
                <h1>{props.title || 'GraphQL Asia 2020'}</h1>
            </GlitchClip>

            <div className='heroSectionContent'>
                <p>
                    {props.state || 'Mumbai'}, {props.country || 'India'} <br />
                    {props.date || 'April 24, 2020'}
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
