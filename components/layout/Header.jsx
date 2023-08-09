import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

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
import SearchedCard from '../header/SearchedCard'
import { TfiMenu } from "react-icons/tfi";
import axios from "axios";
import coffee from "../../public/images/coffee-logo.webp";
import { getProducts } from "../../redux/productsSlice";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searched, setSearched] = useState('');
  const [navbar, setNavbar] = useState(false);
  const { data: session, status } = useSession();
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/products");
        dispatch(getProducts(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const all_products = useSelector((state) => state.products.items);

  const searchedProducts = all_products.filter((product) =>
    product.name.toLowerCase().includes(searched.toLowerCase())
  );

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
        className={`p-5 md:p-10 fixed w-full z-30 duration-200 ${
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
                  className={`absolute font-extrabold ${
                    products.length === 0 ? "text-red-600" : "text-green-600"
                  }
                   -top-3 -right-2`}
                >
                  {products.length}
                </span>
              </div>
              <MenuCart
                products={products}
                setToggle={setToggle}
                toggle={toggle}
              />
            </div>
            {status === "loading" ? (
              <div>Loading...</div>
            ) : session ? (
              <div
                onClick={() => setOpen(!open)}
                className="relative flex italic items-center gap-3 text-gray-700 hover:text-[#045868] duration-300 cursor-pointer"
              >
                <Image
                  className="rounded-full w-[25px] md:w-[35px] h-[25px] md:h-[35px] ring ring-[#935328]"
                  alt="account"
                  width={35}
                  height={35}
                  src={session.user.image}
                />
                <h3 className=" font-bold text-white text-sm md:text-base pt-2">
                  {session.user.name.split(" ")[0]}
                </h3>
                <div
                  className={`absolute overflow-hidden top-10 ${
                    !open && "hidden"
                  } bg-white shadow-md w-52 rounded-md`}
                >
                  <Link href="/">
                    <h3 className="text-gray-700 py-1 pr-3 hover:text-gray-400 hover:bg-gray-50 duration-300 cursor-pointer">
                      خانه
                    </h3>
                  </Link>
                  <Link href="/orders">
                    <h3 className="text-gray-700 py-1 pr-3 hover:text-gray-400 hover:bg-gray-50 duration-300 cursor-pointer">
                    سابقه خرید شما
                    </h3>
                  </Link>
                  <h3
                    onClick={() => signOut()}
                    className="text-red-700 py-1 pr-3 hover:text-red-800 hover:bg-gray-50 duration-300 cursor-pointer"
                  >
                    خروج
                  </h3>
                </div>
              </div>
            ) : (
              <Link href="/login">
                <HiUser className="text-2xl hover:text-green-400 duration-300 cursor-pointer" />
              </Link>
            )}
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
                className="w-full h-full text-lg text-gray-900 outline-none p-2 rounded-md border bg-white border-gray-200 focus:border-blue-500"
                type="text"
                value={searched}
                onChange={(e) => setSearched(e.target.value)}
              />
              <RiSearch2Line className="absolute left-2 top-[14px] text-lg  duration-200 text-gray-600" />
            </div>
            {searchedProducts.length > 0 && (
              <div className="rounded-md mt-3 max-h-[450px] overflow-y-scroll shadow-lg">
                {searchedProducts?.map((item) => (
                  <SearchedCard setOpenSearch={setOpenSearch} key={item._id} {...item}/>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <LeftMenu left={left} setLeft={setLeft} />
      <RightMenu right={right} setRight={setRight} />
    </header>
  );
};

export default Header;
