import React, { createContext } from "react";

import HeaderTemplate from "@/components/shared/HeaderTemplate";
import Product from "@/models/Product";
import Products from "../../components/products/productsList/Products";
import dbConnect from "@/lib/db";

export const ProductsContext = createContext([]);
const index = ({ productsList }) => {
  return (
    <div>
      <HeaderTemplate
        background="/images/top-view-coffee-accessories-table.jpg"
        header="محصولات"
      />
      <ProductsContext.Provider value={productsList}>
        <Products />
      </ProductsContext.Provider>
    </div>
  );
};
export const getServerSideProps = async ({ query }) => {
  dbConnect();
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 14;
  const skip = (page - 1) * limit;

  const products = await Product.find({}).skip(skip).limit(limit);
  
  return {
    props: {
      productsList: JSON.parse(JSON.stringify(products)),
    },
  };
};
export default index;
