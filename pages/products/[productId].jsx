import React, { createContext } from "react";

import Comment from "@/models/Comment";
import DesReview from "@/components/products/product/descReview/DesReview";
import HeaderTemplate from "@/components/shared/HeaderTemplate";
import Product from "@/models/Product";
import SliderInfo from "@/components/products/product/productInfo/SliderInfo";
import Trending from "@/components/home/trending/Trending";

export const ProductContext = createContext();
const ProductDetails = ({ product, products, comments }) => {
  
  return (
      <div className="pb-1">
        <HeaderTemplate
          background="/images/top-view-from-afar-christmas-tree-branches-cup-black-tea-cinnamon-sticks-wooden-board-christmas-spruce-branches-tree-toys-white-notebook-lemon.jpg"
          header="اطلاعات محصول"
        />
        <ProductContext.Provider value={{product, products, comments}}>
          <SliderInfo  />
          <DesReview  />
        </ProductContext.Provider>
      </div>
  );
  
};

export default ProductDetails;

export const getServerSideProps = async ({ params }) => {
  const product = await Product.findOne({_id:params.productId});
  const products = await Product.find({});
  const comments = await Comment.find({productId:product._id});
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      products: JSON.parse(JSON.stringify(products)),
      comments: JSON.parse(JSON.stringify(comments)),
    },
  };
};
