import { BsStarFill } from "react-icons/bs";
import Image from 'next/image';
import Link from "next/link";
import { ProductPropsType } from '../home/handPicked/Product';
import React from 'react';

const RatedProduct = ({name, image, price}:ProductPropsType) => {
    return (
        <div className="flex gap-10 items-center">
            <div>
                <Link href='/'>
                    <Image alt='rated' src={image} width={120} className='rounded-md'/>
                </Link>
            </div>
            <div>
                <Link href='/'>
                    <h1 className="text-black hover:text-[#52A16F] duration-200 text-lg font-bold">{name}</h1>
                </Link>
                <div className="flex text-yellow-500 text-md mb-2">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                </div>
                <span className="text-gray-600 font-semibold">${price}</span>
            </div>
        </div>
    );
};

export default RatedProduct;