import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    dishes: [Dish!]!
  }

  type Mutation {
    createDish(name: String!): Dish
  }

  interface IEmployee {
    name: String!
    position: String!
    salary: Float
    restaurant: Restaurant
  }

  type Restaurant {
    _id: ID!
    address: String!
    manager: Manager
  }

  type Dish {
    _id: ID!
    name: String!
    order: Order
  }

  type Employee implements IEmployee {
    _id: ID!
    name: String!
    position: String!
    salary: Float!
    restaurant: Restaurant
  }

  type Cook implements IEmployee {
    _id: ID!
    dish: Dish!
    name: String!
    position: String!
    salary: Float
    restaurant: Restaurant
  }

  type Server implements IEmployee {
    _id: ID!
    table: Table!
    name: String!
    position: String!
    salary: Float
    restaurant: Restaurant
  }

  type Manager implements IEmployee {
    _id: ID!
    name: String!
    position: String!
    salary: Float
    restaurant: Restaurant
  }

  type Customers {
    _id: ID!
    name: String!
    restaurant: Restaurant!
    table: Table
  }

  type Table {
    _id: ID!
    server: Server!
    restaurant: Restaurant!
    customer: [Customer!]!
  }

  type Order {
    _id: ID!
    total: Float!
    dish: [Dish]!
  }
`;
