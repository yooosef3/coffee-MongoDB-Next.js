import Image from 'next/image';
import React from 'react';
import standard from '../../../public/images/video.webp'

const Standards = () => {
    return (
        <div className='w-[94%] md:w-[700px] lg:w-[920px] xl:w-[1200px] py-16 mx-auto flex flex-col md:flex-row md:items-center gap-8 lg:gap-16'>
            <div>
                <h1 className='text-black font-bold text-xl md:text-3xl lg:text-4xl'>تنظیم <span className='text-[#53A16E]'>استانداردهای</span> صنعت</h1>
                <p className='text-gray-500 mt-1 mb-8 md:mt-5'>
                پورتلند مگیگز Chartreuse شطرنجی پالو سانتو، رمپ بدون گلوتن آیفون etsy salvia cray کامبوجا لیوان مسی قهوه تک منشا.
                </p>
                <div className='flex items-center gap-2'>
                    <span className='text-[#53A16E] text-4xl xl:text-6xl'>12,346</span>
                    <span className='text-gray-600 text-xl font-bold'>مشتری</span>
                </div>
                <p className='text-gray-500'>مشتریان راضی در سراسر جهان و در حال رشد</p>
            </div>
            <div>
                <Image className='rounded-md w-full hover:grayscale duration-200 cursor-pointer' src={standard} width={500} height={500} alt='standard'/>
            </div>
        </div>
    );
};

export default Standards;