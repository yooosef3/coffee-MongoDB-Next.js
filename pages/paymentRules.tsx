import HeaderTemplate from '@/components/shared/HeaderTemplate';
import React from 'react';
import Rules from '@/components/headerPages/payment/Rules';

const paymentRules = () => {
    return (
        <div>
            <HeaderTemplate 
                background='/images/digital-payment.png' 
                header='قوانین پرداخت'
                />
            <Rules />
        </div>
    );
};

export default paymentRules;