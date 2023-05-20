import Aroma from "./Aroma";
import Collections from "./Collections";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Pages from "./Pages";
import React from 'react';
import Shop from "./Shop";

type NavbarPropType = {
    navbar: boolean
}
const Menu = ({navbar}:NavbarPropType) => {
    return (
        <menu className={`hidden lg:block relative ${!navbar && 'mt-10'}`}>
            <ul className={`${navbar ? 'hidden' : 'flex justify-center gap-10'}`}>
                <li className="hover:text-green-400 duration-150 cursor-pointer">
                    <Link className="font-bold text-xl" href='/'>خانه</Link>
                </li>
                <Collections />
                <Aroma />
                <li className="hover:text-green-400 duration-150 cursor-pointer">
                    <Link className="font-bold text-xl" href='/blogs'>بلاگ</Link>
                </li>
                <Shop />
                <Pages />
            </ul>
        </menu>
    );
};

export default Menu;