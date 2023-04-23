import React, { createContext } from "react";

import DesReview from "@/components/products/product/descReview/DesReview";
import HeaderTemplate from "@/components/shared/HeaderTemplate";
import SliderInfo from "@/components/products/product/productInfo/SliderInfo";
import Trending from "@/components/home/trending/Trending";
import axios from "axios";

export const ProductContext = createContext();
const ProductDetails = ({ product }) => {
  
  return (
      <div className="pb-10">
        <HeaderTemplate
          background="/images/top-view-from-afar-christmas-tree-branches-cup-black-tea-cinnamon-sticks-wooden-board-christmas-spruce-branches-tree-toys-white-notebook-lemon.jpg"
          header="اطلاعات محصول"
        />
        <ProductContext.Provider value={product}>
          <SliderInfo  />
          <DesReview  />
          <Trending  related = {true} />
        </ProductContext.Provider>
      </div>
  );
  
};

export default ProductDetails;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.productId}`
  );

  return {
    props: {
      product: res.data,
    },
  };
};
