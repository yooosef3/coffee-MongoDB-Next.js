import React, { useContext } from 'react';

import { BiComment } from "react-icons/bi";
import { BlogContext } from '@/pages/blogs/[blogId]';
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Image from 'next/image';
import { IoLogoTwitter } from "react-icons/io";

const Post = () => {
    const {blog, comments} = useContext(BlogContext);
    console.log(comments);
    return (
        <div className="border-b border-slate-300 pb-10">
          <div className="flex gap-2 font-semibold text-[#51A06C]">
            <span>12 آذر, 1402</span>
            <div className="flex gap-1 items-center">
                <BiComment />
                <div>
                    <span className="ml-1">{comments.length}</span>                    
                    <span>کامنت</span>                    
                </div>
            </div>
          </div>
          <h1 className="text-black font-bold text-xl lg:text-2xl mb-5">{blog.title}</h1>
          <div>
            <Image className="rounded-md w-full hover:grayscale duration-200 cursor-pointer" alt='post' src={blog.image} width={450} height={250}/>
          </div>
          <p className="text-gray-500 mt-8">{blog.content}</p>
          <h1 className='text-black font-bold text-lg my-4'>تگ های محبوب</h1>
            <div className="flex gap-2">
                <span className="bg-white text-slate-400 w-fit font-bold px-3 py-1 rounded-md hover:text-white hover:bg-slate-800 duration-300 cursor-pointer">عربیکا</span>
                <span className="bg-white text-slate-400 w-fit font-bold px-3 py-1 rounded-md hover:text-white hover:bg-slate-800 duration-300 cursor-pointer">قهوه کردی</span>
                <span className="bg-white text-slate-400 w-fit font-bold px-3 py-1 rounded-md hover:text-white hover:bg-slate-800 duration-300 cursor-pointer">لاته</span>
            </div>
            <h1 className='text-black font-bold mt-8 text-lg mb-4'>اشتراک پست</h1>
            <div className="flex gap-4">
                <div className="cursor-pointer text-blue-900 gap-1 flex font-bold">
                    <FaFacebookF />
                    <span>facebook</span>
                </div>
                <div className="cursor-pointer flex text-blue-500 gap-1 font-bold">
                    <IoLogoTwitter />
                    <span>twitter</span>
                </div>
                <div className="cursor-pointer flex text-orange-600 gap-1 font-bold">
                    <FiInstagram />
                    <span>instagram</span>
                </div>
                <div className="cursor-pointer text-red-600 flex gap-1 font-bold">
                    <BsPinterest />
                    <span>pinterest</span>
                </div>
            </div>
        </div>
    );
};

export default Post;