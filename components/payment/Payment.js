import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import { clearCart } from "@/redux/cartSlice";
import credit from "../../public/images/MasterCard.jpg";
import paypal from "../../public/images/PayPal.jpg";
import { useForm } from "react-hook-form";
import visa from "../../public/images/VISA.jpg";

const Payment = () => {
  const [method, setMethod] = useState(0);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ card, expire, cvv2 }) => {
    dispatch(clearCart());
    reset();
  };

  const cartProducts = useSelector((state) => state.cart.items);
  const totalPrice = cartProducts.reduce(
    (ac, product) => ac + product.quantity * product.price,
    0
  );

  return (
    <div className="py-20">
      <div className="rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto bg-white p-5">
        <h1 className="font-bold text-xl mb-4 text-gray-800">
          انتخاب روش پرداخت
        </h1>
        <div className="flex items-center justify-center gap-3 mb-5">
          <div
            onClick={() => setMethod(0)}
            className={`flex cursor-pointer ${
              method === 0 && "shadow-md"
            } hover:shadow-md rounded-md duration-300 flex-col items-center`}
          >
            <Image alt="method" src={credit} width={100} height={70} />
            <h2 className="text-slate-700 text-lg font-medium">credit card</h2>
          </div>
          <div
            onClick={() => setMethod(1)}
            className={`flex cursor-pointer ${
              method === 1 && "shadow-md"
            } hover:shadow-md rounded-md duration-300 flex-col items-center`}
          >
            <Image alt="method" src={visa} width={100} height={70} />
            <h2 className="text-slate-700 text-lg font-medium">visa</h2>
          </div>
          <div
            onClick={() => setMethod(2)}
            className={`flex cursor-pointer ${
              method === 2 && "shadow-md"
            } hover:shadow-md rounded-md duration-300 flex-col items-center`}
          >
            <Image alt="method" src={paypal} width={100} height={70} />
            <h2 className="text-slate-700 text-lg font-medium">paypal</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="p-3 bg-blue-100 rounded-md text-slate-600 text-lg font-medium">
            <Image
              src={method === 0 ? credit : method === 1 ? visa : paypal}
              width={100}
              height={70}
              alt="method"
              className="rounded-full w-20 shadow-lg mb-7"
            />
            <div className="flex flex-col">
              <label htmlFor="number">
                شماره{" "}
                {method === 0 ? "credit" : method === 1 ? "visa" : "paypal"}
              </label>
              <div className="flex justify-between">
                <span>(xxxx xxxx xxxx xxxx)</span>
                <AiFillEyeInvisible />
              </div>
              <input
                className="bg-white h-11 rounded-md border outline-non focus:ring-sky-600 focus:ring-2 pr-2"
                type="text"
                id="number"
                {...register("card", {
                  minLength: {
                    value: 12,
                    message: "شماره کارت باید 12 کاراکتر باشد!",
                  },
                  maxLength: {
                    value: 12,
                    message: "شماره کارت باید 12 کاراکتر باشد!",
                  },
                  required: "لطفا شماره  کارت را وارد کنید!",
                })}
              />
              {errors.card && (
                <div className="text-red-500 ">{errors.card.message}</div>
              )}
            </div>
            <div className="flex gap-2 justify-between mt-5">
              <div className="flex flex-col w-[48%]">
                <label htmlFor="expire">تاریخ انقضا(ماه/سال)</label>
                <input
                  className="bg-white h-11 rounded-md border outline-non focus:ring-sky-600 focus:ring-2 pr-2"
                  type="text"
                  id="expire"
                  {...register("expire", {
                    minLength: {
                      value: 5,
                      message: "تاریخ انقضا بجز / باید 4 عدد باشد!",
                    },
                    maxLength: {
                      value: 5,
                      message: "تاریخ انقضا بجز / باید 4 عدد باشد!",
                    },
                    required: "لطفا تاریخ انقضا را وارد کنید!",
                  })}
                />
                {errors.expire && (
                  <div className="text-red-500 ">{errors.expire.message}</div>
                )}
              </div>
              <div className="flex flex-col w-[48%]">
                <label htmlFor="cvv">CVV</label>
                <input
                  className="bg-white h-11 rounded-md border outline-non focus:ring-sky-600 focus:ring-2 pr-2"
                  type="text"
                  id="cvv"
                  {...register("cvv2", {
                    minLength: {
                      value: 3,
                      message: "cvv2 باید 3 کاراکتر باشد!",
                    },
                    maxLength: {
                      value: 3,
                      message: "cvv2 باید 3 کاراکتر باشد!",
                    },
                    required: "لطفا cvv2 را وارد کنید!",
                  })}
                />
                {errors.cvv2 && (
                  <div className="text-red-500 ">{errors.cvv2.message}</div>
                )}
              </div>
            </div>
          </div>
          <div className="flex bg-slate-200 justify-between p-2 text-gray-800 font-bold rounded-lg my-5">
            <h1>مبلغ کل</h1>
            <h1>{totalPrice} تومان</h1>
          </div>
          <button
            disabled={totalPrice === 0}
            type="submit"
            className={`rounded-md text-white ${
              totalPrice === 0
                ? "bg-slate-400 text-slate-700 cursor-not-allowed"
                : "bg-[#53A06D] hover:bg-slate-800 duration-200 cursor-pointer"
            } mb-2 w-full font-bold text-center py-2 `}
          >
            پرداخت
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
