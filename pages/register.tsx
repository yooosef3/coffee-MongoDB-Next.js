import React, {FC} from 'react';

import Footer from '@/components/layout/Footer';
import HeaderTemplate from '@/components/shared/HeaderTemplate';
import Register from '@/components/register/Register';

const register = () => {
    return (
        <div>
            <HeaderTemplate 
                background='/images/istockphoto-869283118-612x612.jpg' 
                header='ثبت نام'
                />
            <Register />
        </div>
    );
};

export default register;

register.getLayout = function PageLayout(page:FC){
    return(
        <>
            {page}
            <Footer />
        </>
    )
}