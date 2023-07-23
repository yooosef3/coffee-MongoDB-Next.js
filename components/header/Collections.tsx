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
                                    <Link href='/products/642c6922cc081beb5322bbd0' className="text-gray-400 font-bold hover:text-green-500 duration-200">آمریکانو</Link>
                                </li>
                                <li>
                                    <Link href='/products/642c6f73cc081beb5322bbd1' className="text-gray-400 font-bold hover:text-green-500 duration-200">کاپوچینو</Link>
                                </li>
                                <li>
                                    <Link href='/products/642c15dd66e64c7b9cde07ed' className="text-gray-400 font-bold hover:text-green-500 duration-200">دابل اسپرسو</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                        <h1 className="text-black mb-4 font-bold ">قهوه برشته لایت</h1>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link href='/products/642c63fecc081beb5322bbcf' className="text-gray-400 font-bold hover:text-green-500 duration-200">لاته</Link>
                                </li>
                                <li>
                                    <Link href='/products/642c781acc081beb5322bbd3' className="text-gray-400 font-bold hover:text-green-500 duration-200">ماکیاتو</Link>
                                </li>
                                <li>
                                    <Link href='/products/642c781acc081beb5322bbd3' className="text-gray-400 font-bold hover:text-green-500 duration-200">شکلات نعنایی</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link href='/products'>
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
                                    <Link href='/products/642c7bd5cc081beb5322bbd5' className="text-gray-400 font-bold hover:text-green-500 duration-200">موکا</Link>
                                </li>
                                <li>
                                    <Link href='/products/642c7463cc081beb5322bbd2' className="text-gray-400 font-bold hover:text-green-500 duration-200">کارامل</Link>
                                </li>
                                <li>
                                    <Link href='/products/642c7bd5cc081beb5322bbd5' className="text-gray-400 font-bold hover:text-green-500 duration-200">موکای سفید</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-black mb-4 font-bold'>قهوه برشته تیره</h1>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link href='/products/642c7bd5cc081beb5322bbd5' className="text-gray-400 font-bold hover:text-green-500 duration-200">موکا</Link>
                                </li>
                                <li>
                                    <Link href='/products/642c7463cc081beb5322bbd2' className="text-gray-400 font-bold hover:text-green-500 duration-200">وانیل</Link>
                                </li>
                                <li>
                                    <Link href='/products/642c8055cc081beb5322bbd8' className="text-gray-400 font-bold hover:text-green-500 duration-200">موکای سفید</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link href='/products'>
                           <Image className="rounded-lg hover:grayscale duration-200" alt="cofee" src={coffee2} width={500} height={200}/>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Collections;