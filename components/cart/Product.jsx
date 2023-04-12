import Image from "next/image";
import Link from "next/link";
import { MdDeleteForever } from "react-icons/md";
import React from "react";
import {removeProduct} from '@/redux/cartSlice';
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const { quantity, _id, image, name, price } = product;

  return (
    <tr className="border-b font-bold text-gray-700 border-gray-300 duration-300 hover:bg-gray-100 h-24">
      <td className="flex items-center gap-5 mt-2">
        <Link href={`/products/${_id}`}>
          <div className="flex items-center">
            <Image
              width={80}
              height={80}
              className="rounded-[25%]"
              alt="product"
              src={image[0]}
            />
            <h1 className="mr-2">{name}</h1>
          </div>
        </Link>
      </td>
      <td>
        <div className="border border-gray-400 w-fit rounded-md px-2 py-[1px]">
          <span
            className="text-red-600 text-2xl cursor-pointer"
          >
            -
          </span>
          <span className="mx-3 text-2xl text-slate-600">{quantity}</span>
          <span
            className="text-green-700 text-2xl cursor-pointer"
          >
            +
          </span>
        </div>
      </td>
      <td className="text-green-600">{price} تومان</td>
      <td>{price * quantity} تومان</td>
      <td>
        <MdDeleteForever  className="hover:text-red-600 ml-2 text-xl duration-200 cursor-pointer" />
      </td>
    </tr>
  );
};

export default Product;
