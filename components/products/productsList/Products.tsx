import React, { useContext, useState } from "react";

import Pagination from "./Pagination";
import Product from "@/components/home/trending/Product";
import { ProductsContext } from "@/pages/products";
import ProductsSidebar from './ProductsSidebar'
import mainBg from "../../../public/images/Pattern.webp";

type ProductType = {
  _id: number;
  image: string;
  price: number;
  off: number;
  name: string;
};

const Products = () => {
  const productsList = useContext(ProductsContext);
  const [sortOption, setSortOption] = useState<string>('all');
  const [category, setCategory] = useState<string>('');
  const [searched, setSearched] = useState('');
  const filteredProducts = productsList.filter(product => product.name.toLowerCase().includes(searched.toLowerCase()));
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let categoryProducts = filteredProducts;
if (category) {
  categoryProducts = filteredProducts.filter(
    (product) => product.category === category
  );
}

let sortedProducts = categoryProducts;
if (sortOption === 'featured') {
  sortedProducts = categoryProducts.filter((product) => product.featured);
} else if (sortOption === 'expensive') {
  sortedProducts = categoryProducts.sort((a, b) => b.price - a.price);
} else if (sortOption === 'cheap') {
  sortedProducts = categoryProducts.sort((a, b) => a.price - b.price);
}

const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      style={{ backgroundImage: `url(${mainBg.src})` }}
      className="bg-cover py-20 lg:px-10 bg-no-repeat bg-center"
    >
      <div className="lg:w-[95%] mx-auto flex flex-col lg:flex-row lg:justify-center">
        <div className="w-[90%] lg:w-[75%] mx-auto">
          <div className="mx-auto w-fit mb-6">
            <label className="font-semibold text-gray-500" htmlFor="sort">
              دسته بندی براساس:
            </label>
            <select
              defaultValue="all"
              name="sort"
              id="sort"
              className="bg-white text-black font-bold pr-auto mr-2 pr-4 outline-none focus:shadow-md w-[100px] text-center rounded-lg"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="all">همه</option>
              <option value="featured">برگزیده ها</option>
              <option value="expensive">گران ترین</option>
              <option value="cheap">ارزان ترین</option>
            </select>
          </div>
          <div>
            <div className="flex relative flex-col gap-4 justify-center items-center sm:flex-row sm:flex-wrap">
              {currentProducts.map((product: ProductType) => (
                <Product key={product._id} product={product} separate />
              ))}
            </div>
            <Pagination
              handlePageChange={handlePageChange}
              currentPage={currentPage}
              pageNumbers={pageNumbers}
              totalPages={totalPages}
            />
          </div>
        </div>
        <ProductsSidebar category={category} setCategory={setCategory} searched={searched} setSearched={setSearched} productsList={productsList} />
      </div>
    </div>
  );
};

export default Products;
