import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <div className='lg:w-[30%]'>
            <div className='bg-white w-[80%] rounded-lg drop-shadow-lg p-10 mx-auto'>
                <h1 className='text-black font-bold mb-4'>صورتحساب</h1>
                <div className='relative h-10 mt-10'>
                    <input type="text" placeholder='کد تخفیف' className='w-full h-full rounded-md bg-gray-200 outline-none border border-gray-300 focus:border-blue-500 pr-2'/>
                    <h1 className="absolute text-white left-0 top-0 bottom-0 rounded-l-md flex items-center px-3 bg-[#53A06D] cursor-pointer hover:bg-slate-800 duration-200">اعمال</h1>
                </div>
                <div className='mt-10'>
                    <span className='text-black font-bold ml-3'>تعداد کل محصولات: </span>
                    <span className='text-red-600 font-bold'>{cart.quantity}</span>
                </div>
                <div className='mt-5 mb-10'>
                    <span className='text-black font-bold ml-3'>هزینه کل: </span>
                    <span className='text-[#53A06D] font-bold'>{cart.total} تومان</span>
                </div>
                <Link href='login?redirect=/payment'>
                    <h1 className="rounded-md text-white bg-[#53A06D] mb-2 font-bold text-center py-2 hover:bg-slate-800 duration-200 cursor-pointer">تسویه حساب</h1>
                </Link>
                <Link href='/products'>
                    <h1 className="rounded-md text-white bg-slate-800 font-bold text-center py-2 hover:bg-[#53A06D] duration-200 cursor-pointer">ادامه خرید</h1>
                </Link>
            </div>
        </div>
    );
};

export default Total;