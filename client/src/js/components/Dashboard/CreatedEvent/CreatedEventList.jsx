import React, { useState, useEffect } from 'react';

// Icons and images
import options from '../../../../icons/options.svg';

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
                />
                {optionIsActive && (
                    <div className='options'>
                        <p className='optionItems' onClick={() => setOptionIsActive(false)}>
                            Edit event
                        </p>
                        <p className='optionItems' onClick={() => setOptionIsActive(false)}>
                            Delete event
                        </p>
                        <p className='optionItems' onClick={() => setOptionIsActive(false)}>
                            Transfer event
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatedEventList;
