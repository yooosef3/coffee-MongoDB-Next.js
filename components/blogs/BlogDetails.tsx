import React, { useContext } from 'react';

import { BlogContext } from '@/pages/blogs/[blogId]';
import HeaderTemplate from '../shared/HeaderTemplate';
import PostContent from '../shared/PostContent';
import PostSidebar from '../shared/PostSidebar';
import Slider from '../home/blogs/Slider'

const BlogDetails = () => {
    const blog = useContext(BlogContext);

    return (
        <div>
            <HeaderTemplate background='/images/top-view-tasty-coffee-with-coffee-beans.jpg' header={blog.title}/>
            <div className='w-[90%] md:w-[700px] lg:w-[920px] xl:w-[1200px] gap-10 mx-auto py-14 grid grid-cols-1 lg:grid-cols-12'>
                <PostSidebar />
                <PostContent />
            </div>
            <section className='my-16 w-full'>
                <h1 className='text-black text-center mb-5 text-2xl lg:text-3xl xl:text-4xl font-bold'>مقالات <span className='text-[#52a16f]'>مرتبط</span></h1>
                <p className="text-gray-400 mb-8 text-center font-bold">از فروشگاه ما دیدن کنید تا خلاقیت های شگفت انگیز طراحان ما را ببینید</p>
                <Slider />
            </section>
        </div>
    );
};

export default BlogDetails;