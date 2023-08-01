import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Post from "../home/blogs/Post";
import React from "react";

const PostContent = () => {
  return (
    <div className="col-span-1 lg:col-span-8 lg:order-1">
      <Post />
      <Comments />
      <CommentForm />
    </div>
  );
};

export default PostContent;
