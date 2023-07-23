import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ product, two }) => {
  return (
    <div className="flex flex-col items-center sm:flex-row gap-2 md:gap-10 lg:gap-4 justify-between sm:justify-start rounded-xl overflow-hidden">
      <span
        dir="ltr"
        className="absolute bg-[#54A06F] right-0 group-hover:-right-11 duration-1000 h-6 p-1 rounded-tl-lg rounded-bl-lg"
      >
        12%
      </span>
      <div >
        <Link href={`/products/${product._id}`} passHref>
          <Image
            src={two ? product.image[1] : product.image[0]}
            width={300}
            height={400}
            className="rounded-md object-cover h-96 sm:h-48 sm:w-[300px] lg:w-[180px] xl:w-[250px] w-[350px]"
            alt="product"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/">
          <h1 className="text-black font-bold text-2xl">{product.name}</h1>
        </Link>
        <div className="font-semibold text-lg flex gap-2">
          <span className="text-gray-400 line-through">
            {product.price.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])} تومان
          </span>
          <span className="text-[#54A06F]">{product.noOff.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])} تومان</span>
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
        <Link href={`/products/${product._id}`}>
          <button className="border border-gray-300 w-fit hover:bg-[#54a06f] hover:text-white font-bold text-gray-600 pt-1 px-2 rounded-md duration-200">
            مشاهده محصول
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
