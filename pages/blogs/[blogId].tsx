import React, { createContext } from "react";

import BlogDetails from "@/components/blogs/BlogDetails";
import Head from "next/head";
import axios from "axios";

export const BlogContext = createContext();

const blogDetails = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content="Best Coffee for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BlogContext.Provider value={blog}>
        <BlogDetails />
      </BlogContext.Provider>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/blogs/${params.blogId}`
  );

  return {
    props: {
      blog: res.data,
    },
  };
};

export default blogDetails;
