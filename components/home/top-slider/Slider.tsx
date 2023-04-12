import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Keyboard, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import leaf from '../../../public/images/slider-separator-img.png'
import logo from '../../../public/images/h1-slider-img-1.png'
import slide1 from '../../../public/images/coffee-concept-with-differents-types-coffee-coffee-beans-milk-cinnamon-sticks-grey-background-flat-lay.jpg'
import slide2 from '../../../public/images/autumn-concept-background-with-autumn-leaves-coffee-served-cup-dark-background.jpg'
import slide3 from '../../../public/images/home-1-slider-image-1.jpg'

const slides = [
    {id:1, title: 'کارخانه قهوه', description: 'ما در coffee به کیفیت ترکیبات چای خود که از بهترین فروشگاه های چای در سراسر جهان تهیه می شود، افتخار می کنیم. ترکیب دستی در انگلستان و تحت تأثیر طراحی اسکاندیناوی. این یک مارک چای است که نباید در کمد شما قفل شود. هر ترکیب چای شخصیت خاص خود را دارد، امروز خود را پیدا کنید!', image: slide1 },
    {id:2, title: 'استادان قهوه', description: 'ما در گلاسکو متولد و بزرگ شده ایم. کسب و کار ما در سال 1864 در کلاید تأسیس شد و ما هنوز هم اینجا هستیم. ما مفتخریم که قهوه استثنایی را برای هزاران کافه و مشاغل مهمان نوازی در سراسر بریتانیا و ایرلند برشته کنیم.', image: slide2 },
    {id:3, title: 'بهشت قهوه', description: 'در دسامبر 2001، این شرکت در بازار سرمایه گذاری جایگزین بورس لندن، اولین تجارت مستقر در لهستان که این کار را انجام داد، فهرست شد. ، و لتونی در همان سال. سپس این شرکت هفت فروشگاه موجود Coffee Nation را خریداری کرد و به ریگا گسترش یافت. تا ژانویه 2008، این گروه دارای 81 فروشگاه در شش کشور است', image: slide3 }
] 

const Slider = () => {
    return (
        <>
        <Swiper
          cssMode={true}
          pagination={{
            clickable: true
          }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 4000,
          }}
          modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
          className="top-swiper"
        >
            {
                slides.map(slide => (
                      <SwiperSlide key={slide.id} style={{backgroundImage: `url(${slide.image.src})`, height:'100vh'}} className=" relative bg-center bg-cover bg-no-repeat w-full">
                            <div className="absolute bg-black inset-0 opacity-40"></div>
                            <div className="flex flex-col items-center justify-center absolute inset-0 gap-16 md:gap-12 lg:pt-32 lg:pl-64">
                                <Image alt="slide" src={logo} width={130} height={130}/>
                                <h1 className="text-6xl font-semibold">{slide.title}</h1>
                                <Image alt="leaf" src={leaf} width={150} height={50}/>
                                <p className="hidden md:block md:text-xl w-[80%] leading-9 ">{slide.description}</p>
                                <Link href='/' className="border border-y-yellow-100 font-bold py-3 px-5 hover:bg-yellow-600 duration-200 hover:border-yellow-600 text-2xl">خرید کن</Link>
                            </div>
                      </SwiperSlide> 
                ))
            }
        </Swiper>
      </>
    );
};

export default Slider;