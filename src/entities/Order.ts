import { getModelForClass, mongoose, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, Float, ID, ObjectType } from 'type-graphql';

import { Dish } from './Dish';

@ObjectType()
export class Order {
  @Field(type => ID)
  readonly _id: ObjectId;

  @Field(type => Float)
  @Property({ required: true })
  total: number;

  @Field(type => [Dish])
  @Property({ ref: 'Dish', refType: mongoose.Schema.Types.ObjectId, type: () => Dish, default: [] })
  dishes: Dish[];
}

export const OrderModel = getModelForClass(Order);
