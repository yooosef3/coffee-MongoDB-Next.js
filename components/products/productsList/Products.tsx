import React, { useContext } from 'react';

import { FiSearch } from "react-icons/fi";
import Product from "@/components/home/trending/Product";
import { ProductsContext } from '@/pages/products';
import RatedProduct from "@/components/products/RatedProduct";
import mainBg from "../../../public/images/Pattern.webp"

type ProductType = { 
  _id: number; 
  image: string; 
  price: number; 
  off: number; 
  name: string; 
}


const Products = () => {
  const productsList = useContext(ProductsContext);
    return (
        <div
        style={{ backgroundImage: `url(${mainBg.src})` }}
        className="bg-cover py-20 lg:px-10 bg-no-repeat bg-center"
      >
        <div className="lg:w-[95%] mx-auto flex flex-col lg:flex-row lg:justify-center">
          <div className="w-[90%] lg:w-[75%] mx-auto">
            <div className="mx-auto w-fit mb-6">
              <label className="font-semibold text-gray-500" htmlFor="sort">
                دسته بندی براساس:
              </label>
              <select
                defaultValue="all"
                name="sort"
                id="sort"
                className="bg-white text-black font-bold pr-auto mr-2 pr-4 outline-none focus:shadow-md w-[100px] text-center rounded-lg"
              >
                <option value="all">همه</option>
                <option value="featured">برگزیده ها</option>
                <option value="expensive">گران ترین</option>
                <option value="cheap">ارزان ترین</option>
              </select>
            </div>
            <div className="flex relative flex-col gap-4 justify-center items-center sm:flex-row sm:flex-wrap">
              {productsList.map((product: ProductType ) => (
                <Product
                  key={product._id}
                  product={product}
                  separate
                />
              ))}
            </div>
          </div>
          <div className="w-[90%] md:w-[85%] lg:w-[25%] mx-auto lg:ml-auto mt-32 lg:mt-0">
            <section>
              <h1 className="text-black mb-5 text-xl font-bold">
                دسته بندی محصولات
              </h1>
              <ul className="text-gray-500">
                <li className="my-2 hover:text-[#52A16F] font-semibold cursor-pointer duration-200">
                  عربیکا سبز
                </li>
                <li className="my-2 hover:text-[#52A16F] font-semibold cursor-pointer duration-200">
                  قهوه برشته لایت
                </li>
                <li className="my-2 hover:text-[#52A16F] font-semibold cursor-pointer duration-200">
                  قهوه برشته مدیوم
                </li>
                <li className="my-2 hover:text-[#52A16F] font-semibold cursor-pointer duration-200">
                  قهوه برشته تیره
                </li>
              </ul>
            </section>
            <section className="mt-14 w-full">
              <h1 className="text-black mb-5 text-xl font-bold">
                محصولات مرتبط
              </h1>
              <div className="flex flex-col gap-5">
                {productsList.map((product) => (
                  <RatedProduct
                    key={product._id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                ))}
              </div>
            </section>
            <section className="mt-14 ">
              <div className="relative h-12 shadow-lg">
                <input
                  type="search"
                  className="w-full rounded-lg border border-gray-300 focus:border-blue-500 bg-white outline-none h-full pr-2 text-lg font-semibold text-black"
                  placeholder="جستجو..."
                />
                <FiSearch className="absolute left-2 top-4 text-gray-700 hover:text-red-600 duration-200 cursor-pointer" />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
};

export default Products;