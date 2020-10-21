import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ID, ObjectType } from 'type-graphql';

import { Restaurant } from './Restaurant';

@ObjectType()
export class Customer {
  @Field(type => ID)
  readonly _id: ObjectId;

  @Field()
  @Property({ type: String })
  name: string;

  @Field(type => Restaurant)
  @Property({ type: Restaurant })
  restaurant: Restaurant;
}

export const CustomerModel = getModelForClass(Customer);
