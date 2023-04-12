import Image from 'next/image';
import React from 'react';
import growing from '../../../public/images/Growing-Fast-min.webp'

const Growing = () => {
    return (
        <div className='w-[94%] md:w-[700px] lg:w-[920px] xl:w-[1200px] py-16 mx-auto flex flex-col md:flex-row md:items-center gap-8 lg:gap-16'>
            <div>
                <Image className='rounded-md w-full hover:grayscale duration-200 cursor-pointer' src={growing} width={500} height={500} alt='standard'/>
            </div>
            <div>
                <h1 className='text-black font-bold text-xl md:text-3xl lg:text-4xl'>رشد <span className='text-[#53A16E]'>سریع</span></h1>
                <p className='text-gray-500 mt-1 mb-8 md:mt-5'>
                مهمانی هنری Thundercats ادیسون لامپ معتبر جشن سقف تایاکی مصنوعی ماهی مرکب بدون گلوتن زردچوبه یکپارچهسازی با سیستمعامل iphone etsy.                </p>
                <div className='flex items-center gap-2'>
                    <span className='text-[#53A16E] text-4xl xl:text-6xl'>1235</span>
                    <span className='text-gray-600 text-xl font-bold'>شرکت</span>
                </div>
                <p className='text-gray-500'>دفاتر منطقه ای در سراسر جهان</p>
            </div>
        </div>
    );
};

export default Growing;