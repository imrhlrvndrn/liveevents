import React from 'react';

// SCSS
import './schedule.scss';

// Components
import EventNav from '../EventNav/EventNav';
import Accordion from '../../Accordion/Accordion';

const Schedule = () => {
    return (
        <>
            <EventNav primaryColor='black' backgroundColor='#eee' />

            <section className='eventSchedule'>
                <h1>Event schedule</h1>

                <div className='eventScheduleContainer'>
                    <p>Learn & have fun</p>
                    <Accordion
                        speakerName='Rahul Ravindran'
                        speakerDesignation='Full-Stack Developer'
                        speakerCompany='BeingCodr'
                        speakerImage='https://bit.ly/356mmXS'
                        timing='10:00AM - 12:00PM'
                        talkTitle='GraphQL Asia 2020'
                        content='This is the content of the custom built accordion'
                    />
                </div>
            </section>
        </>
    );
};

export default Schedule;
