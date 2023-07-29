import { AiOutlineGoogle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { RiFacebookFill } from "react-icons/ri";
import logo from '../../public/images/coffee-logo.webp'

type RightMenuPropsType = {
    right: boolean,
    setRight: React.Dispatch<React.SetStateAction<boolean>>
}
const RightMenu = ({right, setRight}:RightMenuPropsType) => {
    return (
        <div className={`fixed  ${right ? 'right-0' : '-right-[400px]'} duration-1000 top-0 bottom-0 bg-zinc-900 p-14 text-center w-[400px] h-full z-40`}>
            <BsXLg className="hover:text-red-600 duration-200 cursor-pointer" onClick={()=> setRight(!right)} />
            <div className="flex flex-col justify-start items-center gap-10 mt-10">
                <Image className="w-36" src={logo} width={500} height={200} alt='logo'/>
                <h1 className="text-gray-200 leading-7">بال‌دار هوا، بالا، نهنگ‌های دانه‌ای به‌قدری خالی است که چنین است. ماهی می آورد نور مبارک، میان نور مجموعه و ما حکم می کنیم گفت فرمانروایی</h1>
                <div>
                    <Link href='mailto:example@gmail.com'>
                        <p className="hover:text-green-500 duration-200 cursor-pointer">example@gmail.com</p>
                    </Link>
                    <Link href='tel:09111111111'>
                        <p className="hover:text-green-500 duration-200 cursor-pointer">0911-111-1111</p>
                    </Link>
                </div>
                <div className="flex justify-center gap-3">
                    <BsInstagram className="cursor-pointer hover:text-orange-700 duration-200" />
                    <GrTwitter className="cursor-pointer hover:text-blue-600 duration-200" />
                    <RiFacebookFill className="cursor-pointer hover:text-blue-800 duration-200" />
                    <AiOutlineGoogle className="cursor-pointer hover:text-red-600 duration-200" />
                </div>
            </div>
        </div>
    );
};

export default RightMenu;