import { model, Schema } from 'mongoose';

import { IServer } from './Server';
import { IRestaurant } from './Restaurant';
import { ICustomer } from './Customer';

const TableSchema = new Schema({
  server: {
    type: Schema.Types.ObjectId,
    ref: 'Server',
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
});

export interface ITable {
  server: IServer;
  restaurant: IRestaurant;
  customer: ICustomer;
}

export const Table = model('Table', TableSchema);
