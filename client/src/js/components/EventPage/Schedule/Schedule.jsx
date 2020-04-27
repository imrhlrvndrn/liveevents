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
                    <Accordion
                        speakerName='Rahul Ravindran'
                        speakerDesignation='Full-Stack Developer'
                        speakerCompany='BeingCodr'
                        speakerImage='https://bit.ly/356mmXS'
                        timing='10:00AM - 12:00PM'
                        talkTitle='GraphQL Asia 2020'
                        content='This is the content of the custom built accordion'
                    />
                    <Accordion
                        speakerName='Rahul Ravindran'
                        speakerDesignation='Full-Stack Developer'
                        speakerCompany='BeingCodr'
                        speakerImage='https://bit.ly/356mmXS'
                        timing='10:00AM - 12:00PM'
                        talkTitle='GraphQL Asia 2020'
                        content='This is the content of the custom built accordion dkslafjlkdjfljlkdjflkjds fjldssjf lk jdl fldj lfldjlfj ld jlkf jldsjfljldskjfldsl fldlf jd jlkfjlkdj fldsjf dsfjldsj f;ldj flds fl jdlfj ldj fljdlfj lkd fldjs fl djflkd sjflkd jsjfdjghjkfhglkds flkdjsfewyren4123-47-31285 efef9-739 45fkjdh alkgh'
                    />
                </div>
            </section>
        </>
    );
};

export default Schedule;
