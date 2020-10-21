import { getDiscriminatorModelForClass, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';
import { Employee, EmployeeModel } from './Employee';

import { Dish } from './Dish';

@ObjectType()
export class Cook extends Employee {
  @Field()
  readonly _id: ObjectId;

  @Field(() => [Dish])
  @Property({ type: () => Dish, default: [] })
  dishes: Dish[];
}

export const CookModel = getDiscriminatorModelForClass(EmployeeModel, Cook);
