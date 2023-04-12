import Image from 'next/image';
import React from 'react';
import { type ImageProps } from "next/image"
import Link from 'next/link';
type BlogPropsType = {
    title: string,
    text: string,
    image: ImageProps["src"],
    date: string,
    blogs?: boolean
}
const Blog = ({title, text, image, date, blogs}:BlogPropsType) => {
    return (
        <div className={`w-full ${blogs && 'md:w-[48%]'}`}>
            <Link href='/'>
                <Image src={image} width={600} height={500} alt='blog' className='mb-3 hover:grayscale duration-300 w-full rounded-md'/>        
            </Link>
            <div>
                <span className='text-[#54A06F] text-sm font-bold'>{date}</span>
                <Link href='/' className="text-black font-bold hover:text-green-900 duration-200  text-xl">
                    <h1>{title}</h1>
                </Link>
                <p className="text-gray-500 pl-3 mt-2 xl:text-sm">{text}</p>
            </div>
        </div>
    );
};

export default Blog;