import React, { useState } from 'react';

import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Review from "./Review";
import ReviewContent from "./ReviewContent";
import { StateTypes } from "./Description";

const reviews = [
    {id:1, product: 'کارامل موکیاتو',name: 'یوسف خدری', date: 'Apr 16, 2021', text: 'برو قدیمی خوب از بچگی اینو مینوشتم...البته به سبک دسی...قهوه فیتی هوی. به خودی خود کف می کند. برای لاته های سرد، نوشیدنی های خامه ای داغ، پخت و پز، پخت و پز عالی است... من حتی یک قاشق غذاخوری پر از فلفل دلمه ای اضافه می کنم... در اینجا شما راز چیلی برنده جایزه من را دارید.' },
    {id:2, product: 'کارامل موکیاتو',name: 'یوسف خدری', date: 'Apr 16, 2021', text: 'برو قدیمی خوب از بچگی اینو مینوشتم...البته به سبک دسی...قهوه فیتی هوی. به خودی خود کف می کند. برای لاته های سرد، نوشیدنی های خامه ای داغ، پخت و پز، پخت و پز عالی است... من حتی یک قاشق غذاخوری پر از فلفل دلمه ای اضافه می کنم... در اینجا شما راز چیلی برنده جایزه من را دارید.' },
    {id:3, product: 'کارامل موکیاتو',name: 'یوسف خدری', date: 'Apr 16, 2021', text: 'برو قدیمی خوب از بچگی اینو مینوشتم...البته به سبک دسی...قهوه فیتی هوی. به خودی خود کف می کند. برای لاته های سرد، نوشیدنی های خامه ای داغ، پخت و پز، پخت و پز عالی است... من حتی یک قاشق غذاخوری پر از فلفل دلمه ای اضافه می کنم... در اینجا شما راز چیلی برنده جایزه من را دارید.' }
]
const Reviews = ({toggle}:StateTypes) => {
    const [close, setClose] = useState(false)
    return (
        <div className={`py-7 ${toggle ? 'hidden' : 'block'}`}>
            <h1 className="text-black font-bold text-2xl">نظر مشتریان</h1>
            <div className="flex text-yellow-500 my-3">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStarHalf />
            </div>
            <span className="text-gray-400">بر اساس 3 نظر</span>
            <h1 onClick={() => setClose(!close)} className="bg-slate-800 my-5 w-fit rounded-md py-1 px-4 font-bold hover:bg-[#438259] duration-200 cursor-pointer">یک نظر بنویس</h1>
            <Review close={close}/>
            <div className="flex flex-col gap-8 py-4">
            {reviews.map(review => (
                <ReviewContent key={review.id} {...review}/>
            ))}
            </div>
        </div>
    );
};

export default Reviews;