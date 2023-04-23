import Product from "./Product";
import React from "react";
import { useSelector } from "react-redux";

const ProductsTable = () => {
  const cartProducts = useSelector((state) => state.cart.items);

  return (
    <div className="w-[90%] md:w-[700px] lg:w-[700px] xl:w-[1000px] rounded-lg drop-shadow-lg gap-10 mx-auto mt-14 lg:mt-0 overflow-auto">
      <table className="table-auto w-[1300px] lg:w-[700px] xl:w-[1000px]">
        <thead className="bg-gray-300 h-11">
          <tr className="text-right text-gray-500">
            <th className="py-2 pr-4">کالا</th>
            <th>تعداد</th>
            <th>قیمت</th>
            <th>کل هزینه</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {cartProducts.length ? (
            cartProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            <tr>
              <td colSpan={4}>
                <h1 className="text-red-500 p-3 lg:text-center border-b font-semibold pb-2">
                  سبد خرید شما خالی است!
                </h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
