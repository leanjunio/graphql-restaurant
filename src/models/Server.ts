import { Schema } from 'mongoose';
import { IEmployee, Employee } from './Employee';

import { ITable } from './Table';

const ServerSchema = new Schema({
  tableId: {
    type: Schema.Types.ObjectId,
    ref: 'Table',
  },
});

export interface IServer extends IEmployee {
  table: ITable;
}

export const Server = Employee.discriminator('Server', ServerSchema);
