import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ID, ObjectType } from 'type-graphql';

import { Manager } from './Manager';

@ObjectType()
export class Restaurant {
  @Field(type => ID)
  readonly _id: ObjectId;

  @Field()
  @Property({ type: String })
  address: string;

  @Field(type => Manager)
  @Property({ type: Manager })
  manager: Manager;
}

export const RestaurantModel = getModelForClass(Restaurant);
