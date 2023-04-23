import React from 'react';
import SliderOne from './SliderOne';
import SliderTwo from './SliderTwo';

const Sliders = () => {
    
    return (
        <div className='flex flex-col gap-5 lg:w-[50%]'>
            <SliderOne />
            <SliderTwo />
        </div>
    );
};

export default Sliders;