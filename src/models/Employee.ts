import { model, Schema } from 'mongoose';

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: false,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Restaurant',
  },
});

export interface IEmployee {
  name: string;
  position: string;
  salary: number;
  restaurantId: Schema.Types.ObjectId;
}

export const Employee = model('Employee', EmployeeSchema);
