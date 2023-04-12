import Image from 'next/image';
import React from 'react';
import pic from '../../../../public/images/demo_600x600.webp'

export type StateTypes = {
    toggle: boolean,
    setToggle?: React.Dispatch<React.SetStateAction<boolean>>
}
const Description = ({toggle, product}:StateTypes) => {
    return (
        <div className={`py-4 ${toggle ? 'flex flex-col lg:flex-row lg:items-center lg:gap-20' : 'hidden'} `}>
            <div className='lg:w-[50%]'>
                <h1 className='text-black mb-3 font-bold text-xl'>معرفی</h1>
                <p className='text-gray-400 mb-6 font-semibold'>
                    {product.intruduce}
                </p>
                <h1 className='text-black mb-3 font-bold text-xl'>ویژگی ها</h1>
                <p className='text-gray-400 mb-6 mr-3 font-semibold'>
                    {product.info}
                </p>
            </div>
            <div className='lg:w-[50%]'>
                <Image src={pic} className='w-full lg:w-[80%]' alt='pic' width={350} height={300}/>
            </div>
        </div>
    );
};

export default Description;