import "swiper/css";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Blog from "./Blog";
import React from "react";
import blog1 from '../../../public/images/1-min_575x380_crop_center.webp';
import blog2 from '../../../public/images/2-min_575x380_crop_center.webp';
import blog3 from '../../../public/images/3-min_575x380_crop_center.webp';
import blog4 from '../../../public/images/4-min_575x380_crop_center.webp';
import blog5 from '../../../public/images/5-min_575x380_crop_center.webp';
import blog6 from '../../../public/images/6-min_575x380_crop_center.webp';
import blog7 from '../../../public/images/7-min_575x380_crop_center.webp';
import blog8 from '../../../public/images/9-min_575x380_crop_center.webp';

export const blogs = [
    {id:1, title: 'بهترین هستیم', text: 'ما به همه جهانبان ثابت کرده ایم که بهترین هستیم و برای این مورد به خودمان افتخار می کنیم و توانسته ایم جوایز بین المللی زیادی دریافت کنیم ', date: '12 مهر 1402', image: blog4},
    {id:2, title: 'بهترین هستیم', text: 'ما به همه جهانبان ثابت کرده ایم که بهترین هستیم و برای این مورد به خودمان افتخار می کنیم و توانسته ایم جوایز بین المللی زیادی دریافت کنیم ', date: '12 مهر 1402', image: blog2},
    {id:3, title: 'بهترین هستیم', text: 'ما به همه جهانبان ثابت کرده ایم که بهترین هستیم و برای این مورد به خودمان افتخار می کنیم و توانسته ایم جوایز بین المللی زیادی دریافت کنیم ', date: '12 مهر 1402', image: blog1},
    {id:4, title: 'بهترین هستیم', text: 'ما به همه جهانبان ثابت کرده ایم که بهترین هستیم و برای این مورد به خودمان افتخار می کنیم و توانسته ایم جوایز بین المللی زیادی دریافت کنیم ', date: '12 مهر 1402', image: blog5},
    {id:5, title: 'بهترین هستیم', text: 'ما به همه جهانبان ثابت کرده ایم که بهترین هستیم و برای این مورد به خودمان افتخار می کنیم و توانسته ایم جوایز بین المللی زیادی دریافت کنیم ', date: '12 مهر 1402', image: blog3},
    {id:6, title: 'بهترین هستیم', text: 'ما به همه جهانبان ثابت کرده ایم که بهترین هستیم و برای این مورد به خودمان افتخار می کنیم و توانسته ایم جوایز بین المللی زیادی دریافت کنیم ', date: '12 مهر 1402', image: blog6},
    {id:7, title: 'بهترین هستیم', text: 'ما به همه جهانبان ثابت کرده ایم که بهترین هستیم و برای این مورد به خودمان افتخار می کنیم و توانسته ایم جوایز بین المللی زیادی دریافت کنیم ', date: '12 مهر 1402', image: blog7},
    {id:8, title: 'بهترین هستیم', text: 'ما به همه جهانبان ثابت کرده ایم که بهترین هستیم و برای این مورد به خودمان افتخار می کنیم و توانسته ایم جوایز بین المللی زیادی دریافت کنیم ', date: '12 مهر 1402', image: blog8},
]
const Slider = () => {
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
                  }
                }}
                loop={false}
                autoplay={{
                    delay: 4000,
                }} 
                navigation={true}
                spaceBetween={10}
                modules={[ Autoplay,Navigation]} 
                className="SliderTrending w-[95%] xl:w-[70%]">
                    {
                    blogs.map(blog => (
                        <SwiperSlide key={blog.id} className='group'>
                            <Blog 
                                image={blog.image}
                                title={blog.title}
                                text={blog.text}
                                date={blog.date}
                            />
                        </SwiperSlide>
                        )
                    )}
            </Swiper>
        </>
    );
};

export default Slider;