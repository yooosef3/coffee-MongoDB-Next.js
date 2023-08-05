import { CgTrash } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const MenuProduct = ({_id, name,image, quantity, price, handleRemoveItem}) => {
    return (
        <div>
            <div className="flex items-center gap-5 border-b pb-4">
              <Link href={`/products/${_id}`}>
                <Image
                  alt="coffee"
                  className="border hover:opacity-70 duration-300"
                  src={image?.[0]}
                  width={100}
                  height={100}
                />
              </Link>
              <div>
                <Link href={`/products/${_id}`}>
                  <h1 className="text-black font-bold">{name}</h1>
                </Link>
                <span className="text-gray-700">x</span>
                <span className="text-gray-700">{quantity}</span>
                <div className="flex gap-5">
                  <div className="text-green-600 font-bold text-sm">
                    <span>{price.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])} تومان</span>
                  </div>
                  <CgTrash
                    onClick={() => handleRemoveItem(_id)}
                    className="text-red-600 hover:text-red-700 duration-200 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
    );
};

export default MenuProduct;