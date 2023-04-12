import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import React from 'react';
import coffee1 from '../../public/images/1.webp';
import coffee2 from '../../public/images/2.webp';

const Collections = () => {
    return (
        <li className="group">
            <div className="font-bold text-xl flex items-center gap-2 pb-4 hover:text-green-400 duration-150 cursor-pointer ">
                <h1>محصولات</h1>
                <IoIosArrowDown />
            </div>
            <div className="absolute rounded-lg hidden group-hover:flex bg-white p-5 gap-5">
                <div>
                    <div className="flex justify-start gap-32 pb-5">
                        <div>
                            <h1 className="text-black mb-4 font-bold ">عربیکا سبز</h1>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">آمریکانو</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">کاپوچینو</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">دابل اسپرسو</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                        <h1 className="text-black mb-4 font-bold ">قهوه برشته لایت</h1>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">لاته</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">ماکیاتو</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">شکلات نعنایی</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link href='/'>
                            <Image className="rounded-lg hover:grayscale duration-200" alt="cofee" src={coffee1} width={500} height={200}/>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="flex justify-start gap-32 pb-5">
                        <div>
                            <h1 className='text-black mb-4 font-bold'>قهوه برشته مدیوم</h1>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">موکا</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">کارامل</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">موکای سفید</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-black mb-4 font-bold'>قهوه برشته تیره</h1>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">موکا</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">وانیل</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-400 font-bold hover:text-green-500 duration-200">موکای سفید</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link href='/'>
                           <Image className="rounded-lg hover:grayscale duration-200" alt="cofee" src={coffee2} width={500} height={200}/>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Collections;