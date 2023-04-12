import React from 'react';
import Slider from './Slider';

const Blogs = () => {
    return (
        <div className='mt-28 pb-28'>
           <h1 className='text-center font-bold text-2xl lg:text-3xl xl:text-4xl mb-5 text-black'><span className='text-[#54A06F]'>مقالات </span>برگزیده</h1>
           <p className='text-gray-400 font-bold lg:text-md text-center mb-12'>ما به همه جهانبان ثابت کرده ایم که بهترین هستیم و برای این مورد به خودمان افتخار می کنیم و توانسته ایم جوایز بین المللی زیادی دریافت کنیم </p>
            <Slider />
        </div>
    );
};

export default Blogs;