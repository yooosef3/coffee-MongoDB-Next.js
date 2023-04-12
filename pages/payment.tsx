import HeaderTemplate from '@/components/shared/HeaderTemplate';
import Payment from '@/components/payment/Payment';
import React from 'react';

const payment = () => {
    return (
        <div>
            <HeaderTemplate 
                background='/images/download.jpeg' 
                header='پرداخت'
                />
            <Payment />
        </div>
    );
};

export default payment;