import React, { createContext } from "react";

import Blog from "@/models/Blog";
import BlogDetails from "@/components/blogs/BlogDetails";
import Comment from "@/models/Comment";
import Head from "next/head";

export const BlogContext = createContext(null);

const blogDetails = ({ blog, blogs, comments }) => {
  console.log(comments);
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content="Best Coffee for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BlogContext.Provider value={{ blog, blogs }}>
        <BlogDetails />
      </BlogContext.Provider>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const blog = await Blog.findOne({ _id: params.blogId });
  const blogs = await Blog.find({});
  const comments = await Comment.find({ postId: blog._id });
  const comment = new Comment({
    postId: blog._id,
    author: "John Doe",
    text: "Great post!",
  });

  await comment.save();

  await Blog.updateOne({ _id: blog._id }, { $push: { comments: comment._id } });

  return {
    props: {
      blog: JSON.parse(JSON.stringify(blog)),
      blogs: JSON.parse(JSON.stringify(blogs)),
      comments: JSON.parse(JSON.stringify(comments)),
    },
  };
};

export default blogDetails;
