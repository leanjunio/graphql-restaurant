import { Schema } from 'mongoose';

import { IDish } from './Dish';
import { IEmployee, Employee } from './Employee';

const CookSchema = new Schema({
  dishes: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Dish',
    },
  ],
});

export interface ICook extends IEmployee {
  dishes: IDish[];
}

export const Cook = Employee.discriminator('Cook', CookSchema);
