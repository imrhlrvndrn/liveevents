import React from 'react';

const Filter = () => {
    return (
        <div className='filterWrapper'>
            <input type='text' name='filterInput' id='filterInput' />
            <div className='filterItems'></div>
        </div>
    );
};

export default Filter;
