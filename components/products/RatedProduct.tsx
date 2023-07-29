import { BsStarFill } from "react-icons/bs";
import Image from 'next/image';
import Link from "next/link";
import React from 'react';

// import { ProductPropsType } from '../home/handPicked/Product';


const RatedProduct = ({name, image, price, id}) => {
    return (
        <div className="flex gap-10 items-center">
            <div>
                <Link href={`/products/${id}`}>
                    <Image alt='rated' src={image[1]} width={120} height={120} className='rounded-md'/>
                </Link>
            </div>
            <div>
                <Link href={`/products/${id}`}>
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