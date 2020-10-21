import { model, Schema } from 'mongoose';

import { IRestaurant } from './Restaurant';
import { ITable } from './Table';

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
  tableId: {
    type: Schema.Types.ObjectId,
    ref: 'Table',
  },
});

export interface ICustomer {
  name: string;
  restaurant: IRestaurant;
  table: ITable;
}

export const Customer = model('Customer', CustomerSchema);
