import { Schema } from 'mongoose';
import { IEmployee, Employee } from './Employee';

const ManagerSchema = new Schema({
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
  ],
});

export interface IManager {
  employees: IEmployee[];
}

export const Manager = Employee.discriminator('Manager', ManagerSchema);
