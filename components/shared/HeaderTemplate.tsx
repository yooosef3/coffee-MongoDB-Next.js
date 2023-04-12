import React from 'react';

type HeaderPropsType = {
    header?: string,
    background: string
} 
const HeaderTemplate = ({background, header}:HeaderPropsType) => {
    return (
        <div style={{backgroundImage: `url(${background})`}} className='bg-cover bg-center h-[50vh] md:h-[60vh] relative'>
            <div className='absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold '>
                    {header}
                </h1>
            </div>
        </div>
    );
};

export default HeaderTemplate;