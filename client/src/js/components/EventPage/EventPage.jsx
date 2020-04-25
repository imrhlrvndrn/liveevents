import React from 'react';

// Components
import HeroSection from './HeroSection/HeroSection';
import EventSpeakers from './EventSpeakers/EventSpeakers';
import Schedule from './Schedule/Schedule';

const EventPage = () => {
    return (
        <>
            <HeroSection />
            <EventSpeakers />
            <Schedule />
        </>
    );
};

export default EventPage;
