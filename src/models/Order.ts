import { model, Schema } from 'mongoose';

const OrderSchema = new Schema({
  total: {
    type: Number,
    required: true,
  },
});

export interface IOrder {
  total: number;
}

export const Order = model('Order', OrderSchema);
