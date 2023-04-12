import Blog from '../home/blogs/Blog';
import HeaderTemplate from '../shared/HeaderTemplate';
import { IoIosArrowBack } from "react-icons/io";
import PostSidebar from '../shared/PostSidebar';
import React from 'react';
import { blogs } from '../home/blogs/Slider';

const Blogs = () => {
    return (
        <div>
            <HeaderTemplate 
                background='/images/beautiful-shot-cup-cappuccino-with-white-heart-pattern-wooden-table.jpg' 
                header='لیست بلاگ'
            />
            <div className='w-[90%] md:w-[700px] lg:w-[920px] xl:w-[1200px] gap-10 mx-auto py-14 grid grid-cols-1 lg:grid-cols-12'>
                <PostSidebar />
                <div className="col-span-1 lg:col-span-8 flex flex-col md:flex-row flex-wrap gap-6 md:gap-y-14">
                    {blogs.map(blog => 
                        <Blog
                            key={blog.id} 
                            image={blog.image}
                            title={blog.title}
                            text={blog.text}
                            date={blog.date}
                            blogs={true}
                        />                        
                        )}
                    <div className='flex gap-1 justify-center items-center'>
                        <span className='bg-[#53A16E] text-white hover:bg-[#53A16E] duration-200 cursor-pointer px-5 rounded-md py-3'>1</span>
                        <span className='bg-slate-900 text-white hover:bg-[#53A16E] duration-200 cursor-pointer px-5 rounded-md py-3'>2</span>
                        <span className='flex justify-center items-center px-[18px] py-[17px] bg-white cursor-pointer rounded-md'><IoIosArrowBack className='text-black'/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;