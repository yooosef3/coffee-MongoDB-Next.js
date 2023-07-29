import Blog from "@/models/Blog";
import Blogs from "@/components/blogs/Blogs";
import Head from "next/head";
import React from "react";
import axios from "axios";
import dbConnect from "@/lib/db";

const index = ({ blogsList }) => {
  return (
    <>
      <Head>
        <title>لیست مقالات</title>
        <meta name="description" content="Best Coffee for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Blogs blogsList={blogsList} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  dbConnect();
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 9;
  const skip = (page - 1) * limit;

  const blogs = await Blog.find({}).skip(skip).limit(limit);

  return {
    props: {
      blogsList: JSON.parse(JSON.stringify(blogs)),
    },
  };
};

export default index;
