import React, { useState } from "react";

import Blog from "../home/blogs/Blog";
import HeaderTemplate from "../shared/HeaderTemplate";
import { IoIosArrowBack } from "react-icons/io";
import Pagination from "../products/productsList/Pagination";
import PostSidebar from "../shared/PostSidebar";

const Blogs = ({ blogsList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(4);
  const [searched, setSearched] = useState("");
  const filteredBlogs = blogsList.filter((blog) =>
    blog.title.toLowerCase().includes(searched.toLowerCase())
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <HeaderTemplate
        background="/images/beautiful-shot-cup-cappuccino-with-white-heart-pattern-wooden-table.jpg"
        header="لیست بلاگ"
      />
      <div className="w-[90%] md:w-[700px] lg:w-[920px] xl:w-[1200px] gap-10 mx-auto py-14 grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:order-1  lg:col-span-8 flex flex-col">
          <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-y-14">
            {currentBlogs?.map((blog) => (
              <Blog
                key={blog._id}
                id={blog._id}
                image={blog.image}
                title={blog.title}
                text={blog.content}
                date={blog.date}
                blogs={true}
              />
            ))}
          </div>
          <Pagination
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            pageNumbers={pageNumbers}
            totalPages={totalPages}
          />
        </div>
        <PostSidebar
          searched={searched}
          setSearched={setSearched}
          items={blogsList}
        />
      </div>
    </div>
  );
};

export default Blogs;
