import MenuProduct from './MenuProduct';
import React from "react";
import { removeItem } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

const MenuCartList = ({ products }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (item: {}) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="overflow-y-auto scrollbar-thin">
      {products.length > 0 &&
        products?.map((product) => (
          <MenuProduct key={product._id} {...product} handleRemoveItem={handleRemoveItem}/>
        ))}
    </div>
  );
};

export default MenuCartList;
