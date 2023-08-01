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

  CommentSchema.methods.save = async function () {
    const comment = new Comment({
      author: this.author,
      email: this.email,
      text: this.text,
    });
    const savedComment = await comment.save();
    return savedComment;
  }

const Comment = models?.Comment || model("Comment", CommentSchema);

export default Comment;
