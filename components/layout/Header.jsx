import React, { useEffect, useState } from "react";

import { BsXLg } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { HiUser } from "react-icons/hi";
import Image from "next/image";
import LeftMenu from "../header/LeftMenu";
import Link from "next/link";
import Menu from "../header/Menu";
import MenuCart from "../header/MenuCart";
import { RiSearch2Line } from "react-icons/ri";
import RightMenu from "../header/RightMenu";
import { TfiMenu } from "react-icons/tfi";
import coffee from "../../public/images/coffee-logo.webp";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searched, setSearched] = useState("");
  const [navbar, setNavbar] = useState(false);

  const products = useSelector((state) => state.cart.items);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header>
      <div
        className={`p-5 md:p-10 fixed w-full z-20 duration-200 ${
          navbar ? "bg-black bg-opacity-80 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-4">
          <div className="flex pb-4 md:pb-0 justify-between md:justify-end border-b md:border-b-0 md:gap-4 border-gray-600  md:w-[60%] lg:w-[55%] 2xl:w-[52%]">
            {openSearch ? (
              <BsXLg
                onClick={() => setOpenSearch(false)}
                className="cursor-pointer text-2xl hover:text-red-600 duration-200"
              />
            ) : (
              <RiSearch2Line
                onClick={() => setOpenSearch(true)}
                className="cursor-pointer text-2xl hover:text-green-400 duration-200"
              />
            )}
            <Link href="/" className="cursor-pointer md:order-first md:ml-auto">
              <Image
                alt="logo"
                className=" w-28 "
                src={coffee}
                height={300}
                width={400}
              />
            </Link>
            <TfiMenu
              className="cursor-pointer text-2xl xl:hidden hover:text-green-400 duration-200"
              onClick={() => setLeft(!left)}
            />
          </div>
          <div className="flex justify-between items-center md:justify-start md:w-[20%] md:gap-4">
            <CgMenuRight
              onClick={() => setRight(!right)}
              className="cursor-pointer text-2xl hover:text-green-400 duration-200"
            />
            <div>
              <div className="relative" onClick={() => setToggle(!toggle)}>
                <FiShoppingCart className="cursor-pointer text-2xl hover:text-green-400 duration-200" />
                <span
                  className={`absolute font-extrabold ${products.length === 0 ? 'text-red-600' : 'text-green-600'}
                   -top-3 -right-2`}
                >
                  {products.length}
                </span>
              </div>
              <MenuCart products={products} toggle={toggle} />
            </div>
            <div>
              <HiUser
                onClick={() => setOpen(!open)}
                className="cursor-pointer text-2xl hover:text-green-400 duration-200"
              />
              <ul
                className={`fixed ${
                  open ? "flex flex-col" : "hidden"
                } left-0 md:left-auto p-4 gap-2 bg-white rounded-lg `}
              >
                <li>
                  <Link href="/login">
                    <p className="text-gray-400 hover:text-green-500 font-bold duration-200">
                      ورود
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <p className="text-gray-400 hover:text-green-500 font-bold duration-200">
                      ثبت نام
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Menu navbar={navbar} />
        {openSearch && (
          <div
            className={`absolute w-[90%] lg:w-[30%] top-[130px] ${
              navbar ? "lg:top-[120px]" : "lg:top-[150px]"
            } right-6 lg:left-6 lg:right-auto shadow-lg`}
          >
            <div className="relative">
              <input
                placeholder="جستجوی محصول"
                className="w-full h-full text-lg outline-none p-2 rounded-md border bg-white border-gray-200 focus:border-blue-500"
                type="text"
                value={searched}
                onChange={(e) => setSearched(e.target.value)}
              />
              <Link href="/">
                <RiSearch2Line className="absolute left-2 top-[14px] text-lg hover:text-green-500 duration-200 cursor-pointer text-gray-600" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <LeftMenu left={left} setLeft={setLeft} />
      <RightMenu right={right} setRight={setRight} />
    </header>
  );
};

export default Header;
