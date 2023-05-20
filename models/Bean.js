import { Schema, model, models } from "mongoose";

const BeanSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Bean = models?.Bean || model("Bean", BeanSchema);

export default Bean;
