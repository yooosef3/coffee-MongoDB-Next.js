import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import React from 'react';

const Shop = () => {
    return (
        <li className="group">
            <div className="font-bold text-xl flex items-center gap-2 pb-4 hover:text-green-400 duration-150 cursor-pointer">
                <h1>فروشگاه</h1>
                <IoIosArrowDown />
            </div>
            <ul className="bg-white p-4 absolute hidden group-hover:flex group-hover:flex-col gap-4 rounded-lg">
                <li>
                    <Link href='/products' className="text-gray-400 font-bold hover:text-green-500 duration-200">لیست محصولات</Link>
                </li>
                <li>
                    <Link href='/cart' className="text-gray-400 font-bold hover:text-green-500 duration-200">سبد خرید</Link>
                </li>
                <li>
                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">حساب من</Link>
                </li>
            </ul>
        </li>
    );
};

export default Shop;