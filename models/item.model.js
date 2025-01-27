import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
    image: { type: String },
    description: { type: String },
    tax_applicability: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    base_amount: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    total_amount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

ItemSchema.pre('save', function (next) {
  this.total_amount = this.base_amount - this.discount;
  next();
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;
