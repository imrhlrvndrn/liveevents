import React, { useState, useRef } from 'react';

// SCSS
import './accordion.scss';
import Chevron from './Chevron/Chevron';

const Accordion = (props) => {
    const [active, setActive] = useState(false);
    const [contentHeight, setContentHeight] = useState('0px');
    const [rotate, setRotate] = useState('accordion__icon');
    const [opacity, setOpacity] = useState('0');

    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setActive(!active);
        setContentHeight(active ? '0px' : `${contentRef.current.scrollHeight + 32}px`);
        setRotate(active ? 'accordion__icon rotateBack' : 'accordion__icon rotate');
        setOpacity(active ? '0' : '1');
    };

    return (
        <div className='accordion'>
            <div className='accordionTitle' onClick={toggleAccordion}>
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
                <Chevron
                    className={`${rotate}`}
                    height={40}
                    width={40}
                    fill={'rgb(54, 235, 207)'}
                />
            </div>
            <div
                ref={contentRef}
                style={{
                    maxHeight: `${contentHeight}`,
                    opacity: `${opacity}`,
                    padding: active ? '1em' : '0 1em',
                }}
                className='accordionContent'
                dangerouslySetInnerHTML={{ __html: props.content }}
            />
        </div>
    );
};

export default Accordion;
