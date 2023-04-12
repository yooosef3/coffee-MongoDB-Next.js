import Image from 'next/image';
import React from 'react';
import people1 from '../../../public/images/510X510.webp'
import people2 from '../../../public/images/510X510-1.webp'
import people3 from '../../../public/images/510X510-2.webp'

const People = () => {
    return (
        <div className='py-16 md:py-20 lg:py-28 w-[94%] md:w-[700px] lg:w-[920px] xl:w-[1200px] mx-auto flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-9'>
            <div className=' md:w-[45%] md:flex md:flex-col md:justify-center md:items-center'>
                <h1 className="text-[#53a16e] font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-4">افراد <span className="text-black">کلیدی</span></h1>
                <p className='text-gray-500'>پرندگانی که آنها را آورده اند، موجودی میوه ای است که روز ما کمتر نمی تواند بعد از تیم ما بیاورد.
                    تقسیم وجود دارد با ثمر.</p>
            </div>
            <div className='text-center md:w-[45%]'>
                <Image src={people1} className='w-full mb-4 rounded-md hover:grayscale duration-200 cursor-pointer' width={500} height={500} alt='people'/>
                <h1 className='text-black font-semibold my-2'>ندا زمانی</h1>
                <span className='text-[#53a16e] font-medium'>مدیر</span>
            </div>
            <div className='text-center md:w-[45%]'>
                <Image src={people2} className='w-full mb-4 rounded-md hover:grayscale duration-200 cursor-pointer' width={500} height={500} alt='people'/>
                <h1 className='text-black font-semibold my-2'>یوسف خدری</h1>
                <span className='text-[#53a16e] font-medium'>برنامه نویس Next.js</span>
            </div>
            <div className='text-center md:w-[45%]'>
                <Image src={people3} className='w-full mb-4 rounded-md hover:grayscale duration-200 cursor-pointer' width={500} height={500} alt='people'/>
                <h1 className='text-black font-semibold my-2'>شیما مقسمی</h1>
                <span className='text-[#53a16e] font-medium'>برنامه نویس Node.js</span>
            </div>
        </div>
    );
};

export default People;