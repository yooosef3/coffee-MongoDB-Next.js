import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Sliders from './Sliders';
import product from '../../../public/images/banner_0ca7fff5-d565-4e32-aa0f-6a35a2fdeafd.jpg'

const HandPicked = () => {
    return (
        <div>
            <div className="text-center mb-10">
                <h1 className='text-black font-bold text-xl lg:text-2xl xl:text-4xl mb-2'><span className='text-[#54A06F]'>محصول</span> دستچین شده</h1>
                <p className='text-gray-400 font-bold lg:text-lg xl:text-xl'>برخلاف تصور رایج، یک قطعه کلاسیک را انتخاب کنید</p>
            </div>
            <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:w-[90%] xl:w-[80%] mx-auto lg:justify-center'>
                <Sliders />
                <div className='w-[90%] lg:w-[50%] mx-auto relative group lg:h-[420px]'>
                    <div className="absolute inset-0 flex flex-col gap-2 justify-center items-center z-10">
                        <h1 className="text-white font-bold text-3xl">50% تخفیف</h1>
                        <Link href='/' className='bg-[#54a06f] px-4 py-2 rounded-lg hover:bg-gray-800 font-bold duration-200'>
                            جستجوی تخفیف ها
                        </Link>
                    </div>
                    <Image alt='product' className='rounded-lg group-hover:grayscale duration-200 w-screen lg:h-full' width={1000} height={1000} src={product}/>
                </div>
            </div>
        </div>
    );
};

export default HandPicked;