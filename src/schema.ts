import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    dishes: [Dish!]!
  }

  type Mutation {
    createDish(name: String!): Dish
  }

  type Dish {
    _id: ID!
    name: String!
  }
`;
