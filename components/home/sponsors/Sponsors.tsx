import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import Image from "next/image";
import React from "react";
import sponsor1 from '../../../public/images/clients-img-1.png';
import sponsor2 from '../../../public/images/clients-img-2-hover.png';
import sponsor3 from '../../../public/images/clients-img-3-hover.png';
import sponsor4 from '../../../public/images/clients-img-4-hover.png';
import sponsor5 from '../../../public/images/clients-img-5-hover.png';
import sponsor6 from '../../../public/images/clients-img-6-hover.png';

const sponsors = [
    {id:1,  image: sponsor1 },
    {id:2,  image: sponsor2 },
    {id:3,  image: sponsor3 },
    {id:4,  image: sponsor4 },
    {id:5,  image: sponsor5 },
    {id:6,  image: sponsor6 },
]
const Sponsors = () => {
    return (
        <>
            <Swiper breakpoints={{
                350: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                  },
          
                  580: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                  },
          
                  768: {
                    spaceBetween: 10,
                    slidesPerView: 4,
                  },
          
                  998: {
                    spaceBetween: 10,
                    slidesPerView: 5,
                  }
                }}
                loop={false}
                autoplay={{
                    delay: 4000,
                }} 
                spaceBetween={10}
                modules={[ Autoplay]} 
                className="w-[90%] xl:w-[70%] my-16">
                    {
                    sponsors.map(sponsor => (
                            <SwiperSlide key={sponsor.id}>
                              <Image src={sponsor.image} width={300} height={100} alt='sponsor' className="hover:opacity-80 duration-200 cursor-pointer"/>  
                            </SwiperSlide>
                        )
                    )}
            </Swiper>
        </>
    );
};

export default Sponsors;