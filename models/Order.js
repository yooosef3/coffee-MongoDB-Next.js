import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength:60,
    },
    address: {
      type: Number,
      required: true,
      maxlength:200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = models?.Order || model("Order", OrderSchema);

export default Order;
