import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      required: true,
    },
    inStock: {
      type: Number,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    intruduce: {
      type: String,
      required: true,
    },
    noOff: {
      type: Number,
    },
    rate: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = models?.Product || model("Product", ProductSchema);

export default Product;
