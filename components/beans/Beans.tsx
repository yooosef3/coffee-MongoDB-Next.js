import BeanCard from './BeanCard';
import HeaderTemplate from '../shared/HeaderTemplate';
import React from 'react';
import { beans } from '../home/beanSlider/BeanSlider';

const Beans = () => {
    return (
        <div>
            <HeaderTemplate 
                background='/images/top-view-coffee-accessories-table1.jpg' 
                header='دانه های قهوه'
            />
            <div className='flex justify-center gap-8 flex-wrap lg:w-[85%] mx-auto py-20'>
            {
                beans.map(bean => 
                    <BeanCard key={bean.id} {...bean}/>
                    )
            }
            </div>
        </div>
    );
};

export default Beans;