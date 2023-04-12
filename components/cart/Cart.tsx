import ProductsTable from './ProductsTable';
import React from 'react';
import Total from './Total';

const Cart = () => {
    return (
        <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row lg:items-start py-20 lg:px-10'>
            <ProductsTable />
            <Total />
        </div>
    );
};

export default Cart;