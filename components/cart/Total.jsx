import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import axios from "axios";
import { clearCart } from "@/redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const Total = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.items);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true); // set loading state to true
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

    const { data } = await axios.post(
      "https://coffee-mongo-db-next-js.vercel.app/api/checkout",
      {
        lineItems,
      }
    );

    const stripe = await stripePromise;

    await stripe.redirectToCheckout({ sessionId: data.id });
    setIsCheckingOut(false); // set loading state back to false
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
        {isCheckingOut ? (
          <button
            type="button"
            className="rounded-md text-white bg-gray-500 mb-2 w-full font-bold text-center py-2 cursor-not-allowed"
            disabled
          >
            در حال پردازش...
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              toast.info("در حال انتقال به صفحه پرداخت...", {
                position: "top-center",
                autoClose: 10000,
                theme: 'colored'
              });
              handleCheckout();
            }}
            className={`rounded-md text-white bg-[#53A06D] mb-2 w-full font-bold text-center py-2 disabled:bg-slate-500 disabled:cursor-not-allowed hover:bg-slate-800 duration-200 cursor-pointer`}
            disabled={products.length === 0}
          >
            پرداخت
          </button>
        )}
        <Link href="/products">
          <h1 className="rounded-md text-white bg-slate-800 font-bold text-center py-2 hover:bg-[#53A06D] duration-200 cursor-pointer">
            ادامه خرید
          </h1>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Total;
