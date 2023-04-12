import Questions from '@/components/headerPages/faq/Questions';
import HeaderTemplate from '@/components/shared/HeaderTemplate';
import React from 'react';

const Faq = () => {
    return (
        <div>
            <HeaderTemplate 
                background='/images/UBsDQPo.jpg' 
                header='سوالات متداول'
                />
            <Questions />
        </div>
    );
};

export default Faq;