import React from 'react';

// Components
import EventNav from './EventNav/EventNav';
import HeroSection from './HeroSection/HeroSection';
import EventSpeakers from './EventSpeakers/EventSpeakers';

const EventPage = () => {
    return (
        <>
            <EventNav />
            <HeroSection />
            <EventSpeakers />
        </>
    );
};

export default EventPage;
