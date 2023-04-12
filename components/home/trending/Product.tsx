import { BsCart4 } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';
import { ProductPropsType } from '../handPicked/Product';
import React from 'react';

const Product = ({percent, off, image, name, price, hover, separate}:ProductPropsType) => {
    return (
        <div className={`md:w-[280px] group relative overflow-hidden ${separate && 'shadow-md hover:shadow-lg'} duration-200 rounded-md `}>
            <span dir="ltr" className="absolute bg-[#54A06F] right-0 top-4 group-hover:-right-11 duration-1000 h-6 p-1 rounded-tl-lg rounded-bl-lg">{percent}%</span>
            <div>
                <Link href='/' className="group-hover:opacity-0 group-hover:hidden">
                    <Image src={image} width={450} height={500} alt='product'/>
                </Link>
                <Link href='/' className="hidden group-hover:opacity-100 group-hover:block">
                    <Image src={hover} width={450} height={500} alt='product'/>
                </Link>
            </div>
            <div className="flex flex-col bg-white p-3 gap-3">
                <Link href='/' className="w-fit cursor-pointer ">
                    <h1 className="text-black font-bold text-xl duration-200 hover:text-[#54A06F]">{name}</h1>
                </Link>
                <div className="font-semibold text-md">
                    <span className="text-gray-400 mr-2 line-through">${off.toLocaleString()}USD</span>
                    <span className="text-[#54A06F] ">${price.toLocaleString()}USD</span>
                </div>
                <div className="flex gap-3">
                    <div className="flex text-yellow-500">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                    </div>
                    <span className="text-gray-400 font-bold">(4نظر)</span>
                </div>
                <div className="flex gap-1 lg:hidden lg:group-hover:flex lg:absolute bottom-[40%] lg:justify-center">
                    <Link href='/'>
                        <BsCart4 className="bg-neutral-800 text-4xl hover:bg-[#53A16E] duration-200 cursor-pointer rounded-full p-2"/>
                    </Link>
                    <Link href='/'>
                        <FiEye className="bg-neutral-800 text-4xl hover:bg-[#53A16E] duration-200 cursor-pointer rounded-full p-2"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;