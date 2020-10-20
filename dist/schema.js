"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql `
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
//# sourceMappingURL=schema.js.map