import CommentForm from './CommentForm';
import Comments from './Comments';
import Post from './Post';
import React from 'react';

const PostContent = () => {
    
    return (
        <div className='col-span-1 lg:col-span-8'>
            <Post />
            <Comments />
            <CommentForm />
        </div>
    );
};

export default PostContent;