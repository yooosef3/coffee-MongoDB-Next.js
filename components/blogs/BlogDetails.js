import React, { useContext } from "react";

import { BlogContext } from "@/pages/blogs/[blogId]";
import HeaderTemplate from "../shared/HeaderTemplate";
import PostContent from "../shared/PostContent";
import PostSidebar from "../shared/PostSidebar";

const BlogDetails = () => {
  const { blogs, blog } = useContext(BlogContext);

  return (
    <div>
      <HeaderTemplate
        background="/images/top-view-tasty-coffee-with-coffee-beans.jpg"
        header={blog.title}
      />
      <div className="w-[90%] md:w-[700px] lg:w-[920px] xl:w-[1200px] gap-10 mx-auto py-14 grid grid-cols-1 lg:grid-cols-12">
        <PostContent />
        <PostSidebar search={false} items={blogs} />
      </div>
    </div>
  );
};

export default BlogDetails;
