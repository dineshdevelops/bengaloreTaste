import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 60,
      required: true,
    },
    desc: {
      type: String,
      maxlength: 200,
      required: true,
    },
    img: {
      type: String,
      maxlength: 200,
      required: true,
    },
    price: {
      type: Number,
      maxlength: 60,
      required: true,
    },
    availability:{
        type:Boolean,
        required:true,
        default: false,
    }
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product",ProductSchema);