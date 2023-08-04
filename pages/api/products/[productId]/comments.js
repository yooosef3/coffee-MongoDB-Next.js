import Comment from "../../../../models/Comment";
import Product from "../../../../models/Product";
import dbConnect from "../../../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const productId = req.query.productId;

    const product = await Product.findOne({ _id: productId });

    const { author, email, text, title } = req.body;

    const comment = await Comment.create({
      productId: product._id, 
      author,
      email,
      text,
      title
    });

    res.status(201).json({ success: true, data: comment });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
