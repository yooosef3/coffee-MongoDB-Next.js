import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    author: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

const Comment = models?.Comment || model("Comment", CommentSchema);

export default Comment;
