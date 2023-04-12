import React, { useState } from 'react';

import { AiFillStar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import Image from 'next/image';
import Link from "next/link";
import bg from '../../public/images/foter.webp'
import cup from '../../public/images/footer-img.webp'
import logo from '../../public/images/coffee-logo.webp'
import logo1 from '../../public/images/logo-1.webp'
import logo2 from '../../public/images/logo-2.webp'
import logo3 from '../../public/images/logo-3.webp'
import logo4 from '../../public/images/logo-5.webp'
import logo5 from '../../public/images/logo-6.webp'

const list = [
    {id:1,type: 'fast' ,title: 'لینک های سریع', links:[{id:1, name:'درباره شرکت'}, {id:2, name:'نظر مشتریان'}, {id:3, name:'جوایز'}, {id:4, name:'تماس با ما'}]},
    {id:2,type: 'top' ,title: 'موضوعات برتر', links:[{id:1, name:'عربیکا سبز'}, {id:2, name:'عربیکا برشته'}, {id:3, name:'ربوستا'}, {id:4, name:'دانه های کنیایی'}, {id:5, name:'دانه های مکزیکی'}]},
    {id:3,type: 'account' ,title: 'حساب من', links:[{id:1, name:'سفارش من'}, {id:2, name:'راهنمایی'}, {id:3, name:'قوانین بازگشت کالا'}, {id:4, name:'قوانین و ضوابط'}, {id:5, name:'گزارش خطا'}, {id:6, name:'بلاگ'}]},
    {id:4,type: 'usefull' ,title: 'لینک های مفید', links:[{id:1, name:'درباره ما'}, {id:2, name:'تماس با ما'}, {id:3, name:'FAQ'}, {id:4, name:'قوانین پرداخت'}, {id:5, name:'سیاست حفظ حریم خصوصی'}, {id:6, name:'سیاست خرید'}, {id:7, name:'نقشه'}]}
]

export const logos = [
    {id:1, image: logo1},
    {id:2, image: logo2},
    {id:3, image: logo3},
    {id:4, image: logo5},
    {id:5, image: logo4},
]
const Footer = () => {
    const [drop, setDrop] = useState('');
    return (
        <footer style={{backgroundImage: `url(${bg.src})`}} className='bg-center relative bg-cover bg-no-repeat h-[110vh] lg:h-[75vh]'>
            <Image src={cup} width={200} height={170} alt='cup' className='absolute xl:w-64 xl:top-[-120px] z-10 hidden xl:block'/>
            <div className="absolute inset-0 bg-black opacity-80 pt-14 lg:py-14">
                <div className="md:w-[800px] lg:w-[90%] xl:w-[80%] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-10 my-10">
                        <div className="text-center lg:w-[20%] flex flex-col gap-4 px-4">
                            <Image src={logo} className='w-32 mx-auto mb-4' width={250} height={100} alt='logo'/>
                            <p>
                                لباس‌های باکیفیت از مواد درجه یک برای ساختن لباسی استفاده می‌کنند که مفتخرید آن را متعلق به خودتان بنامید.
                            </p>
                            <h1 className="font-bold text-lg">رتبه بندی کاربران</h1>
                            <div className="flex justify-center gap-1 text-lg text-teal-600">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div>
                                <span className="text-teal-500">(5.0) </span><span>براساس 3500 نظر</span>
                            </div>
                            <div className="flex justify-center text-xl gap-5">
                                <FaLinkedinIn className="hover:text-teal-500 duration-200 cursor-pointer"/>
                                <FaTiktok className="hover:text-teal-500 duration-200 cursor-pointer"/>
                                <ImFacebook className="hover:text-teal-500 duration-200 cursor-pointer"/>
                                <ImTwitter className="hover:text-teal-500 duration-200 cursor-pointer"/>
                            </div>
                        </div>
                        <div className="px-4 lg:w-[80%] lg:hidden">
                            {
                                list.map(item => 
                                        <div key={item.id}>
                                            <div onClick={() => setDrop(item.type)} className={`flex justify-between items-center ${drop === item.type && 'text-green-500'} cursor-pointer py-2 border-b border-gray-500`}>
                                                <h1 className="text-lg font-bold">{item.title}</h1>
                                                <BiChevronDown className={`${drop === item.type && 'rotate-180 duration-200'}`}/>
                                            </div>
                                            <ul className={`p-3 ${drop === item.type ? 'flex flex-col gap-2' : 'hidden'}`}>
                                                {
                                                    item.links.map(link => 
                                                        <Link href='/' className="hover:text-teal-500 text-gray-300 duration-200 w-fit" key={link.id}>{link.name}</Link>
                                                        )
                                                }
                                            </ul>
                                        </div>
                                    )
                            }
                        </div>
                        <div className="px-4 lg:w-[80%] hidden lg:flex justify-between">
                            {
                                list.map(item => 
                                        <div key={item.id}>
                                            <div  className='flex justify-between items-center  py-2'>
                                                <h1 className="text-lg font-bold">{item.title}</h1>
                                            </div>
                                            <ul className='py-3 flex flex-col gap-2'>
                                                {
                                                    item.links.map(link => 
                                                        <Link href='/' className="hover:text-teal-500 text-gray-300 duration-200 w-fit" key={link.id}>{link.name}</Link>
                                                        )
                                                }
                                            </ul>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                    <div className="border-t py-4 mt-10">
                        <p className="text-center mb-2">کلیه حقوق محفوظ است.</p>
                        <div className="flex justify-center gap-2">
                            {
                                logos.map(logo => 
                                    <Image key={logo.id} alt='logo' src={logo.image} width={60} height={40} className='rounded-md'/>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;