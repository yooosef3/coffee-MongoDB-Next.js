import Info from './Info';
import React from 'react';
import Slider from './Slider';

const SliderInfo = () => {
    return (
        <div className='w-[350px] sm:w-[400px] md:w-[670px] lg:w-[1000px] xl:w-[1200px] mx-auto py-14 xl:pt-24 flex flex-col lg:flex-row gap-10 md:gap-80 lg:gap-10'>
            <Slider />
            <Info />
        </div>
    );
};

export default SliderInfo;