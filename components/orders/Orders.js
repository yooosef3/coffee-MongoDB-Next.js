import Order from "./Order";
import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.cart.history);
  return (
    <div className={`py-32 ${!orders.length && 'h-screen'} flex flex-col justify-center items-center mx-auto w-[90%] lg:w-[70%]`}>
      <h1 className="text-lg lg:text-2xl mb-5 text-slate-700 font-semibold">
        سابقه خرید شما
      </h1>
      {orders.length ? (
        <div className="w-[90%] mx-auto overflow-auto">
          <div className="w-[592px] md:w-full px-2 h-[515px]">
            {orders.map((order) => (
              <Order key={order._id} order={order} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-red-600 text-xl font-bold">سابقه خریدی برای شما ثبت نشده است!</p>
      )}
    </div>
  );
};

export default Orders;

