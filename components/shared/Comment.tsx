import Image from 'next/image';
import React from 'react';

const Comment = ({author, text, createdAt}) => {
    return (
        <div className='flex gap-6 border-b border-slate-300 p-3'>
            <div>
                <div className='bg-slate-800 w-[70px] h-[70px] flex justify-center items-center font-bold text-3xl'>{author.split('')[0]}</div>
            </div>
            <div>
                <h1 className='text-black font-bold text-lg'>{author}</h1>
                <span className='font-semibold text-[#4D9A6B] text-sm'>{createdAt}</span>
                <p className='text-gray-500 font-semibold'>{text}</p>
            </div>
        </div>
    );
};

export default Comment;