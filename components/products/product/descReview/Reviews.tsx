import React, { useContext, useState } from "react";

import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { ProductContext } from "@/pages/products/[productId]";
import Review from "./Review";
import ReviewContent from "./ReviewContent";

const Reviews = ({ toggle }) => {
  const [close, setClose] = useState(false);
  const { comments } = useContext(ProductContext);
  return (
    <div className={`py-7 ${toggle ? "hidden" : "block w-full"}`}>
      <h1 className="text-black font-bold text-2xl">نظر مشتریان</h1>
      <div className="flex text-yellow-500 my-3">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStarHalf />
      </div>
      <span className="text-gray-400">بر اساس {comments.length} نظر</span>
      <h1
        onClick={() => setClose(!close)}
        className="bg-slate-800 my-5 w-fit rounded-md py-1 px-4 font-bold hover:bg-[#438259] duration-200 cursor-pointer"
      >
        یک نظر بنویس
      </h1>
      <Review close={close} />
      <div className="flex flex-col gap-8 py-4">
        {comments.map((review) => (
          <ReviewContent key={review._id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
