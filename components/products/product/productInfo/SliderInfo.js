import Info from './Info';
import React from 'react';
import Slider from './Slider';

const SliderInfo = ({product}) => {
    return (
        <div className='w-[350px] sm:w-[400px] md:w-[670px] lg:w-[1000px] xl:w-[1200px] mx-auto py-14 xl:pt-24 flex flex-col lg:flex-row gap-10 md:gap-80 lg:gap-10'>
            <Slider product={product}/>
            <Info product={product}/>
        </div>
    );
};

export default SliderInfo;