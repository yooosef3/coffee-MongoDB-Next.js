import React, { useState } from 'react';

import Description from './Description';
import Review from './Reviews';

const DesReview = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div className='bg-white p-4 '>
            <div className='flex gap-6 justify-center pb-4 border-b border-gray-300 text-gray-400 font-bold text-lg lg:text-xl xl:text-2xl'>
                <h1 onClick={() => setToggle(true)} className={`cursor-pointer ${toggle && 'text-black'} hover:text-black duration-200`}>توضیحات</h1>
                <h1 onClick={() => setToggle(false)} className={`cursor-pointer ${!toggle && 'text-black'} hover:text-black duration-200`}>نظرات</h1>
            </div>
            <div className="w-[340px] sm:w-[400px] md:w-[670px] lg:w-[1000px] xl:w-[1200px] flex flex-col lg:items-center lg:flex-row mx-auto">
                <Description toggle={toggle} />
                <Review toggle={toggle}/>
            </div>
        </div>
    );
};

export default DesReview;