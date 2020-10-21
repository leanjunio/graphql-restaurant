import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

import { Dish } from './Dish';

@ObjectType()
export class Cook {
  @Field()
  readonly _id: ObjectId;

  @Field(type => [Dish])
  @Property({ type: () => Dish, default: [] })
  dishes: Dish[];
}

export const CookModel = getModelForClass(Cook);
