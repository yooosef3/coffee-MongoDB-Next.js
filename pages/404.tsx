import HeaderTemplate from "@/components/shared/HeaderTemplate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import notfound from "../public/images/error-404-07-920x518.jpg";

const notFound = () => {
  return (
    <div>
      <HeaderTemplate background="/images/error-404-06-920x518.jpg" />
      <div className="w-[90%] mx-auto py-20 lg:flex lg:justify-start lg:gap-10">
        <div className="mb-8">
          <Image
            alt="notfound"
            className="w-full rounded-md"
            width={400}
            height={100}
            src={notfound}
          />
        </div>
        <div>
          <h1 className="font-bold text-slate-900 text-2xl text-center mb-4">
            موردی یافت نشد!
          </h1>
          <Link href="/">
            <h1 className="rounded-md text-white bg-[#53A06D] mb-2 font-bold text-center py-2 hover:bg-slate-800 duration-200 cursor-pointer">
              صفحه اصلی
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default notFound;
