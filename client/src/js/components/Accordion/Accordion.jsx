import React, {useState, useRef} from 'react';

// SCSS
import './accordion.scss';
import Chevron from './Chevron/Chevron';

const Accordion = (props) => {
    // const []

    return (
        <div className='accordion'>
            <div className='accordionTitle'>
                <div className='timing'>{props.timing || 'timing from - timing to'}</div>
                <div className='speakerInfo'>
                    <img src={props.speakerImage || ''} alt='speaker image' />
                    <div className='speakerContent'>
                        <h4 className='talkTitle'>{props.talkTitle || 'talk title'}</h4>
                        <p>
                            By{' '}
                            <span className='speakerName'>
                                {props.speakerName || 'speaker name'}
                            </span>{' '}
                            {props.speakerDesignation || 'designation'} @{' '}
                            {props.speakerCompany || 'company'}
                        </p>
                    </div>
                </div>
                <Chevron height='40' width='40' fill='rgb(54, 235, 207)' />
            </div>
            <div className='accordionContent' dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    );
};

export default Accordion;
