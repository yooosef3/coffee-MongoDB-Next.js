import React from 'react';
import about from '../../../public/images/3-min.webp'

const About = () => {
    return (
        <div style={{backgroundImage: `url(${about.src})`}} className='bg-cover bg-center h-80 lg:h-[420px] xl:h-[550px] flex items-center md:justify-end '>
                 
                <div className='bg-white bg-opacity-60 p-4 md:p-2 w-[90%] md:w-[50%] lg:w-[40%]'>
                    <h1 className='font-bold text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4'>درباره <span className='text-[#53A16E]'>ما</span></h1>
                    <p className='text-gray-500 md:w-[370px]'>
                    «بالا در بالا، نهنگ‌های دانه‌ای با هوا به قدری خالی هستند که چنین است. ماهی ها نور می آورند مبارک، میان نور مجموعه و ما حکومت می کنیم گفت فرمانروایی»
                    </p>
                </div>
        </div>
    );
};

export default About;