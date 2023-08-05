import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// type RecentCardTypes = {
//     title: string,
//     content: string,
//     name: string,
//     image: any
// }
const RecentPostCard = ({title, image, id, route}) => {
    return (
        <div className='flex items-center group gap-6'>
            <div>
                <Image className='rounded-md group-hover:opacity-70 duration-300' src={image} alt='recent-post' width={90} height={90}/>
            </div>
            <div>
                <Link href={`/${route}/${id}`} className='w-fit'>
                    <h1 className='text-black mb-1 font-bold text-lg hover:text-red-600 duration-200'>{title}</h1>
                </Link>
                <span className='text-[#53A26F] font-bold'>22 آذر, 1402</span>
            </div>
        </div>
    );
};

export default RecentPostCard;