import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import bcrypt from "bcryptjs";

const Order = ({ order }) => {
  const timestamp = order.date;
  const [hashedId, setHashedId] = useState("");

  useEffect(() => {
    const saltRounds = 10; 
    bcrypt.hash(order._id, saltRounds, (err, hash) => {
      if (err) {
        console.error(err);
      } else {
        setHashedId(hash);
      }
    });
  }, [order._id]);

  return (
    <Link href={`/products/${order._id}`}>
      <div className="border lg:hover:translate-x-2 lg:hover:-translate-y-2 lg:hover:bg-white bg-[#F2F3F7] my-2 p-2 px-6 flex justify-between items-center rounded-lg border-slate-300 lg:hover:border-yellow-300 duration-300 lg:cursor-pointer w-full">
        <p className=" w-[25%] text-gray-500"># {hashedId.substring(0, 10)}</p>
        <div className="flex w-[25%] items-center gap-4">
          <div className="rounded-full overflow-hidden bg-white p-1 ring w-[45px] h-[45px]">
            <Image
              className="pt-2 rounded-full"
              src={order?.image?.[1]}
              width={70}
              height={70}
              alt={order.name}
            />
          </div>
          <p className="font-bold text-gray-500">{order.name}</p>
        </div>
        <p className="font-bold text-gray-500 w-[25%]">
          {(order.price * order.quantity).toLocaleString()} تومان
        </p>
        <p className="text-gray-500 w-[8%]">{order.quantity} عدد</p>
        <p className=" w-[8%] text-gray-400 font-semibold">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Order;
