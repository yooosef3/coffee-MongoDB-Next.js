import Image from "next/image";
import Link from "next/link";
import React from "react";
import brazil from "../../../public/images/Promotional-Product-min.webp";
import brazilBean from "../../../public/images/Bean-Pattern-min.png";

const BrazilCoffee = () => {
  return (
    <div className="flex flex-col gap-7 items-center my-14 lg:my-28 md:w-[700px] mx-auto lg:flex-row lg:w-[90%] xl:w-[80%]">
      <Image
        className="w-full h-full lg:w-[50%]"
        src={brazil}
        width={400}
        height={350}
        alt="brazil"
      />
      <div
        style={{ backgroundImage: `url(${brazilBean.src})` }}
        className="bg-cover bg-no-repeat px-3"
      >
        <h1 className="text-black font-bold text-xl md:text-3xl xl:text-5xl">
          قهوه برزیلی
        </h1>
        <h1 className="text-black font-bold text-xl md:text-3xl xl:text-5xl mb-3">
          یکی بخر, یکی ببر
        </h1>
        <span className="text-[#54A06F] font-bold">
          اکنون سفارش دهید! و 50% تخفیف بگیرید
        </span>
        <p className="text-gray-500 my-4">
          قهوه اولین بار در قرن هجدهم میلادی به کشور برزیل وارد شد و این کشور از
          دهه 1840 میلادی به عنوان بزرگ ترین تولید کننده قهوه در جهان شناخته شده
          است. تولید قهوه در برزیل در دهه 1920 میلادی به اوج خودش رسید به طوری
          که این کشور به عنوان تامین کننده 100 درصد قهوه جهان به شهرت رسید اما
          از دهه 1950 میلادی به بعد به دلیل افزایش تولید قهوه در سایر نقاط دنیا
          این درصد کاهش یافت . برزیل بزرگ ترین مصرف کننده قهوه در جهان نیز محسوب
          می شود، این کشور از اواسط سال 2010 از این نظر از ایالات متحده پیشی
          گرفته است.
        </p>
        <Link
          href="/"
          className="bg-[#54A06F] text-xl px-5 py-1 rounded-md font-bold hover:bg-white border border-[#54A06F] hover:text-gray-600 duration-200"
        >
          الان بخر
        </Link>
      </div>
    </div>
  );
};

export default BrazilCoffee;
