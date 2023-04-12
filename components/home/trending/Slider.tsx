import "swiper/css";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Product from "./Product";
import React from "react";
import coffee1 from '../../../public/images/1-min_510X510_crop_center.webp';
import coffee11 from '../../../public/images/5-min_2be9cf66-7d48-419d-ac56-0a3325da6f6f_510X510_crop_center.webp';
import coffee2 from '../../../public/images/10-min_510X510_crop_center.webp';
import coffee22 from '../../../public/images/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.webp';
import coffee3 from '../../../public/images/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.webp';
import coffee33 from '../../../public/images/10-min_510X510_crop_center.webp';
import coffee4 from '../../../public/images/8-min_b82d3683-3973-4400-a66e-446f7bb06898_510X510_crop_center.webp';
import coffee44 from '../../../public/images/12-min_510X510_crop_center.webp';
import coffee5 from '../../../public/images/2-min_a948a515-5b21-4921-80a6-260a5645ea2b_510X510_crop_center.webp';
import coffee55 from '../../../public/images/14-min_510X510_crop_center.webp';
import coffee6 from '../../../public/images/11-min_510X510_crop_center.webp';
import coffee66 from '../../../public/images/6-min_8b86823a-2402-4489-b2ed-fee2fe11d4bb_510X510_crop_center.webp';
import coffee7 from '../../../public/images/6-min_8b86823a-2402-4489-b2ed-fee2fe11d4bb_510X510_crop_center.webp';
import coffee77 from '../../../public/images/3-min_0b3892fe-5995-4152-b2e4-8fbf8ec9d0b3_510X510_crop_center.webp';
import coffee8 from '../../../public/images/12-min_510X510_crop_center.webp';
import coffee88 from '../../../public/images/8-min_b82d3683-3973-4400-a66e-446f7bb06898_510X510_crop_center.webp';

export const products = [
    {id:1, price: 2400, off: 2100, percent: -12 ,name: 'کافه 1', image: coffee4, hoveredImage: coffee44 },
    {id:2, price: 2400, off: 2100, percent: -12 ,name: 'کافه 2', image: coffee2, hoveredImage: coffee22 },
    {id:3, price: 2400, off: 2100, percent: -12 ,name: 'کافه 4', image: coffee1, hoveredImage: coffee11 },
    {id:4, price: 2400, off: 2100, percent: -12 ,name: 'کافه 5', image: coffee5, hoveredImage: coffee55 },
    {id:5, price: 2400, off: 2100, percent: -12 ,name: 'کافه 3', image: coffee3, hoveredImage: coffee33 },
    {id:6, price: 2400, off: 2100, percent: -12 ,name: 'کافه 6', image: coffee6, hoveredImage: coffee66 },
    {id:7, price: 2400, off: 2100, percent: -12 ,name: 'کافه 7', image: coffee7, hoveredImage: coffee77 },
    {id:8, price: 2400, off: 2100, percent: -12 ,name: 'کافه 8', image: coffee8, hoveredImage: coffee88 },
]
const Slider = () => {
    return (
        <>
            <Swiper breakpoints={{
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
                  }
                }}
                loop={false}
                autoplay={{
                    delay: 4000,
                }} 
                navigation={true}
                modules={[ Autoplay,Navigation]} 
                className="SliderTrending w-[90%]  my-16">
                    {
                    products.map(product => (
                        <SwiperSlide key={product.id} className='relative group bg-white shadow-md hover:shadow-lg rounded-lg'>
                            <Product 
                                image={product.image}
                                hover={product.hoveredImage}
                                price={product.price}
                                off={product.off}
                                name={product.name}
                                percent={product.percent}
                            />
                        </SwiperSlide>
                        )
                    )}
            </Swiper>
        </>
    );
};

export default Slider;