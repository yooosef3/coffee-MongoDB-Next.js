import Cart from '@/components/cart/Cart';
import HeaderTemplate from '@/components/shared/HeaderTemplate';
import React from 'react';
import { getSession } from 'next-auth/react';

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

export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        data: session.user,
      },
    };
  }