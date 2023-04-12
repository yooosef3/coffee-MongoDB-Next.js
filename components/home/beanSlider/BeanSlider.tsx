import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import coffee1 from '../../../public/images/1_bg_light.jpg'
import coffee2 from '../../../public/images/2_bg_medium.jpg'
import coffee3 from '../../../public/images/3_bg_medium-dark.jpg'
import coffee4 from '../../../public/images/Screenshot 2023-02-24 213407.png'
import coffee5 from '../../../public/images/Screenshot 2023-02-23 222213.png'
import coffee6 from '../../../public/images/Washed-Fancy-1.jpg'

export const beans = [
    {id:1, name: 'دانه های کنیایی', text: 'دانه های قهوه کنیایی به طرز عجیبی مورد علاقه و لذت مصرف کنندگان قهوه در سراسر جهان است.', image: coffee4 },
    {id:2, name: 'دانه برشته عربی', text: 'عربیکا از ارتفاعات جنوب غربی اتیوپی سرچشمه می گیرد و محبوب ترین نوع قهوه در سراسر جهان است.', image: coffee2 },
    {id:3, name: 'دانه های robusta', text: 'دانه های موسوم به روبوستا به طور قابل توجهی کافئین بیشتری نسبت به دانه های موسوم به عربیکا دارند.', image: coffee3 },
    {id:4, name: 'دانه های مکزیکی', text: 'این قهوه‌های مکزیکی خوب، به دلیل داشتن بدنی سبک، اغلب با طعمی آجیلی، شاید با رنگ‌های شکلاتی شناخته می‌شوند.', image: coffee5 },
    {id:5, name: 'عربیکا سبز', text: 'عربیکا دانه انتخابی برای اکثر ترکیبات قهوه غربی است و یک طعم کلاسیک مورد علاقه با کافئین کمتر است.', image: coffee6 },
    {id:6, name: 'دانه های قهوه', text: 'دانه های قهوه از گیاه قهوه به دست می آیند، گیاهی بوته مانند که در شرایط عالی می تواند بسیار بلند شود.', image: coffee1 },
]
const BeanSlider = () => {
    return (
        <>
      <Swiper breakpoints={{
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
        }
      }} 
      loop={false}
      navigation={true}
      autoplay={{
        delay: 4000,
      }} 
      modules={[Navigation, Autoplay]} 
      className="beansSlider text-center w-[90%] xl:w-[80%] my-16">
        {
          beans.map(bean => (
            <SwiperSlide key={bean.id} className='p-10 group'>
              <Link href='/'>
                <div className="overflow-hidden rounded-full">
                  <Image alt="bean" className="rounded-full group-hover:scale-150 duration-1000" src={bean.image} width={950} height={950}/>
                </div>
              <h1 className="text-black my-4 font-bold text-lg">{bean.name}</h1>
              </Link>
              <p className="text-gray-600 text-sm">{bean.text}</p>
            </SwiperSlide>
            )
          )
        }
      </Swiper>
    </>
    );
};

export default BeanSlider;