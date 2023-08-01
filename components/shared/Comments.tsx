import React, { useContext } from "react";

import { BlogContext } from "@/pages/blogs/[blogId]";
import Comment from "./Comment";

const Comments = () => {
  const { comments } = useContext(BlogContext);
  return (
    <div className="py-10 border-b border-slate-300">
      <h1 className="text-black font-bold text-2xl mb-5">{comments.length} نظر</h1>
      <div className="bg-white rounded-md shadow-md">
        {comments?.map((comment) => (
          <Comment key={comment._id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
