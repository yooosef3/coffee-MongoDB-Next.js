import React from 'react';
import Slider from './Slider';
import bg from '../../../public/images/h1-bacground-img-2.jpg'

const Testimonials = () => {
    return (
        <div style={{backgroundImage: `url(${bg.src})`}} className='bg-no-repeat bg-cover bg-center relative p-9'>
            <span className='absolute bg-black inset-0 opacity-60'></span>
            <h1 className='text-center font-bold text-2xl lg:text-3xl xl:text-4xl mb-14'><span className='text-[#54A06F]'>نظر </span>کاربران</h1>
            <Slider />
        </div>
    );
};

export default Testimonials;