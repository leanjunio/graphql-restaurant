import { getDiscriminatorModelForClass, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

import { Employee, EmployeeModel } from './Employee';

@ObjectType()
export class Manager extends Employee {
  @Field()
  readonly _id: ObjectId;

  @Field(type => [Employee])
  @Property({ type: () => Employee, default: [] })
  employees: Employee[];
}

export const ManagerModel = getDiscriminatorModelForClass(EmployeeModel, Manager);
