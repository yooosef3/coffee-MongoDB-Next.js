import Comment from './Comment';
import React from 'react';

const Comments = () => {
    return (
        <div className='py-10 border-b border-slate-300'>
            <h1 className='text-black font-bold text-2xl mb-5'>3 نظر</h1>
            <div className='bg-white rounded-md shadow-md'>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
};

export default Comments;