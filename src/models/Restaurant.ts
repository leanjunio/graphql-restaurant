import { model, Schema } from 'mongoose';
import { IManager } from './Manager';

const RestaurantSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  manager: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Manager',
  },
});

export interface IRestaurant {
  address: string;
  manager: IManager;
}

export const Restaurant = model('Restaurant', RestaurantSchema);
