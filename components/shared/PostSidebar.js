import { FiSearch } from "react-icons/fi";
import React from "react";
import RecentPostCard from "./RecentPostCard";

const PostSidebar = ({ items, searched, setSearched, search }) => {
  return (
    <div className="col-span-1 lg:col-span-4 lg:order-0 lg:order-0 lg:sticky top-8">
      <div className="py-5 mt-7">
        <h1 className="text-black font-bold text-lg mb-4">پست های اخیر</h1>
        <div className="flex flex-col gap-4">
          {items?.slice(0, 4).map((item) => (
            <RecentPostCard
              key={item._id}
              title={item.title}
              image={item.image}
              id={item._id}
              route="blogs"
            />
          ))}
        </div>
        {search && (
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
        )}
      </div>
      <div className="border-t border-slate-300 py-5 mt-7">
        <h1 className="text-black font-bold text-lg mb-4">دسته بندی</h1>
        <div className="flex gap-2">
          <span className="bg-white text-slate-400 w-fit font-bold px-3 py-1 rounded-md hover:text-white hover:bg-slate-800 duration-300 cursor-pointer">
            عربیکا
          </span>
          <span className="bg-white text-slate-400 w-fit font-bold px-3 py-1 rounded-md hover:text-white hover:bg-slate-800 duration-300 cursor-pointer">
            قهوه کردی
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostSidebar;
