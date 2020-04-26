import React from 'react';

// SCSS
import '../../css/steps.scss';

const Steps = () => {
    const steps = [
        {
            id: '01',
            title: 'create an event',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                                earum necessitatibus tenetur possimus delectus itaque doloremque
                                amet esse. Cumque, ratione!`,
            img:
                'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
            id: '02',
            title: 'share the event',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                                earum necessitatibus tenetur possimus delectus itaque doloremque
                                amet esse. Cumque, ratione!`,
            img:
                'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
            id: '03',
            title: 'host the event',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                                earum necessitatibus tenetur possimus delectus itaque doloremque
                                amet esse. Cumque, ratione!`,
            img:
                'https://images.pexels.com/photos/768350/pexels-photo-768350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
    ];

    return (
        <section id='events' className='homepage_steps w80'>
            <h2>how does it work ?</h2>
            <div className='homepage_steps_details'>
                {steps.map((step) => {
                    return (
                        <div className='homepage_steps_details_step' key={step.id}>
                            <img src={step.img} alt='' />
                            <div className='homepage_steps_details_step_overlay'>
                                <span>{step.id}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Steps;
