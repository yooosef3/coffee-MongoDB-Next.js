import React, { createContext } from "react";

import HeaderTemplate from "@/components/shared/HeaderTemplate";
import Products from "../../components/products/productsList/Products";
import axios from "axios";

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
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      productsList: res.data,
    },
  };
};
export default index;
