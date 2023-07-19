import Link from "next/link";
import MenuCartList from "./MenuCartList";
import React from "react";

type PropTypes = {
  toggle: boolean;
  products: [any];
};

const MenuCart = ({ products, toggle }: PropTypes) => {
  const totalPrice = products.reduce(
    (ac, product) => ac + product.quantity * product.price,
    0
  );

  return (
    <div
      className={`fixed w-[270px] bg-white max-h-[500px] ${
        toggle ? "flex flex-col" : "hidden"
      }  gap-4 rounded-lg p-5 right-1`}
    >
      {products.length ? (
        <h1 className="text-gray-500 border-b pb-2">
          <span className="text-green-600 ml-1 font-bold">
            {products.length}
          </span>
          محصول وجود دارد
        </h1>
      ) : (
        <h1 className="text-red-500 text-center border-b font-semibold pb-2">
          سبد خرید شما خالی است!
        </h1>
      )}
      <MenuCartList products={products} />

      {products.length && (
        <div className="flex justify-between border-b pb-2">
          <h1 className="text-black font-bold">مجموع:</h1>
          <div className="text-green-600 font-bold">
            <span>{totalPrice.toLocaleString()} تومان</span>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-3">
        {products.length ? (
          <>
            <Link
              className="text-white font-bold text-center py-2 bg-zinc-800 rounded-sm hover:bg-emerald-600 duration-200"
              href="/cart"
            >
              مشاهده سبد خرید
            </Link>
            {/* <Link
              className="text-white font-bold text-center py-2 bg-zinc-800 rounded-sm hover:bg-emerald-600 duration-200"
              href="/payment"
            >
              تسویه
            </Link> */}
          </>
        ) : (
          <>
            <h1 className="text-slate-600 font-bold text-center py-2 bg-slate-300 rounded-sm cursor-not-allowed">
              مشاهده سبد خرید
            </h1>
            {/* <h1 className="text-slate-600 font-bold text-center py-2 bg-slate-300 rounded-sm cursor-not-allowed">
              تسویه
            </h1> */}
          </>
        )}
      </div>
    </div>
  );
};

export default MenuCart;
