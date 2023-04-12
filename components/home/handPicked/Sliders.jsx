import React from 'react';
import SliderOne from './SliderOne';
import SliderTwo from './SliderTwo';

const Sliders = ({productsList}) => {
    
    return (
        <div className='flex flex-col gap-5 lg:w-[50%]'>
            <SliderOne productsList={productsList}/>
            <SliderTwo productsList={productsList}/>
        </div>
    );
};

export default Sliders;