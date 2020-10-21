import { model, Schema } from 'mongoose';

const OrderSchema = new Schema({
  total: {
    type: Number,
    required: true,
  },
  dishes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
});

export interface IOrder {
  total: number;
  orders: IOrder[];
}

export const Order = model('Order', OrderSchema);
