import "swiper/css";

import { Autoplay, Navigation } from "swiper";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Blog from "./Blog";
import { HomeContext } from "@/pages";

const Slider = () => {
  const { blogsList } = useContext(HomeContext) || {};
  return (
    <>
      <Swiper
        breakpoints={{
          350: {
            spaceBetween: 5,
            slidesPerView: 1,
          },

          768: {
            spaceBetween: 10,
            slidesPerView: 2,
          },

          998: {
            spaceBetween: 15,
            slidesPerView: 3,
          },
        }}
        loop={false}
        autoplay={{
          delay: 4000,
        }}
        navigation={true}
        spaceBetween={10}
        modules={[Autoplay, Navigation]}
        className="SliderTrending w-[95%] xl:w-[70%]"
      >
        {blogsList?.map((blog) => (
          <SwiperSlide key={blog._id} className="group">
            <Blog
              image={blog.image}
              title={blog.title}
              text={blog.content}
              date={blog.date}
              id={blog._id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
