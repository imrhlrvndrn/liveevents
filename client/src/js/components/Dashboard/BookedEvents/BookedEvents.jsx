import React from 'react';

// Icons and images
import options from '../../../../icons/keyboard_arrow_down-24px.svg';

const BookedEvents = () => {
    return (
        <>
            {/* All the bookedEvents Of User/Organization */}
            <div className='allBookedEvents'>
                <h2>booked events</h2>
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
