import "swiper/css";

import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import Product from "./Product";
import { HomeContext } from "@/pages";

const SliderOne = () => {
  const {productsList} = useContext(HomeContext);
  return (
    <>
      <Swiper
        loop={false}
        autoplay={{
          delay: 4000,
        }}
        spaceBetween={10}
        modules={[Autoplay]}
        className="SliderOne w-[90%]"
      >
        {productsList.map((product) => (
          <SwiperSlide
            key={product._id}
            className="relative p-5 group bg-white shadow-md rounded-md overflow-hidden lg:p-0"
          >
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderOne;
