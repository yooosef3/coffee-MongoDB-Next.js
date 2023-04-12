import React, { useState } from 'react';

import { AiFillEyeInvisible } from "react-icons/ai";
import Image from 'next/image';
import credit from '../../public/images/MasterCard.jpg'
import paypal from '../../public/images/PayPal.jpg'
import visa from '../../public/images/VISA.jpg'

const Payment = () => {
    const [method, setMethod] = useState(0);
    const [number, setNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expire, setExpire] = useState('');
    return (
        <div className="py-20">
            <div className="rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto bg-white p-5">
                <h1 className="font-bold text-xl mb-4 text-gray-800">انتخاب روش پرداخت</h1>
                <div className='flex items-center justify-center gap-3 mb-5'>
                    <div onClick={() => setMethod(0)} className={`flex cursor-pointer ${method === 0 && 'shadow-md'} hover:shadow-md rounded-md duration-300 flex-col items-center`}>
                        <Image alt='method' src={credit} width={100} height={70}/>
                        <h2 className='text-slate-700 text-lg font-medium'>credit card</h2>
                    </div>
                    <div onClick={() => setMethod(1)} className={`flex cursor-pointer ${method === 1 && 'shadow-md'} hover:shadow-md rounded-md duration-300 flex-col items-center`}>
                        <Image alt='method' src={visa} width={100} height={70}/>
                        <h2 className='text-slate-700 text-lg font-medium'>visa</h2>
                    </div>
                    <div onClick={() => setMethod(2)} className={`flex cursor-pointer ${method === 2 && 'shadow-md'} hover:shadow-md rounded-md duration-300 flex-col items-center`}>
                        <Image alt='method' src={paypal} width={100} height={70}/>
                        <h2 className='text-slate-700 text-lg font-medium'>paypal</h2>
                    </div>
                </div>
                <div className="p-3 bg-blue-100 rounded-md text-slate-600 text-lg font-medium">
                    <Image src={method === 0 ? credit : method === 1 ? visa : paypal } width={100} height={70} alt='method' className='rounded-full w-20 shadow-lg mb-7'/>
                    <div className="flex flex-col">
                        <label htmlFor="number">شماره {method === 0 ? 'credit' : method === 1 ? 'visa' : 'paypal'}</label>
                        <div className="flex justify-between">
                            <span>(xxxx xxxx xxxx xxxx)</span>
                            <AiFillEyeInvisible />
                        </div>
                        <input className="bg-white h-11 rounded-md border outline-non focus:ring-sky-600 focus:ring-2 pr-2" value={number} onChange={(e) => setNumber(e.target.value)} type="text" id="number" />
                    </div>
                    <div className="flex gap-2 justify-between mt-5">
                        <div className="flex flex-col w-[48%]">
                            <label htmlFor="expire">تاریخ انقضا(ماه/سال)</label>
                            <input className="bg-white h-11 rounded-md border outline-non focus:ring-sky-600 focus:ring-2 pr-2" value={cvv} onChange={(e) => setCvv(e.target.value)} type="text" id="expire" />
                        </div>
                        <div className="flex flex-col w-[48%]">
                            <label htmlFor="cvv">CVV</label>
                            <input className="bg-white h-11 rounded-md border outline-non focus:ring-sky-600 focus:ring-2 pr-2" value={expire} onChange={(e) => setExpire(e.target.value)} type="text" id="cvv" />
                        </div>
                    </div>
                </div>
                <div className="flex bg-slate-200 justify-between p-2 text-gray-800 font-bold rounded-lg my-5">
                    <h1>مبلغ کل</h1>
                    <h1>250,000 تومان</h1>
                </div>
                <h1 className="rounded-md text-white bg-[#53A06D] mb-2 font-bold text-center py-2 hover:bg-slate-800 duration-200 cursor-pointer">پرداخت</h1>
            </div>
        </div>
    );
};

export default Payment;