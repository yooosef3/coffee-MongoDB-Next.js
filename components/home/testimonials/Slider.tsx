import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import Image from "next/image";
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import person1 from '../../../public/images/1_4aa644b7-d2b5-4d00-87cf-0263705c8fb1.webp';
import person2 from '../../../public/images/2_7f8f0a6d-229c-43eb-b3d6-f3bcef7300d5.webp';
import person3 from '../../../public/images/3_9dfa4fb0-9981-4b70-955d-1c1bf9237e46.webp';
import person4 from '../../../public/images/4_d16391b1-158b-4929-9e68-bffcd980e911.webp';
import person5 from '../../../public/images/5_793a4766-eabb-4449-97cb-272d9c726aae.webp';
import person6 from '../../../public/images/6_20f3d5be-54d9-4527-88d5-6357c1358080.webp';

const testimonials = [
    {id:1, role: 'آشپز' ,name: 'علی کریمی', image: person1, text: 'عالی هستید, من همیشه با دوستانم از اینجا خرید میکنم' },
    {id:2, role: 'مدیر بانک' ,name: 'آیدا صارمی', image: person2, text: 'به جرات میشه گفت کیفیت محصولات شما را تا حالا جایی ندیدم' },
    {id:3, role: 'برنامه نویس' ,name: 'آرش کریمی', image: person3, text: 'خیلی عالیه, وقتی مهمون دارم اولین جایی که به ذهنم میرسه همین جاست' },
    {id:4, role: 'پزشک' ,name: 'نیما کریمی', image: person4, text: 'فوق العاده در یک کلام, پیشنهادم به همه همین فروشگاه هست, شک نکنید' },
    {id:5, role: 'وکیل' ,name: 'پریسا راد', image: person5, text: 'بهترین هستید,  رفتار پرسنل شما هم عالی هست, مشتری مدار هستید' },
    {id:6, role: 'حسابدار' ,name: 'شایان منفرد', image: person6, text: 'هیچ وقت همجین قهوه های خوشمزه ای رو نخورده بودم, سپاسگذارم' }
]
const Slider = () => {
    return (
        <>
            <Swiper breakpoints={{
                350: {
                    spaceBetween: 10,
                    slidesPerView: 1,
                  },
          
                  640: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                  },
                  
                  998: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                  }
                }}
                loop={false}
                autoplay={{
                    delay: 4000,
                }} 
                spaceBetween={10}
                modules={[ Autoplay]} 
                className="SliderTestimonials w-[90%] xl:w-[67%]">
                    {
                    testimonials.map(testimonial => (
                        <SwiperSlide key={testimonial.id}>
                            {
                                <div className="mx-5">
                                    <div className="flex items-center gap-6 mb-10 ">
                                        <div className="relative">
                                            <Image src={testimonial.image} width={100} height={100} alt='person' className="rounded-full"/>
                                            <RiDoubleQuotesL  className="absolute bottom-2 text-xl bg-green-500 rounded-full"/>
                                        </div>
                                        <div>
                                            <h1 className="font-bold text-xl">{testimonial.name}</h1>
                                            <span className="text-green-500">{testimonial.role}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{testimonial.text}</p>
                                    </div>
                                </div>
                            }
                        </SwiperSlide>
                        )
                    )}
            </Swiper>
        </>
    );
};

export default Slider;