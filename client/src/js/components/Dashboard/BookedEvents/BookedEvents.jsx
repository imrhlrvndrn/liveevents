import React from 'react';

// Components
import Filter from '../FilterComponent/Filter';

// Icons and images
import options from '../../../../icons/options.svg';

const BookedEvents = () => {
    return (
        <>
            {/* All the bookedEvents Of User/Organization */}
            <div className='allBookedEvents'>
                <div className='titleWrapper'>
                    <h2>booked events</h2>
                    <Filter />
                </div>
                <div className='bookedEvent'>
                    <p className='bold'>GraphQL Asia 2020</p>
                    <div>
                        <a href='#'>test transparentize</a>
                        <img src={options} alt='dropdown options menu' />
                    </div>
                </div>
                <div className='bookedEvent'>
                    <p className='bold'>GraphQL Asia 2020</p>
                    <div>
                        <a href='#'>test transparentize</a>
                        <img src={options} alt='dropdown options menu' />
                    </div>
                </div>
                <div className='bookedEvent'>
                    <p className='bold'>GraphQL Asia 2020</p>
                    <div>
                        <a href='#'>test transparentize</a>
                        <img src={options} alt='dropdown options menu' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookedEvents;
