import React, { useContext } from "react";

import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { ProductContext } from "@/pages/products/[productId]";
import { useRouter } from "next/router";

const ReviewContent = ({
  author,
  text,
  createdAt,
  title
}) => {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const { query } = useRouter();
  const productId = query.productId;
  const {products} = useContext(ProductContext);
  const product = products.filter(item => item._id === productId);
  return (
    <div className="border-t border-gray-200 pt-6">
      <div className="flex text-yellow-400">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStarHalf />
      </div>
      <h1 className="text-black my-2 font-bold text-xl">{product[0].name}</h1>
      <div className="flex gap-2 text-sm">
        <span className="font-bold text-slate-600">{author}</span>
        <span className="text-slate-600">در</span>
        <span className="font-bold text-slate-600">{formattedDate}</span>
      </div>
      <p className="text-gray-400 mt-2 font-semibold">{text}</p>
    </div>
  );
};

export default ReviewContent;
