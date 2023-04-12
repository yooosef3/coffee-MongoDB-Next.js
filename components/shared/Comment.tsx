import Image from 'next/image';
import React from 'react';

const Comment = () => {
    return (
        <div className='flex gap-6 border-b border-slate-300 p-3'>
            <div>
                <div className='bg-slate-800 w-[70px] h-[70px] flex justify-center items-center font-bold text-3xl'>ی</div>
            </div>
            <div>
                <h1 className='text-black font-bold text-lg'>یوسف خدری</h1>
                <span className='font-semibold text-[#4D9A6B] text-sm'>17 فروردین 1402</span>
                <p className='text-gray-500 font-semibold'>برو قدیمی خوب از بچگی اینو مینوشتم...البته به سبک دسی...قهوه فیتی هوی. به خودی خود کف می کند.</p>
            </div>
        </div>
    );
};

export default Comment;