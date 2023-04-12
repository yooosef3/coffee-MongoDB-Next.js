import { FaqTypes } from "../faq/Question";
import React from 'react';

const Rule = ({id, title, text}:FaqTypes) => {
    return (
        <div className={`${id === 1 ? 'border-0' : 'border-t'} border-gray-300 py-5`} >
            <div className="lg:text-xl xl:text-2xl font-semibold">
                <h1 className='text-[#53A16E]'>{title}</h1>
            </div>
            <div>
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

export default Rule;