import React from 'react';

type HeaderPropsType = {
    header?: string,
    background: string,
    history?:boolean
} 
const HeaderTemplate = ({background, header, history}:HeaderPropsType) => {
    return (
        <div style={{backgroundImage: `url(${background})`}} className={`bg-cover bg-center ${history ? "h-[25vh] md:h-[35vh]" : "h-[50vh] md:h-[60vh]"}  relative`}>
            <div className='absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mt-20'>
                    {!history && header}
                </h1>
            </div>
        </div>
    );
};

export default HeaderTemplate;