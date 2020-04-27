import React from 'react';

const Chevron = (props) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            height={props.height || '24'}
            viewBox='0 0 24 24'
            width={props.width || '24'}
            style={{ cursor: 'pointer' }}
        >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path
                fill={props.fill || '#ffffff'}
                d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'
            />
        </svg>
    );
};

export default Chevron;
