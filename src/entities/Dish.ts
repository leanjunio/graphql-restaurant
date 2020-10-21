import { getModelForClass, mongoose, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

import { Order } from './Order';

@ObjectType()
export class Dish {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  name: string;

  @Field(type => Order)
  @Property({ ref: 'Order', refType: mongoose.Schema.Types.ObjectId, type: () => Order })
  order: Order;
}

export const DishModel = getModelForClass(Dish);
