import { model, Schema } from 'mongoose';

import { IOrder } from './Order';

const DishSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  order: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Order',
  },
});

export interface IDish {
  name: string;
  order: IOrder;
}

export const Dish = model('Dish', DishSchema);
