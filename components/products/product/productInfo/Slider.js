import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { ProductContext } from "@/pages/products/[productId]";

function Slider() {
  const product = useContext(ProductContext);
  return (
    <div className="h-[400px] lg:w-[50%]">
      <Swiper
        spaceBetween={10}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        className="detail xl:w-[80%] shadow-xl rounded-lg"
      >
        {product.image.map((item, i) => (
          <SwiperSlide key={i}>
            <Image src={item} width={800} height={500} alt="pic" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
