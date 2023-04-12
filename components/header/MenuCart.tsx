import { CgTrash } from "react-icons/cg";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import iced from '../../public/images/11-min_510X510_crop_center.webp'

type PropTypes = {
    toggle: boolean
}

const MenuCart = ({toggle}:PropTypes) => {
    return (
        <div className={`fixed w-[250px] bg-white ${toggle? 'flex flex-col' : 'hidden'}  gap-4 rounded-lg p-5 right-1`}>
            <h1 className="text-gray-500 border-b pb-2"><span className='ml-1 text-green-500 font-bold'>1</span>محصول وجود دارد</h1>
            <div className="flex items-center gap-5 border-b pb-4">
                <Link href='/'>
                    <Image alt='coffee' className="border" src={iced} width={100} height={100}/>
                </Link>
                <div>
                    <Link href='/'>
                        <h1 className="text-black font-bold">موکا شکلاتی یخی</h1>
                    </Link>
                    <span className="text-gray-700">x</span><span className="text-gray-700">1</span>
                    <div className="flex gap-5">
                        <div className='text-green-600 font-bold'>
                            <span>$</span>
                            <span>520,000</span>
                            <span>USD</span>
                        </div>
                        <CgTrash className='text-red-600 hover:text-red-700 duration-200 cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between border-b pb-2">
                <h1 className="text-black font-bold">مجموع:</h1>
                <div className='text-green-600 font-bold'>
                    <span>$</span>
                    <span>520,000</span>
                    <span>USD</span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <Link className="text-white font-bold text-center py-2 bg-zinc-800 rounded-sm hover:bg-emerald-600 duration-200" href='/cart'>مشاهده سبد خرید</Link>
                <Link className="text-white font-bold text-center py-2 bg-zinc-800 rounded-sm hover:bg-emerald-600 duration-200" href='/login?redirect=/payment'>تسویه</Link>
            </div>
        </div>
    );
};

export default MenuCart;