import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
    {
      postId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Blog'
      },
      author: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );


const Comment = models?.Comment || model("Comment", CommentSchema);

export default Comment;
