import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import React from 'react';

const Pages = () => {
    return (
        <li className="group">
            <div className="font-bold text-xl flex items-center gap-2 pb-4 hover:text-green-400 duration-150 cursor-pointer">
                <h1>صفحات</h1>
                <IoIosArrowDown />
            </div>
            <ul className="bg-white p-4 gap-4 absolute hidden group-hover:flex group-hover:flex-col rounded-lg">
                <li>
                    <Link href='/aboutus' className="text-gray-400 font-bold hover:text-green-500 duration-200">درباره ما</Link>
                </li>
                <li>
                    <Link href='/contact' className="text-gray-400 font-bold hover:text-green-500 duration-200">تماس با ما</Link>
                </li>
                <li>
                    <Link href='/faq' className="text-gray-400 font-bold hover:text-green-500 duration-200">FAQ</Link>
                </li>
                <li>
                    <Link href='/paymentRules' className="text-gray-400 font-bold hover:text-green-500 duration-200">قوانین پرداخت</Link>
                </li>
                <li>
                    <Link href='/terms' className="text-gray-400 font-bold hover:text-green-500 duration-200">شرایط و ضوابط</Link>
                </li>
            </ul>
        </li>
    );
};

export default Pages;