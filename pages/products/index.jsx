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
export const getServerSideProps = async () => {
  dbConnect();
  const products = await Product.find({});

  return {
    props: {
      productsList: JSON.parse(JSON.stringify(products)),
    },
  };
};
export default index;
