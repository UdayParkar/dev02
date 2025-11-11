import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  fullName: String,
  address1: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  payment: String,
  items: [
    {
      productId: String,
      name: String,
      brand: String,
      price: Number,
      imageUrl: String,
      quantity: Number,
      variant: String
    }
  ],
  subtotal: Number,
  shipping: Number,
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Order', orderSchema);