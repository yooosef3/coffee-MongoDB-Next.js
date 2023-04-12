import Cart from '@/components/cart/Cart';
import HeaderTemplate from '@/components/shared/HeaderTemplate';
import React from 'react';

const cart = () => {
    return (
        <div>
            <HeaderTemplate 
                background='/images/close-up-toy-cart-with-easter-eggs.jpg' 
                header='سبد خرید'
                />
            <Cart />
        </div>
    );
};

export default cart;