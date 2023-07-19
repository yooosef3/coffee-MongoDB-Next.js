import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import React from "react";
import axios from "axios";
import { clearCart } from "@/redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";

const Total = () => {
  const dispatch = useDispatch();
  
  const products = useSelector((state) => state.cart.items);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );
    const handleCheckout = async () => {
    dispatch(clearCart());
    const lineItems = products?.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // because stripe interprets price in cents
        },
        quantity: item.quantity,
      };
    });
    
    const { data } = await axios.post("https://coffee-mongo-db-next-js.vercel.app/api/checkout", {
      lineItems,
    });
    
    const stripe = await stripePromise;
    
    await stripe.redirectToCheckout({ sessionId: data.id });
  };
  const totalProducts = products.reduce(
    (ac, product) => ac + product.quantity,
    0
  );
  const totalPrice = products.reduce(
    (ac, product) => ac + product.quantity * product.price,
    0
  );

  return (
    <div className="lg:w-[30%]">
      <div className="bg-white w-[80%] rounded-lg drop-shadow-lg p-10 mx-auto">
        <h1 className="text-black font-bold mb-4">صورتحساب</h1>
        <div className="relative h-10 mt-10">
          <input
            type="text"
            placeholder="کد تخفیف"
            className="w-full h-full rounded-md bg-gray-200 outline-none border border-gray-300 focus:border-blue-500 pr-2"
          />
          <h1 className="absolute text-white left-0 top-0 bottom-0 rounded-l-md flex items-center px-3 bg-[#53A06D] cursor-pointer hover:bg-slate-800 duration-200">
            اعمال
          </h1>
        </div>
        <div className="mt-10">
          <span className="text-black font-bold ml-3">تعداد کل محصولات: </span>
          <span className="text-red-600 font-bold">{totalProducts}</span>
        </div>
        <div className="mt-5 mb-10">
          <span className="text-black font-bold ml-3">هزینه کل: </span>
          <span className="text-[#53A06D] font-bold">
            {totalPrice.toLocaleString()} تومان
          </span>
        </div>
        {products.length ? (
          <button
            type="button"
            onClick={handleCheckout}
            className="rounded-md text-white bg-[#53A06D] mb-2 w-full font-bold text-center py-2 hover:bg-slate-800 duration-200 cursor-pointer"
          >
            پرداخت
          </button>
        ) : (
          <h1 className="rounded-md bg-slate-300 text-slate-600 cursor-not-allowed mb-2 font-bold text-center py-2">
            تسویه حساب
          </h1>
        )}
        <Link href="/products">
          <h1 className="rounded-md text-white bg-slate-800 font-bold text-center py-2 hover:bg-[#53A06D] duration-200 cursor-pointer">
            ادامه خرید
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Total;
