import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchedCard = ({ _id, name, image, price, setOpenSearch }) => {
  return (
    <div className="flex items-center gap-5 border-b p-4 h-28 overflow-hidden bg-white hover:bg-slate-100 duration-200">
      <Link onClick={()=> setOpenSearch(false)} href={`/products/${_id}`}>
        <Image
          alt="coffee"
          className="border rounded-md hover:opacity-80 duration-200"
          src={image?.[0]}
          width={85}
          height={85}
        />
      </Link>
      <div>
        <Link onClick={()=> setOpenSearch(false)} href={`/products/${_id}`}>
          <h1 className="text-black hover:text-green-600 duration-200 font-bold">{name}</h1>
        </Link>
        <div className="flex gap-5">
          <div className="text-green-600 font-bold text-sm">
            <span>
              {price.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}{" "}
              تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedCard;
