import { prop } from '@typegoose/typegoose/lib/prop';
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

class Cook {
  @prop({ type: () => [Cook] })
  public cook?: Cook[];
}

export const Cook = Employee.discriminator('Cook', CookSchema);
