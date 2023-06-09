import "swiper/css";

import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import { HomeContext } from "@/pages";
import Product from "./Product";

const SliderTwo = () => {
  const {productsList} = useContext(HomeContext);

  return (
    <>
      <Swiper
        loop={false}
        autoplay={{
          delay: 4000,
        }}
        modules={[Autoplay]}
        className="SliderOne w-[90%]"
      >
        {productsList.map((product) => (
          <SwiperSlide
            key={product._id}
            className="relative p-5 lg:p-0 group bg-white shadow-md rounded-md overflow-hidden"
          >
            <Product product={product} two />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderTwo;
