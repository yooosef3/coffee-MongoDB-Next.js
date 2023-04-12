import { BsArrowDownCircleFill } from "react-icons/bs";
import React from 'react';

export type FaqTypes = {
    id?: number,
    title: string,
    text: string,
    faqId?: number,
    setFaqId?: any
}
const Question = ({id, title, text, faqId, setFaqId}:FaqTypes) => {
    return (
        <div className={`${id === 1 ? 'border-0' : 'border-t'} border-gray-300 py-5`}>
            <div onClick={() => setFaqId(id)} className="flex justify-between items-center cursor-pointer lg:text-xl xl:text-2xl font-semibold">
                <h1 className={`${faqId === id ? 'text-red-600' : 'text-black'}`}>{title}</h1>
                <BsArrowDownCircleFill className={`${faqId === id ? 'text-red-600 rotate-180 duration-500' : 'text-[#56A073]'}`}/>
            </div>
            <div className={`${faqId === id ? 'block' : 'hidden'}`}>
                <p className="text-slate-500 mt-6">
                    {text}
                </p>
                <p className="text-slate-500 mt-4">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Question;