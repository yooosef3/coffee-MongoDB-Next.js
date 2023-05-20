import Blogs from "@/components/blogs/Blogs";
import Head from "next/head";
import React from "react";
import axios from "axios";

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

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/blogs");

  return {
    props: {
      blogsList: res.data,
    },
  };
};

export default index;
