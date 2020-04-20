import React, { useState } from 'react';

import './filter.scss';

import options from '../../../../icons/keyboard_arrow_down-24px.svg';

const Filter = () => {
    const [isFilterActive, setIsFilterActive] = useState(false);
    const filterStatus = document.querySelector('.filterStatus');

    const handleFilterActive = (event) => {
        setIsFilterActive(false);
        filterStatus.innerHTML = event.target.textContent;

        console.log(event.target.innerHTML);
    };

    return (
        <div className='filterWrapper'>
            <input
                type='text'
                name='filterInput'
                id='filterInput'
                placeholder='Search by title...'
            />
            <div className='filterItemContainer'>
                <div className='filterComponent' onClick={() => setIsFilterActive(!isFilterActive)}>
                    <p className='filterStatus'>All</p>
                    <img
                        src={options}
                        alt='filter dropdown icon'
                        onClick={() => setIsFilterActive(!isFilterActive)}
                        style={{ transform: isFilterActive && 'rotate(180deg)' }}
                    />
                </div>
                {isFilterActive && (
                    <div className='filterItemsWrapper'>
                        <span className='filterItem' onClick={(event) => handleFilterActive(event)}>
                            all
                        </span>
                        <span className='filterItem' onClick={(event) => handleFilterActive(event)}>
                            live
                        </span>
                        <span className='filterItem' onClick={(event) => handleFilterActive(event)}>
                            cancelled
                        </span>
                        <span className='filterItem' onClick={(event) => handleFilterActive(event)}>
                            published
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filter;
