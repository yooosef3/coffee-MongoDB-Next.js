import { CgTrash } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { removeItem } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

const MenuCartList = ({ products }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (item: {}) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="overflow-y-auto scrollbar-thin">
      {products.length > 0 &&
        products?.map((product) => (
          <div key={product._id}>
            <div className="flex items-center gap-5 border-b pb-4">
              <Link href={`/products/${product._id}`}>
                <Image
                  alt="coffee"
                  className="border"
                  src={product?.image?.[0]}
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
    </div>
  );
};

export default MenuCartList;
