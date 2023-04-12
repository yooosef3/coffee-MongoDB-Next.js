import { AiOutlineStar } from "react-icons/ai";
import React from 'react';

type PropType = {
    close: boolean
}
const Review = ({close}:PropType) => {

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }
    
    return (
        <div className={`py-10 mt-10 ${!close ? 'hidden' : 'nlock'} border-t border-gray-300`}>
            <h1 className="text-black font-bold text-xl mb-4">یک نظر بنویس</h1>
            <form onSubmit={submitHandler}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-400 font-bold">نام</label>
                    <input className="bg-gray-100 mb-6 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600" type="text" name="name" id="name" placeholder='نام خود را وارد کنید'/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-400 font-bold">ایمیل</label>
                    <input className="bg-gray-100 mb-6 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600" type="text" name="email" id="email" placeholder='yooosef.khedri@gmail.com'/>
                </div>
                <h1 className="text-gray-400 font-bold mb-2">رتبه</h1>
                <div className="flex text-yellow-500 text-xl">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
                <div className="flex flex-col mt-6">
                    <label htmlFor="title" className="text-gray-400 font-bold">عنوان نظر</label>
                    <input type="text" name="title" id="title" placeholder='عنوان نظر' className="bg-gray-100 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-6"/>
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="message" className="text-gray-400 font-bold">متن نظر</label>
                    <textarea className="bg-gray-100 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600" name="message" id="message" cols={30} rows={10} placeholder='نظر خود را بنویسید'></textarea>
                </div>
                <button type="submit" className="bg-slate-800 w-[200px] rounded-md py-2 px-4 font-bold text-white hover:bg-[#438259] duration-200 cursor-pointer">ثبت نظر</button>
            </form>
        </div>
    );
};

export default Review;