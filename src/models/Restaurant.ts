import { model, Schema } from 'mongoose';

const RestaurantSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  managerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Manager',
  },
});

export interface IRestaurant {
  address: string;
  managerId: Schema.Types.ObjectId;
}

export const Restaurant = model('Restaurant', RestaurantSchema);
