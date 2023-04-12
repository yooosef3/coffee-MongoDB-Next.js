import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type RecentCardTypes = {
    name: string,
    image: any
}
const RecentPostCard = ({name, image}:RecentCardTypes) => {
    return (
        <div className='flex items-center gap-6'>
            <div>
                <Image className='rounded-md' src={image} alt='recent-post' width={90} height={90}/>
            </div>
            <div>
                <Link href='/' className='w-fit'>
                    <h1 className='text-black mb-1 font-bold text-lg hover:text-red-600 duration-200'>{name}</h1>
                </Link>
                <span className='text-[#53A26F] font-bold'>22 آذر, 1402</span>
            </div>
        </div>
    );
};

export default RecentPostCard;