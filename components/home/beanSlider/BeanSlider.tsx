import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { HomeContext } from "@/pages";
import Image from "next/image";
import Link from "next/link";
import blog1 from "../../../public/images/Screenshot 2023-02-23 222213.png";

const BeanSlider = () => {
  const { beansList } = useContext(HomeContext) || {};
  return (
    <>
      <Swiper
        breakpoints={{
          350: {
            spaceBetween: 5,
            slidesPerView: 1,
          },

          578: {
            spaceBetween: 5,
            slidesPerView: 2,
          },

          768: {
            spaceBetween: 5,
            slidesPerView: 3,
          },

          1200: {
            spaceBetween: 5,
            slidesPerView: 4,
          },
        }}
        loop={false}
        navigation={true}
        autoplay={{
          delay: 4000,
        }}
        modules={[Navigation, Autoplay]}
        className="beansSlider text-center w-[90%] xl:w-[80%] mb-16"
      >
        {beansList?.map((bean) => (
          <SwiperSlide key={bean._id} className="p-10 group">
            <div className="overflow-hidden rounded-full mx-auto object-cover h-[200px] w-[200px]">
              <Image
                alt="bean"
                className="rounded-full w-full h-full group-hover:scale-150 duration-1000 "
                src={bean.images}
                width={950}
                height={950}
              />
            </div>
            <h1 className="text-black my-4 font-bold text-lg">{bean.name}</h1>
            <p className="text-gray-600 text-sm">{bean.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BeanSlider;
