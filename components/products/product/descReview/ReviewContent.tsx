import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import React from 'react';

type ReviewPropTtpes = {
    product: string,
    name: string,
    text: string,
    date: string
}
const ReviewContent = ({product, name, text, date}:ReviewPropTtpes) => {
    return (
        <div className="border-t border-gray-200 pt-6">
            <div className="flex text-yellow-400">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStarHalf />
            </div>
            <h1 className="text-black my-2 font-bold text-xl">{product}</h1>
            <div className="flex gap-2 text-sm">
                <span className="font-bold text-slate-600">{name}</span>
                <span className="text-slate-600">در</span>
                <span className="font-bold text-slate-600">{date}</span>    
            </div>
            <p className="text-gray-400 mt-2 font-semibold">{text}</p>
        </div>
    );
};

export default ReviewContent;