import { BsClock } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import Link from "next/link";
import React from 'react';

const Information = () => {
    return (
        <div className="py-16 px-2 md:py-20 lg:py-28">
            <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-4">دوست داریم <span className="text-[#53a16e]">بیشتر از شما بشنویم</span></h1>
            <p className="text-gray-500 text-center">
            اگر محصولات فوق العاده ای دارید که می سازید یا می خواهید با ما کار کنید، از ما تماس بگیرید.            </p>
            <div className="flex flex-col lg:flex-row lg:justify-center gap-10 xl:gap-20 items-center w-[94%] md:w-[700px] lg:w-[920px] xl:w-[1200px] mx-auto mt-8 lg:mt-12">
                <div className="flex flex-col text-center items-center gap-1">
                    <FaRegAddressCard className="text-[#53a16e] text-5xl mb-3" />
                    <h1 className="text-black text-2xl font-medium my-4">فروشگاه ما</h1>
                    <p className="text-gray-500">8212 E. Glen Creek Street Orchard Park,NY 14127</p>
                    <Link href='mailto:example@gmail.com' className="text-gray-500 hover:text-blue-500 duration-200" >Email: example@gmail.com</Link>
                </div>
                <div className="flex flex-col text-center items-center gap-1">
                    <BsHandbag className="text-[#53a16e] text-5xl mb-3" />
                    <h1 className="text-black text-2xl font-medium my-4">مشاغل</h1>
                    <p className="text-gray-500">به جای خرید شش چیز، یکی که واقعا دوست دارید. نگه ندارید</p>
                    <a href='https://www.google.com' className="text-gray-500 hover:text-blue-500 duration-200">www.google.com</a>
                </div>
                <div className="flex flex-col text-center items-center gap-1">
                    <BsClock className="text-[#53a16e] text-5xl mb-3" />
                    <h1 className="text-black text-2xl font-medium my-4">ساعت فروشگاه</h1>
                    <p className="text-gray-500">دوشنبه تا شنبه 11 صبح تا 7 بعدازظهر  یکشنبه 11 صبح تا 6 بعدازظهر </p>
                    <Link href='tel: 09111111111' className="text-gray-500 hover:text-blue-500 duration-200" >phone: 0911-111-1111</Link>
                </div>
            </div>
        </div>
    );
};

export default Information;