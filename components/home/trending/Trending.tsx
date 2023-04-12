import { HiChevronLeft } from "react-icons/hi";
import Link from 'next/link';
import React from 'react';
import Slider from './Slider';

type PropType = {
    related?: boolean
} 
const Trending = ({related}:PropType) => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className="sm:flex sm:justify-around">
                {related ? 
            
            <h1 className='text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-16'><span className='text-[#54A06F]'>محصولات </span>مرتبط</h1>
            :
            <h1 className='text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2'><span className='text-[#54A06F]'>محصول </span>پرطرفدار</h1>
        }
        {
            !related &&
                <Link className='text-gray-500 flex items-center gap-2 hover:text-[#54A06F] duration-200 md:text-lg font-bold' href='/products'>
                    <h1>مشاهده تمام محصولات</h1>
                    <HiChevronLeft />
                </Link>
        }
            </div>   
            <Slider />
        </div>
    );
};

export default Trending;