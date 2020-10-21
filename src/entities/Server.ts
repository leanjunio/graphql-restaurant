import { getDiscriminatorModelForClass, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

import { EmployeeModel, Employee } from './Employee';
import { Table } from './Table';

@ObjectType()
export class Server extends Employee {
  @Field()
  readonly _id: ObjectId;

  @Field(() => Table)
  @Property({ type: Table })
  tale: Table;
}

export const ServerModel = getDiscriminatorModelForClass(EmployeeModel, Server);
