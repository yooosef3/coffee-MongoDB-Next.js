import React from 'react';
import RecentPostCard from './RecentPostCard';
import { RiSearch2Line } from "react-icons/ri";

const PostSidebar = ({items, searched, setSearched}) => {
    return (
        <div className='col-span-1 lg:col-span-4 lg:order-0 lg:order-0 lg:sticky top-8'>

            <div className='py-5 mt-7'>
                <h1 className='text-black font-bold text-lg mb-4'>پست های اخیر</h1>
                <div className='flex flex-col gap-4'>
                    {items?.slice(0,4).map(item => 
                        <RecentPostCard 
                            key={item._id}
                            title={item.title}
                            image={item.image}
                            id={item._id}
                            route='blogs'
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