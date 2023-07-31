import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import RatedProduct from "../RatedProduct";

const ProductsSidebar = ({
  productsList,
  searched,
  setSearched,
  category,
  setCategory,
}) => {
  return (
    <div className="w-[90%] md:w-[85%] lg:w-[25%] mx-auto lg:ml-auto mt-32 lg:mt-0 ">
      <section>
        <h1 className="text-black mb-5 text-xl font-bold">دسته بندی محصولات</h1>
        <ul className="text-gray-500">
          <li
            className="my-2 hover:text-[#52A16F] font-semibold cursor-pointer duration-200"
            onClick={() => setCategory("")}
          >
            همه
          </li>
          <li
            className={`my-2 hover:text-[#52A16F] font-semibold cursor-pointer duration-200 ${
              category === "قهوه برشته لایت" ? "text-[#52A16F]" : ""
            }`}
            onClick={() => setCategory("قهوه برشته لایت")}
          >
            قهوه برشته لایت
          </li>
          <li
            className={`my-2 hover:text-[#52A16F] font-semibold cursor-pointer duration-200 ${
              category === "قهوه برشته مدیوم" ? "text-[#52A16F]" : ""
            }`}
            onClick={() => setCategory("قهوه برشته مدیوم")}
          >
            قهوه برشته مدیوم
          </li>
          <li
            className={`my-2 hover:text-[#52A16F] font-semibold cursor-pointer duration-200 ${
              category === "قهوه برشته تیره" ? "text-[#52A16F]" : ""
            }`}
            onClick={() => setCategory("قهوه برشته تیره")}
          >
            قهوه برشته تیره
          </li>
        </ul>
      </section>
      <section className="mt-14 ">
        <div className="relative h-12 shadow-lg">
          <input
            type="text"
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            className="w-full rounded-lg border border-gray-300 focus:border-blue-500 bg-white outline-none h-full pr-2 text-lg font-semibold text-black"
            placeholder="جستجو..."
          />
          <FiSearch className="absolute left-2 top-4 text-gray-700 hover:text-red-600 duration-200 cursor-pointer" />
        </div>
      </section>
      <section className="mt-14 w-full">
        <h1 className="text-black mb-5 text-xl font-bold">محصولات مرتبط</h1>
        <div className="flex flex-col gap-5">
          {productsList?.slice(0, 4).map((product) => (
            <RatedProduct
              key={product._id}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsSidebar;
