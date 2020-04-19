import React, { useState, useEffect } from 'react';

// Icons and images
import options from '../../../../icons/keyboard_arrow_down-24px.svg';

const CreatedEventList = () => {
    const [optionIsActive, setOptionIsActive] = useState(false);

    return (
        <div className='createdEvent'>
            <p className='bold'>GraphQL Asia 2020</p>
            <div>
                <a href='#'>test transparentize</a>
                <img
                    src={options}
                    alt='dropdown options menu'
                    onClick={() => {
                        setOptionIsActive(!optionIsActive);
                    }}
                    onBlur={() => setOptionIsActive(false)}
                />
                {optionIsActive && (
                    <div className='options'>
                        <p className='optionItems'>Edit event</p>
                        <p className='optionItems'>Delete event</p>
                        <p className='optionItems'>Transfer event</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatedEventList;
