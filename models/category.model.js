import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    tax_applicability: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    tax_type: {
      type: String,
      enum: ["percentage", "fixed"],
      default: "percentage",
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

export default Category;
