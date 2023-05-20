import "swiper/css";

import { Autoplay, Navigation } from "swiper";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { HomeContext } from "@/pages";
import Product from "./Product";

const Slider = () => {
  const {productsList} = useContext(HomeContext) || {};
  return (
    <>
       {productsList && (
        <Swiper
          breakpoints={{
            350: {
              spaceBetween: 15,
              slidesPerView: 1,
            },

            578: {
              spaceBetween: 15,
              slidesPerView: 2,
            },

            998: {
              spaceBetween: 20,
              slidesPerView: 3,
            },

            1200: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          }}
          loop={false}
          autoplay={{
            delay: 4000,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="SliderTrending w-[90%]  my-16"
        >
          {productsList.map((product) => (
            <SwiperSlide
              key={product._id}
              className="relative group bg-white shadow-md hover:shadow-lg rounded-lg"
            >
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
