import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    discountPrice: {
      type: Number,
    },
    discountpersent: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: true,
    },

    brand: {
      type: String,
    },
    color: {
      type: String,
    },
    Sizes: {
      type: String,
    },

    ratings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings",
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
      },
    ],
    numRatings: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);
export default Product;
