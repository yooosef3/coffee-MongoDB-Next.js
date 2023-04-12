import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import React from 'react';
import coffee3 from '../../public/images/3.webp'
import coffee4 from '../../public/images/4.webp'

const Aroma = () => {
    return (
        <li className="group">
            <div className="font-bold text-xl flex items-center gap-2 pb-4  hover:text-green-400 duration-150 cursor-pointer ">
                <h1>رایحه معطر</h1>
                <IoIosArrowDown />
            </div>
            <div className="bg-white hidden group-hover:flex rounded-lg gap-5 p-10 absolute">
                <Link href='/' className="flex flex-col items-center gap-4">
                    <Image className="rounded-lg hover:grayscale duration-200" alt="coffee" src={coffee3} width={700} height={400}/>
                    <h1 className="text-gray-400 font-bold">عربیکا برشته</h1>
                </Link>
                <Link href='/' className="flex flex-col items-center gap-4">
                    <Image className="rounded-lg hover:grayscale duration-200" alt="coffee" src={coffee4} width={700} height={400}/>
                    <h1 className="text-gray-400 font-bold">عربیکا سبز</h1>
                </Link>
            </div>
        </li>
    );
};

export default Aroma;