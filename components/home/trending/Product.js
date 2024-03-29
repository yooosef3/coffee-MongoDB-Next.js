import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsCart4 } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { MdDoNotDisturbOn } from "react-icons/md";
import { addItem } from "@/redux/cartSlice";

const Product = ({ product, separate }) => {
  const { noOff, image, inStock, name, price, _id } = product;
  const products = useSelector((state) => state.cart.items);

  const cartProduct = useMemo(() => {
    return products.find((item) => item._id === _id);
  }, [products, _id]);

  const dispatch = useDispatch();

  const handleAddItem = useCallback(
    (item) => {
      dispatch(addItem(item));
    },
    [dispatch]
  );


  const commonClassNames = "bg-neutral-800 text-4xl hover:bg-[#53A16E] duration-200 cursor-pointer rounded-full p-2";

const renderCartIcon = () => {
  if (inStock > 0 && !cartProduct) {
    return (
      <BsCart4
        onClick={() => handleAddItem(product)}
        className={`${commonClassNames}`}
      />
    );
  } else if (inStock === 0) {
    return (
      <MdDoNotDisturbOn
        className='bg-red-600 text-4xl rounded-full p-2 cursor-not-allowed'
      />
    );
  } else if (cartProduct) {
    return (
      <BsCheck2Circle
        className='text-4xl bg-[#53A16E] rounded-full p-2'
      />
    );
  } else {
    return null;
  }
};

  return (
    <div
      className={`w-full group relative overflow-hidden ${
        separate && "shadow-md md:w-[280px] hover:shadow-lg"
      } duration-200 rounded-md`}
    >
      <span
        dir="ltr"
        className="absolute bg-[#54A06F] right-0 top-4 group-hover:-right-11 duration-1000 h-6 p-1 rounded-tl-lg rounded-bl-lg"
      >
        12%
      </span>
      <div>
        <Link
          href={`/products/${_id}`}
          className="group-hover:opacity-0 group-hover:hidden"
        >
          <Image className="w-full h-[250px] object-cover  duration-700" src={image[0]} width={450} height={500} alt="product" />
        </Link>
        <Link
          href={`/products/${_id}`}
          className="hidden group-hover:opacity-100 group-hover:block"
        >
          <Image className="w-full h-[250px] object-cover  duration-700" src={image[1]} width={450} height={500} alt="product" />
        </Link>
      </div>
      <div className="flex flex-col bg-white p-5 lg:p-4 gap-3">
        <Link href={`/products/${_id}`} className="w-fit cursor-pointer ">
          <h1 className="text-black font-bold text-xl duration-200 hover:text-[#54A06F]">
            {name}
          </h1>
        </Link>
        <div className="font-semibold text-md flex gap-2">
          <span className="text-gray-400 mr-2 line-through">{noOff.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])} تومان</span>
          <span className="text-[#54A06F] ">{price.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}تومان</span>
        </div>
        <div className="flex gap-3">
          <div className="flex text-yellow-500">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
          <span className="text-gray-400 font-bold">(4نظر)</span>
        </div>
        <div className="flex gap-1 lg:opacity-0 lg:translate-y-20 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 duration-700 lg:absolute bottom-[40%] lg:justify-center">
        {renderCartIcon()}
          <Link href={`/products/${_id}`}>
            <FiEye className={`${commonClassNames}`} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
