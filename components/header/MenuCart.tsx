import { CgTrash } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { removeItem } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

type PropTypes = {
  toggle: boolean;
  products: [any];
};

const MenuCart = ({ products, toggle }: PropTypes) => {
  const dispatch = useDispatch();
  const totalPrice = products.reduce(
    (ac, product) => ac + product.quantity * product.price,
    0
  );

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div
      className={`fixed w-[270px] bg-white ${
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
      {products.length > 0 &&
        products.map((product) => (
          <div key={product._id}>
            <div className="flex items-center gap-5 border-b pb-4">
              <Link href={`/products/${product._id}`}>
                <Image
                  alt="coffee"
                  className="border"
                  src={product.image[0]}
                  width={100}
                  height={100}
                />
              </Link>
              <div>
                <Link href={`/products/${product._id}`}>
                  <h1 className="text-black font-bold">{product.name}</h1>
                </Link>
                <span className="text-gray-700">x</span>
                <span className="text-gray-700">{product.quantity}</span>
                <div className="flex gap-5">
                  <div className="text-green-600 font-bold text-sm">
                    <span>{product.price} تومان</span>
                  </div>
                  <CgTrash
                    onClick={() => handleRemoveItem(product._id)}
                    className="text-red-600 hover:text-red-700 duration-200 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      {products.length && (
        <div className="flex justify-between border-b pb-2">
          <h1 className="text-black font-bold">مجموع:</h1>
          <div className="text-green-600 font-bold">
            <span>{totalPrice} تومان</span>
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
            <Link
              className="text-white font-bold text-center py-2 bg-zinc-800 rounded-sm hover:bg-emerald-600 duration-200"
              href="/payment"
            >
              تسویه
            </Link>
          </>
        ) : (
          <>
            <h1
              className="text-slate-600 font-bold text-center py-2 bg-slate-300 rounded-sm cursor-not-allowed"
            >
              مشاهده سبد خرید
            </h1>
            <h1
              className="text-slate-600 font-bold text-center py-2 bg-slate-300 rounded-sm cursor-not-allowed"
            >
              تسویه
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuCart;
