import React, { createContext } from "react";

import Blog from "@/models/Blog";
import BlogDetails from "@/components/blogs/BlogDetails";
import Head from "next/head";

export const BlogContext = createContext(null);

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
  const blog = await Blog.findOne({_id:params.blogId});

  return {
    props: {
      blog: JSON.parse(JSON.stringify(blog)),
    },
  };
};

export default blogDetails;
