import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

import { Restaurant } from './Restaurant';

@ObjectType()
export class Employee {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ type: String })
  name: string;

  @Field()
  @Property({ type: String })
  position: string;

  @Field()
  @Property({ type: Number })
  salary: number;

  @Field(type => Restaurant)
  @Property({ type: Restaurant })
  restaurant: Restaurant;
}

export const EmployeeModel = getModelForClass(Employee);
