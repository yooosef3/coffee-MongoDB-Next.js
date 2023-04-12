import React from 'react';
import RecentPostCard from './RecentPostCard';
import { RiSearch2Line } from "react-icons/ri";
import { beans } from '../home/beanSlider/BeanSlider';

const PostSidebar = () => {
    return (
        <div className='col-span-1 lg:col-span-4 lg:sticky top-8'>
            <h1 className='text-black font-bold text-lg mb-4'>جستجو</h1>
            <div className='relative w-full mx-auto shadow-lg'>
                <input type='text' placeholder='جستجوی پست' className='w-full px-2 py-3 text-black font-semibold outline-none border border-slate-300 focus:border-blue-600 bg-white rounded-md'/>
                <RiSearch2Line className='absolute top-4 hover:text-[#53A271] cursor-pointer duration-200 text-slate-400 left-2 text-xl'/>
            </div>
            <div className='border-t border-slate-300 py-5 mt-7'>
                <h1 className='text-black font-bold text-lg mb-4'>پست های اخیر</h1>
                <div className='flex flex-col gap-4'>
                    {beans.map(bean => 
                        <RecentPostCard 
                            key={bean.id}
                            name={bean.name}
                            image={bean.image}
                            />
                        )}
                </div>
            </div>
            <div className='border-t border-slate-300 py-5 mt-7'>
                <h1 className='text-black font-bold text-lg mb-4'>دسته بندی</h1>
                <div className="flex gap-2">
                    <span className="bg-white text-slate-400 w-fit font-bold px-3 py-1 rounded-md hover:text-white hover:bg-slate-800 duration-300 cursor-pointer">عربیکا</span>
                    <span className="bg-white text-slate-400 w-fit font-bold px-3 py-1 rounded-md hover:text-white hover:bg-slate-800 duration-300 cursor-pointer">قهوه کردی</span>
                </div>
            </div>
        </div>
    );
};

export default PostSidebar;