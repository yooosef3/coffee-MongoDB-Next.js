import BeanSlider from '../home/beanSlider/BeanSlider';
import HeaderTemplate from '../shared/HeaderTemplate';
import PostContent from '../shared/PostContent';
import PostSidebar from '../shared/PostSidebar';
import React from 'react';

const BeanDetail = () => {
    return (
        <div>
            <HeaderTemplate background='/images/coffee-171653_1920-1-800x533.jpg' header='عربیکا سبز'/>
            <div className='w-[90%] md:w-[700px] lg:w-[920px] xl:w-[1200px] gap-10 mx-auto py-14 grid grid-cols-1 lg:grid-cols-12'>
                <PostSidebar />
                <PostContent />
            </div>
            <section className='mt-14 w-full'>
                <h1 className='text-black text-center mb-5 text-2xl lg:text-3xl xl:text-4xl font-bold'>محصولات <span className='text-[#52a16f]'>مرتبط</span></h1>
                <BeanSlider />
            </section>
        </div>
    );
};

export default BeanDetail;