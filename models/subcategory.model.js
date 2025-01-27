import mongoose from 'mongoose';

const SubCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    image: { type: String },
    description: { type: String },
    tax_applicability: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

export default SubCategory;
