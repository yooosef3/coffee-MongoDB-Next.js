import React, { useContext } from "react";
import {
  addItem,
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineDelete } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import Image from "next/image";
import { ProductContext } from "@/pages/products/[productId]";
import { TiTick } from "react-icons/ti";
import { logos } from "@/components/layout/Footer";

const Info = () => {
  const product = useContext(ProductContext);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const cartItem = items.find((item) => item._id === product._id);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleIncreaseItem = (itemId) => {
    if (product.inStock > cartItem.quantity) dispatch(increaseItem(itemId));
  };

  const handleDecreaseItem = (itemId) => {
    dispatch(decreaseItem(itemId));
  };

  return (
    <div className="text-black lg:w-[50%]">
      <div className="flex gap-2 mb-1">
        <div className="flex text-yellow-500">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>
        <span className="text-gray-400 font-bold">(4 نظر)</span>
      </div>
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        {product.name}
      </h1>
      <div className="flex gap-2 my-4 items-center">
        <span className="text-gray-400 text-lg md:text-xl line-through font-bold">
          {product.noOff.toLocaleString()} تومان
        </span>
        <h1 className="font-extrabold text-2xl text-[#53A271]">
          {product.price.toLocaleString()} تومان
        </h1>
      </div>
      <div className="flex gap-2 mb-4 items-center">
        <h1 className="text-lg font-bold">موجودی:</h1>
        {product.inStock > 0 ? (
          <div className="flex text-[#28A745] font-extrabold gap-1 text-lg">
            <h1>موجود در بازار</h1>
            <TiTick className="text-2xl" />
          </div>
        ) : (
          <div className="flex text-red-600 font-extrabold gap-1 text-lg">
            <h1>اتمام موجودی</h1>
            <ImCross className="text-2xl mr-2" />
          </div>
        )}
      </div>
      {product.inStock > 0 ? (
        <p className="text-gray-400 mb-8 font-semibold">
          بشتابید! فقط{" "}
          <span className="text-[#28A745] font-extrabold text-xl">
            {product.inStock}
          </span>{" "}
          عدد در بازار باقی مانده است!
        </p>
      ) : (
        <p className="text-red-500 mb-8">
          در حال حاضر این محصول در انبار موجود نیست!
        </p>
      )}
      <p className="text-gray-400 mb-6 font-semibold">{product.description}</p>
      {cartItem && product.inStock ? (
        <>
          <div className="flex gap-4 border mb-6 border-gray-400 w-fit items-center py-[2px] px-2 rounded-md">
            <FaPlus
              onClick={() => handleIncreaseItem(cartItem._id)}
              className="text-green-700 cursor-pointer"
            />
            <span className="font-bold text-2xl text-yellow-600">
              {cartItem.quantity}
            </span>
            <FaMinus
              onClick={() => handleDecreaseItem(cartItem._id)}
              className="text-red-700 cursor-pointer"
            />
          </div>

          <div
            onClick={() => handleRemoveItem(cartItem._id)}
            className="flex justify-center w-48 text-xl mb-6 text-white bg-[#222222] hover:bg-[#d70000] cursor-pointer duration-200 font-bold border border-gray-400 gap-2 pt-[4px] rounded-md"
          >
            <AiOutlineDelete />
            <span>حذف از سبد خرید</span>
          </div>
        </>
      ) : (
        <div
          onClick={() => handleAddItem(product)}
          className={`${product.inStock ? 'flex' : 'hidden'} justify-center w-48 text-xl mb-6 text-white bg-[#222222] hover:bg-[#438259] cursor-pointer duration-200 font-bold border border-gray-400 gap-2 pt-[4px] rounded-md`}
        >
          <FaOpencart />
          <span>اضافه به سبد خرید</span>
        </div>
      )}
      <div className="mt-8">
        <h1 className="text-lg mb-1 font-bold">دسته بندی:</h1>
        <span className="text-gray-400 font-semibold">{product.category}</span>
      </div>

      <div className="flex justify-center my-6 text-gray-400 text-xl gap-5">
        <FaLinkedinIn className="hover:text-blue-600 duration-200 cursor-pointer" />
        <FaTiktok className="hover:text-gray-900 duration-200 cursor-pointer" />
        <ImFacebook className="hover:text-blue-800 duration-200 cursor-pointer" />
        <ImTwitter className="hover:text-blue-500 duration-200 cursor-pointer" />
      </div>
      <div className="flex gap-3 mt-10">
        {logos.map((logo) => (
          <Image
            key={logo.id}
            alt="logo"
            src={logo.image}
            width={60}
            height={40}
            className="rounded-md cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
