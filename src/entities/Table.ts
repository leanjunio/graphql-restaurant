import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

import { Server } from './Server';
import { Customer } from './Customer';
import { Restaurant } from './Restaurant';

@ObjectType()
export class Table {
  @Field()
  readonly _id: ObjectId;

  @Field(type => Server)
  @Property({ type: Server, required: true })
  server: Server;

  @Field(type => Restaurant)
  @Property({ type: Restaurant })
  restaurant: Restaurant;

  @Field(type => [Customer])
  @Property({ type: () => Customer, default: [] })
  customers: Customer[];
}

export const TableModel = getModelForClass(Table);
