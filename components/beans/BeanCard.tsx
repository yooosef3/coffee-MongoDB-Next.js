import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bean1 from '../../public/images/Screenshot 2023-02-23 222213.png'

type BeanPropType = {
    name: string,
    description: string,
    _id: string,
    image: string
}
const Bean = ({name, description, image, _id}:BeanPropType) => {
    return (
        <div className='group w-[350px] lg:w-[390px] overflow-hidden bg-white rounded-md shadow-md hover:shadow-lg duration-300'>
            <div className='h-[230px] overflow-hidden'>
                <Link href={`/beans/${_id}`}>
                    <Image src={bean1} className='w-full group-hover:scale-110 duration-300' width={300} height={300} alt='bean'/>
                </Link>
            </div>
            <div className='px-4 py-6'>
                <span className='text-gray-500'>Apr 16, 2021</span>
                <Link href={`/beans/${_id}`}>
                    <h1 className='text-black w-fit mt-2 font-bold text-xl duration-200 hover:text-[#55A276]'>{name}</h1>
                </Link>
                <p className='text-slate-500 font-semibold mt-3'>{description}</p>
            </div>
        </div>
    );
};

export default Bean;