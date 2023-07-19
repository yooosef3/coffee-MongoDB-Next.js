import React, { FC } from "react";

import { AiFillCheckCircle } from "react-icons/ai";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  
  const clickHandler = () => {
    router.replace("/");
  };
  return (
    <div className="h-screen flex gap-10 flex-col justify-center items-center">
      <div className="flex gap-3 justify-center items-center bg-slate-600 rounded-xl p-10">
        <AiFillCheckCircle className="text-4xl text-green-600" />
        <h1 className="font-bold text-lg lg:text-3xl">پرداخت شما با موفقیت انجام شد!</h1>
      </div>

      <p
        onClick={clickHandler}
        className=" p-4 cursor-pointer font-bold bg-green-600 rounded-lg hover:bg-gray-900 duration-200"
      >
        بازگشت به صفحه اصلی
      </p>
    </div>
  );
};

export default Success;

Success.getLayout = function PageLayout(page: FC) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
