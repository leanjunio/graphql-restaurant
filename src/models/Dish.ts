import { model, Schema } from 'mongoose';

const DishSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export interface IDish {
  name: string;
}

export const Dish = model('Dish', DishSchema);
