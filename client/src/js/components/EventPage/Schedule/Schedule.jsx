import React from 'react';

// SCSS
import './schedule.scss';

// Components
import EventNav from '../EventNav/EventNav';

const Schedule = () => {
    return (
        <>
            <EventNav primaryColor='black' backgroundColor='#eee' />

            <section className='eventSchedule'>
                <h1>Event schedule</h1>

                <div className='eventScheduleContainer'>
                    <p>Learn & have fun</p>
                </div>
            </section>
        </>
    );
};

export default Schedule;
