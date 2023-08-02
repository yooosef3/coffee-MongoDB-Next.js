import Blog from "../../../../models/Blog";
import Comment from "../../../../models/Comment";
import dbConnect from "../../../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const blogId = req.query.blogId;

    const blog = await Blog.findOne({ _id: blogId });

    const { author, email, text } = req.body;

    const comment = await Comment.create({
      postId: blog._id, 
      author,
      email,
      text,
    });

    res.status(201).json({ success: true, data: comment });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
